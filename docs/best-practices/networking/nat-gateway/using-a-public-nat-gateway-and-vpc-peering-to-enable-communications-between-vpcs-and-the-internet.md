---
id: using-a-public-nat-gateway-and-vpc-peering-to-enable-communications-between-vpcs-and-the-internet
title: Using a Public NAT Gateway and VPC Peering to Enable Communications Between VPCs and the Internet
tags: [nat]
---

# Using a Public NAT Gateway and VPC Peering to Enable Communications Between VPCs and the Internet

#### Scenarios

VPC A and VPC B are in the same region. A public NAT gateway is configured for subnet A in VPC A and you can add SNAT and DNAT rules for Internet connectivity. Subnet B connects to subnet A through a VPC peering connection and uses the public NAT gateway of subnet A to communicate with the Internet.

#### Solution Advantages

Only one public NAT gateway needs to be configured. Servers in the two VPCs can share the same public NAT gateway to communicate with the Internet, saving gateway resources.

#### Typical Topology

The CIDR block of VPC A is 192.168.0.0/16 and that of subnet A is 192.168.1.0/24.

The CIDR block of VPC B is 192.168.0.0/16 and that of subnet B is 192.168.2.0/24.

Implementation methods:

1.  A VPC peering connection is used to connect subnet A in VPC A to subnet B in VPC B.
2.  A public NAT gateway is created in VPC A, and subnet B can use the public NAT gateway to communicate the Internet.
    
    ![**Figure 1** Network topology](/img/docs/best-practices/networking/nat-gateway/en-us_image_0000001089261095.png)
    

#### Prerequisites

*   If VPCs connected by a VPC peering connection have overlapping CIDR blocks, the connection can only enable communications between specific (non-overlapping) subnets in the VPCs.
*   All subnets of the two VPCs do not overlap with each other. For details, see [VPC Peering Connection Usage Examples](https://docs.otc.t-systems.com/virtual-private-cloud/umn/vpc_peering_connection/vpc_peering_connection_usage_examples.html).

#### Procedure

1.  Create VPC A, VPC B, subnet A, and subnet B.
    
    For detailed operations, see [Creating a VPC](https://docs.otc.t-systems.com/virtual-private-cloud/umn/vpc_and_subnet/vpc/creating_a_vpc.html).
    
2.  Create a VPC peering connection.
    
    Create a VPC peering connection between subnet A and subnet B. For detailed operations, see [Creating a VPC Peering Connection with Another VPC in Your Account](https://docs.otc.t-systems.com/virtual-private-cloud/umn/vpc_peering_connection/creating_a_vpc_peering_connection_with_another_vpc_in_your_account.html).
    
    The local VPC is VPC A, and the peer VPC is VPC B.
    
    Add a route in the route table of VPC B. Set **Destination** to **0.0.0.0/0** and **Next Hop** to the created VPC peering connection between VPC A and VPC B.
    
3.  Create a public NAT gateway.
    
    Create a public NAT gateway with **VPC** set to VPC A. For details about how to configure other parameters, see [Creating a Public NAT Gateway](https://docs.otc.t-systems.com/nat-gateway/umn/managing_nat_gateways/creating_a_public_nat_gateway.html).
    
4.  Add an SNAT rule.
    1.  Select **VPC** for **Scenario** and subnet A for **Subnet**. For more details, see [Adding an SNAT Rule](https://docs.otc.t-systems.com/nat-gateway/umn/managing_snat_rules/adding_an_snat_rule.html).
    2.  Add an SNAT rule for subnet B. Set **Scenario** to **Direct Connect/Cloud Connect** and enter the CIDR block of subnet B.
5.  Add a DNAT rule.
    1.  Add a DNAT rule for subnet A. Select **VPC** for **Scenario** and enter an IP address of a server in subnet A for **Private IP Address**. For more details, see [Adding a DNAT Rule](https://docs.otc.t-systems.com/nat-gateway/umn/managing_dnat_rules/adding_a_dnat_rule.html).
    2.  Add a DNAT rule for subnet B. Set **Scenario** to **Direct Connect/Cloud Connect** and enter an IP address of a server in subnet B for **Private IP Address**.

#### Verification

After the configuration is complete, test the network connectivity.

Log in to a server in subnet B and ping a public IP address.

![](/img/docs/best-practices/networking/nat-gateway/en-us_image_0000001092787311.png)

Log in to a server that can access the Internet and is not deployed in VPC A or VPC B. Use **curl** to check whether the server can communicate with subnet B via the EIP associated with the DNAT rule configured for subnet B.

![](/img/docs/best-practices/networking/nat-gateway/en-us_image_0000001093306041.png)