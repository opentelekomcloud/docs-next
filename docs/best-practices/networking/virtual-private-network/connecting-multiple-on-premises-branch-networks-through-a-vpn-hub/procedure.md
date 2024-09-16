---
id: procedure
title: Procedure
tags: [vpn]
---

# Procedure

### Prerequisites

*   Cloud side
    *   A VPC has been created. For details about how to create a VPC, see [Creating a VPC](https://docs.otc.t-systems.com/virtual-private-cloud/umn/vpc_and_subnet/vpc/creating_a_vpc.html).
    *   Security group rules have been configured for the VPC, and ECSs can communicate with other devices on the cloud. For details about how to configure security group rules, see [Security Group Rules](https://docs.otc.t-systems.com/virtual-private-cloud/umn/access_control/security_group/managing_security_group_rules/adding_a_security_group_rule.html).
*   Data center side
    *   IPsec has been configured on the VPN devices in the two on-premises data centers. For details, see [Administrator Guide](https://docs.otc.t-systems.com/virtual-private-network/umn/administrator_guide/index.html).
    *   The remote subnets of the VPN device in on-premises data center 1 must contain the local subnet of the Open Telekom Cloud VPC and the subnet to be interconnected in on-premises data center 2. The remote subnets of the VPN device in on-premises data center 2 must contain the local subnet of the Open Telekom Cloud VPC and the subnet to be interconnected in on-premises data center 1.

### Procedure

Open Telekom Cloud VPNs support static routing mode, BGP routing mode, and policy-based mode. The following uses the static routing mode as an example.

1.  Configure a VPN gateway.
    1.  Choose **Virtual Private Network** > **Enterprise – VPN Gateways**, and click **Create VPN Gateway**.
    2.  Set parameters as prompted.
        
        [Table 1](#table-1) only describes the key parameters for creating a VPN gateway.
        
        <a id="table-1"></a>

        **Table 1** Description of VPN gateway parameters        
        | Parameter              | Description                                                                                                                                                      | Value                         |
        | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
        | Name                   | Name of a VPN gateway.                                                                                                                                           | vpngw-001                     |
        | Network Type           | Select **Public network**.                                                                                                                                       | Public network                |
        | Associate With         | Select **VPC**. If the VPN gateway is associated with an enterprise router, select **Enterprise Router**.                                                        | VPC                           |
        | VPC                    | Open Telekom Cloud VPC that the on-premises data centers need to access.                                                                                               | vpc-001(192.168.0.0/16)       |
        | Local Subnet           | VPC subnets that the on-premises data centers need to access.                                                                                                    | 192.168.0.0/24,192.168.1.0/24 |
        | Interconnection Subnet | This subnet is used for communication between the VPN gateway and VPC. Ensure that the selected interconnection subnet has four or more assignable IP addresses. | 192.168.2.0/24                |
        | BGP ASN                | BGP AS number.                                                                                                                                                   | 64512                         |
        | HA Mode                | Select **Active-active**.                                                                                                                                        | Active-active                 |
        | Active EIP             | EIP 1 used by the VPN gateway to access the on-premises data center.                                                                                             | 1.1.1.2                       |
        | Active EIP 2           | EIP 2 used by the VPN gateway to access the on-premises data center.                                                                                             | 2.2.2.2                       |

        
2.  Configure customer gateways.
    1.  Choose **Virtual Private Network** > **Enterprise – Customer Gateways**, and click **Create Customer Gateway**.
    2.  Set parameters as prompted.
        
        [Table 2](#table-2) only describes the key parameters for creating a customer gateway.
        
        <a id="table-2"></a>
        
        **Table 2** Description of customer gateway parameters

        | Parameter          | Description                                                                                                                                                                                                                        | Value   |
        | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
        | Name               | Name of a customer gateway.                                                                                                                                                                                                        | cgw-fw1 |
        | Routing Mode       | Select **Static**.                                                                                                                                                                                                                 | Static  |
        | Gateway IP Address | IP address used by the customer gateway in on-premises data center 1 to communicate with the Open Telekom Cloud VPN gateway. <br/> Ensure that UDP port 4500 is permitted on the customer gateway device in the on-premises data center. | 1.1.1.1 |


        
    3.  Repeat the preceding operations to configure the customer gateway (2.2.2.1) in on-premises data center 2.
3.  Configure VPN connections between the cloud side and on-premises data center 1.
    1.  Choose **Virtual Private Network** > **Enterprise – VPN Connections**, and click **Create VPN Connection**.
    2.  Set parameters for VPN connection 1 and click **Submit**.
        
        [Table 3](#table-3) only describes the key parameters for creating a VPN connection.
        
        <a id="table-3"></a>
        
        **Table 3** Description of VPN connection parameters

        | Parameter                         | Description                                                                                                                                                                                                                                                                                                     | Value            |
        | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
        | Name                              | Name of a VPN connection.                                                                                                                                                                                                                                                                                       | vpn-001          |
        | VPN Gateway                       | VPN gateway for which the VPN connection is created.                                                                                                                                                                                                                                                            | vpngw-001        |
        | Gateway IP Address                | Active EIP bound to the VPN gateway.                                                                                                                                                                                                                                                                            | 1.1.1.2          |
        | VPN Type                          | Select **Static routing**.                                                                                                                                                                                                                                                                                      | Static routing   |
        | Customer Gateway                  | Name of a customer gateway.                                                                                                                                                                                                                                                                                     | cgw-fw1          |
        | Customer Subnet                   | Subnet in on-premises data center 1 that needs to access the VPC on Open Telekom Cloud.  A customer subnet cannot be included in any local subnet or any subnet of the VPC to which the VPN gateway is attached.   Reserved VPC CIDR blocks such as 100.64.0.0/10 and 214.0.0.0/8 cannot be used as customer subnets. | 172.16.0.0/16    |
        | Interface IP Address Assignment   | Manually specify In this example, select **Manually specify**. Automatically assign                                                                                                                                                                                                                             | Manually specify |
        | Local Tunnel Interface Address    | Tunnel interface IP address configured on the VPN gateway.                                                                                                                                                                                                                                                      | 169.254.70.1     |
        | Customer Tunnel Interface Address | Tunnel interface IP address configured on the customer gateway device.                                                                                                                                                                                                                                          | 169.254.70.2     |
        | Link Detection                    | Whether to enable route reachability detection in multi-link scenarios. When NQA is enabled, ICMP packets are sent for detection and your device needs to respond to these ICMP packets.                                                                                                                        | **NQA** enabled  |
        | PSK, Confirm PSK                  | The value must be the same as the PSK configured on the customer gateway device.                                                                                                                                                                                                                                | Test@123         |
        | Policy Settings                   | The policy settings must be the same as those on the customer gateway device.                                                                                                                                                                                                                                   | Default          |


        
    3.  Create VPN connection 2.
        
        :::note
        For VPN connection 2, you are advised to use the same parameter settings as VPN connection 1, except the parameters listed in the following table.
        :::
        
        <a id="table-4"></a>

        **Table 4** Parameter settings for VPN connection 2

        | Parameter                         | Description                                | Value        |
        | --------------------------------- | ------------------------------------------ | ------------ |
        | Name                              | Name of a VPN connection.                  | vpn-002      |
        | Gateway IP Address                | Active EIP 2 bound to the VPN gateway.     | 2.2.2.2      |
        | Local Tunnel Interface Address    | Tunnel IP address of the VPN gateway.      | 169.254.71.1 |
        | Customer Tunnel Interface Address | Tunnel IP address of the customer gateway. | 169.254.71.2 |
        
4.  Configure VPN connections between the cloud side and on-premises data center 2.
    1.  Choose **Virtual Private Network** > **Enterprise – VPN Connections**, and click **Create VPN Connection**.
    2.  Set parameters for VPN connection 1 as prompted and click **Submit**.
        
        [Table 5](#table-5) only describes the key parameters for creating a VPN connection.

        <a id="table-5"></a>

        **Table 5** Description of VPN connection parameters
        
        | Parameter                         | Description                                                                                                                                                                                                                                                                                                     | Value            |
        | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
        | Name                              | Name of a VPN connection.                                                                                                                                                                                                                                                                                       | vpn-003          |
        | VPN Gateway                       | VPN gateway for which the VPN connection is created.                                                                                                                                                                                                                                                            | vpngw-001        |
        | Gateway IP Address                | Active EIP bound to the VPN gateway.                                                                                                                                                                                                                                                                            | 1.1.1.2          |
        | Customer Gateway                  | Name of a customer gateway.                                                                                                                                                                                                                                                                                     | cgw-fw2          |
        | VPN Type                          | Select **Static routing**.                                                                                                                                                                                                                                                                                      | Static routing   |
        | Customer Subnet                   | Subnet in on-premises data center 2 that needs to access the VPC on Open Telekom Cloud.  A customer subnet cannot be included in any local subnet or any subnet of the VPC to which the VPN gateway is attached.   Reserved VPC CIDR blocks such as 100.64.0.0/10 and 214.0.0.0/8 cannot be used as customer subnets. | 10.10.0.0/16     |
        | Interface IP Address Assignment   | **Manually specify** In this example, select Manually specify. Automatically assign                                                                                                                                                                                                                             | Manually specify |
        | Local Tunnel Interface Address    | Tunnel interface IP address configured on the VPN gateway.                                                                                                                                                                                                                                                      | 169.254.72.1     |
        | Customer Tunnel Interface Address | Tunnel interface IP address configured on the customer gateway device.                                                                                                                                                                                                                                          | 169.254.72.2     |
        | Link Detection                    | Whether to enable route reachability detection in multi-link scenarios. When NQA is enabled, ICMP packets are sent for detection and your device needs to respond to these ICMP packets.                                                                                                                        | **NQA** enabled  |
        | PSK, Confirm PSK                  | The value must be the same as the PSK configured on the customer gateway device in on-premises data center 2.                                                                                                                                                                                                   | Test@123         |
        | Policy Settings                   | The policy settings must be the same as those configured on the customer gateway device in on-premises data center 2.                                                                                                                                                                                           | Default          |


        
    3.  Create VPN connection 2.
        
        :::note 
        For VPN connection 2, you are advised to use the same parameter settings as VPN connection 1, except the parameters listed in the following table.
        :::
        
        <a id="table-6"></a>

        **Table 6** Parameter settings for VPN connection 2

        | Parameter                         | Description                                                             | Value        |
        | --------------------------------- | ----------------------------------------------------------------------- | ------------ |
        | Name                              | Name of a VPN connection.                                               | vpn-004      |
        | Gateway IP Address                | Active EIP 2 bound to the VPN gateway.                                  | 2.2.2.2      |
        | Local Tunnel Interface Address    | Tunnel IP address of the VPN gateway.                                   | 169.254.73.1 |
        | Customer Tunnel Interface Address | Tunnel IP address of the customer gateway in on-premises data center 2. | 169.254.73.2 |

        
5.  Configure customer gateway devices in on-premises data centers 1 and 2.
    
    The configuration procedures may vary according to the type of the customer gateway device. For details, see [Administrator Guide](https://docs.otc.t-systems.com/virtual-private-network/umn/administrator_guide/index.html).
    

### Verification

*   About 5 minutes later, check states of the VPN connections.
    
    Choose **Virtual Private Network** > **Enterprise – VPN Connections**. The states of the four VPN connections are all **Normal**.
    
*   Verify that servers in on-premises data center 1 and servers in on-premises data center 2 can ping each other.
