---
id: introduction
title: Introduction
tags: []
---

<!-- TODO: add tags -->
<!-- "CloudTraceService","FunctionGraph","EventTrigger","CTSTrigger","SecurityMonitoring","OperationLogs""EnvironmentVariables""CloudFunction","LogAnalysis" -->

# Introduction


### Description

Cloud Trace Service (CTS) collects real-time records of operations on cloud resources.

You can create a CTS trigger to obtain records of subscribed cloud resource operations, analyze and process the operation records, and report alarms.

You can use Simple Message Notification (SMN) to push alarm messages to service personnel by SMS message or email. [Figure 1](#figure-1) shows the procedure.


<a id="figure-1"></a>

**Figure 1** Flowchart  

![Figure 1](/img/docs/best-practices/management-and-deployment/cloud-trace/auditing-and-analyzing-logins-and-logouts-with-functiongraph/en-us_image_0000001264679162.png)


### Values

*   Operation records collected by CTS can be quickly analyzed and operations from specified IP addresses can be filtered out.
*   CTS processes and analyzes data in response to log events in a serverless architecture, which features automatic scaling, no O&M, and pay-per-use billing.
*   CTS sends alarm notifications through SMN.