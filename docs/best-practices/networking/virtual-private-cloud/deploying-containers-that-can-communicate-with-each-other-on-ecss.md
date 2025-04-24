---
id: deploying-containers-that-can-communicate-with-each-other-on-ecss
title: Deploying Containers that Can Communicate with Each Other on ECSs
tags: [vpc, ecs, docker]
---

# Deploying Containers that Can Communicate with Each Other on ECSs

You can deploy containers, that are not provided by Open Telekom Cloud's Container Services (CCE or CCI), on Elastic Cloud Servers (ECS) and enable the containers on different ECSs, but in the same subnet, to communicate with each other.

## Solution Advantages

* Containers deployed on ECSs can use CIDR blocks that are not from those of the ECS VPCs, but use routes added to VPC route tables for data forwarding.
* You only need to add routes to the route tables to allow communications among containers, which is flexible and convenient.

## Typical Topology

The network topology requirements are as follows:

* ECSs are in the same subnet. As shown in the following figure, the VPC subnet is `192.168.0.0/24`, and the IP addresses of the ECS 1 and ECS 2 are `192.168.0.2` and `192.168.0.3`, respectively.
* Containers are on CIDR blocks that are not from those of the VPC subnets that the ECSs belong to. Containers on the same ECS are on the same CIDR block, but containers on different ECSs are on different CIDR blocks. As shown in the following figure, the CIDR block of containers on ECS 1 is `10.0.2.0/24`, and that on ECS 2 is `10.0.3.0/24`.
* The next hop of the data packets sent to a container is the ECS where the container is deployed. As shown in the following figure, the next hop of the packets sent to CIDR block `10.0.2.0/24` is `192.168.0.2`, and that of the packets sent to CIDR block `10.0.3.0/24` is `192.168.0.3`.

<center>
**Figure 1** Network topology  

![](https://arch-assets-dev.obs.eu-de.otc.t-systems.com/static/img/docs/best-practices/networking/virtual-private-cloud/en-us_image_0268337419.png)
</center>

## Creating the ECSs

1. **Create VPCs.** For details, see [Creating a VPC](https://docs.otc.t-systems.com/virtual-private-cloud/umn/vpc_and_subnet/vpc/creating_a_vpc.html#en-us-topic-0013935842).

2. **Create ECSs.** For details, see [Creating an ECS](https://docs.otc.t-systems.com/elastic-cloud-server/umn/getting_started/creating_an_ecs/index.html#en-us-topic-0021831611).

    After the ECS is created, disable source/destination check on the ECS NIC, as shown in the figure below:

    <center>
    **Figure 2** Disabling source/destination check  
    ![](https://arch-assets-dev.obs.eu-de.otc.t-systems.com/static/img/docs/best-practices/networking/virtual-private-cloud/en-us_image_0268337422.png)
    </center>

3. **Deploy containers on ECSs.**

    You can use Docker CE to deploy containers. For details, see the [documentation of Docker CE](https://docs.docker.com/engine/install/).

    :::important
    Containers on the same ECS must be on the same CIDR block and the CIDR blocks of containers on different ECSs cannot overlap.
    :::

4. **Add routes to the VPC route table.**

    Set the next hop of the packets sent to CIDR block `10.0.2.0/24` to `192.168.0.2`, and set the next hop of the packets sent to CIDR block `10.0.3.0/24` to `192.168.0.3`.

    :::caution
    * By default, a VPC supports containers from a maximum of 50 different CIDR blocks. If containers from more different CIDR blocks need to be deployed in a VPC, apply for more route tables for the VPC.
    * After a container is migrated to another ECS, you need to add routes to the route table of the ECS VPC.
    :::

5. **Add security group rules.** For details, see [Adding a Security Group Rule](https://docs.otc.t-systems.com/virtual-private-cloud/umn/access_control/security_group/managing_a_security_group/creating_a_security_group.html#en-us-topic-0013748715).

    To use ping and traceroute commands to check the communications between containers, add the rules shown in the table below, to the security group of the ECSs to allow ICMP and UDP traffic:

    |         Direction|         Protocol|         Port|         Source   |
    |------------------|-----------------|-------------|------------------|
    |         Inbound  |         ICMP    |         All |         0.0.0.0/0|
    |         Inbound  |         UDP     |         All |         0.0.0.0/0|

## Validating Connectivity

Use the **ping** command to check whether the containers deployed on two different ECSs can communicate with each other.

Run the following commands to create a network connection **my-net** on ECS 1, set the CIDR block to be used by a container on ECS 1 to `10.0.2.0/24`, and create the container that uses **my-net**.

```bash
docker network create  --subnet 10.0.2.0/24 my-net
docker run -d --name nginx --net my-net -p 8080:80  nginx:alpine
```

Run the following commands to create a network connection and container on ECS 2, and set the CIDR block to be used by the container to `10.0.3.0/24`.

```bash
docker network create  --subnet 10.0.3.0/24 my-net
docker run -d --name nginx --net my-net -p 8080:80  nginx:alpine
```

Run the following command to set the default policy of the **FORWARD** chain in the filter table of iptables on the ECS to **ACCEPT**.

:::important
This operation is required because Docker sets the default policy of the **FORWARD** chain in the filter table of iptables to **DROP** for security purposes.
:::

```shell
iptables -P FORWARD ACCEPT
```

Ping and traceroute `10.0.3.2` from `10.0.2.2`. The ping and traceroute operations are successful, and the packet is tracerouted in the following sequence: `10.0.2.2` -> `10.0.2.1` -> `192.168.0.3` -> `10.0.3.2`, which is consistent with the configured route forwarding rules:

```bash
[root@ecs1 ~]# docker exec -it nginx /bin/sh
/ # traceroute -d 10.0.3.2
traceroute to 10.0.3.2 (10.0.3.2), 30 hops max, 46 byte packets
 1  10.0.2.1 (10.0.2.1)  0.007 ms  0.004 ms  0.007 ms
 2  192.168.0.3 (192.168.0.3)  0.232 ms  0.165 ms  0.248 ms
 3  10.0.3.2 (10.0.3.2)  0.366 ms  0.308 ms  0.158 ms
/ # ping 10.0.3.2
PING 10.0.3.2 (10.0.3.2): 56 data bytes
64 bytes from 10.0.3.2: seq=0 ttl=62 time=0.570 ms
64 bytes from 10.0.3.2: seq=1 ttl=62 time=0.343 ms
64 bytes from 10.0.3.2: seq=2 ttl=62 time=0.304 ms
64 bytes from 10.0.3.2: seq=3 ttl=62 time=0.319 ms
```