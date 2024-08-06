---
id: combining-waf-and-layer-7-load-balancers-to-protect-services-over-any-ports
title: Combining WAF and Layer-7 Load Balancers to Protect Services over Any Ports
tags: [waf, layer-7, load-balancer, security]
---

# Combining WAF and Layer-7 Load Balancers to Protect Services over Any Ports

This topic walks you through how to combine dedicated WAF instances and
layer-7 load balancers to protect your services over non-standard ports
that cannot be protected with WAF alone. For ports supported by WAF, see
[Ports Supported by
WAF](https://support.huaweicloud.com/intl/en-us/usermanual-waf/waf_01_1249.html).

## Protection Scenarios

The following procedure describes how WAF and ELB together protect
**www.example.com:9876**. Port `9876` is a non-standard port WAF alone
cannot protect.

## Prerequisites

- You have purchased a dedicated layer-7 load balancer. For details
    about load balancer types, see [Differences Between Dedicated and
    Shared Load
    Balancers](https://support.huaweicloud.com/intl/en-us/productdesc-elb/elb_pro_0004.html).

    :::caution
    Dedicated WAF instances issued before April 2023 cannot be used with
    dedicated network load balancers. If you use a dedicated network
    load balancer (TCP/UDP), ensure that your dedicated WAF instance has
    been upgraded to the latest version (issued after April 2023).
    :::

- Related ports have been enabled in the security group to which the
    dedicated WAF instance belongs.

    You can configure your security group as follows:

  - **Inbound rules**

        Add an inbound rule to allow incoming network traffic to pass
        through over a specified port based on your service
        requirements. For example, if you want to allow access from port
        80, add a rule that allows `TCP` and port `80`.

  - **Outbound rules**

        Retain the default settings. All outgoing network traffic is
        allowed by default.

    For more details, see [Adding a Security Group
    Rule](https://support.huaweicloud.com/intl/en-us/usermanual-vpc/en-us_topic_0030969470.html).

## Procedure

1. [Buy a dedicated WAF instance](https://support.huaweicloud.com/intl/en-us/usermanual-waf/waf_01_0248.html).

2. Connect www.example.com to WAF by referring to [Adding a Website to
    WAF (Dedicated
    Mode)](https://support.huaweicloud.com/intl/en-us/usermanual-waf/waf_01_0250.html).
    Select any non-standard port as the protected port, for example,
    port 86, set **Server Port** to `9876`, and set **Proxy
    Configured** to `Layer-7 proxy`.

    ![**Figure 1** Adding a domain name to
    WAF](/img/docs/best-practices/security-services/web-application-firewall/en-us_image_0000001764480001.png)

3. Add listeners and backend server groups to the load balancer.

    1. [Log in to the management
        console](https://console-intl.huaweicloud.com/?locale=en-us).

    2. Click
        ![image1](/img/docs/best-practices/security-services/web-application-firewall/en-us_image_0000001420363093.jpg) in
        the upper left corner of the management console and select a
        region or project.

    3. Click
        ![image2](/img/docs/best-practices/security-services/web-application-firewall/en-us_image_0000001369643058.png) in
        the upper left corner of the page and choose *Elastic Load
        Balance* under *Networking* to go to the *Load Balancers*
        page.

    4. Click the name of the load balancer in the *Name* column to go
        to the *Basic Information* page.

    5. Click the *Listeners* tab and then click *Add Listener*. On
        the displayed page, configure the listener. In the *Frontend
        Port* text box, enter the port you want to protect. In this
        case, enter `9876`.

        ![**Figure 2** Configuring a
        listener](/img/docs/best-practices/security-services/web-application-firewall/en-us_image_0000001369483086.png)

    6. Click *Next: Configure Request Routing Policy*.

        ![**Figure 3** Configuring a backend server
        group](/img/docs/best-practices/security-services/web-application-firewall/en-us_image_0000001423609253.png)

        :::important

        - If you select **Weighted round robin** for **Load Balancing
            Algorithm**, disable **Sticky Session**. If you enable
            **Sticky Session**, the same requests will be forwarded to
            the same dedicated WAF instance. If this instance becomes
            faulty, an error will occur when the requests come to it
            next time.
        - For details about ELB traffic distribution policies, see
            [Load Balancing
            Algorithms](https://support.huaweicloud.com/intl/en-us/usermanual-elb/elb_ug_jt_0003.html).

        :::

    7. Click *Next: Add Backend Server* and click *Next: Confirm*.

4. Add the WAF instance to the load balancer.

    1. [Log in to the management
        console](https://console-intl.huaweicloud.com/?locale=en-us).

    2. Click
        ![image3](/img/docs/best-practices/security-services/web-application-firewall/en-us_image_0000001420502081.jpg) in
        the upper left corner of the management console and select a
        region or project.

    3. Click
        ![image4](/img/docs/best-practices/security-services/web-application-firewall/en-us_image_0000001369661940.png) in
        the upper left corner, select a region, and choose *Security &
        Compliance* -> *Web Application Firewall* to go to the
        *Dashboard* page.

    4. In the navigation pane on the left, choose *Instance
        Management* -> *Dedicated Engine* to go to the dedicated WAF
        instance page.

        ![**Figure 4** Dedicated engine
        list](/img/docs/best-practices/security-services/web-application-firewall/en-us_image_0000001369501992.png)

    5. Locate the row containing the WAF instance. In the *Operation*
        column, click *More* -> *Add to ELB*.

    6. In the *Add to ELB* dialog box, specify *ELB (Load
        Balancer)*, *ELB Listener*, and *Backend Server Group*
        based on previous step.

        ![**Figure 5** Add to
        ELB](/img/docs/best-practices/security-services/web-application-firewall/en-us_image_0000001369683888.png)

    7. Click *Confirm*. Then, configure service port for the WAF
        instance. In this example, configure *Backend Port* to `86`,
        which is the one we configured in step 2.

        ![**Figure 6** Configuring Backend
        Port](/img/docs/best-practices/security-services/web-application-firewall/en-us_image_0000001369344100.png)

    8. Click *Confirm*.

5. [Bind an EIP to a Load
    Balancer](https://support.huaweicloud.com/intl/en-us/usermanual-waf/waf_01_0252.html).

6. [Whitelist IP addresses of your dedicated WAF
    instances](https://support.huaweicloud.com/intl/en-us/usermanual-waf/waf_01_0343.html).

## How the Combination Protects Traffic

![image5](/img/docs/best-practices/security-services/web-application-firewall/en-us_image_0000001764240765.png)