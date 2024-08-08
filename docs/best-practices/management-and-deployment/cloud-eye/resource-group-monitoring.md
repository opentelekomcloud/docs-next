---
id: resource-group-monitoring
title: Resource Group Monitoring 
tags: []
---

# Resource Group Monitoring

Cloud Eye provides the resource group and alarm functions. How to effectively group and monitor resources and receive alarm notifications of the resources in different groups?

Assume that there are four ECSs, namely ECS-01, ECS-02, ECS-03, and ECS-04. ECS-01 and ECS-02 are used by the development team. ECS-03 and ECS-04 are used by the test team. You need to obtain the running status of the two ECSs in the development team in a timely manner, including their CPU usage, idle CPU usage, average load, I/O usage, disk usage, memory usage, and percentage of total inode used.

|ECS Name|Group                     |Whether to Install the Agent|Department      |
|--------|--------------------------|----------------------------|----------------|
|ECS-01  |Development team resources|Yes                         |Development team|
|ECS-02  |Development team resources|Yes                         |Development team|
|ECS-03  |N/A                       |No                          |Test team       |
|ECS-04  |N/A                       |No                          |Test team       |

**Table 1** ECS list and group planning

## Prerequisites

The Agent has been installed on ECS-01 and ECS-02. For details, see [Agent Installation and Configuration](https://docs.otc.t-systems.com/cloud-eye/umn/server_monitoring/agent_installation_and_configuration.html).

## Creating a Resource Group

1. Log in to the management console.
2. In the upper left corner, select a region and a project.
3. Choose *Service List* -> *Management & Deployment* -> *Cloud Eye*.
4. In the navigation pane on the left, choose *Resource Groups*.
5. In the upper right corner, click *Create Resource Group*.
6. Enter the group name as prompted. In this example, enter *Development-group-resources*.
7. Select the target cloud service resources.

    ![**Figure 1** Selecting cloud service resources](/img/docs/best-practices/management-and-deployment/cloud-eye/en-us_image_0230389993.png)

8. Click *Create*.

## Creating a Topic and Configuring the Notification Object

When resource exceptions occur, an alarm notification can be sent to the configured topic subscribers.

1. Log in to the management console.
2. In the upper left corner, select a region and a project.
3. Under *Application*, select *Simple Message Notification*.

    The SMN console is displayed.

4. In the navigation pane on the left, choose *Topics*.

    The *Topics* page is displayed.

5. In the upper right corner, click *Create Topic*.

    The *Create Topic* dialog box is displayed.

    ![**Figure 2** Create Topic](/img/docs/best-practices/management-and-deployment/cloud-eye/en-us_image_0230390003.png)

6. Enter a topic name and display name.
7. Click *OK.*

    The topic you created is displayed in the topic list.

    :::tip
    Click the topic name to view the topic details and the total number of topic subscriptions.
    :::

8. In the topic list, locate the new topic. Click the topic name and in the upper right corner, select *Add Subscription*.

    ![**Figure 3** Add Subscription](/img/docs/best-practices/management-and-deployment/cloud-eye/en-us_image_0230391072.png)

9. Specify the subscription protocol and endpoints.
10. Click *OK*.

    The subscriptions you added are displayed in the subscription list.

## Creating an Alarm Rule

1. Log in to the management console.
2. In the upper left corner, select a region and a project.
3. Choose *Service List* -> *Management & Deployment* -> *Cloud Eye*.
4. In the navigation pane on the left, choose *Alarm Management* -> *Alarm Rules*.
5. In the upper right corner, click *Create Alarm Rule*.
6. On the *Create Alarm Rule* page, follow the prompts to set the parameters.
    1. Set the alarm rule name.

        ![**Figure 4** Setting an alarm rule name](/img/docs/best-practices/management-and-deployment/cloud-eye/en-us_image_0229987443.png)

    2. Set the monitored object and alarm triggering conditions.

        ![**Figure 5** Configuring an alarm rule](/img/docs/best-practices/management-and-deployment/cloud-eye/en-us_image_0229987653.png)

        Set **Group** to *Development group resources* created in [Step 1 Creating a Resource Group](#step-1-creating-a-resource-group).

    3. Set **Alarm Notification** parameters.

        ![**Figure 6** Configuring alarm notification](/img/docs/best-practices/management-and-deployment/cloud-eye/en-us_image_0229987913.png)

        :::note
        Note: When configuring **Notification Object**, select **Mytopic** created in [Step 2 Creating a Topic and Configuring the Notification Object](#step-2-creating-a-topic-and-configuring-the-notification-object).
        :::

    4. Click *Create*.

After the alarm rule is added, if the metric data reaches the threshold, Cloud Eye immediately informs you that the metric data of group **Development group resources** (ECS-01 and ECS-02) is abnormal through SMN.
