---
id: create-a-public-dns-endpoint-with-externaldns
title: Create a Public DNS Endpoint with ExternalDNS
tags: [cce, dns, externaldns]
---

# Create a Public DNS Endpoint with ExternalDNS

[ExternalDNS](https://github.com/kubernetes-sigs/external-dns) is a Kubernetes component used to manage DNS records for services and applications running in a Kubernetes cluster. It automates the creation, update, and deletion of DNS records based on the state of resources within the cluster. ExternalDNS is typically employed in scenarios where you need to expose services running inside a Kubernetes cluster to the outside world with fully qualified domain names (FQDNs), ensuring they are accessible by external users.

The most common use cases that ExternalDNS comes to apply are the following:

1. **Expose Services via Custom DNS Names**
   When you want to expose Kubernetes services (e.g., a web application or API) using custom DNS names, ExternalDNS automates the process. Instead of manually creating and updating DNS entries in your DNS provider (like Open Telekom Cloud DNS, AWS Route 53, Google Cloud DNS, or Azure DNS), ExternalDNS dynamically manages these records for you.

   - **Use case**: You deploy an app in Kubernetes, and you want it to be reachable via a domain like `app.example.com`. ExternalDNS can automatically configure the DNS provider to point `app.example.com` to the service's Elastic IP.

2. **Automating DNS for Load Balancers**
   ExternalDNS is often used with Elastic Load Balancers that expose CCE services. For instance, when you create a `LoadBalancer` type service, the Open Telekom Cloud can assign (if not requested otherwise) an Elastic IP. ExternalDNS will create the corresponding DNS record and map the FQDN to that IP address.

   - **Use case**: You have a service with type `LoadBalancer` on CCE, and ExternalDNS creates a Open Telekom Cloud DNS Record that points your desired domain (like `api.example.com`) to the public IP of the Elastic Load Balancer.

3. **Handling Multi-Cluster or Multi-Region Deployments**
   In multi-cluster or multi-region environments, you may want to expose services from multiple clusters under the same DNS domain. ExternalDNS helps manage DNS records across clusters to ensure traffic is routed to the right endpoints. It can help distribute traffic geographically using DNS routing mechanisms like geo-routing or latency-based routing.

   - **Use case**: You have a cross-region application deployed in multiple clusters in both Open Telekom Cloud regions (eu-de & eu-nl for that matter), and you want DNS to automatically direct users to the closest cluster.

4. **Managing Dynamic or Short-Lived Services**
   If your environment frequently scales up and down, with services being created and destroyed dynamically (e.g., in CI/CD pipelines or microservices architectures), ExternalDNS ensures that DNS records are kept up-to-date with these changes.

   - **Use case**: In a microservices architecture, as new versions of services are rolled out or as services are spun up and torn down, ExternalDNS updates DNS records to reflect these dynamic changes.

5. **Integrating with Ingress Controllers**
   When you use an Ingress controller (such as NGINX Ingress, Traefik or CCE) to expose services via HTTP/HTTPS, ExternalDNS can manage the DNS records for the hostnames defined in your Ingress resources. It ensures that DNS is automatically set up to direct traffic to the appropriate Ingress endpoints.

   - **Use case**: You define an Ingress rule to expose `blog.example.com` via an Ingress controller. ExternalDNS automatically creates or updates a DNS record to point to the Ingress endpoint.

6. **Cloud-Native DNS Management**
   In cloud-native environments where automation and scalability are key, ExternalDNS helps reduce manual intervention for DNS management. It integrates with Open Telekom Cloud DNS service to provide cloud-native DNS functionality for Kubernetes workloads.

   - **Use case**: ExternalDNS automatically manages DNS entries for applications, ensuring they remain aligned with the cluster’s state.

7. **Managing Wildcard DNS Records**
   In cases where you need to manage wildcard DNS entries, such as for multi-tenant applications or subdomain-based routing, ExternalDNS can handle the automatic creation and management of wildcard records for your Kubernetes/CCE services.

   - **Use case**: You have a wildcard DNS entry like `*.tenant.example.com`, and you want each tenant to be routed to different backend services based on the subdomain. ExternalDNS helps maintain the necessary DNS records.

## Prerequisites

For this blueprint we will assume the existence of one CCE Cluster and a domain that you own and you can configure its DNS behaviour/parameters by your registar.

## Configuring your registar

We have to transfer the management of the NS-Records of your domain to the Domain Name Service of Open Telekom
Cloud. Go on the site of your registar and make sure you configure the following:

- Turn off any Dynamic DNS service for the domain or the subdomains you are going to bind with Open Telekom Cloud DNS.
- Change the NS-Records of your domain or the subdomains to point to:`ns1.open-telekom-cloud.com` **and** `ns2.open-telekom-cloud.com`

If those two prerequisites are met, then you are ready to configure a new DNS Public Zone and Record Sets for your domain in Open Telekom
Cloud. We do have two mutually exclusive options to do that:

- Create manually from Open Telekom Cloud Console, a new Public DNS Zone that binds to your domain and an A-Record in that zone that
    points to the EIP of the Elastic Load Balancer.
- Automate everything using
    [ExternalDNS](https://github.com/kubernetes-sigs/external-dns).

## Creating a dedicated DNS Service Account

Go to *IAM management console*, and create a new User that permits
**programmatic access** to Open Telekom Cloud resources:

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20231212-dfp.png)

Grant this User the following permissions or add him directly to User
Group `dns-admins` (if it exists, otherwise create it for a more rigid permissions management but that's completely optional)

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20231212-df8.png)

## Deploying ExternalDNS on CCE

We are going to deploy ExternalDNS with Helm as well. First let's lay
down the configuration of the chart:

```yaml title="overrides.yaml" linenos="" emphasize-lines="11,13-14"
sources:
  - crd
  - service
  - ingress
provider: designate
combineFQDNAnnotation: true
crd:
  create: true
logFormat: json
designate:
  username: "OTCAC_DNS_ServiceAccount"
  password: <<OTCAC_DNS_ServiceAccount_PASSWORD>>
  authUrl: "https://iam.eu-de.otc.t-systems.com:443/v3"
  regionName: "eu-de"
  userDomainName: "OTCXXXXXXXXXXXXXXXXXXXX"
  projectName: "eu-de_XXXXXXXXXXX"
```

:::warning
Special attention required here. Although DNS is a global
service, **all** changes have to be applied in Region **eu-de**.
:::

Install the chart (it will deploy all the necessary resources in an
automatically created namespace called `external-dns`:

```shell
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update

helm upgrade --install -f overrides.yaml external-dns bitnami/external-dns -n external-dns --create-namespace
```

## Verification

We have now laid all the groundwork in order to automatically provision
a Public DNS Zone and a dedicated A-Record that will bind the Elastic IP of our
Elastic Load Balancer with the FQDN of thesubdomain we configure above. For that matter we need to install
a Custom Resource based on a CRD installed by ExternalDNS that is called `DNSEndpoint`:

```yaml title="dns-endpoint.yaml"
apiVersion: externaldns.k8s.io/v1alpha1
kind: DNSEndpoint
metadata:
  name: keycloak
  namespace: keycloak
spec:
  endpoints:
  - dnsName: blog.example.com
    recordTTL: 300
    recordType: A
    targets:
    - XXX.XXX.XXX.XXX
```

:::note
Replace the placeholder value `XXX.XXX.XXX.XXX` of `targets` with the Elastic IP Address that is
assigned to your Elastic Load Balancer. Additionally, replace the value of `dnsName` with the FQDN of your (sub)domain.
:::

Wait for a couple of seconds, till the reconciliation loop of the
ExternalDNS controller is done, and if all went well you should now see
the Record Sets of your Public Zone populated with various entries:

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20231212-dsj.png)