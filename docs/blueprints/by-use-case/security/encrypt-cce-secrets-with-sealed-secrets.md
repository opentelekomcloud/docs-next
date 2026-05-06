---
id: encrypt-cce-secrets-with-sealed-secrets
title: Encrypt CCE Secrets with Sealed Secrets
tags: [cce, sealed-secrets, bitnami, secrets]
sidebar_position: 11
---

# Encrypt CCE Secrets with Sealed Secrets

Managing sensitive data in Kubernetes clusters is a recurring challenge, especially when configuration needs to be versioned and shared across teams. Standard Kubernetes secrets are not designed for safe storage in source control, as they are only base64-encoded (**not** encrypted) and can be easily decoded back to plain text. This creates a gap between secure secret handling and common GitOps workflows.

[Sealed Secrets](https://github.com/bitnami-labs/sealed-secrets) address this problem by introducing a mechanism to encrypt Kubernetes secrets into a form that can be safely stored in repositories. The encryption is performed using a **cluster-specific public key**, and only a controller running inside the cluster can decrypt the data back from a `SealedSecret` (the respective new [CRD](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/)) into a usable `Secret`. This ensures that sensitive values remain protected outside the cluster while still allowing them to be managed declaratively.

This approach is particularly suitable for environments where infrastructure and application definitions are maintained in Git, such as GitOps-driven deployments on Cloud Container Engine (CCE). It allows teams to share encrypted configuration across environments, automate deployments without exposing credentials, and maintain a clear separation between secret creation and secret consumption.

## Solution Overview

Sealed Secrets introduce a controller-based encryption model that **shifts the responsibility for decryption entirely into the cluster**. At the core of this setup is the **Sealed Secrets controller**, which runs inside the Kubernetes cluster and manages a key pair. The public key is used to encrypt secrets, while the private key never leaves the cluster and is used to decrypt them.

When a user creates a secret, it is first defined in plain Kubernetes `Secret` format. **Instead of applying it directly**, the secret is processed with a client-side tool, [kubeseal](https://kubeseal.com/), that uses the controller’s public key to encrypt the data. The result is a custom resource, a `SealedSecret`. This resource contains only encrypted values and can be safely stored in a Git repository or shared across teams. Once the `SealedSecret` is applied to the cluster, the controller detects it through the Kubernetes API. It then uses its private key to decrypt the content and creates a standard Kubernetes `Secret` in the same namespace. From that point on, workloads can consume the `Secret` as usual, without being aware of the sealing process.

## Installing with Helm

The Sealed Secrets controller is going to be deployed to the cluster using a Helm chart:

```shell
helm repo add sealed-secrets https://bitnami-labs.github.io/sealed-secrets
helm repo update sealed-secrets

helm upgrade --install sealed-secrets-controller sealed-secrets/sealed-secrets \
    --namespace sealed-secrets --create-namespace
```

## Installing kubeseal CLI

The [kubeseal](https://kubeseal.com/) CLI is required to encrypt Kubernetes secrets before they are applied to the cluster. It is installed locally on the operator’s and developers' workstations and communicates with the Sealed Secrets controller to retrieve the public key used for encryption. Once received, it integrates into existing workflows by converting standard `Secret` manifests into `SealedSecret` resources. You can install it either with Homebrew or with the known package managers of your Linux distribution, e.g.:

```shell
brew install kubeseal
```

or for Debian-based distros:

```shell
sudo apt install -y kubeseal
```

## Retrieving the Public Key

The public key is required because it is the only component that can be safely shared outside the cluster while still enabling encryption. The `kubeseal` CLI uses this key to encrypt secret data in a way that ensures only the corresponding private key, held by the controller inside the cluster, can decrypt it. Without retrieving the public key, it would not be possible to produce `SealedSecret` resources that the cluster can securely and correctly decrypt.

```shell
kubeseal --fetch-cert --controller-namespace=sealed-secrets > public-key.pem
```

## Encrypting a Secret

First, create a standard Kubernetes `Secret` manifest with the required sensitive values. e.g. your T Cloud Public tenant Access and Secret Keys. This file will be only used as input for the sealing process and should be handled carefully:

```yaml title='secret.yaml'
apiVersion: v1
kind: Secret
metadata:
  name: opentelekomcloud-aksk
  namespace: default
type: Opaque
data:
  ACCESS_KEY: VEhJU19JU19USEVfQUNDRVNTX0tFWQ==
  SECRET_KEY: VEhJU19JU19USEVfU0VDUkVUX0tFWQ==
```

Do not commit this manifest to your source control, as it contains unencrypted sensitive data. The values such as `ACCESS_KEY` and `SECRET_KEY` are only base64-encoded and can be easily decoded. Instead, use `kubeseal` to generate a `SealedSecret`, which is the resource that should be committed to the repository:

```shell
kubeseal --controller-namespace sealed-secrets --format yaml < secret.yaml > sealed-secret.yaml
```

Using the public key from the controller in the *sealed-secrets* namespace, the tool encrypts all sensitive values and produces a new manifest in YAML format. The result is written to **sealed-secret.yaml**, which contains a `SealedSecret` resource with encrypted data that can be safely stored (in git) and applied to the cluster:

```yaml title='sealed-secret.yaml'
apiVersion: bitnami.com/v1alpha1
kind: SealedSecret
metadata:
  name: opentelekomcloud-aksk
  namespace: default
spec:
  encryptedData:
    ACCESS_KEY: AgBGrW63WuZ1sbjLDhGUIuk+z9wKiB2zsFT5cW6I5o5d9PXjdj2HmObjhAXsau8FwUXVGWP3ikSffaHF5gxFvaZ/Ms+Mmo7d2et/EKgeYb4uN8JgexDJOsXCBbhbjTpQeX2hp8DNJ5LsEIdvvkEHtZ8b1yEKw2PPUlI6hqN63eTZ3jPcZPgICxtca6A4DXjDXF8BFhKEdw4Aux5cGdAYSNqLds3Kkza4DPPNV25EdqV0I>
    SECRET_KEY: AgB+ap+YNXE4JjwpixFtwyCI1KVMk+tfbdw5SendASeQExYqPM1NSn7FpE8PFxl/AAhh3flM4/Ti354+/wn/B+e2xG9B9hLZOlPzKX6JHtJoeE9O+DkZK5T5Hl7m0NP3EhfcxtDy/Utnbf+IfjujvswNusTiDLERgggjFQlTDheL2KcUwiI/h5ICVLw/EgbOj9GUlaViHh43SlrgZggqhhS874HuLzIfs2QGfzTRyHoRO>
  template:
    metadata:
      name: opentelekomcloud-aksk
      namespace: default
    type: Opaque
```

```shell
kubectl apply -f sealed-secrets.yaml
```
