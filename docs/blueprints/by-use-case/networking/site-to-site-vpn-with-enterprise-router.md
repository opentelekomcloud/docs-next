---
id: site-to-site-vpn-from-open-telekom-cloud-to-aws-using-enterprise-router-and-bgp-routing
title: Establish a Site-to-Site VPN from Open Telekom Cloud to AWS using Enterprise router and BGP routing
tags: [vpc, vpn, enterprise-router,bgp,aws]
---

# Establish a Site-to-Site VPN from Open Telekom Cloud to AWS using Enterprise router and BGP routing

## Overview
This article shows the process of establishing a site-to-site Virtual Private Network (VPN) between Open Telekom Cloud and Amazon Web Services (AWS) using BGP routing for dynamic and efficient network connectivity. The setup is designed to provide high availability, redundancy, and security features essential for enterprise environments where data integrity and seamless communication are paramount.

![image](/img/docs/blueprints/by-use-case/networking/site-to-site-vpn-with-enterprise-router/diagram.png)

## Setup Description
This setup connects different Virtual Private Clouds (VPCs) in Open Telekom Cloud to a specified VPC in AWS. 

- **Establishment of VPN Tunnels:** Four VPN tunnels are created between Open Telekom Cloud and AWS, each configured with distinct peer IP addresses and pre-shared keys. These tunnels serve as the secure channels through which data is transmitted between the two networks.
- **BGP Routing Protocol:** Once the customer gateways and VPN tunnels are established, BGP sessions are initiated on both ends using the respective ASNs (Autonomous System Numbers). This allows for dynamic routing of network traffic across the connection, optimizing path selection based on performance metrics such as latency and bandwidth utilization.
- **High Availability and Failover:** To maintain high availability and ensure minimal disruption in case one or more tunnels fail Four VPN tunnels are created between Open Telekom Cloud and AWS.

## Concepts and Terminology
- **VPN Gateway** is a managed gateway that makes it easy to set up and scale Virtual Private Network (VPN). It functions as a target network gateway through which all traffic destined for the connected network will pass.
- **Customer Gateway** is a physical or software device that represents your side of a network connection. A Customer Gateway is configured with an external IP address and as BGP ASN both are provided by the other side of the connection (e.g. AWS if you are creating it on Open Telekom Cloud). This provides the necessary information to the VPN connection.
- **VPN Connection** refers to the network connection that is established between two networks over an encrypted link facilitated by a VPN gateway and customer gateway. It includes all configurations related to encryption (using AES 256-bit encryption as standard), authentication mechanisms, and monitoring tools that track health status and performance metrics.

:::tip Tip
You can find more information about Site-to-Site VPN and its related components here:
 - [What is AWS Site-to-Site VPN?
](https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html)
 - [How AWS Site-to-Site VPN works
](https://docs.aws.amazon.com/vpn/latest/s2svpn/what-is-vpn-connections.html).
:::

## Prerequisite for OTC Side: Enterprise Router Configuration

Before setting up VPN tunnels between OpenTelekom Cloud and AWS, you must configure an enterprise router on the OTC side to be able to bind the VPN Gateway to it and also manage virtual private cloud (VPC) traffic. This section will guide you through creating a basic configuration of such a router and attaching necessary VPCs for VPN connectivity.

:::note
If you already have an enterprise router set up and the VPC which you want to share with the AWS side is attached to it, then skip this section.
:::

:::warning
Make sure that the ASN of your enterprise router matches with the ASN of the VPN gateway which is attached to the router.
:::

### Creating an Enterprise Router on OTC Side
1. Log in to the OpenTelekom Management Console.
2. Navigate to **Network -> Enterprise Router**.
3. Click on **Create Enterprise Router** and create a new router with the following details:
   - **Name:** Enter a name for your enterprise router.
   - **ASN:** Specify the Autonomous System Number (ASN) of your enterprise router.
   - **Region:** Choose the region where you want to create the router.
   - **Availability Zone:** Select the availability zone(s) where you want to place your enterprise router. For high availability and redundancy, select multiple availability zones.
4. The **Default Route Table Association** and **Default Route Table Propagation** should be set to *Enabled*.
5. Click on **Create Now** to finalize the creation process.

![image](/img/docs/blueprints/by-use-case/networking/site-to-site-vpn-with-enterprise-router/create-enterprise-router.png)

### Attaching a VPC to the Enterprise
1. Navigate to **Network -> Enterprise Router**.
2. Select your enterprise router from the list of available routers.
3. Go to the **Attachments** tab and click on **Create Attachment**.
4. Choose the VPC you want to attach to your enterprise router.
5. Ensure that the **Auto Add Routes** option is checked; otherwise, the routes will not be automatically added to the VPC's default route table, and one has to do it manually.
6. Click on **Create Now** to finalize the attachment process.

![image](/img/docs/blueprints/by-use-case/networking/site-to-site-vpn-with-enterprise-router/create-attachment.png)

## Configuring VPN Gateways
### On OpenTelekom Cloud:
1. Navigate to **Network -> Virtual Private Network**.
2. In the right panel of the page, expand **Virtual Private Network**, click on **Enterprise – VPN Gateways**, and then click on **Create VPN Gateway** to create a new VPN gateway with the following details:
   - **Name:** Enter a name for your VPN gateway.
   - **Network Type:** Should be *Public Network*.
   - **Associate With:** Select *Enterprise Router* and choose the enterprise router you want to attach to this VPN gateway.
   - **Access VPC** and **Access Subnet** specify the network subnet where you want to attach this VPN gateway.
   - **BGP ASN:** Specify the Autonomous System Number (ASN) of your enterprise router.
3. Configure the rest of the fields as needed, and click on **Create Now**.

![image](/img/docs/blueprints/by-use-case/networking/site-to-site-vpn-with-enterprise-router/create-vpn-gw.png)

:::warning
Make sure that the ASN of VPN gateway matches with the ASN of the enterprise router which is associated with this VPN gateway; otherwise, BGP routing will not work.
:::

5. Once the VPN gateway has been created, you can make the respective customer gateways on the AWS side with the provided **Gateway IP Address**:

![image](/img/docs/blueprints/by-use-case/networking/site-to-site-vpn-with-enterprise-router/vpngw-list.png)


### On AWS:
1. Log in to your AWS account and navigate to **VPC -> Virtual Private Network (VPN) -> Virtual Private Gateways**.
2. Click on **Create virtual private gateway** and create a new VPN gateway with the following details:
  - **Name:** name of your VPN gateway
  - **Autonomous System Number (ASN):** Configure this as Custom ASN. The value should be different than what is configured in Open Telekom Cloud (e.g., 65000).
3. Click on **Create virtual private gateway**.

![image](/img/docs/blueprints/by-use-case/networking/site-to-site-vpn-with-enterprise-router/create-vgw-aws.png)

4. Now select the VPN gateway you just created and click on **Actions -> Attach to VPC**.
5. Attach the VPN gateway to your target VPC and click on **Attach to VPC**.

![image](/img/docs/blueprints/by-use-case/networking/site-to-site-vpn-with-enterprise-router/attach-vpc-aws.png)


## Configuring Customer Gateways
### On AWS:
1. Navigate to **VPC -> Virtual Private Network (VPN) -> Customer Gateways**.
2. Click on **Create customer gateway** and for each Public **Gateway IP Address** generated for the created **VPN Gateway** in Open Telekom Cloud, create a **Customer Gateway** with the following details:
  - **Name:** name of your customer gateway
  - **BGP ASN:** The BGP ASN configured in VPN Gateway in Open Telekom Cloud
  - **IP Address:** The Public IP address of the VPN Gateway in Open Telekom Cloud

![image](/img/docs/blueprints/by-use-case/networking/site-to-site-vpn-with-enterprise-router/create-cgw-aws.png)

### On Open Telekom Cloud:
:::note
This step should be done after that the **Site-to-Site VPN connections** in AWS are created (visit [Configuring VPN Connections on AWS](#aws-vpn-connections).
:::

1. Navigate to **Network -> Virtual Private Network**.
2. In the right panel of the page, expand **Virtual Private Network**, click on **Enterprise – VPN Gateways**, and then click on **Create Customer Gateway**, and create a customer gateway for each tunnel Public IP address generated for the **Site-to-Site VPN Connections** in AWS.
   - **Name:** Enter a name for your customer gateway.
   - **Routing Mode:** Should be *Dynamic (BGP)*.
   - **BGP ASN:** Specify the Autonomous System Number (ASN) of VPN Gateway in AWS.
   - **Gateway IP Address:** Enter the Public IP address of the tunnels created for the **Site-to-Site VPN Connections** in AWS.
3. Click on **Create Now**.

![image](/img/docs/blueprints/by-use-case/networking/site-to-site-vpn-with-enterprise-router/create-cgw.png)


## Configuring VPN Connections
### On AWS: {#aws-vpn-connections}
1. Navigate to **VPC -> Virtual Private Network (VPN) -> Site-to-Site VPN connections**.
2. Click on **Create VPN connection** and for each **Customer Gateway** created before in AWS, create a **VPN Connection** with the following details:
  - **Name:** name of the connection
  - **Target gateway type:** should be *Virtual private gateway*
  - **Virtual private gateway:** Select the **Virtual Private Gateway** created before.
  - **Customer gateway ID:** Choose *Existing* and select the **Customer Gateway** created before.
  - **Routing options:** should be *Dynamic (requires BGP)*
  - Let the **Local IPv4 network CIDR** and **Remote IPv4 network CIDR** be configured automatically.
3. Configure Tunnel options for each tunnel as required, but to make sure that the connections get established after an interruption, apply the following for each tunnel:
  - **DPD timeout action:** should be *Restart*
  - **Startup action:** should be *Start*

![image](/img/docs/blueprints/by-use-case/networking/site-to-site-vpn-with-enterprise-router/tunnel-config-aws.png)

4. Click **Create vpn connection**.
5. Click on each **VPN connection** and download the configuration, with **Vendor** is set to *Generic*.


### On Open Telekom Cloud:
1. Navigate to **Network -> Virtual Private Network**.
2. In the right panel of the page, expand **Virtual Private Network**, click on **Enterprise – VPN Connection**, and then click on **Create VPN Connection**, and create a VPN Connection for each **customer gateway** created in OpenTelekom Cloud. Use the downloaded configuration file from last step to configure the VPN connections:
  - **Name:** name of the connection
  - **VPN Gateway:** select the VPN Gateway created before.
  - **Gateway IP Address:** Enter value of the *Outside IP Addresses -> Customer Gateway* field from the configuration file.
  - **Customer Gateway:** Should match value of the *Outside IP Addresses -> Virtual Private Gateway* field from the configuration file.
  - **VPN Type:** should be *BGP routing*
3. For **Interface IP Address Assignment** select *Manually specify* and configure the IP address as follows:
  - **Local Tunnel Interface Address:** Enter value of the *Inside IP Addresses -> Customer Gateway* field from the configuration file.
  - **Customer Tunnel Interface Address:** Enter value of the *Inside IP Addresses -> Virtual Private Gateway* field from the configuration file.
4. Configure **PSK** and **Policy Settings** based on the downloaded configuration file.
5. Click on **Create Now**.

### Monitoring the connections
After a few minutes, you should be able to see connections established and their status should be normal on both sides.

#### On Open Telekom Cloud 
![image](/img/docs/blueprints/by-use-case/networking/site-to-site-vpn-with-enterprise-router/vpn-connection-list.png)

#### On AWS
![image](/img/docs/blueprints/by-use-case/networking/site-to-site-vpn-with-enterprise-router/vpn-connection-list-aws.png)

:::note
Note that in detail we see **0 BGP routes** are propagated into the VPC Route Tables. That's because we have to enable **BGP propagation** on the routing table associated with the vpc on the AWS side.
:::

## Enable BGP Propagation
### On AWS 
1. Navigate to **VPC** and select your VPC which is associated with the VPN Gateway created earlier.
2. Click on the routing table associated with this VPC to view its properties.
3. Select **Route propagation** tab and click **Edit Route Propagation** button.
4. Check the **Propagation** to be *Enabled* checkbox, then click on **Save** button to save changes.

![image](/img/docs/blueprints/by-use-case/networking/site-to-site-vpn-with-enterprise-router/bgp-route-aws.png)

3. Select **Routes** tab and in the table you can see the propagated routes.

![image](/img/docs/blueprints/by-use-case/networking/site-to-site-vpn-with-enterprise-router/bgp-route-pro-aws.png)


### On Open Telekom Cloud 
1. Navigate to **Network -> Enterprise Router** and click on **Manage Route Table** of the router you created.
2. Select **Route Tables** tab and select the default route table then select the **Routes** tab.
3. In the table you can see the propagated routes.

![image](/img/docs/blueprints/by-use-case/networking/site-to-site-vpn-with-enterprise-router/bgp-route.png)



## Verification of Connection Using Pre-Configured VMs
To verify the site-to-site VPN connection, you'll need to create two Virtual Machines (VMs) in each region. These VMs should be connected via the site-to-site VPN tunnel. The purpose of creating these VMs is to test connectivity across the VPN tunnel by attempting to ping one endpoint from the other side. This step ensures that your configuration and setup are correct, and you can successfully transmit data between your connected networks.

#### VM Creation
1. **Create VMs**: In each cloud provider, create a VM within the same VPC where the VPN Gateway is attached to or the VPC that is attached to the enterprise router depending on the cloud provider.
2. **Access the VM**: Get access to the terminal of your newly created VM.

### Verifying Connectivity
Once you've created and configured both sets of VMs:
1. **Attempt Ping from AWS to OTC**: From one of the AWS-side VMs, try to ping the internal IP address of the OTC-side VM using the `ping` command.
2. **Attempt Ping from OTC to AWS**: Similarly, from one of the OTC-side VM, attempt to ping the public IP address of the AWS-side VM.

#### AWS-side VM
![image](/img/docs/blueprints/by-use-case/networking/site-to-site-vpn-with-enterprise-router/ping-aws.png)

#### Open Telekom Cloud-side VM
![image](/img/docs/blueprints/by-use-case/networking/site-to-site-vpn-with-enterprise-router/ping-otc.png)

By successfully pinging between these two endpoints, you'll confirm that your site-to-site VPN connection is operational and functioning as expected.

