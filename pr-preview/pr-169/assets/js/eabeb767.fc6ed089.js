"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[85054],{5742:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var s=t(74848),a=t(28453);const r={id:"cce-vault",title:"Secrets management with CCE and Hashicorp Vault",tags:["cce","vault","hashicorp","secrets"]},o="Secrets management with CCE and Hashicorp Vault",i={id:"blueprints/by-use-case/security/cce-vault",title:"Secrets management with CCE and Hashicorp Vault",description:"Most modern IT setups are composed of several subsystems like databases,",source:"@site/docs/blueprints/by-use-case/security/cce-vault.md",sourceDirName:"blueprints/by-use-case/security",slug:"/blueprints/by-use-case/security/cce-vault",permalink:"/docs-next/pr-preview/pr-169/docs/blueprints/by-use-case/security/cce-vault",draft:!1,unlisted:!1,editUrl:"https://github.com/opentelekomcloud/docs-next/tree/main/docs/blueprints/by-use-case/security/cce-vault.md",tags:[{inline:!0,label:"cce",permalink:"/docs-next/pr-preview/pr-169/docs/tags/cce"},{inline:!0,label:"vault",permalink:"/docs-next/pr-preview/pr-169/docs/tags/vault"},{inline:!0,label:"hashicorp",permalink:"/docs-next/pr-preview/pr-169/docs/tags/hashicorp"},{inline:!0,label:"secrets",permalink:"/docs-next/pr-preview/pr-169/docs/tags/secrets"}],version:"current",frontMatter:{id:"cce-vault",title:"Secrets management with CCE and Hashicorp Vault",tags:["cce","vault","hashicorp","secrets"]},sidebar:"blueprintsSidebar",previous:{title:"Authentik as an Identity Provider for IAM",permalink:"/docs-next/pr-preview/pr-169/docs/blueprints/by-use-case/security/authentik/authentik-as-identity-provider-iam"},next:{title:"Keycloak",permalink:"/docs-next/pr-preview/pr-169/docs/blueprints/by-use-case/security/keycloak/keycloak"}},c={},l=[{value:"Solution Design",id:"solution-design",level:2},{value:"Establishing trust between CCE and Vault",id:"establishing-trust-between-cce-and-vault",level:2},{value:"Access rules for Vault",id:"access-rules-for-vault",level:3},{value:"Populating secrets in Vault",id:"populating-secrets-in-vault",level:3},{value:"Deploying Zookeeper",id:"deploying-zookeeper",level:2},{value:"References",id:"references",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"secrets-management-with-cce-and-hashicorp-vault",children:"Secrets management with CCE and Hashicorp Vault"}),"\n",(0,s.jsxs)(n.p,{children:["Most ",(0,s.jsx)(n.strong,{children:"modern"})," IT setups are composed of several subsystems like databases,\nobject stores, master controller, node access, and more. To access one\ncomponent from another, some form of credentials are required.\nConfiguring and storing these secrets directly in the components is\nconsidered as an anti-pattern, since a vulnerability of one component\nmay iteratively and transitively affect the security of the whole setup."]}),"\n",(0,s.jsxs)(n.p,{children:["With centralized secret management in place, it's not necessary to keep\nsecrets used by various applications spread across DevOps environments.\nThis helps to close some security attack vectors (like ",(0,s.jsx)(n.a,{href:"https://www.hashicorp.com/resources/what-is-secret-sprawl-why-is-it-harmful",children:"secret\nsprawl"}),",\n",(0,s.jsx)(n.a,{href:"https://www.conjur.org/blog/security-islands/",children:"security islands"}),"), but\nusually introduces a problem of the so-called ",(0,s.jsx)(n.a,{href:"https://www.hashicorp.com/resources/secret-zero-mitigating-the-risk-of-secret-introduction-with-vault",children:"Secret\nZero"}),"\nas a key to the key storage."]}),"\n",(0,s.jsx)(n.h2,{id:"solution-design",children:"Solution Design"}),"\n",(0,s.jsx)(n.p,{children:"Vault is an open-source software, provided and maintained by Hashicorp,\nthat addresses this very problem. It is considered one of the reference\nsolutions for it. This article demonstrates how to utilize\ninfrastructure authorization with Hashicorp Vault in an CCE-powered\nsetup. As an example workload, we deploy a Zookeeper cluster with\nenabled TLS protection. Certificates for Zookeeper are stored in Vault,\nand they oblige required practices like rotations or audits. Zookeeper\ncan easily be replaced by any other component that requires access to\ninternal credentials. TLS secrets are kept in the Vault. They are being\nread by Vault Agent component running as a sidecar in Zookeeper service\npod and writes certificates onto the file system. Zookeeper services\nreads certificates populated by Agent. Vault Agent is configured to use\npassword-less access to Vault. Further in the document it is explained\nhow exactly this is implemented."}),"\n",(0,s.jsx)(n.h2,{id:"establishing-trust-between-cce-and-vault",children:"Establishing trust between CCE and Vault"}),"\n",(0,s.jsx)(n.p,{children:"Before any application managed by the CCE is able to login to Vault\nrelying on infrastructure based authentication it is required to do some\nsteps on the Vault side. Kubernetes auth plugin is enabled and\nconfigured to only access requests from specific Kubernetes cluster by\nproviding its Certificate Authority. To allow several multiple different\nCCE clusters to use Vault, a dedicated auth path is going to be used."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'vault auth enable -path kubernetes_cce1 kubernetes\nvault write auth/kubernetes_cce1/config \\\n    kubernetes_host="$K8S_HOST" \\\n    kubernetes_ca_cert="$SA_CA_CRT"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Since in our example a dedicated service account with token is being\nperiodically rotated using ",(0,s.jsx)(n.a,{href:"https://www.vaultproject.io/docs/auth/kubernetes#use-the-vault-client-s-jwt-as-the-reviewer-jwt",children:"client JWT as reviewer\nJWT"}),"\ncan be used."]}),"\n",(0,s.jsx)(n.h3,{id:"access-rules-for-vault",children:"Access rules for Vault"}),"\n",(0,s.jsx)(n.p,{children:"Having Auth plugin enabled, as described above, CCE workloads are able\nto authenticate to Vault, but they can do nothing. It is now necessary\nto establish further level of authorization and let particular service\naccounts of CCE to get access to secrets in Vault."}),"\n",(0,s.jsx)(n.p,{children:"For the scope of the use case, we grant the Zookeeper service account\nfrom its namespace access to the TLS secrets stored in Vault's\nkey-value store. For that a policy providing a read-only access to the\n/tls/zk* and /tls/ca paths is created."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'vault policy write tls-zk-ro - <<EOF\npath "secret/data/tls/zk_*" {capabilities = ["read"] }\npath "secret/data/tls/ca" {capabilities = ["read"] }\npath "secret/metadata/tls/zk_*" {capabilities = ["read"] }\npath "secret/metadata/tls/ca" {capabilities = ["read"] }\nEOF\n'})}),"\n",(0,s.jsx)(n.p,{children:"Next granting the policy to the particular requestor (zookeeper service\naccount in zookeeper namespace) must be done."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"vault write auth/kubernetes_cce1/role/zookeeper \\\n    bound_service_account_names=zookeeper \\\n    bound_service_account_namespaces=zookeeper \\\n    policies=tls-zk-ro \\\n    ttl=2h\n"})}),"\n",(0,s.jsxs)(n.p,{children:["With this done token of the service account zookeeper in the zookeeper\nnamespace is able to access to the vault for reading secrets located\nunder ",(0,s.jsx)(n.code,{children:"/secret/tls"})," path. And since it is highly recommended\nto follow the least required privilege principle only read only access\nto the TLS data is granted. A time to live of two hours is being used\nhere meaning that once application authorize to Vault the token it gets\ncan be used during next two hours. After two hours Vault token becomes\ninvalid and Vault Agent gets a new one valid for next 2 hours. This\nneeds to be carefully aligned with the time to live or the service\naccount token to minimize their overlap. It is advised to keep it\nrelatively short."]}),"\n",(0,s.jsx)(n.p,{children:"This is one the most sensitive steps in the whole configuration, since\nthe applications deployed in the Kubernetes may escape their scope or\nget compromised by attackers. Reducing the number of secrets the\naccessor can read mitigates this risk."}),"\n",(0,s.jsx)(n.h3,{id:"populating-secrets-in-vault",children:"Populating secrets in Vault"}),"\n",(0,s.jsx)(n.p,{children:"Vault offer two options to access TLS certificates:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Store certificate data in the ",(0,s.jsx)(n.a,{href:"https://www.vaultproject.io/docs/secrets/kv/kv-v2",children:"KeyValue\nstore"})]}),"\n",(0,s.jsxs)(n.li,{children:["Use ",(0,s.jsx)(n.a,{href:"https://www.vaultproject.io/docs/secrets/pki",children:"PKI secrets\nengine"})," to issue\ncertificates"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Vault enables users not only to store TLS certificates data in the\nkey-value store, but also to create and revoke them. To keep this\ntutorial simple enough we are not going to do this and just upload\ngenerated certificates into the KV store. For production setups this\nexample can be easily extended with extra actions."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"vault kv put secret/tls/ca certificate=@ca.crt\nvault kv put secret/tls/zk_server certificate=@zk_server.crt private_key=@zk_server.key\nvault kv put secret/tls/zk_client certificate=@zk_client.crt private_key=@zk_client.key\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"import fmt\n"})}),"\n",(0,s.jsx)(n.p,{children:"Certificate paths and property names used here are referenced by the\nZookeeper installation."}),"\n",(0,s.jsx)(n.h2,{id:"deploying-zookeeper",children:"Deploying Zookeeper"}),"\n",(0,s.jsxs)(n.p,{children:["Now that the secrets are stored safely in Vault and only allowed\napplications can fetch them it is time to look how exactly the\napplication accesses the secrets. Generally, utilizing Vault requires\nmodification of the application. ",(0,s.jsx)(n.a,{href:"https://www.vaultproject.io/docs/agent",children:"Vault\nagent"})," is a tool that was\ncreated to simplify secrets delivery for applications when it is hard or\ndifficult to change the application itself. The Agent is taking care of\nreading secrets from Vault and can deliver them to the file system."]}),"\n",(0,s.jsx)(n.p,{children:"There are many way how to properly implement Zookeeper service on the\nKubernetes. The scope of the blueprint is not Zookeeper itself, but\ndemonstrating how an application can be supplied by required\ncertificates. The reference architecture described here bases on the\nbest practices gathered from various sources and extended by HashiCorp\nVault. It overrides default Zookeeper start scripts in order to allow\nbetter control of the runtime settings and properly fill all required\nconfiguration options for TLS to work. Other methods of deploying\nZookeeper can be easily used here instead."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Create a Kubernetes namespace named zookeeper."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl create namespace zookeeper\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Create a Kubernetes service account named zookeeper."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl create serviceaccount zookeeper\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["In Kubernetes a ",(0,s.jsx)(n.em,{children:"service account"})," provides an identity for the\nservices running in the pod so that the process can access\nKubernetes API. The same identity can be used to access Vault, but\nrequire one special permission -access to the token review API of\nthe Kubernetes. When instead a dedicated reviewer JWT is used, this\nstep is not necessary, but it also means long-living sensitive data\nis used and frequently transferred over the network. More details on\nvarious ways to use Kubernetes tokens to authorize to Vault ",(0,s.jsx)(n.a,{href:"https://www.vaultproject.io/docs/auth/kubernetes#how-to-work-with-short-lived-kubernetes-tokens",children:"can be\nfound\nhere"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl create clusterrolebinding vault-client-auth-delegator \\\n    --clusterrole=system:auth-delegator \\\n    --serviceaccount=zookeeper:zookeeper\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"Create a Kubernetes ConfigMap with all required configurations. One\npossible approach is to define dedicated health and readiness check\nscripts and to override automatically created Zookeeper start\nscript. This is especially useful when TLS protection is enabled,\nbut default container scripts do not support this."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: zookeeper-config\n  namespace: "zookeeper"\ndata:\n  ok: |\n    #!/bin/sh\n    # This sript is used by live-check of Kubernetes pod\n    if [ -f /tls/ca.pem ]; then\n      echo "srvr" | openssl s_client -CAfile /tls/ca.pem -cert /tls/client/tls.crt \\\n        -key /tls/client/tls.key -connect 127.0.0.1:${1:-2281} -quiet -ign_eof 2>/dev/null | grep Mode\n\n    else\n      zkServer.sh status\n    fi\n\n  ready: |\n    #!/bin/sh\n    # This sript is used by readiness-check of Kubernetes pod\n    if [ -f /tls/ca.pem ]; then\n      echo "ruok" | openssl s_client -CAfile /tls/ca.pem -cert /tls/client/tls.crt \\\n        -key /tls/client/tls.key -connect 127.0.0.1:${1:-2281} -quiet -ign_eof 2>/dev/null\n    else\n      echo ruok | nc 127.0.0.1 ${1:-2181}\n    fi\n\n  run: |\n    #!/bin/bash\n    # This is the main starting script\n    set -a\n    ROOT=$(echo /apache-zookeeper-*)\n    ZK_USER=${ZK_USER:-"zookeeper"}\n    ZK_LOG_LEVEL=${ZK_LOG_LEVEL:-"INFO"}\n    ZK_DATA_DIR=${ZK_DATA_DIR:-"/data"}\n    ZK_DATA_LOG_DIR=${ZK_DATA_LOG_DIR:-"/data/log"}\n    ZK_CONF_DIR=${ZK_CONF_DIR:-"/conf"}\n    ZK_CLIENT_PORT=${ZK_CLIENT_PORT:-2181}\n    ZK_SSL_CLIENT_PORT=${ZK_SSL_CLIENT_PORT:-2281}\n    ZK_SERVER_PORT=${ZK_SERVER_PORT:-2888}\n    ZK_ELECTION_PORT=${ZK_ELECTION_PORT:-3888}\n    ID_FILE="$ZK_DATA_DIR/myid"\n    ZK_CONFIG_FILE="$ZK_CONF_DIR/zoo.cfg"\n    LOG4J_PROPERTIES="$ZK_CONF_DIR/log4j.properties"\n    HOST=$(hostname)\n    DOMAIN=`hostname -d`\n    APPJAR=$(echo $ROOT/*jar)\n    CLASSPATH="${ROOT}/lib/*:${APPJAR}:${ZK_CONF_DIR}:"\n    if [[ $HOST =~ (.*)-([0-9]+)$ ]]; then\n        NAME=${BASH_REMATCH[1]}\n        ORD=${BASH_REMATCH[2]}\n        MY_ID=$((ORD+1))\n    else\n        echo "Failed to extract ordinal from hostname $HOST"\n        exit 1\n    fi\n    mkdir -p $ZK_DATA_DIR\n    mkdir -p $ZK_DATA_LOG_DIR\n    echo $MY_ID >> $ID_FILE\n\n    echo "dataDir=$ZK_DATA_DIR" >> $ZK_CONFIG_FILE\n    echo "dataLogDir=$ZK_DATA_LOG_DIR" >> $ZK_CONFIG_FILE\n    echo "4lw.commands.whitelist=*" >> $ZK_CONFIG_FILE\n    # Client TLS configuration\n    if [[ -f /tls/ca.pem ]]; then\n      echo "secureClientPort=$ZK_SSL_CLIENT_PORT" >> $ZK_CONFIG_FILE\n      echo "ssl.keyStore.location=/tls/client/client.pem" >> $ZK_CONFIG_FILE\n      echo "ssl.trustStore.location=/tls/ca.pem" >> $ZK_CONFIG_FILE\n    else\n      echo "clientPort=$ZK_CLIENT_PORT" >> $ZK_CONFIG_FILE\n    fi\n    # Server TLS configuration\n    if [[ -f /tls/ca.pem ]]; then\n      echo "serverCnxnFactory=org.apache.zookeeper.server.NettyServerCnxnFactory" >> $ZK_CONFIG_FILE\n      echo "sslQuorum=true" >> $ZK_CONFIG_FILE\n      echo "ssl.quorum.keyStore.location=/tls/server/server.pem" >> $ZK_CONFIG_FILE\n      echo "ssl.quorum.trustStore.location=/tls/ca.pem" >> $ZK_CONFIG_FILE\n    fi\n    for (( i=1; i<=$ZK_REPLICAS; i++ ))\n    do\n        echo "server.$i=$NAME-$((i-1)).$DOMAIN:$ZK_SERVER_PORT:$ZK_ELECTION_PORT" >> $ZK_CONFIG_FILE\n    done\n    rm -f $LOG4J_PROPERTIES\n    echo "zookeeper.root.logger=$ZK_LOG_LEVEL, CONSOLE" >> $LOG4J_PROPERTIES\n    echo "zookeeper.console.threshold=$ZK_LOG_LEVEL" >> $LOG4J_PROPERTIES\n    echo "zookeeper.log.threshold=$ZK_LOG_LEVEL" >> $LOG4J_PROPERTIES\n    echo "zookeeper.log.dir=$ZK_DATA_LOG_DIR" >> $LOG4J_PROPERTIES\n    echo "zookeeper.log.file=zookeeper.log" >> $LOG4J_PROPERTIES\n    echo "zookeeper.log.maxfilesize=256MB" >> $LOG4J_PROPERTIES\n    echo "zookeeper.log.maxbackupindex=10" >> $LOG4J_PROPERTIES\n    echo "zookeeper.tracelog.dir=$ZK_DATA_LOG_DIR" >> $LOG4J_PROPERTIES\n    echo "zookeeper.tracelog.file=zookeeper_trace.log" >> $LOG4J_PROPERTIES\n    echo "log4j.rootLogger=\\${zookeeper.root.logger}" >> $LOG4J_PROPERTIES\n    echo "log4j.appender.CONSOLE=org.apache.log4j.ConsoleAppender" >> $LOG4J_PROPERTIES\n    echo "log4j.appender.CONSOLE.Threshold=\\${zookeeper.console.threshold}" >> $LOG4J_PROPERTIES\n    echo "log4j.appender.CONSOLE.layout=org.apache.log4j.PatternLayout" >> $LOG4J_PROPERTIES\n    echo "log4j.appender.CONSOLE.layout.ConversionPattern=\\\n      %d{ISO8601} [myid:%X{myid}] - %-5p [%t:%C{1}@%L] - %m%n" >> $LOG4J_PROPERTIES\n    if [ -n "$JMXDISABLE" ]\n    then\n        MAIN=org.apache.zookeeper.server.quorum.QuorumPeerMain\n    else\n        MAIN="-Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=$JMXPORT \\\n          -Dcom.sun.management.jmxremote.authenticate=$JMXAUTH \\\n          -Dcom.sun.management.jmxremote.ssl=$JMXSSL \\\n          -Dzookeeper.jmx.log4j.disable=$JMXLOG4J \\\n          org.apache.zookeeper.server.quorum.QuorumPeerMain"\n    fi\n    set -x\n    exec java -cp "$CLASSPATH" $JVMFLAGS $MAIN $ZK_CONFIG_FILE\n\n  vault-agent-config.hcl: |\n    exit_after_auth = true\n    pid_file = "/home/vault/pidfile"\n    auto_auth {\n        method "kubernetes" {\n            mount_path = "auth/kubernetes_cce1"\n            config = {\n                role = "zookeeper"\n                token_path = "/run/secrets/tokens/vault-token"\n            }\n        }\n        sink "file" {\n            config = {\n                path = "/home/vault/.vault-token"\n            }\n        }\n    }\n\n    cache {\n        use_auto_auth_token = true\n    }\n\n    # ZK is neat-picky on cert file extensions\n    template {\n      destination = "/tls/ca.pem"\n      contents = <<EOT\n    {{- with secret "secret/data/tls/ca" }}{{ .Data.data.certificate }}{{ end }}\n    EOT\n    }\n\n    template {\n      destination = "/tls/server/server.pem"\n      contents = <<EOT\n    {{- with secret "secret/data/tls/zk_server" }}{{ .Data.data.certificate }}\n    {{ .Data.data.private_key }}{{ end }}\n    EOT\n    }\n    template {\n      destination = "/tls/server/tls.crt"\n      contents = <<EOT\n    {{- with secret "secret/data/tls/zk_server" }}{{ .Data.data.certificate }}{{ end }}\n    EOT\n    }\n    template {\n      destination = "/tls/server/tls.key"\n      contents = <<EOT\n    {{- with secret "secret/data/tls/zk_server" }}{{ .Data.data.private_key }}{{ end }}\n    EOT\n    }\n\n    template {\n      destination = "/tls/client/client.pem"\n      contents = <<EOT\n    {{- with secret "secret/data/tls/zk_client" }}{{ .Data.data.certificate }}\n    {{ .Data.data.private_key }}{{ end }}\n    EOT\n    }\n    template {\n      destination = "/tls/client/tls.crt"\n      contents = <<EOT\n    {{- with secret "secret/data/tls/zk_client" }}{{ .Data.data.certificate }}{{ end }}\n    EOT\n    }\n    template {\n      destination = "/tls/client/tls.key"\n      contents = <<EOT\n    {{- with secret "secret/data/tls/zk_client" }}{{ .Data.data.private_key }}{{ end }}\n    EOT\n    }\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f zookeeper-cm.yaml\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsx)(n.li,{children:"Create Zookeeper Headless service. It is used by pods to build\nquorum and implementing cluster internal communication."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'---\nname: "zookeeper-svc"\nnamespace: "zookeeper"\napiVersion: v1\nkind: Service\nspec:\n  # Not exposing in the cluster\n  clusterIP: None\n  # Important to start up\n  publishNotReadyAddresses: true\n  selector:\n    app: zookeeper\n  ports:\n  - port: 2281\n    name: client\n    targetPort: client\n    protocol: TCP\n  - port: 2888\n    name: server\n    targetPort: server\n    protocol: TCP\n  - port: 3888\n    name: election\n    targetPort: election\n    protocol: TCP\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f zookeeper-svc.yaml\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsx)(n.li,{children:"Create Frontend service. It is used by the clients and therefore\nonly includes client port of Zookeeper."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-{.yaml",metastring:'caption="zookeeper-svc-public.yaml"}',children:"apiVersion: v1\nkind: Service\nspec:\n  clusterIP: None\n  ports:\n  - name: client\n    port: 2281\n    protocol: TCP\n    targetPort: client\n  selector:\n    app: zookeeper\n  sessionAffinity: None\n  type: ClusterIP\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f zookeeper-svc-public.yaml\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"7",children:["\n",(0,s.jsx)(n.li,{children:"Create StatefulSet replacing [<VAULT_PUBLIC_ADDR>]\nwith the address of the Vault server. This includes a pod with Vault\nAgent side container as an init container, Vault Agent side\ncontainer used continuously in the run cycle of the pod and\nZookeeper main container."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'apiVersion: apps/v1\nkind: StatefulSet\nspec:\n  podManagementPolicy: Parallel\n  replicas: 3\n  selector:\n    matchLabels:\n      app: zookeeper\n      component: server\n  serviceName: zookeeper-headless\n  template:\n    metadata:\n      labels:\n        app: zookeeper\n        component: server\n    spec:\n      containers:\n\n      - args:\n        - agent\n        - -config=/etc/vault/vault-agent-config.hcl\n        - -log-level=debug\n        - -exit-after-auth=false\n        env:\n        - name: VAULT_ADDR\n          value: <VAULT_PUBLIC_ADDR>\n        image: vault:1.9.0\n        name: vault-agent-sidecar\n        volumeMounts:\n        - mountPath: /etc/vault\n          name: vault-agent-config\n        - mountPath: /tls\n          name: cert-data\n        - mountPath: /var/run/secrets/tokens\n          name: k8-tokens\n\n      - command:\n        - /bin/bash\n        - -xec\n        - /config-scripts/run\n        env:\n        - name: ZK_REPLICAS\n          value: "3"\n        - name: ZOO_PORT\n          value: "2181"\n        - name: ZOO_STANDALONE_ENABLED\n          value: "false"\n        - name: ZOO_TICK_TIME\n          value: "2000"\n        image: zookeeper:3.7.0\n        livenessProbe:\n          exec:\n            command:\n            - sh\n            - /config-scripts/ok\n          failureThreshold: 2\n          initialDelaySeconds: 20\n          periodSeconds: 30\n          successThreshold: 1\n          timeoutSeconds: 5\n        name: zookeeper\n        ports:\n        - containerPort: 2281\n          name: client\n          protocol: TCP\n        - containerPort: 2888\n          name: server\n          protocol: TCP\n        - containerPort: 3888\n          name: election\n          protocol: TCP\n        readinessProbe:\n          exec:\n            command:\n            - sh\n            - /config-scripts/ready\n          failureThreshold: 2\n          initialDelaySeconds: 20\n          periodSeconds: 30\n          successThreshold: 1\n          timeoutSeconds: 5\n        securityContext:\n          runAsUser: 1000\n        volumeMounts:\n        - mountPath: /data\n          name: datadir\n        - mountPath: /tls\n          name: cert-data\n        - mountPath: /config-scripts\n          name: zookeeper-config\n      dnsPolicy: ClusterFirst\n\n      initContainers:\n      - args:\n        - agent\n        - -config=/etc/vault/vault-agent-config.hcl\n        - -log-level=debug\n        - -exit-after-auth=true\n        env:\n        - name: VAULT_ADDR\n          value: <VAULT_PUBLIC_ADDR>\n        image: vault:1.9.0\n        name: vault-agent\n        volumeMounts:\n        - mountPath: /etc/vault\n          name: vault-agent-config\n        - mountPath: /tls\n          name: cert-data\n        - mountPath: /var/run/secrets/tokens\n          name: k8-tokens\n      restartPolicy: Always\n      serviceAccount: zookeeper\n      serviceAccountName: zookeeper\n      terminationGracePeriodSeconds: 1800\n      volumes:\n      - configMap:\n          defaultMode: 420\n          items:\n          - key: vault-agent-config.hcl\n            path: vault-agent-config.hcl\n          name: zookeeper-config\n        name: vault-agent-config\n      - configMap:\n          defaultMode: 365\n          name: zookeeper-config\n        name: zookeeper-config\n      - emptyDir: {}\n        name: cert-data\n      - name: k8-tokens\n        projected:\n          defaultMode: 420\n          sources:\n          - serviceAccountToken:\n              expirationSeconds: 7200\n              path: vault-token\n\n  updateStrategy:\n    type: RollingUpdate\n  volumeClaimTemplates:\n  - apiVersion: v1\n    kind: PersistentVolumeClaim\n    metadata:\n      name: datadir\n    spec:\n      accessModes:\n      - ReadWriteOnce\n      resources:\n        requests:\n          storage: 5Gi\n      storageClassName: csi-disk\n      volumeMode: Filesystem\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f zookeeper-ss.yaml\n"})}),"\n",(0,s.jsx)(n.p,{children:"With this a production-ready Zookeeper service with enabled TLS has been\ndeployed successfully to the CCE. The Vault Agent takes care of\nauthorizing to HashiCorp Vault using a Kubernetes service account with a\nshort time to live token and fetches required secrets to the file\nsystem. In the entire Kubernetes deployment there are no secrets for the\napplication, neither the key to the Vault, nor TLS certificates\nthemselves. Not even using Kubernetes secrets is necessary."}),"\n",(0,s.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://learn.hashicorp.com/tutorials/vault/agent-kubernetes?in=vault/auth-methods",children:"Vault Agent with Kubernetes"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.vaultproject.io/docs/auth/kubernetes",children:"Kubernetes auth method"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var s=t(96540);const a={},r=s.createContext(a);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);