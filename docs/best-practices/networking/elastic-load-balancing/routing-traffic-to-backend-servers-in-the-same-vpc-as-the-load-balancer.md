---
id: routing-traffic-to-backend-servers-in-the-same-vpc-as-the-load-balancer
title: Routing Traffic to Backend Servers in the Same VPC as the Load Balancer
tags: [vpc, elb, load-balancing]
---

# Routing Traffic to Backend Servers in the Same VPC as the Load Balancer {#elb_bp_0303}

You can route traffic to backend servers in the VPC where the load
balancer is running.

## Solution Design

- A dedicated load balancer `ELB-Test` is running in a VPC named
    `vpc-Test` (`10.1.0.0/16`).
- The backend server `ECS-Test` is also running in `vpc-Test`
    (`10.1.0.0/16`).
- `ECS-Test` needs to be added to the backend server group
    associated with `ELB-Test`.

![*Figure 1* Adding a backend server in the same VPC as the load
balancer](/_static/images/en-us_image_0000001625619218.png)

:::note Advantages
You can add servers in the same VPC as the load balancer to the backend
server group of the load balancer and then route incoming traffic to the
servers.
:::

### Prerequisites

:::note
To calculate the fees you can visit Open Telekom Cloud [Price
calculator](https://open-telekom-cloud.com/en/prices/price-calculator).
:::

<!-- The required resources are as follows:

+-----------+--------+----------------------------------------+-------+
| Resource  | Re     | Description                            | Qua   |
| Type      | source |                                        | ntity |
|           | Name   |                                        |       |
+===========+========+========================================+=======+
| VPC       | vp     | The VPC where *ELB-Test* and         | 1     |
|           | c-Test | *ECS-Test* are running:              |       |
|           |        |                                        |       |
|           |        | 10.1.0.0/16                            |       |
+-----------+--------+----------------------------------------+-------+
| ELB       | EL     | The dedicated load balancer named      | 1     |
|           | B-Test | *ELB-Test*                           |       |
+-----------+--------+----------------------------------------+-------+
| EIP       | EI     | The EIP bound to *ELB-Test*          | 1     |
|           | P-Test |                                        |       |
+-----------+--------+----------------------------------------+-------+
| ECS       | EC     | The ECS works in *vpc-Test*          | 1     |
|           | S-Test |                                        |       |
+-----------+--------+----------------------------------------+-------+

: *Table 1* Resource planning -->

### Procedure

![*Figure 2* Process for adding backend servers in the same VPC as the
load balancer](/_static/images/en-us_image_0000001674059073.png)

## Creating a VPC

1. Log in to the management console.

2. Under *Networking*, select *Virtual Private Cloud*. On the
    *Virtual Private Cloud* page displayed, click *Create VPC*.

3. Configure the parameters as follows and click *Create Now*. For
    details on how to create a VPC, see the [Virtual Private Cloud User
    Guide](https://docs.otc.t-systems.com/virtual-private-cloud/umn/vpc_and_subnet/vpc/creating_a_vpc.html).

    - **Name**: `vpc-Test`
    - **IPv4 CIDR Block**: `10.1.0.0/16`
    - Configure other parameters as required.

    ![*Figure 3* Creating
    *vpc-Test*](/_static/images/en-us_image_0000001625459326.png)

## Creating an ECS

1. Under *Computing*, click *Elastic Cloud Server*.

2. In the upper right corner, click *Create ECS*.

3. Configure the parameters as required. For details, see [Elastic
    Cloud Server User
    Guide](https://docs.otc.t-systems.com/elastic-cloud-server/umn/getting_started/creating_an_ecs/overview.html).

    Select *vpc-Test* for VPC and set *Name* to `ECS-Test`.

    ![*Figure 6* Creating
    ECS-Test](/_static/images/en-us_image_0000001625299518.png)

4. Deploy Nginx on the ECS.

    ![*Figure 7* Deploying Nginx on
    *ECS-Test*](/_static/images/en-us_image_0000001625619246.png)

## Creating a Dedicated Load Balancer and Adding an HTTP Listener and a Backend Server Group to the Load Balancer

1. Under *Networking*, click *Elastic Load Balance*.

2. In the upper right corner, click *Create Elastic Load Balancer*.

3. Configure the parameters as follows. For details, see [Elastic Load
    Balance User
    Guide](https://docs.otc.t-systems.com/elastic-load-balancing/umn/load_balancer/creating_a_dedicated_load_balancer.html).

    - **Type**: `Dedicated`
    - **IP as a Backend**: `Enable`
    - **VPC**: `vpc-Test`
    - **Name**: `ELB-Test`
    - Configure other parameters as required.

    ![*Figure 8* Creating a dedicated load balancer named
    *ELB-Test*](/_static/images/en-us_image_0000001673939093.png)

4. Add an HTTP listener and a backend server group to the created
    dedicated load balancer. For details, see [Elastic Load Balance User
    Guide](https://docs.otc.t-systems.com/elastic-load-balancing/umn/listener/adding_an_http_listener.html).

## Adding the ECS to the Backend Server Group

1. Locate the dedicated load balancer and click its name *ELB-Test*.

2. On the *Listeners* tab page, locate the HTTP listener added to the
    dedicated load balancer and click its name.

3. In the *Backend Server Groups* tab on the right, click *Add
    Backend Server*, configure the parameters, and click *OK*. For
    details, see *Elastic Load Balance User Guide*.

    - **Backend Server**: `ECS-Test`
    - **Backend Port**: the port enabled for Nginx on `ECS-Test`
    - **Weight**: Configure this parameter as required.

    ![*Figure 9* Adding IP as backend
    servers](/_static/images/en-us_image_0000001674059081.png)

## Verifying Traffic Routing

:::note
EIP is not necessary as long as you don't want to access the ELB
externally, you can always access the ELB from its private IP.
:::

1. Locate the dedicated load balancer *ELB-Test* and click *More*
    in the *Operation* column.

2. Select *Bind IPv4 EIP* to bind an EIP to `ELB-Test`.

    ![*Figure 10* EIP bound to the load
    balancer](/_static/images/en-us_image_0000001674259073.png)

3. Enter `http://<EIP>` in the address box of your browser to
    access the dedicated load balancer. If the following page is
    displayed, the load balancer routes the request to `ECS-Test`,
    which processes the request and returns the requested page.

    :::note
    In case of unhealthy connection of the backend server group, check
    if the ECS subnet and ELB subnet are associated with the above
    created route tables.
    :::

    ![*Figure 11* Verifying traffic
    routing](/_static/images/en-us_image_0000001625459334.png)
