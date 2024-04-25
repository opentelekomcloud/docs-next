---
id: cce-vault
title: Secrets management with CCE and Hashicorp Vault
tags: [cce, vault, hashicorp, security]
---

# Secrets management with CCE and Hashicorp Vault

## Overview

Most **modern** IT setups are composed of several subsystems like databases,
object stores, master controller, node access, and more. To access one
component from another, some form of credentials are required.
Configuring and storing these secrets directly in the components is
considered as an anti-pattern, since a vulnerability of one component
may iteratively and transitively affect the security of the whole setup.

With centralized secret management in place, it\'s not necessary to keep
secrets used by various applications spread across DevOps environments.
This helps to close some security attack vectors (like [secret
sprawl](https://www.hashicorp.com/resources/what-is-secret-sprawl-why-is-it-harmful),
[security islands](https://www.conjur.org/blog/security-islands/)), but
usually introduces a problem of the so-called [Secret
Zero](https://www.hashicorp.com/resources/secret-zero-mitigating-the-risk-of-secret-introduction-with-vault)
as a key to the key storage.

## Solution Description

Vault is an open-source software, provided and maintained by Hashicorp,
that addresses this very problem. It is considered one of the reference
solutions for it. This article demonstrates how to utilize
infrastructure authorization with Hashicorp Vault in an CCE-powered
setup. As an example workload, we deploy a Zookeeper cluster with
enabled TLS protection. Certificates for Zookeeper are stored in Vault,
and they oblige required practices like rotations or audits. Zookeeper
can easily be replaced by any other component that requires access to
internal credentials. TLS secrets are kept in the Vault. They are being
read by Vault Agent component running as a sidecar in Zookeeper service
pod and writes certificates onto the file system. Zookeeper services
reads certificates populated by Agent. Vault Agent is configured to use
password-less access to Vault. Further in the document it is explained
how exactly this is implemented.

## Establishing trust between CCE and Vault

Before any application managed by the CCE is able to login to Vault
relying on infrastructure based authentication it is required to do some
steps on the Vault side. Kubernetes auth plugin is enabled and
configured to only access requests from specific Kubernetes cluster by
providing its Certificate Authority. To allow several multiple different
CCE clusters to use Vault, a dedicated auth path is going to be used.

``` shell
vault auth enable -path kubernetes_cce1 kubernetes
vault write auth/kubernetes_cce1/config \
    kubernetes_host="$K8S_HOST" \
    kubernetes_ca_cert="$SA_CA_CRT"
```

Since in our example a dedicated service account with token is being
periodically rotated using [client JWT as reviewer
JWT](https://www.vaultproject.io/docs/auth/kubernetes#use-the-vault-client-s-jwt-as-the-reviewer-jwt)
can be used.

### Access rules for Vault

Having Auth plugin enabled, as described above, CCE workloads are able
to authenticate to Vault, but they can do nothing. It is now necessary
to establish further level of authorization and let particular service
accounts of CCE to get access to secrets in Vault.

For the scope of the use case, we grant the Zookeeper service account
from its namespace access to the TLS secrets stored in Vault\'s
key-value store. For that a policy providing a read-only access to the
/tls/zk\* and /tls/ca paths is created.

``` shell
vault policy write tls-zk-ro - <<EOF
path "secret/data/tls/zk_*" {capabilities = ["read"] }
path "secret/data/tls/ca" {capabilities = ["read"] }
path "secret/metadata/tls/zk_*" {capabilities = ["read"] }
path "secret/metadata/tls/ca" {capabilities = ["read"] }
EOF
```

Next granting the policy to the particular requestor (zookeeper service
account in zookeeper namespace) must be done.

```shell
vault write auth/kubernetes_cce1/role/zookeeper \
    bound_service_account_names=zookeeper \
    bound_service_account_namespaces=zookeeper \
    policies=tls-zk-ro \
    ttl=2h
```

With this done token of the service account zookeeper in the zookeeper
namespace is able to access to the vault for reading secrets located
under `/secret/tls` path. And since it is highly recommended
to follow the least required privilege principle only read only access
to the TLS data is granted. A time to live of two hours is being used
here meaning that once application authorize to Vault the token it gets
can be used during next two hours. After two hours Vault token becomes
invalid and Vault Agent gets a new one valid for next 2 hours. This
needs to be carefully aligned with the time to live or the service
account token to minimize their overlap. It is advised to keep it
relatively short.

This is one the most sensitive steps in the whole configuration, since
the applications deployed in the Kubernetes may escape their scope or
get compromised by attackers. Reducing the number of secrets the
accessor can read mitigates this risk.

### Populating secrets in Vault

Vault offer two options to access TLS certificates:

- Store certificate data in the [KeyValue
    store](https://www.vaultproject.io/docs/secrets/kv/kv-v2)
- Use [PKI secrets
    engine](https://www.vaultproject.io/docs/secrets/pki) to issue
    certificates

Vault enables users not only to store TLS certificates data in the
key-value store, but also to create and revoke them. To keep this
tutorial simple enough we are not going to do this and just upload
generated certificates into the KV store. For production setups this
example can be easily extended with extra actions.

``` shell
vault kv put secret/tls/ca certificate=@ca.crt
vault kv put secret/tls/zk_server certificate=@zk_server.crt private_key=@zk_server.key
vault kv put secret/tls/zk_client certificate=@zk_client.crt private_key=@zk_client.key
```

``` go
import fmt
```

Certificate paths and property names used here are referenced by the
Zookeeper installation.

## Deploying Zookeeper

Now that the secrets are stored safely in Vault and only allowed
applications can fetch them it is time to look how exactly the
application accesses the secrets. Generally, utilizing Vault requires
modification of the application. [Vault
agent](https://www.vaultproject.io/docs/agent) is a tool that was
created to simplify secrets delivery for applications when it is hard or
difficult to change the application itself. The Agent is taking care of
reading secrets from Vault and can deliver them to the file system.

There are many way how to properly implement Zookeeper service on the
Kubernetes. The scope of the blueprint is not Zookeeper itself, but
demonstrating how an application can be supplied by required
certificates. The reference architecture described here bases on the
best practices gathered from various sources and extended by HashiCorp
Vault. It overrides default Zookeeper start scripts in order to allow
better control of the runtime settings and properly fill all required
configuration options for TLS to work. Other methods of deploying
Zookeeper can be easily used here instead.

1. Create a Kubernetes namespace named zookeeper.

``` shell
kubectl create namespace zookeeper
```

2. Create a Kubernetes service account named zookeeper.

``` shell
kubectl create serviceaccount zookeeper
```

3. In Kubernetes a *service account* provides an identity for the
    services running in the pod so that the process can access
    Kubernetes API. The same identity can be used to access Vault, but
    require one special permission -access to the token review API of
    the Kubernetes. When instead a dedicated reviewer JWT is used, this
    step is not necessary, but it also means long-living sensitive data
    is used and frequently transferred over the network. More details on
    various ways to use Kubernetes tokens to authorize to Vault [can be
    found
    here](https://www.vaultproject.io/docs/auth/kubernetes#how-to-work-with-short-lived-kubernetes-tokens).

``` shell
kubectl create clusterrolebinding vault-client-auth-delegator \
    --clusterrole=system:auth-delegator \
    --serviceaccount=zookeeper:zookeeper
```

4. Create a Kubernetes ConfigMap with all required configurations. One
    possible approach is to define dedicated health and readiness check
    scripts and to override automatically created Zookeeper start
    script. This is especially useful when TLS protection is enabled,
    but default container scripts do not support this.

``` yaml
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: zookeeper-config
  namespace: "zookeeper"
data:
  ok: |
    #!/bin/sh
    # This sript is used by live-check of Kubernetes pod
    if [ -f /tls/ca.pem ]; then
      echo "srvr" | openssl s_client -CAfile /tls/ca.pem -cert /tls/client/tls.crt \
        -key /tls/client/tls.key -connect 127.0.0.1:${1:-2281} -quiet -ign_eof 2>/dev/null | grep Mode

    else
      zkServer.sh status
    fi

  ready: |
    #!/bin/sh
    # This sript is used by readiness-check of Kubernetes pod
    if [ -f /tls/ca.pem ]; then
      echo "ruok" | openssl s_client -CAfile /tls/ca.pem -cert /tls/client/tls.crt \
        -key /tls/client/tls.key -connect 127.0.0.1:${1:-2281} -quiet -ign_eof 2>/dev/null
    else
      echo ruok | nc 127.0.0.1 ${1:-2181}
    fi

  run: |
    #!/bin/bash
    # This is the main starting script
    set -a
    ROOT=$(echo /apache-zookeeper-*)
    ZK_USER=${ZK_USER:-"zookeeper"}
    ZK_LOG_LEVEL=${ZK_LOG_LEVEL:-"INFO"}
    ZK_DATA_DIR=${ZK_DATA_DIR:-"/data"}
    ZK_DATA_LOG_DIR=${ZK_DATA_LOG_DIR:-"/data/log"}
    ZK_CONF_DIR=${ZK_CONF_DIR:-"/conf"}
    ZK_CLIENT_PORT=${ZK_CLIENT_PORT:-2181}
    ZK_SSL_CLIENT_PORT=${ZK_SSL_CLIENT_PORT:-2281}
    ZK_SERVER_PORT=${ZK_SERVER_PORT:-2888}
    ZK_ELECTION_PORT=${ZK_ELECTION_PORT:-3888}
    ID_FILE="$ZK_DATA_DIR/myid"
    ZK_CONFIG_FILE="$ZK_CONF_DIR/zoo.cfg"
    LOG4J_PROPERTIES="$ZK_CONF_DIR/log4j.properties"
    HOST=$(hostname)
    DOMAIN=`hostname -d`
    APPJAR=$(echo $ROOT/*jar)
    CLASSPATH="${ROOT}/lib/*:${APPJAR}:${ZK_CONF_DIR}:"
    if [[ $HOST =~ (.*)-([0-9]+)$ ]]; then
        NAME=${BASH_REMATCH[1]}
        ORD=${BASH_REMATCH[2]}
        MY_ID=$((ORD+1))
    else
        echo "Failed to extract ordinal from hostname $HOST"
        exit 1
    fi
    mkdir -p $ZK_DATA_DIR
    mkdir -p $ZK_DATA_LOG_DIR
    echo $MY_ID >> $ID_FILE

    echo "dataDir=$ZK_DATA_DIR" >> $ZK_CONFIG_FILE
    echo "dataLogDir=$ZK_DATA_LOG_DIR" >> $ZK_CONFIG_FILE
    echo "4lw.commands.whitelist=*" >> $ZK_CONFIG_FILE
    # Client TLS configuration
    if [[ -f /tls/ca.pem ]]; then
      echo "secureClientPort=$ZK_SSL_CLIENT_PORT" >> $ZK_CONFIG_FILE
      echo "ssl.keyStore.location=/tls/client/client.pem" >> $ZK_CONFIG_FILE
      echo "ssl.trustStore.location=/tls/ca.pem" >> $ZK_CONFIG_FILE
    else
      echo "clientPort=$ZK_CLIENT_PORT" >> $ZK_CONFIG_FILE
    fi
    # Server TLS configuration
    if [[ -f /tls/ca.pem ]]; then
      echo "serverCnxnFactory=org.apache.zookeeper.server.NettyServerCnxnFactory" >> $ZK_CONFIG_FILE
      echo "sslQuorum=true" >> $ZK_CONFIG_FILE
      echo "ssl.quorum.keyStore.location=/tls/server/server.pem" >> $ZK_CONFIG_FILE
      echo "ssl.quorum.trustStore.location=/tls/ca.pem" >> $ZK_CONFIG_FILE
    fi
    for (( i=1; i<=$ZK_REPLICAS; i++ ))
    do
        echo "server.$i=$NAME-$((i-1)).$DOMAIN:$ZK_SERVER_PORT:$ZK_ELECTION_PORT" >> $ZK_CONFIG_FILE
    done
    rm -f $LOG4J_PROPERTIES
    echo "zookeeper.root.logger=$ZK_LOG_LEVEL, CONSOLE" >> $LOG4J_PROPERTIES
    echo "zookeeper.console.threshold=$ZK_LOG_LEVEL" >> $LOG4J_PROPERTIES
    echo "zookeeper.log.threshold=$ZK_LOG_LEVEL" >> $LOG4J_PROPERTIES
    echo "zookeeper.log.dir=$ZK_DATA_LOG_DIR" >> $LOG4J_PROPERTIES
    echo "zookeeper.log.file=zookeeper.log" >> $LOG4J_PROPERTIES
    echo "zookeeper.log.maxfilesize=256MB" >> $LOG4J_PROPERTIES
    echo "zookeeper.log.maxbackupindex=10" >> $LOG4J_PROPERTIES
    echo "zookeeper.tracelog.dir=$ZK_DATA_LOG_DIR" >> $LOG4J_PROPERTIES
    echo "zookeeper.tracelog.file=zookeeper_trace.log" >> $LOG4J_PROPERTIES
    echo "log4j.rootLogger=\${zookeeper.root.logger}" >> $LOG4J_PROPERTIES
    echo "log4j.appender.CONSOLE=org.apache.log4j.ConsoleAppender" >> $LOG4J_PROPERTIES
    echo "log4j.appender.CONSOLE.Threshold=\${zookeeper.console.threshold}" >> $LOG4J_PROPERTIES
    echo "log4j.appender.CONSOLE.layout=org.apache.log4j.PatternLayout" >> $LOG4J_PROPERTIES
    echo "log4j.appender.CONSOLE.layout.ConversionPattern=\
      %d{ISO8601} [myid:%X{myid}] - %-5p [%t:%C{1}@%L] - %m%n" >> $LOG4J_PROPERTIES
    if [ -n "$JMXDISABLE" ]
    then
        MAIN=org.apache.zookeeper.server.quorum.QuorumPeerMain
    else
        MAIN="-Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=$JMXPORT \
          -Dcom.sun.management.jmxremote.authenticate=$JMXAUTH \
          -Dcom.sun.management.jmxremote.ssl=$JMXSSL \
          -Dzookeeper.jmx.log4j.disable=$JMXLOG4J \
          org.apache.zookeeper.server.quorum.QuorumPeerMain"
    fi
    set -x
    exec java -cp "$CLASSPATH" $JVMFLAGS $MAIN $ZK_CONFIG_FILE

  vault-agent-config.hcl: |
    exit_after_auth = true
    pid_file = "/home/vault/pidfile"
    auto_auth {
        method "kubernetes" {
            mount_path = "auth/kubernetes_cce1"
            config = {
                role = "zookeeper"
                token_path = "/run/secrets/tokens/vault-token"
            }
        }
        sink "file" {
            config = {
                path = "/home/vault/.vault-token"
            }
        }
    }

    cache {
        use_auto_auth_token = true
    }

    # ZK is neat-picky on cert file extensions
    template {
      destination = "/tls/ca.pem"
      contents = <<EOT
    {{- with secret "secret/data/tls/ca" }}{{ .Data.data.certificate }}{{ end }}
    EOT
    }

    template {
      destination = "/tls/server/server.pem"
      contents = <<EOT
    {{- with secret "secret/data/tls/zk_server" }}{{ .Data.data.certificate }}
    {{ .Data.data.private_key }}{{ end }}
    EOT
    }
    template {
      destination = "/tls/server/tls.crt"
      contents = <<EOT
    {{- with secret "secret/data/tls/zk_server" }}{{ .Data.data.certificate }}{{ end }}
    EOT
    }
    template {
      destination = "/tls/server/tls.key"
      contents = <<EOT
    {{- with secret "secret/data/tls/zk_server" }}{{ .Data.data.private_key }}{{ end }}
    EOT
    }

    template {
      destination = "/tls/client/client.pem"
      contents = <<EOT
    {{- with secret "secret/data/tls/zk_client" }}{{ .Data.data.certificate }}
    {{ .Data.data.private_key }}{{ end }}
    EOT
    }
    template {
      destination = "/tls/client/tls.crt"
      contents = <<EOT
    {{- with secret "secret/data/tls/zk_client" }}{{ .Data.data.certificate }}{{ end }}
    EOT
    }
    template {
      destination = "/tls/client/tls.key"
      contents = <<EOT
    {{- with secret "secret/data/tls/zk_client" }}{{ .Data.data.private_key }}{{ end }}
    EOT
    }
```

``` bash
kubectl apply -f zookeeper-cm.yaml
```

5. Create Zookeeper Headless service. It is used by pods to build
    quorum and implementing cluster internal communication.

``` yaml
---
name: "zookeeper-svc"
namespace: "zookeeper"
apiVersion: v1
kind: Service
spec:
  # Not exposing in the cluster
  clusterIP: None
  # Important to start up
  publishNotReadyAddresses: true
  selector:
    app: zookeeper
  ports:
  - port: 2281
    name: client
    targetPort: client
    protocol: TCP
  - port: 2888
    name: server
    targetPort: server
    protocol: TCP
  - port: 3888
    name: election
    targetPort: election
    protocol: TCP
```

``` bash
kubectl apply -f zookeeper-svc.yaml
```

6. Create Frontend service. It is used by the clients and therefore
    only includes client port of Zookeeper.

``` {.yaml caption="zookeeper-svc-public.yaml"}
apiVersion: v1
kind: Service
spec:
  clusterIP: None
  ports:
  - name: client
    port: 2281
    protocol: TCP
    targetPort: client
  selector:
    app: zookeeper
  sessionAffinity: None
  type: ClusterIP
```

``` bash
kubectl apply -f zookeeper-svc-public.yaml
```

7. Create StatefulSet replacing [\<VAULT_PUBLIC_ADDR\>]
    with the address of the Vault server. This includes a pod with Vault
    Agent side container as an init container, Vault Agent side
    container used continuously in the run cycle of the pod and
    Zookeeper main container.

```yaml
apiVersion: apps/v1
kind: StatefulSet
spec:
  podManagementPolicy: Parallel
  replicas: 3
  selector:
    matchLabels:
      app: zookeeper
      component: server
  serviceName: zookeeper-headless
  template:
    metadata:
      labels:
        app: zookeeper
        component: server
    spec:
      containers:

      - args:
        - agent
        - -config=/etc/vault/vault-agent-config.hcl
        - -log-level=debug
        - -exit-after-auth=false
        env:
        - name: VAULT_ADDR
          value: <VAULT_PUBLIC_ADDR>
        image: vault:1.9.0
        name: vault-agent-sidecar
        volumeMounts:
        - mountPath: /etc/vault
          name: vault-agent-config
        - mountPath: /tls
          name: cert-data
        - mountPath: /var/run/secrets/tokens
          name: k8-tokens

      - command:
        - /bin/bash
        - -xec
        - /config-scripts/run
        env:
        - name: ZK_REPLICAS
          value: "3"
        - name: ZOO_PORT
          value: "2181"
        - name: ZOO_STANDALONE_ENABLED
          value: "false"
        - name: ZOO_TICK_TIME
          value: "2000"
        image: zookeeper:3.7.0
        livenessProbe:
          exec:
            command:
            - sh
            - /config-scripts/ok
          failureThreshold: 2
          initialDelaySeconds: 20
          periodSeconds: 30
          successThreshold: 1
          timeoutSeconds: 5
        name: zookeeper
        ports:
        - containerPort: 2281
          name: client
          protocol: TCP
        - containerPort: 2888
          name: server
          protocol: TCP
        - containerPort: 3888
          name: election
          protocol: TCP
        readinessProbe:
          exec:
            command:
            - sh
            - /config-scripts/ready
          failureThreshold: 2
          initialDelaySeconds: 20
          periodSeconds: 30
          successThreshold: 1
          timeoutSeconds: 5
        securityContext:
          runAsUser: 1000
        volumeMounts:
        - mountPath: /data
          name: datadir
        - mountPath: /tls
          name: cert-data
        - mountPath: /config-scripts
          name: zookeeper-config
      dnsPolicy: ClusterFirst

      initContainers:
      - args:
        - agent
        - -config=/etc/vault/vault-agent-config.hcl
        - -log-level=debug
        - -exit-after-auth=true
        env:
        - name: VAULT_ADDR
          value: <VAULT_PUBLIC_ADDR>
        image: vault:1.9.0
        name: vault-agent
        volumeMounts:
        - mountPath: /etc/vault
          name: vault-agent-config
        - mountPath: /tls
          name: cert-data
        - mountPath: /var/run/secrets/tokens
          name: k8-tokens
      restartPolicy: Always
      serviceAccount: zookeeper
      serviceAccountName: zookeeper
      terminationGracePeriodSeconds: 1800
      volumes:
      - configMap:
          defaultMode: 420
          items:
          - key: vault-agent-config.hcl
            path: vault-agent-config.hcl
          name: zookeeper-config
        name: vault-agent-config
      - configMap:
          defaultMode: 365
          name: zookeeper-config
        name: zookeeper-config
      - emptyDir: {}
        name: cert-data
      - name: k8-tokens
        projected:
          defaultMode: 420
          sources:
          - serviceAccountToken:
              expirationSeconds: 7200
              path: vault-token

  updateStrategy:
    type: RollingUpdate
  volumeClaimTemplates:
  - apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
      name: datadir
    spec:
      accessModes:
      - ReadWriteOnce
      resources:
        requests:
          storage: 5Gi
      storageClassName: csi-disk
      volumeMode: Filesystem
```

``` shell
kubectl apply -f zookeeper-ss.yaml
```

With this a production-ready Zookeeper service with enabled TLS has been
deployed successfully to the CCE. The Vault Agent takes care of
authorizing to HashiCorp Vault using a Kubernetes service account with a
short time to live token and fetches required secrets to the file
system. In the entire Kubernetes deployment there are no secrets for the
application, neither the key to the Vault, nor TLS certificates
themselves. Not even using Kubernetes secrets is necessary.

## References

::: seealso
[Vault Agent with
Kubernetes](https://learn.hashicorp.com/tutorials/vault/agent-kubernetes?in=vault/auth-methods)

[Kubernetes auth
method](https://www.vaultproject.io/docs/auth/kubernetes)
:::
