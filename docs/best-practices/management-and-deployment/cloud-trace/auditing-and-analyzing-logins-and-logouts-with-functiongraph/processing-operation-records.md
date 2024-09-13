---
id: processing-operation-records
title: Processing Operation Records
tags: []
---

# Processing Operation Records
When a user performs login or logout using an account, the subscription service log will be triggered and a function will be directly invoked. The system then checks whether the IP address of the current login or logout account is in the whitelist based on function code. If the IP address is not in the whitelist, SMN will send notifications, as shown in [Figure 1](#figure-1).

<a id="figure-1"></a>

**Figure 1** Alarm notification sent by email  
![](https://support.huaweicloud.com/intl/en-us/bestpractice-cts/en-us_image_0000001312598869.png)

The email contains the unauthorized IP address and user operation (login or logout).

On the **Monitoring** tab page of the function, check the number of invocations, as shown in [Figure 2](#figure-2).

<a id="figure-2"></a>

**Figure 2** Function metrics  
![](https://support.huaweicloud.com/intl/en-us/bestpractice-cts/en-us_image_0000001312357985.png)