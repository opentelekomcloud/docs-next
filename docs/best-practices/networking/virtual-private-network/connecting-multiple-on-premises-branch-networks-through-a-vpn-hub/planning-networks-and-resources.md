---
id: planning-networks-and-resources
title: Planning Networks and Resources
tags: [vpn]
---

# Planning Networks and Resources

### Data Plan

**Table 1: Data Plan**

<!-- INFO: Because some cells are merged together and MDX doesn't support it, HTML table is used -->

<table>
  <thead>
    <tr>
      <th>Category</th>
      <th>Item</th>
      <th>Data</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>VPC</td>
      <td>Subnet that needs to access the on-premises data centers</td>
      <td>
        • 192.168.0.0/24<br/>
        • 192.168.1.0/24
      </td>
    </tr>
    <tr>
      <td rowspan="3">VPN gateway</td>
      <td>Interconnection subnet</td>
      <td>
        This subnet is used for communication between the VPN gateway and VPC. Ensure that the selected interconnection subnet has four or more assignable IP addresses.<br/><br/>
        192.168.2.0/24
      </td>
    </tr>
    <tr>
      <td>HA Mode</td>
      <td>Active-active</td>
    </tr>
    <tr>
      <td>EIP</td>
      <td>
        EIPs are automatically generated when you create them. By default, a VPN gateway uses two EIPs. In this example, the EIPs are as follows:<br/><br/>
        • Active EIP: 1.1.1.2<br/>
        • Active EIP 2: 2.2.2.2
      </td>
    </tr>
    <tr>
      <td>VPN connection</td>
      <td>Tunnel interface address</td>
      <td>
        This address is used by a VPN gateway to establish an IPsec tunnel with a customer gateway. At the two ends of the IPsec tunnel, the configured local and remote tunnel interface addresses must be reversed.<br/><br/>
        VPN connections set up with on-premises data center 1:<br/>
        • VPN connection 1: 169.254.70.1/30<br/>
        • VPN connection 2: 169.254.71.1/30<br/><br/>
        VPN connections set up with on-premises data center 2:<br/>
        • VPN connection 3: 169.254.72.1/30<br/>
        • VPN connection 4: 169.254.73.1/30
      </td>
    </tr>
    <tr>
      <td>On-premises data center 1</td>
      <td>Subnet that needs to access the VPC</td>
      <td>172.16.0.0/16</td>
    </tr>
    <tr>
      <td rowspan="2">Customer gateway in on-premises data center 1</td>
      <td>Public IP address</td>
      <td>
        This public IP address is assigned by a carrier. In this example, the public IP address is:<br/><br/>
        1.1.1.1
      </td>
    </tr>
    <tr>
      <td>Tunnel interface address</td>
      <td>
        • VPN connection 1: 169.254.70.2/30<br/>
        • VPN connection 2: 169.254.71.2/30
      </td>
    </tr>
    <tr>
      <td>On-premises data center 2</td>
      <td>Subnet that needs to access the VPC</td>
      <td>10.10.0.0/16</td>
    </tr>
    <tr>
      <td rowspan="2">Customer gateway in on-premises data center 2</td>
      <td>Public IP address</td>
      <td>
        This public IP address is assigned by a carrier. In this example, the public IP address is:<br/><br/>
        2.2.2.1
      </td>
    </tr>
    <tr>
      <td>Tunnel interface address</td>
      <td>
        • VPN connection 3: 169.254.72.2/30<br/>
        • VPN connection 4: 169.254.73.2/30
      </td>
    </tr>
    <tr>
      <td rowspan="3">IKE and IPsec policies</td>
      <td>PSK</td>
      <td>Test@123</td>
    </tr>
    <tr>
      <td>IKE policy</td>
      <td>
        • Authentication algorithm: SHA2-256<br/>
        • Encryption algorithm: AES-128<br/>
        • DH algorithm: Group 15<br/>
        • Version: v2<br/>
        • Lifetime (s): 86400<br/>
        • Local ID: IP address<br/>
        • Peer ID: IP address
      </td>
    </tr>
    <tr>
      <td>IPsec policy</td>
      <td>
        • Authentication algorithm: SHA2-256<br/>
        • Encryption algorithm: AES-128<br/>
        • PFS: DH Group15<br/>
        • Transfer protocol: ESP<br/>
        • Lifetime (s): 3600
      </td>
    </tr>
  </tbody>
</table>

