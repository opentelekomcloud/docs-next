---
id: accessing-obs-through-an-nginx-reverse-proxy
title: Accessing OBS Through an NGINX Reverse Proxy
tags: [storage, obs, reverse-proxy, nginx]
---

# Accessing OBS Through an NGINX Reverse Proxy

Generally, you can access OBS using a bucket's access domain name [for
example](https://**bucketname**.obs.eu-de.otc.t-systems.com)
provided by OBS or using a user-defined domain name bound to an OBS
bucket.

In some cases, you may need to use a fixed IP address to access OBS. For
security purposes, some enterprises need to set a blacklist and a
whitelist of external IP addresses. In this case, a fixed IP address is
required. Also for security purposes, an OBS bucket does not have a
fixed IP address, because the DNS service of Open Telekom Cloud resolves
the bucket access domain name to different IP addresses.

In this case, you can set up an NGINX reverse proxy server on an ECS so
that you can access OBS through a fixed IP address.

## Solution Design

This part explains how to deploy NGINX on an ECS and set up an NGINX
reverse proxy server. The proxy is imperceptible. Requests are sent to
the reverse proxy server, which then obtains the required data from OBS
and returns the data to users. The reverse proxy server and OBS work as
a whole. Only the IP address of the proxy server is exposed, while the
actual domain name or IP address of OBS is hidden.

![*Figure 1* Principles of accessing OBS through an NGINX reverse
proxy](/img/docs/best-practices/storage/object-storage-service/en-us_image_0273872842.png)

## Prerequisites

- You have known the region and access domain name of the bucket. For
    example, the access domain name of a bucket in the eu-de region is
    `nginx-obs.obs.eu-de.otc.t-systems.com`. To obtain the
    information, see [Querying Basic Information of a
    Bucket](https://docs.otc.t-systems.com/object-storage-service/umn/obs_browser_operation_guide/managing_buckets/viewing_basic_information_of_a_bucket.html).
- You have a Linux ECS **in the same region**. CentOS is used here as an
    example. For details, see [Creating an
    ECS](https://docs.otc.t-systems.com/elastic-cloud-server/umn/getting_started/creating_an_ecs/index.html).
- The ECS is bound with an EIP, so that you can download the NGINX
    installation package over the public network.

## Installing NGINX on an ECS

In this example, CentOS Stream 9 is used as an example.

a.  Log in to the ECS where you will set up the NGINX reverse proxy
    server.

b.  Run the following command to install NGINX:

    ``` 
    sudo dnf install nginx
    ```

c.  Run the following commands to start NGINX and configure NGINX to
    start upon system startup:

    ``` 
    sudo systemctl start nginx
    sudo systemctl enable nginx
    ```

d.  Run the following commands to allow HTTP and HTTPS traffic and
    then restart the firewall:

    ``` 
    sudo firewall-cmd --permanent --zone=public --add-service=http
    sudo firewall-cmd --permanent --zone=public --add-service=https
    sudo firewall-cmd --reload 
    ```

e.  Use a browser on any device to access `http://**ECS EIP/`. If
    the following information is displayed, NGINX is successfully
    installed.

    ![*Figure 2* NGINX installed
    successfully](/img/docs/best-practices/storage/object-storage-service/en-us_image_0273792190.png)

## Configuring NGINX as reverse proxy for your OBS bucket

a.  Run the following command to open the *default.conf* file:

    ``` 
    vim /etc/nginx/conf.d/default.conf
    ```

b.  Press the *i* key to go to the edit mode and modify the
    *default.conf* file.

    ```bash
    server {
          listen       80;
          server_name  *.*.*.*;  # Enter the EIP of the ECS.
          proxy_buffering off;  # Disable the proxy buffer (memory).

          location / {
               proxy_pass  https://nginx-obs.obs.eu-de.otc.t-systems.com;  #Enter the OBS bucket domain name that starts with http:// or https://.
               index  index.html index.htm ;  #Specify the homepage of the website. If there are multiple files, Nginx checks the files based on their enumeration sequence.
            }
    }
    ```

c.  Press the *ESC* key and enter *:wq* to save the
    configuration and exit.

d.  Run the following command to check the status of the NGINX
    configuration file:

    ``` 
    sudo nginx -t
    ```

e.  Run the following command to restart the NGINX service for the
    configuration to take effect:

    ``` 
    sudo systemctl restart nginx
    ```

## Configuring an OBS bucket policy to allow the IP address of the NGINX proxy server to access OBS

:::note
This step is **optional**.
:::

If your bucket is publicly read or the URL needs to have a signature
contained when accessing objects in a private bucket, skip this
step. For details, see [Authentication of Signature in a
URL](https://docs.otc.t-systems.com/object-storage-service/api-ref/calling_apis/authentication/authentication_of_signature_in_a_url.html).

If you do not want URLs containing a signature to access resources
in your private bucket, configure the following bucket policy that
allows only the IP address of the NGINX proxy server to access your
bucket.

a.  In the navigation pane of OBS Console, choose *Object
    Storage*.

b.  In the bucket list, click the bucket you want to go to the
    *Objects* page.

c.  In the navigation pane, choose *Permissions* -> *Bucket
    Policies*.

d.  Click *Create*.

e.  Choose a policy configuration method you like. *Visual Editor*
    is used here.

f.  Configure the following parameters.

g.  Click *Create*.

## Verifying the reverse proxy configuration

On any device, use the ECS EIP and object name to access specified
OBS resources. If the resources are properly accessed, the
configuration is successful.

For example, visit `http://**ECS EIP**/otc.jpg`.

![*Figure 3* Using a fixed IP address to access OBS
resources](/img/docs/best-practices/storage/object-storage-service/en-us_image_0273876194.png)