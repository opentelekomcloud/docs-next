---
id: establish-a-p2s-vpn-connection-with-a-vpc
title: Establish a Point-to-Site VPN Connection between your Development Machine and a VPC
tags: [vpc, vpn, openvpn]
---

# Establish a Point-to-Site VPN Connection between your Development Machine and a VPC

Establishing a point-to-site (P2S) VPN connection between your development machine and a Virtual Private Cloud (VPC) offers several advantages for developers. This setup allows you to securely access resources within the VPC from your local environment as if they were part of your private network, without exposing them on the public internet.

One key reason to set up such a connection is to enhance security. By using a P2S VPN, all data exchanged between your development machine and the VPC travels through an encrypted tunnel, protecting sensitive information from potential interception. This secure pathway is crucial when developers working with proprietary or confidential projects that require robust protection measures. Additionally, this configuration provides convenience by enabling remote access to resources within the VPC without needing a dedicated on-premises server. Developers can work seamlessly across different locations while maintaining direct and private connectivity to their cloud environments. It also facilitates collaboration among team members who may be distributed geographically but need consistent access to shared development resources. Moreover, setting up a P2S VPN minimizes latency issues compared to accessing the VPC through public internet routes, ensuring smoother interactions with cloud-hosted applications or databases. This setup not only optimizes performance but also allows for more efficient debugging and testing of applications within their intended deployment environment. Overall, establishing this type of connection is an effective way to bolster security, improve accessibility, and streamline development workflows in a cloud-centric architecture.

## Prerequisites

Before we begin setting up a Point-to-Site (P2S) VPN connection between your development machine and an Open Telekom Cloud Virtual Private Cloud (VPC), we are going to need:

1. an **ECS Server (Ubuntu 22.04)**: A General-purpose (1 vCPUs, 2 GiB) `s3.medium.2` instance will suffice.
2. an **OpenVPN** server: On the ECS server, OpenVPN must be installed. OpenVPN serves as the backbone for setting up the P2S VPN by allowing secure encrypted communication between your development machine and the VPC.

## Creating an ECS Server

1. In *Open Telekom Cloud Console* -> *Elastic Cloud Server*, click *Create ECS*. Choose the **Flavor** and **Image** as depicted below and assign a `40GB` as the **System Disk** size.

![image](/img/docs/blueprints/by-use-case/networking/establish-a-p2s-vpn-connection-with-a-vpc/Screenshot_from_2025-01-24_08-26-41.png)

Click *Next: Configure Network*

2. Choose the VPC you want to establish a connection with, let OTC **Auto assign** an EIP to the ECS instance and set **Bandwidth Size** to `100Mbit/s`:

![image](/img/docs/blueprints/by-use-case/networking/establish-a-p2s-vpn-connection-with-a-vpc/Screenshot_from_2025-01-24_08-37-06.png)

3. Follow the rest of the wizard step till the end and wait until the ECS instance is provisioned.

4. Go to *Network Console* -> *Security Groups*, and click *Create Security Group*. Add two new **Inbound Rules**:
   * **Protocol**: `TCP`
   * **Port**: `22`
   * **Source**: `0.0.0.0/0`
  <br/> ---
   * **Protocol**: `ICMP`
   * **Port**: `all`
   * **Source**: `0.0.0.0/0`

5. Add the new Security Group to the Security Groups of the ECS Server

## Installing & Configuring an OpenVPN Server

1. Establish an SSH connection to the ECS server using its Elastic IP.
2. In order to install OpenVPN in an easy and streamlined fashion we are going to utilize the script provided by [openvpn-install](https://github.com/angristan/openvpn-install) project.

    Download the script and make it executable:

            ```shell
            curl -O https://raw.githubusercontent.com/angristan/openvpn-install/master/openvpn-install.sh
            chmod +x openvpn-install.sh
            ```
        
    Execute the script & follow the wizard:

            ```shell
            sudo ./openvpn-install.sh
            ```
    ![image](/img/docs/blueprints/by-use-case/networking/establish-a-p2s-vpn-connection-with-a-vpc/Screenshot_from_2025-01-24_08-59-07.png)

    :::important Make sure:

       1. you declare as IP address the EIP of the ECS Server, If you don't know the EIP either look it up in Open Telekom Cloud Console or simply run the following in the terminal:

            ```shell
            curl ifconfig.me
            ```

       2. write down the port you set OpenVPN to listen to (unless you left the default `1194`).
       3. choose `UDP` as the protocol
    :::

    Let the wizard create a client (that would be your development machine):

    ![image](/img/docs/blueprints/by-use-case/networking/establish-a-p2s-vpn-connection-with-a-vpc/Screenshot_from_2025-01-24_09-25-27.png)

    :::note
    You will find the configuration file for the client in **~/client_name.ovpn**. Copy that file to your development machine.
    :::

3. Go to *Network Console* -> *Security Groups*, and click *Create Security Group*. Add a new **Inbound Rule**:

   * **Protocol**: `UDP`
   * **Port**: `1194` (or the custom port you set OpenVPN to listen to during the wizard)
   * **Source**: `0.0.0.0/0`

4. Add the new Security Group to the Security Groups of the ECS Server

## Validating the OpenVPN Server

Let's inspect the network interfaces and their configuration with `ip a`:

![image](/img/docs/blueprints/by-use-case/networking/establish-a-p2s-vpn-connection-with-a-vpc/Screenshot_from_2025-01-24_12-09-29.png)

As you can observe we have a new tunnel interface, `tun0`, with IPv4 address `10.8.0.1/24` which is up and running.

Lastly let's list all listening TCP and UDP sockets associated with OpenVPN processes on this system, displaying their addresses, port numbers, and related process information by running the following command on the terminal:

```shell
sudo ss -tupln | grep openvpn

udp   UNCONN 0   0   0.0.0.0:1194   0.0.0.0:*   users:(("openvpn",pid=3431,fd=7))                       
```

That means we are good to go and configure our client.

## Installing & Configuring an OpenVPN Client

:::note
Within this Blueprint, we will demonstrate configuring an OpenVPN client specifically within a Linux/GNOME environment. Note that configuration methods using the terminal or setups for operating systems beyond this scope are not covered in this document.
:::

Go to *Settings* -> *Network* -> *VPN*, click the *add symbol* and then select *Import from file...*:

![image](/img/docs/blueprints/by-use-case/networking/establish-a-p2s-vpn-connection-with-a-vpc/Screenshot_from_2025-01-24_12-02-35.png)

and import the **client_name.ovpn** file we copied from the ECS Server in the previous step.

## Validating the OpenVPN Client

Establish the VPN connection and then inspect, on your development machine the network interfaces and their configuration with `ip a`:

![image](/img/docs/blueprints/by-use-case/networking/establish-a-p2s-vpn-connection-with-a-vpc/Screenshot_from_2025-01-24_12-22-20.png)

As you can observe we have a new tunnel interface, `tun0`, with IPv4 address `10.8.0.2/24` which is up and running. If you inquire for the public IP address of your development machine now, with `curl ifconfig.me`, you will notice it returns the EIP that is assigned to OpenVPN instance running on the ECS Server.

## Validating Connectivity

1. Ping `10.8.0.1` from your development machine; this test should succeed otherwise make sure you have allowed inbound ICMP traffic to your ECS Server.
2. Create, an additional ECS Server in the same VPC with the OpenVPN Server and allow (via a Security Group) inbound ICMP traffic. Ping the private IP address of the new ECS Server from your development machine. This test should succeed as well, otherwise make sure you have allowed inbound ICMP traffic to your ECS Server.

    :::tip
    e.g.: In our lab, the VPC has the following CIDR `192.168.10.0/24` and the new ECS Server got assigned the IP address `192.168.10.183` while
    the OpenVPN Server has been assigned the IP address `192.168.10.16`. In our case we are going to ping `192.168.10.183` from our development machine. Adjust accordingly to your VPC CIDR.
    :::
