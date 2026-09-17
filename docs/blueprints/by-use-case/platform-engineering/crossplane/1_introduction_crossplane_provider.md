---
id: introduction-crossplane-provider
title: Introduction to the T Cloud Public Crossplane Provider
tags: [crossplane, platform-engineering]
---

## What is Crossplane

[Crossplane](https://docs.crossplane.io/latest/whats-crossplane/) is an open-source control plane that extends Kubernetes to manage cloud infrastructure and services using Kubernetes. It enables platform teams to provision and manage resources across providers such as AWS, Azure, GCP, **T Cloud Public** through declarative, Kubernetes-native configurations.

By turning Kubernetes into a universal control plane for infrastructure, Crossplane allows teams to define reusable platform abstractions and self-service APIs that encapsulate organizational standards, security policies, and operational best practices. Developers consume high-level resources, while Crossplane automatically provisions and manages the underlying cloud infrastructure.

By treating infrastructure as code within Kubernetes and integrating naturally with GitOps workflows, Crossplane helps automate deployments, improve consistency, reduce operational overhead, and simplify cloud operations.


#### In short:
- Manage cloud services with:
    - Kubernetes-style APIs
    - Reconciliation loops:
	    - Drives from observed to desired state automatically
    - GitOps tools/workflows:
	    - helm
	    - helmfile
	    - argocd
- Installed as a **control-plane/operator** inside a Kubernetes cluster
	- Runs on:
	    - kind
	    - CCE
	    - OpenShift
	    - Any Kubernetes flavor actually
- Enables management of **T Cloud Public** services like:
	- RDS
	- OBS
	- VPC
	- ECS
	- CCE
	- many **more**


## Crossplane architecture

When managing cloud resources in Crossplane, there are four key components working together:

1. **Kubernetes API** – Store resources, validate requests, enforce RBAC, notify controllers.
2. **Crossplane core** – Compositions, packages, functions, dependency management, resource orchestration.
3. **Crossplane Providers** – The cloud/service specific implementations(APIs + controllers).
4. **ETCD** - Persistent storage of desired and observed state.

When you apply any Crossplane manifest, the Provider reconciles the desired state in Kubernetes with the actual state in the cloud provider's API, creating, updating, or deleting the external resource as needed.
![image](/img/docs/blueprints/by-use-case/platformengineering/using-crossplane/using-crossplane-architecture-img.png)

## Terraform vs Crossplane operation  
Crossplane does sound like automated Terraform, but what are the differences?

| Aspect                  | Terraform-Based Operations                                            | Crossplane-Based Operations                                               |
| ----------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| **Primary Model**       | Infrastructure as Code using Terraform hcl configurations             | Kubernetes-native infrastructure management using Custom Resources (CRDs) |
| **Control Plane**       | Terraform CLI, Terraform Cloud, or automation pipelines               | Kubernetes acts as the control plane                                      |
| **State Management**    | Requires separate state files (local or remote backend) + state drama | State stored in Kubernetes' etcd                                          |
| **Resource Lifecycle**  | CI/CD pipelines or manual runs                                        | Continuously reconciled by Kubernetes controllers                         |
| **Drift Detection**     | Periodic `terraform plan` required                                    | Automatic and continuous reconciliation                                   |
| **Operational Model**   | Push-based execution                                                  | Pull-based reconciliation                                                 |
| **Multi-Cloud Support** | Mature and extensive                                                  | Limited, but catching up                                                  |
| **GitOps Integration**  | Indirect, usually through CI/CD runners                               | Native fit with GitOps tools like ArgoCD                                  |
| **Learning Curve**      | Easier for infrastructure teams                                       | "Easier" for Kubernetes-centric platform teams, but can be more complex   |

It is important to highlight that Crossplane is not a direct replacement for Terraform. Engineering teams should evaluate their infrastructure and engineering needs and determine which tool is best suited to each system and use case. Rather than choosing one over the other, teams may benefit from using both tools where appropriate.
## Crossplane providers

- [Providers](https://docs.crossplane.io/latest/packages/providers/) are responsible for all aspects of connecting to non-Kubernetes resources:
    - Define cloud APIs as Kubernetes CRDs
    - Handle Authentication
    - Implement controllers
    - Manage external infrastructure resources
- Most providers are built from **Terraform providers** with [upjet](https://github.com/crossplane/upjet) 

### provider-opentelekomcloud

- Provider built using **Upjet tooling**
- Upjet [generates](https://github.com/crossplane/upjet-provider-template) Crossplane providers from Terraform providers
- All Terraform-supported services are configurable
- Some services still lack dynamic value assignment support: [tracker](https://github.com/opentelekomcloud/provider-opentelekomcloud/issues/7)


The provider ships hundreds of new APIs and controllers by default, which will increase the load on `kube-apiserver` and `etcd`. Please consider using [ManagedResourceActivationPolicies](https://docs.crossplane.io/latest/managed-resources/managed-resource-activation-policies/) to only activate needed resources.
> Below you can see how kube-apiserver reacts when installing Crossplane and the Provider with all controllers enabled.
![image](/img/docs/blueprints/by-use-case/platformengineering/using-crossplane/using-crossplane-crossplane_metrics.png)

## Installing and Configuring the Provider

### Install Crossplane core

1. Create a namespace for Crossplane
```bash
kubectl create namespace crossplane-system
```

2. Add the Crossplane Helm repository and update it
```bash
helm repo add crossplane-stable https://charts.crossplane.io/stable
helm repo update
```

3. Install Crossplane using Helm
```bash
helm install crossplane crossplane-stable/crossplane \
  --set provider.defaultActivations={"*.opentelekomcloud.m.crossplane.io"} \
-n crossplane-system
```

4. Verify that Crossplane is running correctly
```bash
kubectl -n crossplane-system wait --for=condition=Available deployment --all --timeout=5m
```

### Install the T Cloud Public Provider
1. Install the Provider package
> `Provider` kind is a CRD installed and managed by Crossplane as a [package](https://docs.crossplane.io/latest/packages/), thus you need Crossplane up and running to install the Provider.
```yaml
cat <<EOF | kubectl apply -f -
apiVersion: pkg.crossplane.io/v1
kind: Provider
metadata:
  name: provider-opentelekomcloud
spec:
  package: xpkg.upbound.io/opentelekomcloud/provider-opentelekomcloud:v0.9.0
EOF
```

2. Set up AUTH for `ClusterProviderConfig`
```shell
export CROSSPLANE_CLOUD_CREDENTIALS='{"user_name":"USERNAME","access_key":"MY_AK", "secret_key":"MY_SK","auth_url":"https://iam.eu-de.otc.t-systems.com/v3","domain_name":"MYDOMAIN","tenant_name":"eu-de_PROJECT","swauth":"false","allow_reauth":"true","max_retries":"2","max_backoff_retries":"6","backoff_retry_timeout":"60","insecure":"false"}'
```

```shell
kubectl -n crossplane-system create secret generic provider-secret --from-literal=credentials="${CROSSPLANE_CLOUD_CREDENTIALS}" --dry-run=client -o yaml | kubectl apply -f -
```

3. Create `ClusterProviderConfig`
> `ClusterProviderConfig` kind is installed and managed by the T Cloud Provider. You might need to wait 1-2 minutes while the Provider starts all controllers.
```yaml
cat <<EOF | kubectl apply -f -
apiVersion: opentelekomcloud.m.crossplane.io/v1beta1
kind: ClusterProviderConfig
metadata:
  name: default
spec:
  credentials:
    source: Secret
    secretRef:
      name: provider-secret
      namespace: crossplane-system
      key: credentials
EOF
```

4. Deploy a `Bucket` as a test
```yaml
cat <<EOF | kubectl apply -f -
apiVersion: obs.opentelekomcloud.m.crossplane.io/v1alpha1
kind: Bucket
metadata:
  labels:
    testing.upbound.io/example-name: b
  name: b
spec:
  forProvider:
    versioning: true
    region: eu-de
    bucket: my-crossplane-test-1
    tags:
      Env: Test
      foo: bar
      managed: xplane
EOF
```

```yaml
kubectl get bucket.obs.opentelekomcloud.m.crossplane.io -oyaml
[...]
  spec:
    forProvider:
      bucket: my-crossplane-test-1
      region: eu-de
      storageClass: STANDARD
      tags:
        Env: Test
        foo: bar
        managed: xplane
      versioning: true
    initProvider: {}
    managementPolicies:
    - '*'
    providerConfigRef:
      kind: ClusterProviderConfig
      name: default
  status:
    atProvider:
      acl: private
      bucket: my-crossplane-test-1
      bucketDomainName: my-crossplane-test-1.obs.eu-de.otc.t-systems.com
      bucketVersion: "3.0"
      forceDestroy: false
      id: my-crossplane-test-1
      parallelFs: false
      region: eu-de
      storageClass: STANDARD
      tags:
        Env: Test
        foo: bar
        managed: xplane
      versioning: true


```
## ManagedResources (MR)

A [managedResource](https://docs.crossplane.io/latest/managed-resources/managed-resources/) (`MR`) represents an external service in a Provider. When users create a new managed resource, the Provider reacts by creating an external resource inside the Provider’s environment.
### Managed resource fields

#### Group, Kind and Version

- Each managed resource is a unique API endpoint with their own `group`, `kind` and `version`.
- For example the [T Cloud Provider](https://github.com/opentelekomcloud/provider-opentelekomcloud) defines the `Bucket` (OBS) kind from the group `obs.opentelekomcloud.m.crossplane.io`

```yaml
apiVersion: obs.opentelekomcloud.m.crossplane.io/v1alpha1
kind: Bucket
```

#### forProvider

- The `spec.forProvider` of a managed resource maps to the parameters of the external cloud resource.
- For example, when creating a `Bucket` instance, the Provider supports defining the `region`, `versioning` and [other](https://marketplace.upbound.io/providers/opentelekomcloud/provider-opentelekomcloud/v0.9.0/resources/obs.opentelekomcloud.m.crossplane.io/Bucket/v1alpha1#doc:spec) fields here.
- Single [source of truth](https://docs.crossplane.io/latest/managed-resources/managed-resources/#forprovider) and desired state definition.

```yaml
spec:
  forProvider:
    versioning: true
    region: eu-de
    bucket: my-crossplane-test-1
```

#### atProvider

- The `status.atProvider` of a managed resource contains the observed state of the external resource.
- For example, after creating a `Bucket` instance, the Provider may populate fields such as the `storageClass`, `acl`, `forceDestroy` and other values returned by the external resource.

```yaml
status:
  atProvider:
    acl: private
    bucket: my-crossplane-test-1
    bucketDomainName: my-crossplane-test-1.obs.eu-de.otc.t-systems.com
    bucketVersion: "3.0"
    forceDestroy: false
    id: my-crossplane-test-1
    parallelFs: false
    region: eu-de
    storageClass: STANDARD
    tags:
      Env: Test
      foo: bar
      managed: xplane
    versioning: true
```

In short: `forProvider` describes what you want to configure, while `atProvider` describes what Crossplane observes on the external resource.


### Automatic reconciliation
Crossplane and Providers continuously reconciling to the desired state defined in Kubernetes. The Provider watches the `ManagedResource` state in the cloud API and compares it's state with the desired configuration. If a resource is modified outside of Crossplane , the Provider automatically detects and corrects this drift unless configured otherwise. By default the reconciliation loop runs every 10 minutes, but it is configurable with [DeploymentRuntimeConfig](https://github.com/opentelekomcloud/provider-opentelekomcloud/blob/main/docs/configure-the-provider.md), but be aware of API rate limits.

### Deletion protection
By default, the provider protects resources from accidental deletion or re-creation. External resources are deleted only when the Kubernetes resource is intentionally removed.

```
### example changing the AZ field for and RDS instance which would lead to re-creation:
  Conditions:
    Last Transition Time:  2026-06-26T11:00:54Z
    Message:               observe failed: cannot run plan: plan failed: Instance cannot be destroyed: Resource opentelekomcloud_rds_instance_v3.team-a-db-f4948320f209 has lifecycle.prevent_destroy set, but the plan calls for this resource to be destroyed. To avoid this error and continue with the plan, either disable lifecycle.prevent_destroy or reduce the scope of the plan using the -target flag.
```

## Composite Resources (XR)
A [composite resource](https://docs.crossplane.io/latest/composition/composite-resources/), or XR, represents a set of Kubernetes resources as a single Kubernetes object. Crossplane creates composite resources when users access a custom self built APIs, defined in the [CompositeResourceDefinition](https://docs.crossplane.io/latest/composition/composite-resource-definitions/) (XRD).

- Composite resource definitions (`XRDs`) define the schema for a custom API.
- [Compositions](https://docs.crossplane.io/latest/composition/compositions/) are a template for creating multiple Kubernetes resources as a single composite resource.

![image](/img/docs/blueprints/by-use-case/platformengineering/using-crossplane/using-crossplane-xrd-img.png)

#### Compositions can enable:

- **Multi-cloud engineering** – Enables composing infrastructure APIs that work consistently across multiple cloud providers.
- **Standardized cloud resources** – Allows platform teams to define approved infrastructure patterns, ensuring consistency, security, and compliance across the organization.
- **Self-service infrastructure** – Gives developers simple, application-focused APIs to provision infrastructure without needing deep expertise in cloud platforms.
- **Infrastructure abstraction** – Hides cloud-provider-specific complexity behind higher-level APIs that align with business and platform requirements.
- **Reusable infrastructure patterns** – Packages common architectures (such as databases, Kubernetes clusters, or application environments) into reusable building blocks that can be deployed repeatedly and consistently.

## Standardized Database example XR

Imagine a company with multiple development teams, each needing an SQL database for their applications. Using Crossplane, the Platform Engineering team can create guardrails, security policies, and standards that developers must follow. This allows development teams to self-service database provisioning without needing to understand the underlying database infrastructure, cloud APIs or Crossplane.

**Company requirements:**

- PostgreSQL only 
- Backups must be enabled 
- Only approved database flavors can be used
- Maximum database size: 500 GB
- Internal access only
- All resources must be deployed in the same namespace
- Only `CLOUDSSD` block storage is allowed

The Crossplane solution: Platform Engineering team creates a custom abstraction API using Crossplane Composite Resources. Development teams can then provision a compliant database using a simple manifest:
```yaml
apiVersion: database.example.org/v1alpha1
kind: DbInstance
metadata:
  name: team-a-db
  namespace: team-a
spec:
  name: team-a-db
  availabilityZone: eu-de-01
  flavor: small
  size: 100
  team: team-a
```

After applying the manifest above, the Provider provisions an RDS instance and all required supporting resources, including networking and security groups. This will create an `RDS` instance with the following specifications:
```yaml
spec:
  forProvider:
    availabilityZone:
    - eu-de-01
    backupStrategy:
    - keepDays: 1
      startTime: 08:00-09:00
    computeSecurityGroupRefs:
      name: team-a-db-242c585b634b
      namespace: test
    computeSecurityGroupSelector:
      matchControllerRef: true
    db:
    - passwordSecretRef:
        key: example-rds-key
        name: example-rds-secret
      port: 8635
      type: PostgreSQL
      version: "15"
    flavor: rds.pg.n1.large.2
    name: team-a-db
    securityGroupId: 1aead593-d096-4497-92a9-eb48428a9596
    subnetId: d4846bc8-e747-4174-899f-886189f83847
    subnetRef:
      name: team-a-db-e5866498e7ab
      namespace: test
    subnetSelector:
      matchControllerRef: true
    tags:
      managed-by: crossplane
    volume:
    - size: 100
      type: CLOUDSSD
    vpcId: f1835f47-4001-49bd-b1ac-0c3f0f5b15fd
    vpcRef:
      name: team-a-db-a21435927a98
      namespace: test
    vpcSelector:
      matchControllerRef: true
```

As demonstrated in the example above, Crossplane and our Provider can help you standardize and abstract your Kubernetes and cloud infrastructure, enabling a self-service experience where developers can provision what they need without having to understand the underlying infrastructure.

#### Links for the working example:
[Function](https://github.com/dombisza/obsidian/blob/master/crossplane-intro/manifests/xr/001_function.yaml)  
[Composite Resource Definition](https://github.com/dombisza/obsidian/blob/master/crossplane-intro/manifests/xr/002_xrd.yaml)  
[Composition](https://github.com/dombisza/obsidian/blob/master/crossplane-intro/manifests/xr/003_xr.yaml)  
[DbInstance](https://github.com/dombisza/obsidian/blob/master/crossplane-intro/manifests/xr/004_psql.yaml)  

## Where to find out more about the Provider and Crossplane

- Official Crossplane [docs](https://docs.crossplane.io/latest/) is a good place to start
- Our Github has a [quick start guide](https://github.com/opentelekomcloud/provider-opentelekomcloud/tree/main#getting-started) for the Provider's deployment
- Understanding [ProviderConfig](https://docs.crossplane.io/latest/packages/providers/#provider-configuration) types 
- Configuration, upgrade and import [docs](https://github.com/opentelekomcloud/provider-opentelekomcloud/tree/main/docs) 
- CRDs are self documenting, but [Upbound's](https://marketplace.upbound.io/providers/opentelekomcloud/provider-opentelekomcloud/v0.9.0?tab=managedResources) page might be friendlier
- If you are having issues you can request help in [Github](https://github.com/opentelekomcloud/provider-opentelekomcloud/issues)
