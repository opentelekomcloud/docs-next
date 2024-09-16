---
id: overview
title: Overview
tags: [vpn]
---


# Overview

### Scenario

To meet service requirements, enterprise A needs to implement communication between its two on-premises data centers.

### Networking

[Figure 1](#figure-1) shows the networking where the VPN service is used to connect the two on-premises data centers.

<a id="figure-1"></a>

**Figure 1** Networking diagram  
![](/img/docs/best-practices/networking/virtual-private-network/connecting-multiple-on-premises-branch-networks-through-a-vpn-hub/en-us_image_0000001592878805.png)

### Solution Advantages

*   A VPN gateway on the cloud can function as a VPN hub to enable communication between on-premises branch sites. This eliminates the need to configure VPN connections between every two sites.
*   A VPN gateway provides two IP addresses to establish dual independent VPN connections with each customer gateway. If one VPN connection fails, traffic can be quickly switched to the other VPN connection, ensuring reliability.

### Limitations and Constraints

*   The local and customer subnets of the VPN gateway cannot be the same. That is, the VPC subnet and the data center subnet to be interconnected cannot be the same.
*   The IKE policy, IPsec policy, and PSK of the VPN gateway must be the same as those of the customer gateway.
*   The local and remote interface address configurations on the VPN gateway and customer gateway are reversed.
*   The security groups associated with ECSs in the VPC permit access from and to the on-premises data center.
