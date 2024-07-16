---
id: using-elb-for-public-access-to-dcs
title: Using ELB for Public Access to DCS
tags: [dcs, redis, elb]
---

# Using ELB for Public Access to DCS

Currently, DCS Redis 4.0, 5.0, and 6.0 instances cannot be bound with
elastic IP addresses (EIPs) and cannot be accessed over public networks
directly. This section describes how to access a single-node,
master/standby, read/write splitting, or Proxy Cluster instance or a
node in a Redis Cluster instance through public networks by enabling
cross-VPC backend on a load balancer.

:::note
-   Due to cluster node address translation, you cannot access a Redis
    Cluster as a whole. You can only access individual nodes in the
    cluster.
-   Do not use public network access in the production environment.
    Client access exceptions caused by poor public network performance
    will not be included in the SLA.
:::

## Solution Design

The following figure shows the process for accessing DCS through ELB.

![**Figure 1** Process for accessing DCS through ELB](/img/docs/best-practices/databases/distributed-cache-service/en-us_image_0000001231321333.png)

## Prerequisites

1.  [Create a VPC](https://docs.otc.t-systems.com/virtual-private-cloud/umn/vpc_and_subnet/vpc/creating_a_vpc.html#en-us-topic-0013935842)
    or use an existing one.
2.  [Create a DCS Redis instance](https://docs.otc.t-systems.com/distributed-cache-service/umn/getting_started/creating_an_instance/creating_a_dcs_redis_instance.html#dcs-ug-0326008).
    Record the IP address and port number of the instance.
3.  [Create a dedicated load balancer](https://docs.otc.t-systems.com/elastic-load-balancing/umn/load_balancer/creating_a_dedicated_load_balancer.html).

:::note
-   A shared load balancer does not support cross-VPC backend
    servers. Therefore, it cannot be bound to a DCS instance.
-   For *Specification*, select *Network load balancing
    (TCP/UDP)*.
-   To access the DCS instance over public networks, enable *IP as
    a Backend* when creating a **dedicated** load balancer.
:::

1.  [Add a TCP listener](https://docs.otc.t-systems.com/elastic-load-balancing/umn/listener/adding_a_tcp_listener.html)
    to the dedicated load balancer.

    :::note
    -  When adding a backend server, click the *IP as Backend
        Servers* tab and then click *Add IP as Backend Sever*.
    -  In the *Backend Server IP Address Column*, enter the IP address
        and in the Backend Port Column, enter the port number of your
        DCS instance.
    -  A Redis Cluster DCS instance contains multiple master/replica
        pairs. When configuring an IP as Backend server, you can add the
        IP address and port number of **any** master or replica node.
    -  If you enable *Health Check*, you do not need to manually
        configure the port. By default, the service port of the backend
        server will be used.
    :::

2.  [Create a VPC peering connection](https://docs.otc.t-systems.com/virtual-private-cloud/umn/vpc_peering_connection/creating_a_vpc_peering_connection_with_a_vpc_in_another_account.html#en-us-topic-0046655038).
    For the local VPC, select the VPC where your load balancer is located. For the peer VPC, select the VPC where your DCS instance is
    located.

    :::note
    Even if your load balancer and DCS instance are in the same VPC, you
    still need to create a VPC peering connection. For the local VPC,
    select the VPC where your load balancer and DCS instance are
    located. For the peer VPC, select another VPC.
    :::

3.  Click the name of the VPC peering connection to go to its details
    page. Obtain *Local VPC CIDR Block* and *Peer VPC CIDR Block*.

    ![image1](/img/docs/best-practices/databases/distributed-cache-service/en-us_image_0000001616102745.png)

4.  Configure local and peer routes for the VPC peering connection.

    a.  On the *Local Routes* and *Peer Routes* tab pages, click the
        link to go to the *Route Tables* page.

        ![image2](/img/docs/best-practices/databases/distributed-cache-service/en-us_image_0000001565366900.png)

    b.  Local route: On the summary page of local routes, click *Add
        Route*. In the displayed *Add Route* dialog box, set
        *Destination* to the value of *Peer VPC CIDR Block* of the
        VPC peering connection, set *Next Hop Type* to *VPC peering
        connection*, set *Next Hop* to the VPC peering connection
        created in `5 <dcs-bp-211201001__li782011051412>`, and click
        *OK*.

    c.  Peer route: On the summary page of peer routes, click *Add
        Route*. In the displayed *Add Route* dialog box, set
        *Destination* to the value of *Local VPC CIDR Block* of the
        VPC peering connection, set *Next Hop Type* to *VPC peering
        connection*, set *Next Hop* to the VPC peering connection
        created in `5 <dcs-bp-211201001__li782011051412>`, and click
        *OK*.

        :::note
        If the load balancer and the DCS instance are in the same VPC,
        you do not need to add a peer route.
        :::

5.  Perform a health check on the IP address of the DCS instance. If the
    health check result is `Healthy`, the added cross-VPC backend IP
    address can be used.

    a.  In the navigation pane of *Network Console*, choose *Elastic
        Load Balance* -> *Load Balancers*.
    b.  Click the name of the created Elastic Load Balancer.
    c.  On the *Backend Server Server Groups* -> *IP as Backend
        Servers* tab page, view the health check result of the DCS
        instance IP address.

    ![image3](/img/docs/best-practices/databases/distributed-cache-service/en-us_image_0000001260455881.png)

## Connecting to the DCS Instance Through ELB

-   Connecting to a node in a Redis Cluster DCS instance through ELB
    a.  View the basic information of the load balancer created in
        `3 <dcs-bp-211201001__li185984400426>`.

        ![image4](/img/docs/best-practices/databases/distributed-cache-service/en-us_image_0000001229563929.png)

    b.  [Create an
        ECS](https://docs.otc.t-systems.com/elastic-cloud-server/umn/getting_started/creating_an_ecs/index.html#en-us-topic-0021831611),
        log in to it, and install the Redis client by referring to
        [redis-cli](https://docs.otc.t-systems.com/distributed-cache-service/umn/getting_started/accessing_an_instance/accessing_a_dcs_redis_instance_through_redis-cli.html#dcs-ug-0326009).

    c.  On the Redis client, connect to the DCS instance using the IP
        address and port number configured in
        `4 <dcs-bp-211201001__li2180434205513>`. If you use the EIP and
        port number of the load balancer, an error will be reported.

        ![image5](/img/docs/best-practices/databases/distributed-cache-service/en-us_image_0000001229643735.png)
-   Connecting to a single-node, master/standby, read/write splitting,
    or Proxy Cluster DCS instance through ELB
    a.  View the IPv4 EIP and port number of the load balancer created
        in `3 <dcs-bp-211201001__li185984400426>`.

        ![image6](/img/docs/best-practices/databases/distributed-cache-service/en-us_image_0000001229563929.png)

        ![image7](/img/docs/best-practices/databases/distributed-cache-service/en-us_image_0000001229645007.png)

    b.  [Create an
        ECS](https://docs.otc.t-systems.com/elastic-cloud-server/umn/getting_started/creating_an_ecs/index.html#en-us-topic-0021831611),
        log in to it, and install the Redis client by referring to
        [redis-cli](https://docs.otc.t-systems.com/distributed-cache-service/umn/getting_started/accessing_an_instance/accessing_a_dcs_redis_instance_through_redis-cli.html#dcs-ug-0326009).

    c.  Use **redis-cli** to access the load balancer using its EIP and port
        number (which is `80`).

        ![image8](/img/docs/best-practices/databases/distributed-cache-service/en-us_image_0000001229765759.png)

    d.  Write a key through ELB.

        ![image9](/img/docs/best-practices/databases/distributed-cache-service/en-us_image_0000001229765989.png)

    e.  Log in to the DCS console. On the *Cache Manager* page, choose
        *More* -> *Connect to Redis* in the row that contains the
        DCS instance created in `2 <dcs-bp-211201001__li145661168417>`.
        Check whether the key written in
        `4 <dcs-bp-211201001__li352815512015>` exists.

        ![image10](/img/docs/best-practices/databases/distributed-cache-service/en-us_image_0000001183928408.png)