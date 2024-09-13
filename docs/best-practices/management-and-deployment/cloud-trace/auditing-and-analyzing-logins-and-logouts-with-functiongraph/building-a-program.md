---
id: building-a-program
title: Building a Program
tags: []
---

# Building a Program

<!-- TODO: change the link to otc hosted zip file -->
This section describes how to download and use the program package [(index.zip)](https://functionstage-examples.obs.cn-north-1.myhuaweicloud.com/index.zip) for log alarms.

### Creating a Function

<!-- TODO: change the link to otc hosted zip file -->
Create a function for extracting logs and upload the [sample code](https://functionstage-examples.obs.cn-north-1.myhuaweicloud.com/fss_examples_logstore_warning.zip) package. For details, see [Function Management](https://docs.otc.t-systems.com/function-graph/umn/function_management.html).


This function analyzes received operation records, filters logins or logouts from unauthorized IP addresses using a whitelist, and sends alarms under a specified SMN topic.

### Setting Environment Variables

On the **Configuration** tab page of the function, set the environment variables and SMN topic name, as shown in [Table 1](#table-1).


<a id="table-1"></a>

**Table 1** Environment variable description    

|       Environment Variable|       Description          |
|---------------------------|----------------------------|
|       SMN_Topic           |       SMN topic name.      |
|       RegionName          |       Region.              |
|       IP                  |       IP address whitelist.|


For details about how to set environment variables, see [Using Environment Variables](https://docs.otc.t-systems.com/function-graph/umn/configuring_functions/configuring_environment_variables.html), as shown in [Figure 2](#figure-2).

<a id="figure-2"></a>

**Figure 2** Setting environment variables  
![](/img/docs/best-practices/management-and-deployment/cloud-trace/auditing-and-analyzing-logins-and-logouts-with-functiongraph/en-us_image_0000001264392960.png)

