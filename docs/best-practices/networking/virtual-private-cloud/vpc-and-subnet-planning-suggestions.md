---
id: vpc-and-subnet-planning-suggestions
title: VPC and Subnet Planning Suggestions
tags: [vpc]
---

# VPC and Subnet Planning Suggestions

Before creating your VPCs, determine how many VPCs, the number of
subnets, and what IP address ranges or connectivity options you will
need.

- [VPC and Subnet Planning Suggestions](#vpc-and-subnet-planning-suggestions)
  - [How Do I Determine How Many VPCs I Need?](#how-do-i-determine-how-many-vpcs-i-need)
      - [One VPC](#one-vpc)
      - [Multiple VPCs](#multiple-vpcs)
  - [How Do I Plan Subnets?](#how-do-i-plan-subnets)
  - [How Do I Plan Routing Policies?](#how-do-i-plan-routing-policies)
  - [How Do I Connect to an On-Premises Data Center?](#how-do-i-connect-to-an-on-premises-data-center)
  - [How Do I Access the Internet?](#how-do-i-access-the-internet)
    - [Use EIPs to enable a small number of ECSs to access the Internet](#use-eips-to-enable-a-small-number-of-ecss-to-access-the-internet)
    - [Use a NAT gateway to enable a large number of ECSs to access the Internet](#use-a-nat-gateway-to-enable-a-large-number-of-ecss-to-access-the-internet)
    - [Use ELB to access the Internet If there are a large number of concurrent requests](#use-elb-to-access-the-internet-if-there-are-a-large-number-of-concurrent-requests)
  - [Additional Resources](#additional-resources)

## How Do I Determine How Many VPCs I Need?

VPCs are region-specific. By default, networks in VPCs in different
regions or even in the same region are not connected.

#### One VPC

If your services do not require network isolation, a single VPC
should be enough.

#### Multiple VPCs

If you have multiple service systems in a region and each service system
requires an isolated network, you can create a separate VPC for each
service system.

If you require network connectivity between separate VPCs in the same
account or in different accounts, you can use VPC peering connections or
Cloud Connect.

:::tip
If two VPCs are in the same region, use a [VPC peering
connection](https://docs.otc.t-systems.com/virtual-private-cloud/umn/vpc_peering_connection/vpc_peering_connection_overview.html).
:::

:::important
By default, you can create a **maximum of five VPCs in each region**. If
this cannot meet your service requirements, request a quota increase.
For details, see [How Do I Apply for a Higher
Quota?](https://docs.otc.t-systems.com/virtual-private-cloud/umn/faq/general_questions/what_is_a_quota.html)
:::

The following table lists the private CIDR blocks that you can specify
when creating a VPC. Consider the following when selecting a VPC CIDR
block:

- Number of IP addresses: Reserve sufficient IP addresses in case of
    business growth.
- IP address range: Avoid IP address conflicts if you need to connect
    a VPC to an on-premises data center or connect two VPCs.


| VPC CIDR Block  Addresses |    IP Address Range        |      Maximum Number IP         |                                                                  
| ------------------- |-----------------------------| ---------------------------- |
| 10.0.0.0/8-24     |  10.0.0.0-10.255.255.255    |   2\^24-2=16777214             |
| 172.16.0.0/12-24 |   172.16.0.0-172.31.255.255  |   2\^20-2=1048574              |
| 192.168.0.0/16-24 |  192.168.0.0-192.168.255.255  | 2\^16-2=65534                |

  : **Table 1** VPC CIDR blocks

## How Do I Plan Subnets?

A subnet is a unique CIDR block with a range of IP addresses in a VPC.
All resources in a VPC must be deployed on subnets.

- By default, all instances in different subnets of the same VPC can
    communicate with each other and the subnets can be located in
    different AZs. For example, VPC-A has subnet A01 in AZ A and subnet
    A02 in AZ B. Subnet A01 and subnet B01 can communicate with each
    other by default.

- After a subnet is created, its CIDR block cannot be modified.
    Subnets in the same VPC cannot overlap.

    When you create a VPC, a default subnet will be created together. If
    you need more subnets, see [Creating a Subnet for the
    VPC](https://docs.otc.t-systems.com/virtual-private-cloud/umn/vpc_and_subnet/subnet/creating_a_subnet_for_the_vpc.html).

    A subnet mask can be between the netmask of its VPC CIDR block and
    /28 netmask. If a VPC CIDR block is 10.0.0.0/16, its subnet mask can
    between 16 to 28.

    For example, if the CIDR block of VPC-A is 10.0.0.0/16, you can
    specify 10.0.0.0/24 for subnet A01, 10.0.1.0/24 for subnet A02, and
    10.0.3.0/24 for subnet A03.

    :::important
    By default, you can create a **maximum of 100 subnets in each region**.
    If this cannot meet your service requirements, request a quota
    increase by referring to [How Do I Apply for a Higher
    Quota?](https://docs.otc.t-systems.com/virtual-private-cloud/umn/faq/general_questions/what_is_a_quota.html)
    :::

When planning subnets, consider the following:

- You create different subnets for different modules in a VPC. For
    example, in VPC-A, you can create subnet A01 for web services,
    subnet A02 for management services, and subnet A03 for data
    services. You can leverage network ACLs to control access to each
    subnet.
- If your VPC needs to communicate with an on-premises data center
    through VPN or Direct Connect, ensure that the VPC subnet and the
    CIDR block used for communication in the data center do not overlap.

## How Do I Plan Routing Policies?

When you create a VPC, the system automatically generates a default
route table for the VPC. If you create a subnet in the VPC, the subnet
automatically associates with the default route table. A route table
contains a set of routes that are used to determine where network
traffic from your subnets in a VPC is directed. The default route table
ensures that subnets in a VPC can communicate with each other.

If you do not want to use the default route table, you can now create a
custom route table and associate it with the subnets. The custom route
table associated with a subnet affects only the outbound traffic. The
default route table controls the inbound traffic.

You can add routes to default and custom route tables and configure the
destination, next hop type, and next hop in the routes to determine
where network traffic is directed. Routes are classified into system
routes and custom routes.

- **System routes**: Routes that are automatically added by the system and
    cannot be modified or deleted. System routes allow instances in a
    VPC to communicate with each other.

- **Custom routes**: Routes that can be modified and deleted. The
    destination of a custom route cannot overlap with that of a system
    route.

    :::caution
    You cannot add two routes with the same destination to a VPC route
    table even if their next hop types are different, because the
    destination determines the route priority. According to the longest
    match routing rule, the destination with a higher matching degree is
    preferentially selected for packet forwarding.
    :::

## How Do I Connect to an On-Premises Data Center?

If you require interconnection between a VPC and an on-premises data
center, ensure that the VPC does not have an overlapping IP address
range with the on-premises data center to be connected.

As shown in below, you have VPC 1 in region A and VPC 2 and VPC 3 in region B.
To connect to an on-premises data center, they can use a VPN, as VPC 1
does in Region A; or a Direct Connect connection, as VPC 2 does in
Region B. VPC 2 connects to the data center through a Direct Connect
connection, but to connect to another VPC in that region, like VPC 3, a
VPC peering connection must be established.

![**Figure 1** Connections to on-premises data
centers](/img/docs/best-practices/networking/virtual-private-cloud/en-us_image_0287297889.png)

When planning CIDR blocks for VPC 1, VPC 2, and VPC 3:

- The CIDR block of VPC 1 cannot overlap with the CIDR block of the
    on-premises data center in Region A.
- The CIDR block of VPC 2 cannot overlap with the CIDR block of the
    on-premises data center in Region B.
- The CIDR blocks of VPC 2 and VPC 3 cannot overlap.

## How Do I Access the Internet?

### Use EIPs to enable a small number of ECSs to access the Internet

When only a few ECSs need to access the Internet, you can bind the EIPs
to the ECSs. This will provide them with Internet access. You can also
dynamically unbind the EIPs from the ECSs and bind them to NAT gateways
and load balancers instead, which will also provide Internet access. The
process is not complicated.

For more information about EIP, see [EIP
Overview](https://docs.otc.t-systems.com/elastic-ip/umn/service_overview/index.html).

### Use a NAT gateway to enable a large number of ECSs to access the Internet

When a large number of ECSs need to access the Internet, the public
cloud provides NAT gateways for your ECSs. With NAT gateways, you do not
need to assign an EIP to each ECS. NAT gateways reduce costs as you do
not need so many EIPs. NAT gateways offer both source network address
translation (SNAT) and destination network address translation (DNAT).
SNAT allows multiple ECSs in the same VPC to share one or more EIPs to
access the Internet. SNAT prevents the EIPs of ECSs from being exposed
to the Internet. DNAT can implement port-level data forwarding. It maps
EIP ports to ECS ports so that the ECSs in a VPC can share the same EIP
and bandwidth to provide Internet-accessible services.

For more information, see [NAT Gateway User
Guide](https://docs.otc.t-systems.com/nat-gateway/umn/).

### Use ELB to access the Internet If there are a large number of concurrent requests

In high-concurrency scenarios, such as e-commerce, you can use load
balancers provided by the ELB service to evenly distribute incoming
traffic across multiple ECSs, allowing a large number of users to
concurrently access your business system or application. ELB is deployed
in the cluster mode. It provides fault tolerance for your applications
by automatically balancing traffic across multiple AZs. You can also
take advantage of deep integration with Auto Scaling (AS), which enables
automatic scaling based on service traffic and ensures service stability
and reliability.

For more information, see [Elastic Load Balance User
Guide](https://docs.otc.t-systems.com/elastic-load-balancing/umn/).

## Additional Resources

:::info See Also

- [Application Scenarios](https://docs.otc.t-systems.com/virtual-private-cloud/umn/service_overview/application_scenarios.html)
- [Private Network Access](https://support.huaweicloud.com/intl/en-us/bestpractice-vpc/bestpractice_0007.html)
- [Public Network Access](https://support.huaweicloud.com/intl/en-us/bestpractice-vpc/bestpractice_0004.html)

:::
