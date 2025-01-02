---
id: building-highly-available-web-server-clusters-with-keepalived
title: Building Highly Available Web Server Clusters with Keepalived
tags: [ecs, high-availability, keepalived]
---

# Building Highly Available Web Server Clusters with Keepalived

Virtual IP addresses are used for active and standby switchover of ECSs to achieve high availability. This way if one ECS goes down for some reason, the other one can take over and services continue uninterrupted. This article uses CentOS Stream release 9 ECSs as an example to describe how to set up highly available web server clusters using Keepalived and Nginx.

## Solution Design

A web cluster consists of multiple web servers and a load balancer.
Access requests will first be received by the load balancer, which then
distributes the requests to backend web servers based on the load
balancing policy.In this document, Nginx is used to implement load balancing.

### Network Topology

The data planning could follow one of the implementations below:

|No.               |Item|Quantity                                   |Specification                 |
|------------------|----|-------------------------------------------|------------------------------|
|1                 |VPC |1                                          |192.168.0.0/16                |
||Subnet            |1   |192.168.0.0/24                             |
|2                 |ECS |2                                          |1 vCPU, 1 GB, CentOS Stream release 9|
||IP address        |2   |ecs-HA1: 192.168.0.10 ecs-HA2: 192.168.0.20|
|3                 |EIP |1                                          |80.158.xxx.xxx                 |
||Virtual IP address|1   |192.168.0.100                              |

- Configure the two ECSs in the same subnet to work in the active/standby mode using Keepalived.
- Bind a single virtual IP address to the two ECSs.
- Bind the virtual IP address to an EIP, then you can access the active and standby ECSs bound with the virtual IP address from the Internet.

![**Figure 1** Network topology](/img/docs/best-practices/computing/elastic-cloud-server/en-us_image_0285681028.png)

:::note

- Select a region based on your service requirements.
- All cloud resources **must be in the same region**.

:::

### Procedure

The overall operation process is as follows:

![**Figure 2** Operation process](/img/docs/best-practices/computing/elastic-cloud-server/en-us_image_0285681029.png)

## Creating the Cluster

1. *Create a VPC and a subnet.*
   - Log in to the management console.
   - Click *Service List*. Under *Networking*, click *Virtual Private Cloud*.
   - Click *Create VPC*.
    Set required parameters as prompted based on the following table:

    |Parameter                 |Example Value |
      |--------------------------|--------------|
      |Name (of the VPC)         |vpc-HA        |
      |CIDR Block (of the VPC)   |192.168.0.0/16|
      |Name (of the subnet)      |subnet-HA     |
      |CIDR Block (of the subnet)|192.168.0.0/24|

   - Click *Create Now*.
2. *Apply for required cloud resources.*
   a.  Create ECSs.
      1. Log in to the management console.
      2. Click *Service List*. Under *Computing*, click *Elastic Cloud Server*.
      3. Click *Create ECS*.
      4. On the *Create ECS* page, set parameters as prompted. For details, see
      5. Set the ECS name to ecs-HA1 and ecs-HA2.

     :::note
     In this example, no data disk is purchased. You can buy data
     disks based on service requirements and ensure their service
     data consistency.
     :::

     1. (Optional) Configure security group rules to ensure that the
         two ECSs can communicate with each other.

         In this example, the two ECSs are in the same security group
         and can communicate with each other through the internal
         network by default. In this case, you do not need to
         configure rules.

         If two ECSs are in different security groups, you need to
         add inbound security group rules for the two ECSs. For
         details, see [Enabling ECSs in Different Security Groups to
         Communicate with Each Other Through an Internal
         Network](https://docs.otc.t-systems.com/elastic-cloud-server/umn/security/security_groups/security_group_configuration_examples.html#en-us-topic-0140323152-en-us-topic-0118534011-section14197522283).

        ![**Figure 3** Add Inbound Rule](/img/docs/best-practices/computing/elastic-cloud-server/en-us_image_0000001176019342.png)
   b.  Assign an EIP.
     2. Log in to the management console.
     3. Click *Service List*. Under *Network*, click *Elastic IP*.
     4. Click *Assign EIP* and set parameters as prompted. For
         details, see
         `Table 1`.
   c.  Assign a virtual IP address.
     5. Log in to the management console.
     6. Click *Service List*. Under *Network*, click *Virtual
         Private Cloud*.
     7. In the navigation pane on the left, click *Subnets*.
     8. In the subnet list, locate the target subnet and click its
         name.
     9. On the *IP Addresses* tab page, click *Assign Virtual IP
         Address* and set parameters as prompted.
3. *Configure the ECSs.*
    a.  Configure the ecs-HA1.
        1.  Bind EIP (`80.158.xxx.xxx`) to `ecs-HA1`.

            1.  Log in to the management console.
            2.  Click *Service List*. Under *Computing*, click
                *Elastic Cloud Server*.
            3.  In the ECS list, click the name of `ecs-HA1`.
            4.  Click the *EIPs* tab and then *Bind EIP*.
            5.  On the *Bind EIP* page, select a NIC and an EIP, and
                click *OK*.

        2.  Connect to `ecs-HA1` using SSH and run the following command
            to install the Nginx and Keepalived packages and related
            dependency packages:

            ```bash
            yum install nginx keepalived -y
            ```
        3.  Run the following command to edit the **nginx**
            configuration file and save it:

            ```bash
            **vim /etc/nginx/nginx.conf**
            ```

            An example is provided as follows:

            ```bash
            user root;
            worker_processes 1;
            #error_log logs/error.log;
            #error_log logs/error.log notice;
            #error_log logs/error.log info;
            #pid logs/nginx.pid;
            events {
                   worker_connections 1024;
            }
            http {
                 include mime.types;
                 default_type application/octet-stream;
                 #log_format main '$remote_addr  - $remote_user [$time_local] "$request" '
                 # '$status $body_bytes_sent  "$http_referer" '
                 # '"$http_user_agent"  "$http_x_forwarded_for"';
                 #access_log logs/access.log main;
                 sendfile on;
                 #tcp_nopush on;
                 #keepalive_timeout 0;
                 keepalive_timeout 65;
                 #gzip on;
                 server {
                        listen 80;
                        server_name localhost;
                         #charset koi8-r;
                         #access_log logs/host.access.log main;
                        location / {
                                    root html;
                                    index index.html index.html;
                                  }
                                  #error_page 404  /404.html;
                                  # redirect server error pages to the static page /50x.html
                                  error_page 500 502 503 504 /50x.html;
                                  location =  /50x.html {
                                                        root html;
                                                        }

                      }
               }
            ```

        4.  Run the following command to edit the **index.html** file
            and save the file:

            ```bash
            vim /usr/share/nginx/html/index.html
            ```

            An example is provided as follows:

            ``` 
            Welcome to ECS-HA1
            ```

        5.  Run the following commands to set the automatic startup of
            Nginx upon ECS startup:

            ```bash
            systemctl enable nginx
            systemctl start nginx.service
            ```

        6.  Verify the access to a single Nginx node.

            ![**Figure 4** ECS-HA1 access verification](/img/docs/best-practices/computing/elastic-cloud-server/en-us_image_0285681030.png)

        7.  Run the following command to edit the **keepalived**
            configuration file and save it:

            ```bash
            vim /etc/keepalived/keepalived.conf
            ```

            An example is provided as follows:

            ```bash
            ! Configuration File for keepalived
            global_defs {
            router_id master-node
            }
            vrrp_script chk_http_port {
                                  script  "/etc/keepalived/chk_nginx.sh"
                                  interval 2
                                  weight -5
                                  fall 2
                                  rise 1
                                 }
            vrrp_instance VI_1 {
                            state MASTER
                            interface ens3
                            mcast_src_ip 192.168.0.10
                            virtual_router_id 51
                            priority 101
                            advert_int 1
                            authentication {
                                          auth_type PASS
                                          auth_pass 1111
                                         }
                            unicast_src_ip 192.168.0.10
                            virtual_ipaddress {
                                         192.168.0.100
                                         }
            track_script {
                       chk_http_port
                        }
            }
            ```

        8.  Run the following command to edit the **nginx** monitoring
            script and save it:

            ```bash
            vim /etc/keepalived/chk_nginx.sh
            ```

            An example is provided as follows:

            ```bash
            #!/bin/bash
            counter=$(ps -C nginx --no-heading|wc -l)
            if [ "${counter}" = "0"  ]; then
              systemctl start nginx.service
               sleep 2
               counter=$(ps -C nginx  --no-heading|wc -l)
               if [ "${counter}" =  "0" ]; then
                  systemctl stop keepalived.service
               fi
            fi
            ```

            ```bash
            chmod +x /etc/keepalived/chk_nginx.sh adduser keepalived_script
            ```

        9.  Run the following commands to set the automatic startup of
            Keepalived upon ECS startup:

            ```bash
            systemctl enable keepalived
            systemctl start keepalived.service
            ```

    b.  Configure the `ecs-HA2`.
        10. Unbind EIP (`80.158.xxx.xxx`) from `ecs-HA1`.

            1.  Log in to the management console.
            2.  Click **Service List**. Under **Computing**, click
                **Elastic Cloud Server**.
            3.  In the ECS list, click the name of ecs-HA1.
            4.  Click the **EIPs** tab.
            5.  Locate the row that contains the EIP (80.158.xxx.xxx),
                and click **Unbind**.

        11. Bind EIP (80.158.xxx.xxx) to ecs-HA2.

            1.  Log in to the management console.
            2.  Click **Service List**. Under **Computing**, click
                **Elastic Cloud Server**.
            3.  In the ECS list, click the name of ecs-HA2.
            4.  Click the **EIPs** tab.
            5.  Click **Bind EIP**.
            6.  Select a NIC and an EIP and click **OK**.

        12. Connect to ecs-HA2 using SSH and run the following command
            to install the Nginx and Keepalived packages and related
            dependency packages:

            **yum install nginx keepalived -y**

        13. Run the following command to edit the **nginx.conf**
            configuration file:

            vim /etc/nginx/nginx.conf

            An example is provided as follows:

            ``` 
            user root;
            worker_processes 1;
            #error_log logs/error.log;
            #error_log logs/error.log notice;
            #error_log logs/error.log info;
            #pid logs/nginx.pid;
            events {
                  worker_connections 1024;
                  }
            http {
                 include mime.types;
                 default_type application/octet-stream;
                 #log_format main '$remote_addr  - $remote_user [$time_local] "$request" '
                 # '$status $body_bytes_sent  "$http_referer" '
                 # '"$http_user_agent"  "$http_x_forwarded_for"';
                 #access_log logs/access.log main;
                 sendfile on;
                 #tcp_nopush on;
                 #keepalive_timeout 0;
                 keepalive_timeout 65;
                 #gzip on;
                 server {
                      listen 80;
                      server_name localhost;
                      #charset koi8-r;
                      #access_log logs/host.access.log main;
                      location / {
                                root html;
                                index index.html index.htm;
                                }
                      #error_page 404  /404.html;
                      # redirect server error pages to the static page /50x.html
                      error_page 500 502 503 504 /50x.html;
                      location =  /50x.html {
                                          root html;
                                          }
                      }
            }
            ```

        14. Run the following command to edit the **index.html** file:

            **vim /usr/share/nginx/html/index.html**

            An example is provided as follows:

            ``` 
            Welcome to ECS-HA2
            ```

        15. Run the following commands to set the automatic startup of
            Nginx upon ECS startup:

            **systemctl enable nginx**

            **systemctl start nginx.service**

        16. Test the access to a single Nginx node.

            ![**Figure 5** ECS-HA2 verification result](/img/docs/best-practices/computing/elastic-cloud-server/en-us_image_0285681031.png)

        17. Run the following command to edit the Keepalived
            configuration file:

            **vim /etc/keepalived/keepalived.conf**

            An example is provided as follows:

            ``` 
            ! Configuration File for keepalived
            global_defs {
            router_id master-node
            }
            vrrp_script chk_http_port {
                      script  "/etc/keepalived/chk_nginx.sh"
                      interval 2
                      weight -5
                      fall 2
                      rise 1
                    }
            vrrp_instance VI_1 {
                 state BACKUP
                 interface ens3
                 mcast_src_ip 192.168.0.20
                 virtual_router_id 51
                 priority 100
                 advert_int 1
                 authentication {
                           auth_type PASS
                           auth_pass 1111
                           }
                 unicast_src_ip 192.168.0.20
                 virtual_ipaddress {
                                192.168.0.100
                                }
            track_script {
                 chk_http_port
                 }
            }
            ```

        18. Run the following command to edit the **nginx** monitoring
            script and add execute permissions:

            **vim /etc/keepalived/chk_nginx.sh**

            An example is provided as follows:

            ``` 
            #!/bin/bash
            counter=$(ps -C nginx --no-heading|wc -l)
            if [ "${counter}" = "0"  ]; then
                 systemctl start nginx.service
                 sleep 2
                 counter=$(ps -C nginx  --no-heading|wc -l)
                 if [ "${counter}" =  "0" ]; then
                      systemctl stop keepalived.service
                 fi
            fi
            ```

            **chmod +x /etc/keepalived/chk_nginx.sh** **adduser
            keepalived_script**

        19. Run the following commands to set the automatic startup of
            Keepalived upon ECS startup:

            **systemctl enable keepalived** **systemctl start
            keepalived**
4. **Bind a virtual IP address to an ECS.**
    a.  Unbind EIP (80.158.xxx.xxx) from ecs-HA2.

    b. Bind the virtual IP address to ecs-HA1.

        1.  Log in to the management console.
        2.  Click **Service List**. Under **Network**, click **Virtual
            Private Cloud**.
        3.  In the navigation pane on the left, click **Subnets**.
        4.  In the subnet list, locate the target subnet and click its
            name.
        5.  Click the **IP Addresses** tab, locate the row that contains
            the target virtual IP address, and click **Bind to Server**
            in the **Operation** column.
        6.  On the page that is displayed, select ecs HA1.
        7.  Bind the virtual IP address to ecs HA1. For details, see
            [Binding a Virtual IP Address to an EIP or
            ECS](https://docs.otc.t-systems.com/virtual-private-cloud/umn/virtual_ip_address/binding_a_virtual_ip_address_to_an_eip_or_ecs.html).

    c.  Bind the virtual IP address to ecs-HA2 by referring to

    d.  Bind the virtual IP address to the EIP `80.158.xxx.xxx`.
        8.  Log in to the management console.
        9.  Click *Service List*. Under *Network*, click *Virtual
            Private Cloud*.
        10. In the navigation pane on the left, click *Subnets*.
        11. In the subnet list, locate the target subnet and click its
            name.
        12. Click the *IP Addresses* tab, locate the row that contains
            the target virtual IP address, and click *Bind to EIP* in
            the *Operation* column.
        13. On the page that is displayed, select the EIP
            (`80.158.xxx.xxx`).
        14. Click *OK*.

## Verifying High Availability

1. Restart ecs-HA1 and ecs-HA2 through the management console.

2. Remotely log in to ecs-HA1 through the management console.

3. Run the following command to check whether the virtual IP address is
    bound to the eth0 NIC of ecs-HA1:

    **ip addr show**

    As shown in *Figure 6*, the virtual IP address has been bound to the `ens3` NIC of `ecs-HA1`.

    ![**Figure 6** Virtual IP address of ecs-HA1](/img/docs/best-practices/computing/elastic-cloud-server/en-us_image_0285681032.png)

4. Use a browser to access the EIP and check whether the web page on
    ecs-HA1 can be accessed.

    If the information shown in *Figure 7*`* is displayed, the access is normal.

    ![**Figure 7** ecs-HA1 access verification](/img/docs/best-practices/computing/elastic-cloud-server/en-us_image_0285681030.png)

5. Run the following command to disable Keepalived on ecs-HA1:

    **systemctl stop keepalived.service**

6. Run the following command to check whether ecs-HA2 has taken over
    the virtual IP address:

    **ip addr show**

    ![**Figure 8** Virtual IP address of ecs-HA2](/img/docs/best-practices/computing/elastic-cloud-server/en-us_image_0285681032.png)

7. Use a browser to access the EIP and check whether the web page on
    ecs-HA2 can be accessed.

    If the information shown in *Figure 9* is displayed, the access is normal.

    ![**Figure 9** ecs-HA2 access verification](/img/docs/best-practices/computing/elastic-cloud-server/en-us_image_0285681031.png)
