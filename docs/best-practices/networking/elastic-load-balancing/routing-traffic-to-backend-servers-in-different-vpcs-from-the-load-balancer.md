---
id: routing-traffic-to-backend-servers-in-different-vpcs-from-the-load-balancer
title: Routing Traffic to Backend Servers in Different VPCs from the Load Balancer
tags: [vpc, elb, load-balancing]
---

# Routing Traffic to Backend Servers in Different VPCs from the Load Balancer {#elb_bp_0302}

You can use ELB to route traffic to backend servers in two VPCs
connected over a VPC peering connection.

## Solution Design

- A dedicated load balancer named `ELB-Test` is running in
    `VPC-Test-01` (`172.18.0.0/24`).
- An ECS named `ECS-Test` is running in `VPC-Test-02`
    (`172.17.0.0/24`).
- `IP as a Backend` is enabled for the dedicated load balancer
    `ELB-Test`, and `ECS-Test` in `VPC-Test-02` (`172.17.0.0/24`) is
    added to the backend server group associated with `ELB-Test`.

![*Figure 1*
Topology](/_static/images/en-us_image_0000001674059065.png)

:::note Advantages
You can enable `IP as a Backend` for the dedicated load balancer to
route incoming traffic to servers in different VPCs from the load
balancer.
:::

### Prerequisites

:::note
To calculate the fees you can visit Open Telekom Cloud [Price
calculator](https://open-telekom-cloud.com/en/prices/price-calculator).
:::

<!-- The required resources are as follows:

+---------+-------+--------------------------------------------+------+
| R       | Res   | Description                                | Quan |
| esource | ource |                                            | tity |
| Type    | Name  |                                            |      |
+=========+=======+============================================+======+
| VPC     | V     | The VPC where *ELB-Test* is running:     | 1    |
|         | PC-Te |                                            |      |
|         | st-01 | 172.18.0.0/24                              |      |
+---------+-------+--------------------------------------------+------+
|         | V     | The VPC where *ECS-Test* is running:     | 1    |
|         | PC-Te |                                            |      |
|         | st-02 | 172.17.0.0/24                              |      |
+---------+-------+--------------------------------------------+------+
| VPC     | Pe    | The connection that connects the VPC where | 1    |
| peering | ering | *ELB-Test* is running and the VPC where  |      |
| con     | -Test | *ECS-Test* is running                    |      |
| nection |       |                                            |      |
|         |       | *Local VPC*: *172.18.0.0/24*           |      |
|         |       |                                            |      |
|         |       | *Peer VPC*: *172.17.0.0/24*            |      |
+---------+-------+--------------------------------------------+------+
| Route   | Ro    | The route table of *VPC-Test-01*         | 1    |
| table   | ute-V |                                            |      |
|         | PC-Te | *Destination*: *172.17.0.0/24*         |      |
|         | st-01 |                                            |      |
+---------+-------+--------------------------------------------+------+
|         | Ro    | The route table of *VPC-Test-02*         | 1    |
|         | ute-V |                                            |      |
|         | PC-Te | *Destination*: *172.18.0.0/24*         |      |
|         | st-02 |                                            |      |
+---------+-------+--------------------------------------------+------+
| ELB     | ELB   | The dedicated load balancer                | 1    |
|         | -Test |                                            |      |
+---------+-------+--------------------------------------------+------+
| EIP     | EIP   | The EIP bound to *ELB-Test*              | 1    |
|         | -Test |                                            |      |
+---------+-------+--------------------------------------------+------+
| ECS     | ECS   | The ECS works in *VPC-Test-02*           | 1    |
|         | -Test |                                            |      |
+---------+-------+--------------------------------------------+------+

: *Table 1* Resource planning -->

### Procedure

![*Figure 2* Process of associating servers in a VPC that is different
from the dedicated load
balancer](/_static/images/en-us_image_0000001674259057.png)

## Creating VPCs

1. Log in to the management console.

2. Under *Networking*, select *Virtual Private Cloud*. On the
    *Virtual Private Cloud* page displayed, click *Create VPC*.

3. Configure the parameters as follows and click *Create Now*. For
    details on how to create a VPC, see the [Virtual Private Cloud User
    Guide](https://docs.otc.t-systems.com/virtual-private-cloud/umn/vpc_and_subnet/vpc/creating_a_vpc.html).

    - **Name**: `VPC-Test-01`
    - **IPv4 CIDR Block**: `172.18.0.0/24`
    - Configure other parameters as required.

    ![*Figure 3* Creating
    *VPC-Test-01*](/_static/images/en-us_image_0000001625459302.png)

4. Repeat steps 2 & 3 to create the other VPC.

    - **Name**: `VPC-Test-02`
    - **IPv4 CIDR Block**: `172.17.0.0/24`
    - Configure other parameters as required.

    ![*Figure 4* Creating
    *VPC-Test-02*](/_static/images/en-us_image_0000001674139185.png)

## Creating a VPC Peering Connection

1. In the navigation pane on the left, click *VPC Peering*.

2. In the upper right corner, click *Create VPC Peering Connection*.

3. Configure the parameters as follows and click *OK*. For details on
    how to create a VPC peering connection, see the [Virtual Private
    Cloud User
    Guide](https://docs.otc.t-systems.com/virtual-private-cloud/umn/vpc_peering_connection/creating_a_vpc_peering_connection_with_another_vpc_in_your_account.html).

    - **Name**: `Peering-Test`
    - **Local VPC**: `VPC-Test-01`
    - **Peer VPC**: `VPC-Test-02`
    - Configure other parameters as required.

    ![*Figure 5* Creating
    *Peering-Test*](/_static/images/en-us_image_0000001625779198.png)

## Adding Routes for the VPC Peering Connection

1. In the navigation pane on the left, click *Route Tables*.

2. In the upper right corner, click *Create Route Table*.

3. Configure the parameters as follows and click *OK*. For details on
    how to create a route table, see the [Virtual Private Cloud User
    Guide](https://docs.otc.t-systems.com/virtual-private-cloud/umn/route_tables/creating_a_custom_route_table.html).

    - **Name**: `Route-VPC-Test-01`
    - **VPC**: `VPC-Test-01`
    - **Destination**: `172.17.0.0/24`
    - **Next Hop Type**: `VPC peering connection`
    - **Next Hop**: `Peering-Test`

    ![*Figure 6* Creating
    *Route-VPC-Test-01*](/_static/images/en-us_image_0000001625299482.png)

4. Repeat steps 2 & 3 to create the other route table.

    - **Name**: `Route-VPC-Test-02`
    - **VPC**: `VPC-Test-02`
    - **Destination**: `172.18.0.0/24`
    - **Next Hop Type**: `VPC peering connection`
    - **Next Hop**: `Peering-Test`

## Creating an ECS

1. Under *Computing*, click *Elastic Cloud Server*.

2. In the upper right corner, click *Create ECS*.

3. Select `VPC-Test-02` as the *VPC* and set *ECS Name* to
    `ECS-Test`. Configure other parameters as required. For details,
    see [Elastic Cloud Server User
    Guide](https://docs.otc.t-systems.com/elastic-cloud-server/umn/getting_started/creating_an_ecs/overview.html).

    ![*Figure 7* Creating
    ECS-Test](/_static/images/en-us_image_0000001625619214.png)

4. Deploy Nginx on the ECS.

    ![*Figure 8* Deploying Nginx on
    *ECS-Test*](/_static/images/en-us_image_0000001673939081.png)

## Creating a Dedicated Load Balancer and Adding an HTTP Listener and a Backend Server Group to the Load Balancer

1. Under *Networking*, click *Elastic Load Balance*.

2. In the upper right corner, click *Create Elastic Load Balancer*.

3. Configure the parameters as follows. For details, see [Elastic Load
    Balance User
    Guide](https://docs.otc.t-systems.com/elastic-load-balancing/umn/load_balancer/creating_a_dedicated_load_balancer.html).

    - **Type**: `Dedicated`
    - **IP as a Backend**: `Enable`
    - **VPC**: `VPC-Test-01`
    - **Name**: `ELB-Test`
    - Configure other parameters as required.

    ![*Figure 9* Creating
    *ELB-Test*](/_static/images/en-us_image_0000001674059069.png)

4. Add an HTTP listener and a backend server group to the dedicated
    load balancer. For details, see [Elastic Load Balance User
    Guide](https://docs.otc.t-systems.com/elastic-load-balancing/umn/listener/adding_an_http_listener.html).

    ![*Figure 10* HTTP listener and backend server
    group](/_static/images/en-us_image_0000001674259061.png)

## Adding the ECS to the Backend Server Group

1. Locate the created dedicated load balancer and click its name
    *ELB-Test*.

2. On the *Listeners* tab page, locate the HTTP listener added to the
    dedicated load balancer and click its name.

3. In the *Backend Server Groups* tab on the right, click *IP as
    Backend Servers*.

    ![*Figure 11* IP as backend
    servers](/_static/images/en-us_image_0000001625459306.png)

4. Click *Add IP as Backend Server*, configure the parameters, and
    click *OK*. For details, see *Elastic Load Balance User Guide*.

    - **Backend Server IP Address**: Private IP address of
        `ECS-Test` (`172.17.0.205`)
    - **Backend Port**: the port enabled for Nginx on `ECS-Test`
    - **Weight**: Set this parameter as required.

    ![*Figure 12* Adding ECS-Test using its IP
    address](/_static/images/en-us_image_0000001674139189.png)

## Verifying Traffic Routing

:::note
EIP is not necessary as long as you don't want to access the ELB
externally, you can always access the ELB from its private IP.
:::

1. Locate the dedicated load balancer *ELB-Test* and click *More*
    in the *Operation* column.

2. Select *Bind IPv4 EIP* to bind an EIP to `ELB-Test`.

    ![*Figure 13* EIP bound to the load
    balancer](/_static/images/en-us_image_0000001625779202.png)

3. Enter `http://<EIP>` in the address box of your browser to
    access the dedicated load balancer. If the following page is
    displayed, the load balancer routes the request to `ECS-Test`,
    which processes the request and returns the requested page.

    :::note
    In case of unhealthy connection of the backend server group, check
    if the ECS subnet and ELB subnet are associated with the above
    created route tables.
    :::

    ![*Figure 14* Verifying that the request is routed to
    ECS-Test](/_static/images/en-us_image_0000001625299490.png)
