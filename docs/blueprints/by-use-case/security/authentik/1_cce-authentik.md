---
id: cce-authentik
title: Deploy Authentik on CCE
tags: [cce, authentik, security, iam]
---

# Deploy Authentik on CCE

This tutorial will guide you through the process of setting up authentik on your CCE Kubernetes environment.

### Prerequisites

Before starting the installation, ensure you have the following:

- A running Kubernetes cluster (CCE)
- Helm installed on your local machine

### Generating Secure Passwords

Begin by generating secure passwords for the database and cache. Use one of these commands:

```shell
pwgen -s 50 1
```

or

```shell
openssl rand 60 | base64 -w 0
```

### Creating the Values File

1. Create a file named **values.yaml** in your working directory.
2. Add the following content to the file:

```yaml title="values.yaml"
authentik:
    secret_key: "PleaseGenerateASecureKey"
    error_reporting:
        enabled: true
    postgresql:
        password: "ThisIsNotASecurePassword"

server:
    ingress:
        ingressClassName: nginx
        enabled: true
        hosts:
            - authentik.test-domain.com

postgresql:
    enabled: true
    auth:
        password: "ThisIsNotASecurePassword"
redis:
    enabled: true
```

:::note

- Replace `PleaseGenerateASecureKey` and `ThisIsNotASecurePassword` with secure passwords you generated earlier.
- Here we are using nginx as ingress controller if you use other ingress controller (like traefik or kong) specify it under path `server.ingress.ingressClassName`. Also replace `authentik.test-domain.com` with the domain name you intend for Authentik.

:::

### Installing Authentik Using Helm

1. Add the authentik Helm repository:

    ```shell
    helm repo add authentik https://charts.goauthentik.io
    ```

2. Update your Helm repositories:

    ```shell
    helm repo update
    ```

3. Install authentik using Helm:

    ```shell
    helm upgrade --install authentik authentik/authentik -f values.yaml
    ```

   This command will install authentik or upgrade an existing installation using the values specified in your **values.yaml** file.

### Accessing Authentik

Once the installation is complete, you can access authentik by following these steps:

1. Open your web browser and navigate to `https://<ingress-host-name>/if/flow/initial-setup/`.
2. Set a password for the default `akadmin` user.

Setting admin password for first time:
![image](/img/docs/blueprints/by-use-case/security/authentik/Screenshot-chpassword-authentik.png "Setting admin password for first time")

Authentik dashboard:
![image](/img/docs/blueprints/by-use-case/security/authentik/Screenshot-Admin-authentik.png "Authentik dashboard")
