---
id: connecting-a-redis-client-to-dcs-through-cce
title: Connecting a Redis Client to DCS Through CCE
tags: [dcs, redis, cce]
---

# Connecting a Redis Client to DCS Through CCE

With the development of the container technology, more and more
applications are deployed in containers. This section describes how to
deploy a Redis client in a Cloud Container Engine (CCE) cluster
container and connect it to DCS.

![image1](/img/docs/best-practices/databases/distributed-cache-service/en-us_image_0000001479114773.png)

## Prerequisites

Prepare the following resources:

-   **VPC and subnet**, for example, `vpc-test`. For details, see
    [Creating a VPC](https://docs.otc.t-systems.com/virtual-private-cloud/umn/vpc_and_subnet/vpc/creating_a_vpc.html#en-us-topic-0013935842).
    
    (Optional) Create two subnets. Place your DCS instance in one subnet (subnet 1) and your CCE cluster in the other (subnet 2).
-   **DCS instance**, for example, `dcs-test`. For details, see
    [Creating a DCS Redis Instance](https://docs.otc.t-systems.com/distributed-cache-service/umn/getting_started/creating_an_instance/creating_a_dcs_redis_instance.html#dcs-ug-0326008).

    When creating a DCS instance, select the created VPC (`vpc-test`) and subnet 1.

-   **CCE cluster**, for example, `cce-test`. For details, see
    [Creating a CCE Cluster](https://docs.otc.t-systems.com/cloud-container-engine/umn/clusters/creating_a_cluster/creating_a_cluster.html#cce-10-0028).

    When creating a CCE cluster, set `Network Model` to `VPC network`, and select VPC `vpc-test` and subnet 2.

-   **CCE node pool**, for example, `cce-test-nodepool`. For details,
    see [Creating a Node Pool](https://docs.otc.t-systems.com/cloud-container-engine/umn/node_pools/creating_a_node_pool.html#cce-10-0012).

    When creating a node pool, set `Node Type` to `Elastic Cloud
    Server (VM)`, `Container Engine` to `Docker`, `OS` to
    `CentOS 7.7`, and bind an existing EIP or create one.

## Solution Design

![image2](/img/docs/best-practices/databases/distributed-cache-service/en-us_image_0000001427434044.png)

## Creating a Client Image

1.  Download a Redis client.

    a.  Log in to the CCE cluster node.

        Click the name of the created node pool. On the displayed page,
        click *Remote Login* in the upper right corner.

        ![image3](/img/docs/best-practices/databases/distributed-cache-service/en-us_image_0000001426108974.png)

    b.  Run the `gcc --version` command to check whether the GCC
        compiler for compiling the Redis program is installed in the OS.
        The following figure shows that the GCC compiler has been
        installed.

        ![image4](/img/docs/best-practices/databases/distributed-cache-service/en-us_image_0000001425794174.png)

        If the GCC compiler is not installed, run the following commands
        to install it:

        ```bash
        sudo yum update
        yum -y install gcc
        yum -y install gcc-c++
        ```
    c.  Run the following command to create the **redis** directory in
        the **home** directory, and then go to the directory:

        ```bash
        cd /home 
        mkdir redis
        cd redis
        ```

    d.  Run the following command to download the Redis client. The
        following takes version `5.0.13` as an example.

        ```bash
        sudo wget https://download.redis.io/releases/redis-5.0.13.tar.gz
        ```

        ![image5](/img/docs/best-practices/databases/distributed-cache-service/en-us_image_0000001425667664.png)

    e.  Decompress the Redis package, go to the Redis directory, run the
        compilation command, and return to the Redis directory.

        ```bash
        tar xvzf redis-5.0.13.tar.gz
        cd redis-5.0.13 
        make redis-cli
        cd ..
        ```

2.  Create a Dockerfile.

    Run the `vim Dockerfile` command to create a Dockerfile and enter
    the following information:

    ```bash title="Dockerfile"
    FROM centos:7
    RUN useradd -d /home/redis -m redis
    COPY ./redis-5.0.13 /home/redis/redis-5.0.13
    RUN chown redis:redis /home/redis/redis-5.0.13 -R
    USER redis
    ENV  HW_HOME=/home/redis/redis-5.0.13
    ENV  PATH=$HW_HOME/src:$PATH
    WORKDIR /home/redis/
    ```

    Press *ESC* to exit the editing mode and type `:wq!` to save the
    configuration and exit the editing interface.

3.  Build a client image.

    a.  Choose *Software Repository for Container* from the service
        list to go to the SWR console.

    b.  Click *Create Organization* in the upper right corner and
        enter an organization name to create an organization. You can
        also use an existing organization. (Click *Organization
        Management* in the navigation pane to view organizations.)

    c.  On the SWR *Dashboard* page, click *Generate Login Command*
        in the upper right corner to obtain and copy the login command.
        (`swr.xxxxxx.com` at the end of the login command is the image
        repository address.)

        ![**Figure 1** Obtaining a login command](/img/docs/best-practices/databases/distributed-cache-service/en-us_image_0000001425958670.png)

    d.  Run the copied login command on the CCE node to log in to SWR.

        ![**Figure 2** Logging in to SWR](/img/docs/best-practices/databases/distributed-cache-service/en-us_image_0000001426121394.png)

    e.  Run the following command to build an image:

        ```
        docker build -t <Image repository address>/<Organization name>/<Image name :version>
        ```

        *Image repository address* indicates the address of the image
        repository, which is at the end of the login command.
        *Organization name* indicates the name of the organization. *Image name*
        indicates the name of the image to be built. *version* indicates
        the image version. Replace them with the actual values.

        ![**Figure 3** Building an image](/img/docs/best-practices/databases/distributed-cache-service/en-us_image_0000001426145908.png)

4.  Run the following command to upload the client image to SWR:

    ```
    docker push <Image repository address>/<Organization name>/<Image name :version>
    ```

    ![**Figure 4** Uploading an image](/img/docs/best-practices/databases/distributed-cache-service/en-us_image_0000001426146644.png)

5.  After the image is uploaded, you can view it on the *My Images*
    page of the SWR console.

    ![**Figure 5** Viewing images](/img/docs/best-practices/databases/distributed-cache-service/en-us_image_0000001476188661.png)

## Creating a Workload

1.  On the DCS console, click the created Redis instance `dcs-test` to
    go to the details page.

2.  In the *Connection* area, obtain the IP address and port number of
    the Redis instance.

3.  Click *Connect to Redis* in the upper right corner to use the Web
    CLI.

4.  On the Web CLI, run a `SET` command. The following figure uses
    `SET hello "hello redis!"` as an example.

    ![image6](/img/docs/best-practices/databases/distributed-cache-service/en-us_image_0000001425685956.png)

5.  On the CCE console, click the created CCE cluster `cce-test`.

6.  In the navigation pane, choose *Workloads*. Click *Create
    Workload* in the upper right corner. For details, see [Creating a
    Workload](https://docs.otc.t-systems.com/cloud-container-engine/umn/workloads/creating_a_workload/creating_a_deployment.html#cce-10-0047).

    -   In the *Container Settings* -> *Basic Info* area, set
        *Image Name* to the name of the created Redis image.

    -   In the *Container Settings* -> *Lifecycle* area, configure
        the parameters as follows:

        <!-- **Command**: **/bin/bash**

        **Args**: **-c**

        while true ;do sleep 10;/home/redis/redis-5.0.13/src/redis-cli
        -h** **{10.0.0.0}** **-p** **6379** **-a** **{DCS instance
        password}** **get** **hello;done** -->

        In the preceding command, `10.0.0.0` indicates the IP address
        of the DCS instance, `6379` indicates the port number of the
        DCS instance, `{DCS instance password}` indicates the password
        of the DCS instance, and `hello` indicates the data set when
        you connect to Redis through the Web CLI. Replace them with the
        actual values.

        ![**Figure 6** Configuring lifecycle parameters](/img/docs/best-practices/databases/distributed-cache-service/en-us_image_0000001476223097.png)

7.  If the workload is in the `Running` state, it has been
    successfully created.

    ![**Figure 7** Checking the workload status](/img/docs/best-practices/databases/distributed-cache-service/en-us_image_0000001476227677.png)

## Testing the Workload

1.  Log in to the CCE cluster node. 
2.  Download and configure the `kubectl` configuration file by referring
    to [Connecting to a Cluster Using kubectl](https://docs.otc.t-systems.com/cloud-container-engine/umn/clusters/connecting_to_a_cluster/connecting_to_a_cluster_using_kubectl.html).

3.  Run the following command. If `Running` is returned, the Redis
    container is running.

    ```
    kubectl get pod -n default
    ```

    ![image7](/img/docs/best-practices/databases/distributed-cache-service/en-us_image_0000001426658306.png)

4.  Run the following command to view the logs of the Redis container:

    ```
    kubectl logs --tail 10 -f redis-xxxxxxxx -n default
    ```
    `redis-xxxxxxxx` indicates the name of the created workload pod.
    (Click the workload name to view the workload pod name.)

    ![image8](/img/docs/best-practices/databases/distributed-cache-service/en-us_image_0000001476217873.png)

    In the command output, the information returned by DCS is `hello
    redis!`, which is the data you've previously set.
5.  The test is complete.


