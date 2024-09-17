---
id: auditing-and-analyzing-logins-and-logouts-with-functiongraph
title: Auditing and Analyzing Logins and Logouts with Functiongraph
tags: [cts, cts-trigger, functiongraph, events, logs]
---

# Auditing and Analyzing Logins and Logouts with Functiongraph

Cloud Trace Service (CTS) collects real-time records of operations on cloud resources. You can create a CTS trigger to obtain records of subscribed cloud resource operations, analyze and process the operation records, and report alarms. You can use Simple Message Notification (SMN) to push alarm messages to service personnel by SMS message or email. [Figure 1](#figure-1) shows the procedure.

## Solution Design

<a id="figure-1"></a>

![Figure 1](/img/docs/best-practices/management-and-deployment/cloud-trace/auditing-and-analyzing-logins-and-logouts-with-functiongraph/en-us_image_0000001264679162.png)

**Figure 1** Flowchart  

* Operation records collected by CTS can be quickly analyzed and operations from specified IP addresses can be filtered out.
* CTS processes and analyzes data in response to log events in a serverless architecture, which features automatic scaling, no O&M, and pay-per-use billing.
* CTS sends alarm notifications through SMN.

## Enabling CTS

Configure a tracker, and the system immediately starts recording operations based on the new rule.

1. Log in to the console.
2. Click ![](/img/en-us_image_0000001264369622.png) in the upper left corner of the console and select a region and a project.
3. Click ![](/img/en-us_image_0000001312049497.png) in the upper left corner and choose *Management & Governance* -> *Cloud Trace Service*.
4. On the displayed page, choose *Tracker List* in the navigation pane on the left.
5. Locate a data tracker and click *Configure* in the *Operation* column.
    * **Operation**: Select the data operations that need to be recorded.
    * **Transfer to OBS**
        * If you select *Yes*, select an existing OBS bucket or create one directly on the *Configure Tracker* page and set **File Prefix**.
        * If you select *No*, no configuration is required.
    * **Create OBS Bucket**: If this function is enabled, an OBS bucket will be created automatically with the name you enter. If this function is disabled, select an existing OBS bucket.
    * **OBS Bucket**: You can create an OBS bucket or select an existing OBS bucket.
    * **Retention Period**: Select the duration for storing traces in the OBS bucket.
    * **File Prefix**: The prefix is used to mark a transferred trace file. Your specified prefix will be automatically added to the beginning of the name of a transferred file, helping you quickly filter files.
    * **Verify Trace File**: When this function is enabled, integrity verification will be performed to check whether trace files in OBS buckets have been tampered with.
6. Click *OK* to complete the tracker configuration.

## Creating an Agency

1. Log in to the [*Identity and Access Management (IAM) console*](https://console.otc.t-systems.com/iam/?locale=en-us). In the navigation pane on the left, choose *Agencies*.
2. On the *Agencies* page, click *Create Agency*.
3. Set the agency information.

    * For **Agency Name**, enter `serverless\_trust`.
    * For **Agency Type**, select **Cloud service**.
    * For **Cloud service**, select **FunctionGraph**.
    * For **Validity Period**, select **Unlimited**.
    * Click *Assign Permissions*. On the *Assign Permissions* page, select **Tenant Administrator**.

    :::note
        Users with the **Tenant Administrator** permission can perform any operations on all cloud resources of the enterprise.
    :::

4. Click *OK*.

## Pushing Alarm Messages

* Create a topic named `cts\_test` on the *SMN console*. For details, see [Creating a Topic](https://docs.otc.t-systems.com/simple-message-notification/umn/topic_management/creating_a_topic.html).
* Add subscriptions to the **cts\_test** topic to push alarm messages. For details, see [Adding a Subscription](https://docs.otc.t-systems.com/simple-message-notification/umn/topic_management/adding_a_subscription_to_a_topic.html).

:::note

* Alarm messages can be sent by **emails**, **SMS** messages, and **HTTP/HTTPS**.
* In this example, when log events trigger the specified function, the function filters operations that are performed by users not in the IP address whitelist, and pushes alarm messages to the subscribers.

:::

## Building a Program

<!-- TODO: change the link to otc hosted zip file -->
This section describes how to download and use the program package [(index.zip)](https://functionstage-examples.obs.cn-north-1.myhuaweicloud.com/index.zip) for log alarms.

### Creating a Function

<!-- TODO: change the link to otc hosted zip file -->
Create a function for extracting logs and upload the [sample code](https://functionstage-examples.obs.cn-north-1.myhuaweicloud.com/fss_examples_logstore_warning.zip) package. For details, see [Function Management](https://docs.otc.t-systems.com/function-graph/umn/function_management.html).

This function analyzes received operation records, filters logins or logouts from unauthorized IP addresses using a whitelist, and sends alarms under a specified SMN topic.

### Setting Environment Variables

On the *Configuration* tab page of the function, set the environment variables and SMN topic name, as shown in table below:

|       Environment Variable|       Description          |
|---------------------------|----------------------------|
|       SMN_Topic           |       SMN topic name.      |
|       RegionName          |       Region.              |
|       IP                  |       IP address whitelist.|

**Table 1** Environment variable description

For details about how to set environment variables, see [Using Environment Variables](https://docs.otc.t-systems.com/function-graph/umn/configuring_functions/configuring_environment_variables.html), as shown in [Figure 2](#figure-2).

<a id="figure-2"></a>

![](/img/docs/best-practices/management-and-deployment/cloud-trace/auditing-and-analyzing-logins-and-logouts-with-functiongraph/en-us_image_0000001264392960.png)

**Figure 2** Setting environment variables  

## Adding an Event Source

Create a CTS trigger, as shown in [Enabling CTS](#enabling-cts). For details, see [Using a CTS Trigger](https://docs.otc.t-systems.com/function-graph/umn/creating_triggers/using_a_cts_trigger.html).

<a id="figure-3"></a>

![](/img/docs/best-practices/management-and-deployment/cloud-trace/auditing-and-analyzing-logins-and-logouts-with-functiongraph/en-us_image_0000001312436037.png)

**Figure 3** Creating a CTS trigger  

CTS records the logins and logouts of users on IAM.

## Processing Operation Records

When a user performs login or logout using an account, the subscription service log will be triggered and a function will be directly invoked. The system then checks whether the IP address of the current login or logout account is in the whitelist based on function code. If the IP address is not in the whitelist, SMN will send notifications, as shown in [Figure 4](#figure-4).

<a id="figure-4"></a>

![](https://support.huaweicloud.com/intl/en-us/bestpractice-cts/en-us_image_0000001312598869.png)

**Figure 4** Alarm notification sent by email  

The email contains the unauthorized IP address and user operation (login or logout).

On the *Monitoring* tab page of the function, check the number of invocations, as shown in [Figure 5](#figure-5).

<a id="figure-"></a>

**Figure 5** Function metrics  
![](https://support.huaweicloud.com/intl/en-us/bestpractice-cts/en-us_image_0000001312357985.png)
