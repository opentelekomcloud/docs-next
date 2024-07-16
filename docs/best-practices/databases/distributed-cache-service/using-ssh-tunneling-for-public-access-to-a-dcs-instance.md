---
id: using-ssh-tunneling-for-public-access-to-a-dcs-instance
title: Using SSH Tunneling for Public Access to a DCS Instance
tags: [dcs, ssh, redis, tunneling, jump-server]
---

# Using SSH Tunneling for Public Access to a DCS Instance

VPCs are used to ensure network security of public cloud services, such
as DCS. Your DCS instance can be accessed only by an ECS that is in the
same VPC as the instance.

## Solution Design

If an EIP is bound to a Open Telekom Cloud ECS, you can remotely access
the ECS from a local computer. You can create an SSH tunnel as a proxy to connect 
your DCS instance and local computer to achieve proxy forwarding.

:::note
-   Redis Cluster DCS Redis 4.0, 5.0, or 6.0 instances do not support
    public access using this solution.
-   Do not use public network access in the production environment.
    Client access exceptions caused by poor public network performance
    will not be included in the SLA.
:::

## Prerequisites

You have a DCS instance and a local computer that can connect to the
Internet. Tools such as MobaXterm and the Redis client have been
installed.

You have an ECS that meets the following requirements:

-   The ECS is bound with an EIP for public access.
-   The VPC and subnet configured for the ECS are the same as those
    configured for the DCS instance.
-   Security group rules have been correctly configured for the ECS.
-   The ECS runs the Linux OS.

If these prerequisites are met, the ECS can communicate with the DCS
instance and you can remotely connect to the ECS using SSH from a local
computer.

## Using MobaXterm to Create a Tunnel as a Jump Server

1.  Create an SSH session for connecting to the ECS using port 22.

    ![**Figure 1** Creating an SSH session](/img/docs/best-practices/databases/distributed-cache-service/en-us_image_0000001156281773.png)

2.  After the session is configured, enter the username and password to
    log in to the ECS. After login, enter `TMOUT=0` to prevent the
    session from being automatically closed due to timeout.

    ![**Figure 2** Entering "TMOUT=0"](/img/docs/best-practices/databases/distributed-cache-service/en-us_image_0000001109406512.png)

3.  Click *Tunneling* to create a tunnel.

    ![**Figure 3** Creating a tunnel](/img/docs/best-practices/databases/distributed-cache-service/en-us_image_0000001110063992.png)

4.  Set the local IP address to `127.0.0.1` and start the tunnel.

    ![**Figure 4** Starting the tunnel](/img/docs/best-practices/databases/distributed-cache-service/en-us_image_0000001110225672.png)

5.  Open the Redis client on the local computer. The following uses the
    Redis CLI as an example. Run the following command to access the DCS
    instance:

    ```
    **Redis-cli -h 127.0.0.1 -p 3306 -a {password}**
    ```

    Parameter description:

    `-h` host name: `localhost` or `127.0.0.1`, which is the same as
    the local IP address configured for the tunnel.

    `-p` port number: `3306`, which is the same as the forward port
    configured for the tunnel.

    `-a` password: password of the DCS instance.

6.  If the connection is successful, the following information is
    displayed.

    ![**Figure 5** Successfully connecting to a DCS instance](/img/docs/best-practices/databases/distributed-cache-service/en-us_image_0000001156308977.png)