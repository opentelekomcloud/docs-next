---
id: preparation
title: Preparation
tags: []
---

# Preparation

### Enabling CTS

Configure a tracker, and the system immediately starts recording operations based on the new rule.

1.  Log in to the console.
2.  Click ![](/img/en-us_image_0000001264369622.png) in the upper left corner of the console and select a region and a project.
3.  Click ![](/img/en-us_image_0000001312049497.png) in the upper left corner and choose **Management & Governance** > **Cloud Trace Service**.
4.  On the displayed page, choose **Tracker List** in the navigation pane on the left.
5.  Locate a data tracker and click **Configure** in the **Operation** column.
    *   **Operation**: Select the data operations that need to be recorded.
    *   **Transfer to OBS**
        *   If you select **Yes**, select an existing OBS bucket or create one directly on the **Configure Tracker** page and set **File Prefix**.
        *   If you select **No**, no configuration is required.
    *   **Create OBS Bucket**: If this function is enabled, an OBS bucket will be created automatically with the name you enter. If this function is disabled, select an existing OBS bucket.
    *   **OBS Bucket**: You can create an OBS bucket or select an existing OBS bucket.
    *   **Retention Period**: Select the duration for storing traces in the OBS bucket.
    *   **File Prefix**: The prefix is used to mark a transferred trace file. Your specified prefix will be automatically added to the beginning of the name of a transferred file, helping you quickly filter files.
    *   **Verify Trace File**: When this function is enabled, integrity verification will be performed to check whether trace files in OBS buckets have been tampered with. 
6.  Click **OK** to complete the tracker configuration.

### Creating an Agency

1.  Log in to the [Identity and Access Management (IAM) console](https://console.otc.t-systems.com/iam/?locale=en-us). In the navigation pane on the left, choose **Agencies**.
2.  On the **Agencies** page, click **Create Agency**.
3.  Set the agency information.
    
    *   For **Agency Name**, enter **serverless\_trust**.
    *   For **Agency Type**, select **Cloud service**.
    *   For **Cloud service**, select **FunctionGraph**.
    *   For **Validity Period**, select **Unlimited**.
    *   Click **Assign Permissions**. On the **Assign Permissions** page, select **Tenant Administrator**.
    
    :::note 
        Users with the **Tenant Administrator** permission can perform any operations on all cloud resources of the enterprise.
    :::
4.  Click **OK**.

### Pushing Alarm Messages

*   Create a topic named **cts\_test** on the SMN console. For details, see [Creating a Topic](https://docs.otc.t-systems.com/simple-message-notification/umn/topic_management/creating_a_topic.html).
*   Add subscriptions to the **cts\_test** topic to push alarm messages. For details, see [Adding a Subscription](https://docs.otc.t-systems.com/simple-message-notification/umn/topic_management/adding_a_subscription_to_a_topic.html).


:::note
- Alarm messages can be sent by emails, SMS messages, and HTTP/HTTPS.
- In this example, when log events trigger the specified function, the function filters operations that are performed by users not in the IP address whitelist, and pushes alarm messages to the subscribers.
:::