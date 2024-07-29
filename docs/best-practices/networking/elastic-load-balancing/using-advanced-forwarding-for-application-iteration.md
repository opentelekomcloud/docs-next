---
id: using-advanced-forwarding-for-application-iteration
title: Using Advanced Forwarding for Application Iteration
tags: [vpc, elb, load-balancing]
---

# Using Advanced Forwarding for Application Iteration

As the business grows, you may need to upgrade your application. Both
the old and new versions are used. Now, the new version is optimized
based on users'  feedback, and you want all the users to use the new
version. In this process, you can use advanced forwarding to route
requests to different versions.

## Solution Design

### Prerequisites

- An Open Telekom Cloud account is available and real-name
    authentication has been completed.
- The account balance is sufficient to pay for the resources involved
    in this best practice.
- Six (6) ECSs are available, with three having the application of the old
    version deployed and the other three having the new version
    deployed.

### Procedure

![*Figure 1*
Flowchart](/img/docs/best-practices/networking/elastic-load-balancing/en-us_image_0000001221220190.png)

 | Resource Name       |  Resource Type | Description                                    |
| --------------------- |------------- |---------------------------------------------- |
| ELB-Test          |    Dedicated   |  Only dedicated load balancers support advanced load balancer forwarding.                                                          |
| Server_Group-Test01 |  Backend     |  Used to manage the ECSs where the application  server group  of the old version is deployed.                                      |
| Server_Group-Test02   | Backend     |  Used to manage the ECSs where the application  server group  of the new version is deployed.                                      |
| ECS01              |   ECS       |    Used to deploy the application of the old      version and added to *Server_Group-Test01*.                                        |
| ECS02               |  ECS        |   Used to deploy the application of the old      version and added to *Server_Group-Test01*.                                        |
| ECS03               |  ECS    |       Used to deploy the application of the old      version and added to *Server_Group-Test01*.                                        |
| ECS04               |  ECS        |   Used to deploy the application of the new       version and added to *Server_Group-Test02*.                                        |
| ECS05               |  ECS       |    Used to deploy the application of the new       version and added to *Server_Group-Test02*.                                        |
| ECS06               |  ECS        |   Used to deploy the application of the new      version and added to *Server_Group-Test02*.                                        |

**Table 1** Resource planning

:::note
In this practice, the dedicated load balancer is in the same VPC as the
ECSs. You can also add servers in a different VPC or in an on-premises
data center as needed. For details, see
[Routing Traffic to Backend Servers in Different VPCs](/docs/best-practices/networking/elastic-load-balancing/routing-traffic-to-backend-servers-in-different-vpcs-from-the-load-balancer.md)
:::

## Configuring a Dedicated Load Balancer

1. Log in to the management console.

2. Under *Networking*, click *Elastic Load Balance*.

3. In the upper right corner, click *Create Elastic Load Balancer*.

4. Create a dedicated load balancer *ELB-Test*. Configure the
    parameters as follows. For details, see [Elastic Load Balance User
    Guide](https://docs.otc.t-systems.com/elastic-load-balancing/umn/load_balancer/creating_a_dedicated_load_balancer.html).

    - *Type*: `Dedicated`
    - *Name*: `ELB-Test`
    - Configure other parameters as required.

5. Add an HTTP listener to *ELB-Test*. For details, see [Elastic Load
    Balance User
    Guide](https://docs.otc.t-systems.com/elastic-load-balancing/umn/listener/adding_an_http_listener.html).

    ![*Figure 2* HTTP
    listener](/img/docs/best-practices/networking/elastic-load-balancing/en-us_image_0000001265145841.png)

6. Enable advanced forwarding. For details, see [Elastic Load Balance
    User
    Guide](https://docs.otc.t-systems.com/elastic-load-balancing/umn/advanced_features_of_http_https_listeners/advanced_forwarding_dedicated_load_balancers/configuring_advanced_forwarding.html)

    ![*Figure 3* Enabling advanced
    forwarding](/img/docs/best-practices/networking/elastic-load-balancing/en-us_image_0000001220740254.png)

## Creating Backend Server Groups and Adding Backend Servers

1. Locate *ELB-Test* and click its name.

2. On the *Listeners* tab, click *Create Backend Server Group* in
    the upper right corner.

    - Name: `Server_Group-Test01`
    - *Backend Protocol*: `HTTP`
    - Configure other parameters as required.

3. Repeat *Step 2* to create backend server group `Server_Group-Test02`.

    ![*Figure 4* Backend server
    groups](/img/docs/best-practices/networking/elastic-load-balancing/en-us_image_0000001265579817.png)

4. Add `ECS01`, `ECS02`, and `ECS03` to backend server group
    `Server_Group-Test01`.

5. Add `ECS04`, `ECS05`, and `ECS06` to backend server group
    `Server_Group-Test02`

## Forwarding Requests to Different Versions of the Application based on HTTP Request Methods

Configure two advanced forwarding policies with the HTTP request method
as the condition to route GET and DELETE requests to the application of
the old version and POST and PUT requests to the application of the new
version. When the application of the new version runs stably, direct all
the requests to the application.

![*Figure 5* Forwarding requests based on HTTP request
methods](/img/docs/best-practices/networking/elastic-load-balancing/en-us_image_0000001265745537.png)

1. Locate the dedicated load balancer and click its name *ELB-Test*.

2. On the *Listeners* tab page, locate the HTTP listener added to the
    dedicated load balancer and click its name.

3. On the *Forwarding Policies* tab page on the right, click *Add
    Forwarding Policy* to forward GET and DELETE requests to the old
    version.

    Select *GET* and *DELETE* from the *HTTP request method*
    drop-down list, select *Forward to backend server group* for
    *Action*, and select *Server_Group-Test01* from the *Backend
    Server Group* drop-down list.

    ![*Figure 6* Forwarding GET and DELETE requests to the application
    of the old
    version](/img/docs/best-practices/networking/elastic-load-balancing/en-us_image_0000001265924809.png)

4. Click *Save*

5. Repeat *Step 3* and *Step 4* to add a forwarding policy to forward PUT and POST
    requests to the application of the new version.

    Select *PUT* and *POST* from the *HTTP request method*
    drop-down list, select *Forward to backend server group* for
    *Action*, and select *Server_Group-Test02* from the *Backend
    Server Group* drop-down list.

    ![*Figure 7* Forwarding PUT and POST requests to the application
    of the new
    version](/img/docs/best-practices/networking/elastic-load-balancing/en-us_image_0000001265646757.png)

## Forwarding Requests to Different Versions of the Application based on HTTP Headers

If the old version supports for example both Chinese and English, but the new
version only supports English because the Chinese version is still under
development, you can configure two advanced forwarding policies with the
HTTP header as the condition to route requests to the Chinese
application to the old version and requests to the English application
to the new version. When the application of the new version supports the
Chinese language, direct all the requests to the application.

![*Figure 8* Smooth application transition between the old and new
versions based on the HTTP request
header](/img/docs/best-practices/networking/elastic-load-balancing/en-us_image_0000001265465929.png)

1. Locate the dedicated load balancer and click its name *ELB-Test*.

2. On the *Listeners* tab page, locate the HTTP listener added to the
    dedicated load balancer and click its name.

3. On the *Forwarding Policies* tab page on the right, and click
    *Add Forwarding Policy* to forward requests to the old version.

    Select *HTTP header* from the drop-down list, set the key to
    *Accept-Language* and value to *zh-cn*, set the action to
    *Forward to backend server group*, and select
    *Server_Group-Test01* as the backend server group.

    ![*Figure 9* Forwarding requests to the application of the old
    version](/img/docs/best-practices/networking/elastic-load-balancing/en-us_image_0000001265928345.png)

4. Click *Save*.

5. Repeat *Step 3* and *Step 4* to add a forwarding policy to add a forwarding policy to forward requests to the application of the new version.

    Select *HTTP header* from the drop-down list, set the key to
    *Accept-Language* and value to *en-us*, set the action to
    *Forward to backend server group*, and select
    *Server_Group-Test02* as the backend server group.

    ![*Figure 10* Forwarding requests to the application of the new
    version](/img/docs/best-practices/networking/elastic-load-balancing/en-us_image_0000001265488349.png)

## Forwarding Requests to Different Versions of the Application based on Query Strings

If the application is deployed across regions, you can configure two
advanced forwarding policies with query string as the condition to
forward requests to the application in region 1 to the old version and
requests to the application in region 2 to the new version. When the
application of the new version runs stably, direct all the requests to
the new version.

![*Figure 11* Forwarding requests based on query
strings](/img/docs/best-practices/networking/elastic-load-balancing/en-us_image_0000001221308334.png)

:::note

- Dedicated load balancers can distribute traffic across VPCs or
    regions.
- In this example, you need to use Cloud Connect to connect the VPCs
    in the two regions and then use the dedicated load balancer to route
    traffic to backend servers in the two regions.

:::

1. Locate the dedicated load balancer and click its name *ELB-Test*.

2. On the *Listeners* tab page, locate the HTTP listener added to the
    dedicated load balancer and click its name.

3. On the *Forwarding Policies* tab page on the right, and click
    *Add Forwarding Policy* to forward requests to application of the
    old version.

    Select *Query string* from the drop-down list, set the key to
    *region* and value to *region01*, set *Action* to *Forward to
    backend server group*, and select *Server_Group-Test01* as the
    backend server group.

    ![*Figure 12* Forwarding requests to the old
    version](/img/docs/best-practices/networking/elastic-load-balancing/en-us_image_0000001221328134.png)

4. Click *Save*.

5. Repeat *Step 3* and *Step 4* to add a forwarding policy to add a forwarding policy to forward requests to the
    application of the new version.

    Select *Query string* from the drop-down list, set the key to
    *region* and value to *region02*, set *Action* to *Forward to
    backend server group*, and select *Server_Group-Test02* as the
    backend server group.

    ![*Figure 13* Forwarding requests to the new
    version](/img/docs/best-practices/networking/elastic-load-balancing/en-us_image_0000001265648321.png)