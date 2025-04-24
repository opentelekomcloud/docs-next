---
id: using-nginx-for-public-access-to-single-node-master-standby-or-proxy-cluster-dcs-redis-instances
title: Using Nginx for Public Access of DCS Redis Instances
tags: [dcs, nginx, redis, jump-server]
---

# Using Nginx for Public Access of DCS Redis Instances

This section describes how to access a single-node, master/standby, read/write splitting, or Proxy Cluster DCS Redis 4.0, 5.0, or 6.0 instance **by using a jump server**. This solution **cannot be used** to access a Redis Cluster instance over public networks.

Currently, DCS Redis 4.0, 5.0, and 6.0 instances cannot be bound with
elastic IP addresses (EIPs) and cannot be accessed over public networks
directly.

As shown in figure below, the ECS where
Nginx is installed is a jump server. The ECS is in the same VPC as the
DCS Redis instances and can access the DCS Redis instances through the
subnet IP addresses. After an EIP is bound to the ECS, the ECS can be
accessed over the public network. Nginx can listen on multiple ports and
forward requests to different DCS Redis instances.

![**Figure 1** Accessing DCS Redis instances in a VPC by usingNginx](https://arch-assets-dev.obs.eu-de.otc.t-systems.com/static/img/docs/best-practices/databases/distributed-cache-service/en-us_image_0245102971.png)

:::note
**Do not** use public network access in the production environment. Client
access exceptions caused by poor public network performance will not be
included in the SLA.
:::

## Creating an ECS

1.  Obtain the VPC where the DCS Redis instance is deployed.

    As shown in the following figure, the master/standby instance is
    deployed in the `vpc-demo` VPC.

    ![**Figure 2** DCS Redis instance details](https://arch-assets-dev.obs.eu-de.otc.t-systems.com/static/img/docs/best-practices/databases/distributed-cache-service/en-us_image_0254645094.png)

2.  Create an ECS. Configure the ECS with the `vpc-demo` VPC, bind an
    EIP to the ECS, and select the bandwidth as required.

    ![**Figure 3** ECS details](https://arch-assets-dev.obs.eu-de.otc.t-systems.com/static/img/docs/best-practices/databases/distributed-cache-service/en-us_image_0245116251.png)

## Installing Nginx

After Creating an ECS, install Nginx on the ECS. The following uses
CentOS Stream 9 as an example to describe how to install Nginx. The
commands vary depending on the OS.

1.  Run the following command to add Nginx to the Yum repository:

    ```bash
    sudo rpm -Uvh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm
    ```

2.  Run the following command to check whether Nginx has been added
    successfully:

    ```bash
    yum search nginx
    ```

3.  Run the following command to install Nginx:

    ```bash
    sudo yum install -y nginx
    ```

4.  Run the following command to install the stream module:

    ```bash
    sudo yum install nginx-mod-stream --skip-broken
    ```

5.  Run the following commands to start Nginx and set it to run
    automatically upon system startup:

    ```bash
    sudo systemctl start nginx.service
    sudo systemctl enable nginx.service
    ```

6.  In the address box of a browser, enter the server address (the EIP
    of the ECS) to check whether Nginx is installed successfully.

    If the following page is displayed, Nginx has been installed
    successfully.

    ![image1](https://arch-assets-dev.obs.eu-de.otc.t-systems.com/static/img/docs/best-practices/databases/distributed-cache-service/en-us_image_0245105425.png)

## Setting Up Nginx

After installing Nginx, configure request forwarding rules to specify
the ports that Nginx listens on and the DCS Redis instances that Nginx
forwards requests to.

1.  Open and modify the configuration file.

    ```bash
    cd /etc/nginx
    sudo vi nginx.conf
    ```

    The following is a configuration example. To access multiple DCS
    Redis instances over public networks, configure multiple `server`
    sections and configure the DCS Redis instance connection addresses
    for `proxy\pass`.

    ```json title="nginx.conf"
        stream {
            server {
                listen 8080;
                proxy_pass 192.168.0.5:6379;
            }
            server {
                listen 8081;
                proxy_pass 192.168.0.6:6379;
            }
        }
    ```

    :::note
    Set `proxy\pass` to the IP address of the DCS Redis instance in
    the same VPC. You can obtain the IP address from the *Connection*
    area on the DCS instance details page.
    :::

    ![**Figure 4** Adding Nginx configurations](https://arch-assets-dev.obs.eu-de.otc.t-systems.com/static/img/docs/best-practices/databases/distributed-cache-service/en-us_image_0267127015.png)

2.  Restarting Nginx.

    ```bash
    sudo service nginx restart
    ```

3.  Verify whether Nginx has been started.

    ```bash
    netstat -an|grep 808
    ```
    
    ![**Figure 5** Starting Nginx and verifying the start](https://arch-assets-dev.obs.eu-de.otc.t-systems.com/static/img/docs/best-practices/databases/distributed-cache-service/en-us_image_0245110151.png)

    If Nginx is listening on ports `8080` and `8081`, Nginx has been started successfully.

## (Optional) Persistent Connections

If persistent connections (**pconnect** in Redis terminology) are required
for public network access, add the following configuration in
[Setting up Nginx](#setting-up-nginx):

-   Timeout of a connection from Nginx to the server"
  
    ```json
        stream {
            server {
                listen 8080;
                proxy_pass 192.168.0.5:6379;
                proxy_socket_keepalive on;
                proxy_timeout 60m;
                proxy_connect_timeout 60s;
            }
            server {
                listen 8081;
                proxy_pass 192.168.0.6:6379;
                proxy_socket_keepalive on;
                proxy_timeout 60m;
                proxy_connect_timeout 60s;
            }
        }
    ```

    The default value of `proxy\timeout` is `10m`. You can set it
    to `60m` or other values as required. For details about this
    parameter, see [the Nginx official website](http://nginx.org/en/docs/stream/ngx_stream_proxy_module.html#).

-   Timeout of a connection from the client to Nginx:
    
    ```json
        http {
            keepalive_timeout 3600s;
        }
    ```
    
    The default value of `keepalive\_timeout` is `75s`. You can set
    it to `3600s` or other values as required. For details about this
    parameter, see [the Nginx official website](http://nginx.org/en/docs/http/ngx_http_core_module.html#http).

## Accessing DCS Redis Instances Using Nginx

1.  Log in to the ECS console and check the security group rules of the
    ECS that serves as the jump server. Ensure that access over ports
    `8080` and `8081` is allowed.

    1.  Click the ECS name to go to the details page.
    2.  On the *Security Groups* tab page, click *Modify Security
        Group Rule*. The security group configuration page is
        displayed.

    ![**Figure 6** Checking the ECS security group](https://arch-assets-dev.obs.eu-de.otc.t-systems.com/static/img/docs/best-practices/databases/distributed-cache-service/en-us_image_0000001275281529.png)

    ![**Figure 7** Adding an inbound rule for the security group](https://arch-assets-dev.obs.eu-de.otc.t-systems.com/static/img/docs/best-practices/databases/distributed-cache-service/en-us_image_0000001275484437.png)

2.  In the public network environment, open the **redis-cli** and run the
    following command to check whether the login and query are
    successful:

    :::note
    Ensure that redis-cli has been installed in the public network
    environment by referring to
    [redis-cli](https://docs.otc.t-systems.com/distributed-cache-service/umn/getting_started/accessing_an_instance/accessing_a_dcs_redis_instance_through_redis-cli.html).
    :::

    ```bash
    **./redis-cli -h** *{myeip}* **-p** *{port}* **-a** *{mypassword}*
    ```

    In the preceding command, `{myeip}` indicates the host connection
    address, which should be replaced with the EIP of the ECS. Replace
    `{port}` with the listening port of Nginx.

    As shown in the following figures, the two listening ports are `8080`
    and `8081`, which correspond to two DCS Redis instances.

    ![**Figure 8** Accessing the first DCS Redis instance using Nginx](https://arch-assets-dev.obs.eu-de.otc.t-systems.com/static/img/docs/best-practices/databases/distributed-cache-service/en-us_image_0245112317.png)

    ![**Figure 9** Accessing the second DCS Redis instance using Nginx](https://arch-assets-dev.obs.eu-de.otc.t-systems.com/static/img/docs/best-practices/databases/distributed-cache-service/en-us_image_0245112233.png)

    The jump server has now been set up. You can access Redis over
    public networks.