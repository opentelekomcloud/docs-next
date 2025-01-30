---
id: securely-expose-remote-ollama-endpoints-to-your-developmentd-machine
title: Securely Expose Remote Ollama Endpoints to your Development Machine
tags: [ollama, vpn]
---

# Securely Expose Remote Ollama Endpoints to your Development Machine

Exposing Ollama endpoints directly from your cloud environment to your local development machine can be highly beneficial, especially when it comes to optimizing the use of expensive resources like GPUs and integrating them with local cost-effective development hardware.

The benefits of integrating remote Ollama endpoints to local development workflows are multi-faceted but not limited to:

- **Enhanced Development Workflow** : By securely exposing Ollama endpoints locally, you can streamline the development process. This setup allows you to test changes in real-time without deploying them in a public or external environment, accelerating iteration and debugging.
- **Data Privacy and Security** : Keeping data within your local machine minimizes exposure to potential security vulnerabilities associated with cloud environments. By ensuring secure access protocols (such as HTTPS), you protect sensitive information from unauthorized access.
- **Cost Efficiency** : Local testing reduces reliance on cloud resources for every test or development cycle, which can lead to cost savings, especially in scenarios requiring frequent updates and tests.
- **Customized Environment Testing** : Exposing endpoints locally allows you to create a controlled environment that mirrors your production setup. This capability ensures that any AI model behavior is consistent with expectations before deploying broadly.
- **Latency Reduction** : By running services on your local machine, you can significantly reduce latency compared to accessing cloud-hosted endpoints, which enhances the speed and responsiveness of development tools and testing scripts.
- **Compliance and Regulation Adherence** : Certain industries have stringent compliance requirements for data processing and storage. Running AI models locally helps adhere to these regulations by ensuring that data does not leave your secure environment without proper safeguards.
  
By securely exposing Ollama endpoints, you can achieve a balance between operational efficiency, security, and compliance while facilitating a robust development process for AI models on your machine.

:::caution
Be aware that this Blueprint can incur additional costs, concerning ingress and egress data.
:::

## Prerequisites

For this Blueprint, we are going to need:

1. an **ECS Server (Ubuntu 22.04)**: a GPU-accelerated instance (8 vCPUs, 32 GiB) `pi2.2xlarge.4` will suffice.
2. a **Point-to-Site VPN connection**: We need to establish a connection between our development machine and the VPC hosting the Ollama VM.
3. an **Ollama** instance: Ollama must be installed on the ECS server above.

:::important
If you don't currently have an Ollama setup, please refer to the official guide for both manual and automated installation options available at this [link](https://github.com/ollama/ollama/blob/main/docs/linux.md).

Make sure you [**add Ollama as a startup service**](https://github.com/ollama/ollama/blob/main/docs/linux.md#adding-ollama-as-a-startup-service-recommended).
:::

## Creating a Point-to-Site VPN

Exposing an Ollama endpoint by assigning an Elastic IP (EIP) directly to a Virtual Machine or using Destination Network Address Translation (DNAT) through a NAT Gateway is considered dangerous due to several key concerns. First, assigning an EIP makes the VM accessible from the internet, significantly increasing its exposure and risk of unauthorized access. This direct accessibility enlarges the attack surface, leaving it vulnerable to potential breaches.

Additionally, having such an endpoint exposed can make it a target for Distributed Denial of Service (DDoS) attacks aimed at overwhelming your service with excessive traffic, potentially causing downtime or degraded performance. Moreover, using DNAT via a NAT Gateway does not eliminate these risks entirely; it still requires meticulous configuration and management of security groups and firewall rules to ensure only legitimate traffic is allowed. Misconfigurations in this setup can easily lead to unintentional exposure.

From a compliance perspective, direct internet exposure might violate certain regulatory requirements that mandate strict data protection and access controls, depending on the industry or region.

On the other hand, using a Point-to-Site (P2S) VPN to connect to the VPC where the Ollama VM resides is often viewed as a secure solution and aligns with best practices for several reasons. A P2S VPN establishes an encrypted tunnel between your local machine(s) and the respective Open Telekom Cloud VPC, ensuring that transmitted data remains secure from eavesdropping.

Moreover, a P2S VPN provides flexibility for multiple users to securely connect from different locations without needing complex infrastructure changes. This approach also facilitates compliance with data protection regulations since access can be restricted to authorized users only and connections can be monitored and logged for auditing and incident response purposes.

You can find instruction on how to create and establish a P2S VPN connection here: [Establish a Point-to-Site VPN Connection between your Development Machine and a VPC](../networking/establish-a-p2s-vpn-connection-with-a-vpc.md).

## Changing Ollama's Listening Address

Let's inspect the network sockets associated with Ollama service:

```shell
sudo ss -tupln | grep ollama

tcp   LISTEN   0   4096   127.0.0.1:11434   0.0.0.0:*   users:(("ollama",pid=2728253,fd=3))
```

We instantly notice that although Ollama is bound to all available network interfaces (`0.0.0.0`) and listens on any port (`*`), in practice, it restricts incoming connections to `127.0.0.1:11434`. `127.0.0.1` is the loopback IP address (localhost), meaning **it's accessible only from the same machine**. The port `11434` is where connections should be made to communicate with Ollama. That will naturally prohibit us accessing the Ollama endpoint from our development machine, or any other machine for that matter. What we need to do is to instruct Ollama service to allow incoming connection to any (or even better to a specific interface). For that matter we need to:

1. Stop temporarily the Ollama service:

    ```shell
    sudo systemctl stop ollama
    ```

2. Change the systemd service unit for Ollama to accept incoming connections to all interfaces:

    ```shell
    sudo nano /etc/systemd/system/ollama.service
    ```

    and add to it an additionall environment variable: `OLLAMA_HOST=0.0.0.0:11434`

    ```shell
    [Unit]
    Description=Ollama Service
    After=network-online.target

    [Service]
    ExecStart=/usr/local/bin/ollama serve
    User=ollama
    Group=ollama
    Restart=always
    RestartSec=3
    Environment="PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/snap/bin"
    Environment="OLLAMA_HOST=0.0.0.0:11434"

    [Install]
    WantedBy=default.target
    ```

3. Reload systemd configuration files:

    ```shell
    sudo systemctl daemon-reload
    ```

4. Start the Ollama service on your system

    ```shell
    sudo systemctl start ollama
    ```

## Creating Security Group

1. Go to *Network Console* -> *Security Groups*, and click *Create Security Group*. Add two new **Inbound Rules**:
   - **Protocol**: `TCP`
   - **Port**: `11434`
   - **Source**: `192.168.10.0/24`

:::caution
Although we configured Ollama service to listen to any interface, we want to restrict access to the Ollama endpoint **only** to resources that reside inside the same VPC **and not to anyone that might potentially reach this VM**, `0.0.0.0/0`.

The VPC CIDR for this lab was `192.168.10.0/24`, this might differ in your environment given your individual configuration of the VPC and its Subnets so adjust the **Source** of the Inbound Rule accordingly.

After establishing the P2S VPN connection, your development machine will be technically a part of this VPC and will be allowed to access the Ollama endpoint.
:::

2. Add the new Security Group to the Security Groups of the ECS Server.

## Validation

Check connectivity from your development machine with cURL:

:::important

- Requires that you have already established the VPN connection.
- `192.168.10.183` is the private IP address assigned by the DHCP server of our VPC to the ECS Server that Ollama is installed on. Remember from the step before that the VPC CIDR for this lab was `192.168.10.0/24`, this might differ in your environment given your individual configuration of the VPC and its Subnets.

:::

```shell
curl http://192.168.10.183:11434/api/tags | jq
```

If you have already pulled some models, the response should look similar to this:

```json
{
  "models": [
    {
      "name": "nomic-embed-text:latest",
      "model": "nomic-embed-text:latest",
      "modified_at": "2025-01-20T23:46:07.861519801Z",
      "size": 274302450,
      "digest": "0a109f422b47e3a30ba2b10eca18548e944e8a23073ee3f3e947efcf3c45e59f",
      "details": {
        "parent_model": "",
        "format": "gguf",
        "family": "nomic-bert",
        "families": [
          "nomic-bert"
        ],
        "parameter_size": "137M",
        "quantization_level": "F16"
      }
    },
    {
      "name": "llama3.3:latest",
      "model": "llama3.3:latest",
      "modified_at": "2025-01-17T09:17:50.765928869Z",
      "size": 42520413916,
      "digest": "a6eb4748fd2990ad2952b2335a95a7f952d1a06119a0aa6a2df6cd052a93a3fa",
      "details": {
        "parent_model": "",
        "format": "gguf",
        "family": "llama",
        "families": [
          "llama"
        ],
        "parameter_size": "70.6B",
        "quantization_level": "Q4_K_M"
      }
    },
    {
      "name": "phi4:latest",
      "model": "phi4:latest",
      "modified_at": "2025-01-14T09:16:25.911933283Z",
      "size": 9053116391,
      "digest": "ac896e5b8b34a1f4efa7b14d7520725140d5512484457fab45d2a4ea14c69dba",
      "details": {
        "parent_model": "",
        "format": "gguf",
        "family": "phi3",
        "families": [
          "phi3"
        ],
        "parameter_size": "14.7B",
        "quantization_level": "Q4_K_M"
      }
    },
    {
      "name": "deepseek-coder-v2:latest",
      "model": "deepseek-coder-v2:latest",
      "modified_at": "2024-11-09T08:07:18.67583696Z",
      "size": 8905126121,
      "digest": "63fb193b3a9b4322a18e8c6b250ca2e70a5ff531e962dbf95ba089b2566f2fa5",
      "details": {
        "parent_model": "",
        "format": "gguf",
        "family": "deepseek2",
        "families": [
          "deepseek2"
        ],
        "parameter_size": "15.7B",
        "quantization_level": "Q4_0"
      }
    },
  ]
}
```
