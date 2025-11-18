---
id: enabling-external-traffic-with-ingress-and-tls
title: Enabling External Traffic with Ingress & TLS
tags: [cce, elb, externaldns, dns, nginx, acme, ingress, cert-manager]
---

# Enabling External Traffic with Ingress & TLS

Before deploying our workloads, the CCE cluster must be equipped with a set of foundational components. In this section, we'll install and configure essential prerequisites such as the NGINX Ingress Controller for routing external traffic, cert-manager for managing TLS certificates, and other supporting workloads. These components establish the baseline infrastructure required to expose services securely and ensure smooth operation of the application stack within the Kubernetes environment.

## Ingress Overview

Kubernetes uses ingress resources to define how incoming traffic should be handled, while the Ingress Controller is responsible for processing the actual traffic.

- Ingress object: a set of access rules that forward requests to specified Services based on domain names or paths. It can be added, deleted, modified, and queried by calling APIs.
- Ingress Controller: an executor for forwarding requests. It monitors the changes of resource objects such as ingresses, Services, endpoints, secrets (mainly TLS certificates and keys), nodes, and ConfigMaps in real time, parses rules defined by ingresses, and forwards requests to the target backend Services.

The way of implementing Ingress Controllers varies depending on their vendors. CCE supports **LoadBalancer Ingress Controllers** and **NGINX Ingress Controllers**.

- LoadBalancer Ingress Controllers are deployed on master nodes and forward traffic based on the ELB. All policy configurations and forwarding behaviors are managed on the ELB.
- NGINX Ingress Controllers are deployed in clusters using charts and images maintained by the Kubernetes community. They provide external access through NodePort and forward external traffic to other services in the cluster through Nginx. All traffic forwarding behaviors and forwarding objects are within the cluster.

:::important
In this Best Practice, we will enable external traffic using **NGINX Ingress Controllers**.
:::

## Creating an Elastic Load Balancer

:::caution
This step has to take place **once** for every cluster as long as you are planning to use a single load balancer for all of your workloads.
:::

The first step in preparing the environment is to provision an Elastic Load Balancer (ELB), which will serve as the external entry point for traffic into the CCE cluster. Setting up an ELB setup is critical for handling external traffic and forwarding requests to services within the cluster, such as the Ingress Controller.

Go to *Open Telekom Cloud Console* -> *Network* -> *Elastic Load Balancing* and click *Create Elastic Load Balancer*. Ensure that the Elastic Load Balancer is provisioned within the same VPC and Subnet as your CCE cluster. This network alignment is essential to allow the load balancer to reach the CCE worker nodes directly using their private IP addresses. Misplacing the ELB in a different network segment would result in unreachable backends and broken ingress routing.

![image](/img/docs/blueprints/by-use-case/security/zitadel/Screenshot_from_2025-04-16_08-06-28.png)

After the Elastic Load Balancer is provisioned, make sure to record the ELB *ID*. This unique identifier is needed when configuring the NGINX Ingress Controller, enabling it to correctly bind to the external load balancer and manage incoming traffic. The ELB ID acts as a reference to link Kubernetes resources with the underlying network infrastructure, ensuring smooth integration between your Ingress layer and the public-facing endpoint.

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20231211-i88.png)

## Creating a Public DNS Endpoint

:::important
This step must be performed **for each individual workload**.
:::

Login to your domain registrar’s control panel and ensure the following:

1. **Disable any dynamic DNS features** associated with the domain or subdomains that will be used by your application.  
2. **Update the NS records** of your domain to point exclusively to the following OTC name servers:
  
    ```
    ns1.open-telekom-cloud.com
    ns2.open-telekom-cloud.com
    ```

Once the nameserver changes have propagated and Open Telekom Cloud DNS service assumes authoritative control of your domain, you can proceed to define DNS zones and records. From here, you have two options depending on your operational approach:

1. **Manual Configuration via the OTC Console**  
   Create a **Public DNS Zone** in the Open Telekom Cloud DNS service, then define an **A record** that maps your domain (e.g., `application.example.com`) to the **EIP** of the external load balancer.

**OR**

2. **Automated Configuration with ExternalDNS**  
   Deploy the ExternalDNS in your Kubernetes cluster. It watches Ingress resources (among others such as CRDs and Services) and automatically creates or updates DNS records in your Open Telekom Cloud DNS zone according to annotations in these resources. This approach is well-suited for dynamic environments or production setups that leverage infrastructure-as-code and minimize manual management. Follow the instructions of [Automate DNS Records Creation from CCE Ingresses with ExternalDNS](../cloud-container-engine/automate-dns-records-creation-from-cce-ingresses-with-externaldns).

:::note  
Select the approach that aligns with your deployment strategy and automation preferences. The remainder of this article will focus on the manual configuration.
:::

## Installing NGINX Ingress Controller

:::caution
This step only needs to be performed **once per cluster**, if you plan to use a single load balancer for all workloads.
:::

In this step, we’ll deploy the [Ingress NGINX Controller for Kubernetes](https://github.com/kubernetes/ingress-nginx), which serves as the bridge between the Elastic Load Balancer and the services running within the CCE cluster. The controller manages HTTP(S) routing and termination, directing external traffic to the correct internal services based on host and path rules.

:::important

- Make sure that custom domain name, `application.example.com`, points to the public EIP associated with your ELB. This setup enables secure, domain-based access to your application and forms the foundation for managing ingress traffic across the cluster.
- Don't forget that the **Fully Qualified Domain Name (FQDN)** you use to expose the corresponding service, such as `application.example.com`, must correspond to a **real, resolvable domain or subdomain** that you own and control. You’ll need to create a DNS record (typically an A or CNAME record) that points this FQDN to the public **Elastic IP** assigned to your load balancer. Without a valid DNS mapping, certificate issuance and external access to the service instance will fail, especially if you're using TLS termination via cert-manager.

:::

To deploy the NGINX Ingress Controller for Kubernetes correctly, we provide Helm with a custom values file, typically named **overrides.yaml**, that specifies configuration parameters for the deployment. A key value in this file is the internal ID of the Elastic Load Balancer (ELB), which ensures the Ingress Controller binds to the correct load balancer and routes external traffic to the appropriate Kubernetes services.

The `kubernetes.io/elb.id` annotation is applied to the `Service` resource created by the NGINX Ingress Controller for Kubernetes, ensuring that all `Ingress` resources using this `IngressClass` **are automatically associated with the specified load balancer**:

```yaml title="overrides.yaml" linenos="" emphasize-lines="6"
controller:
  replicaCount: 1
  service:
    externalTrafficPolicy: Cluster
    annotations:
      kubernetes.io/elb.id: "<ELB_ID>"
```

:::important
Be sure to replace placeholder value `<ELB_ID>` with the actual ID of the Elastic Load Balancer created earlier.
:::

Once the **overrides.yaml** file is ready, you can install the NGINX Ingress Controller using Helm. This will deploy all necessary components into a dedicated namespace called `nginx-system`. Execute the following commands:

```shell
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo update

helm install nginx-ingress ingress-nginx/ingress-nginx \
  --namespace nginx-system \
  --create-namespace \
  --values overrides.yaml

```

This will set up the Ingress NGINX Controller for Kubernetes with your custom configuration, including the ELB binding. Once deployed, Kubernetes Ingress resources referencing the `nginx` class will route traffic through this controller.

## Installing OTC ACME DNS01 Solver

:::caution
This step only needs to be performed **once per cluster**.
:::

[Cert-manager](https://cert-manager.io/) DNS providers are integrations with various DNS (Domain Name System) service providers that allow cert-manager, a Kubernetes add-on, to automate the management of SSL/TLS certificates. DNS providers enable cert-manager to automatically perform challenges to prove domain ownership and obtain certificates from certificate authorities like Let's Encrypt.

By configuring cert-manager with the compatible Open Telekom Cloud DNS provider, we can set up automatic certificate issuance and renewal for our Open Telekom Cloud CCE workloads without manual intervention. This automation is crucial for securing web applications and services deployed on CCE clusters.

To enable automated TLS provisioning for workloads in your CCE cluster, follow the recommended approach for as in the Best Practice: [Issue an ACME Certificate with DNS01 Solver in CCE](/docs/best-practices/containers/cloud-container-engine/issue-an-acme-certificate-with-dns01-solver-in-cce).
