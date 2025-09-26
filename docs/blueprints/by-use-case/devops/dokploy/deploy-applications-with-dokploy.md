---
id: deploy-applications-with-dokploy
title: Deploy Applications with Dokploy
tags: [devops, ci, cd, cicd, dokploy, paas, ecs, docker, swarm, gitops]
sidebar_position: 3
---

# Deploy Applications with Dokploy

Before we deploy any application with Dokploy we first need to create a Project. Go to *Dokploy Console* -> *Home* -> *Projects* and click *Create Project*, give it a name and click *Create*.

## Deploying a Docker Stack

### Simple Application

Open the created project and click *Create Service* -> *Docker Compose*. Fill in the **Name**, in this case `whoami` as we are going to install the `traefik/whoami` application, a Go server that prints OS information and HTTP request to output. Choose `Stack` as **Compose Type** and click *Create*:

![img](/img/docs/blueprints/by-use-case/devops/dokploy/Screenshot_from_2025-09-26_08-56-01.png)

Go to *General* and disable *Auto-deploy*, click *Raw*, paste the following YAML in the text area and click *Save*:

```yaml
version: "3.8"
services:
  whoami:
    image: containous/whoami:v1.5.0
    deploy:
      replicas: 1
```

Go to *Domains* and click *Add Domain*. Select the service, in this case there is only one, namely `whoami`, from the **Service Name** drop-box and set **Container Port** to `80`.

:::important
Keep **HTTPS** disabled because TLS is terminated at the Elastic Load Balancer.
:::

![img](/img/docs/blueprints/by-use-case/devops/dokploy/Screenshot_from_2025-09-26_09-19-51.png)

Next, define the **Host** URL. You can choose between a testing address or one intended for production workloads. Clicking the *dice button* on the right, generates a random URL from the traefik.me service and sets it as your **Host**. This is suitable for testing, as it does not support SSL certificates.

![img](/img/docs/blueprints/by-use-case/devops/dokploy/Screenshot_from_2025-09-26_09-26-14.png)

:::note
[Traefik.me](https://traefik.me/) is a wildcard DNS service, similar to nip.io or xip.io, that resolves any IP address.
:::

For production, you can use `whoami.dokploy.example.com`, assuming that `dokploy.example.com` was configured as the Web Server Domain Address in the earlier steps.

Finally, click *Create*, go back to *General*, and select *Deploy*. If the configuration is correct, your workload will be deployed on the worker nodes of the swarm and both endpoints should now be accessible:

![img](/img/docs/blueprints/by-use-case/devops/dokploy/Screenshot_from_2025-09-26_09-41-40.png)

:::note
Applications under your domain are secure because TLS is terminated at the ELB with a wildcard certificate that covers `*.dokploy.example.com`. When a user visits any app like `whoami.dokploy.example.com`, the certificate’s SAN matches the hostname, the chain validates, and the browser marks the session as secure.
:::

### Multi-Service Application


## Deploying from a Dokploy Template

## Building and Deploying from a Git Repo

