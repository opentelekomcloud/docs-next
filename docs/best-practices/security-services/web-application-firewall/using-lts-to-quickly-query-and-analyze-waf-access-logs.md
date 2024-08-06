---
id: using-lts-to-quickly-query-and-analyze-waf-access-logs
title: Using LTS to Quickly Query and Analyze WAF Access Logs
tags: [waf, logging, lts]
---


# Using LTS to Quickly Query and Analyze WAF Access Logs

After you authorize WAF to access Log Tank Service (LTS), you can use
the WAF logs recorded by
[LTS](https://www.open-telekom-cloud.com/en/products-services/core-services/log-tank-service)
for quick and efficient real-time analysis, device O&M management, and
analysis of service trends.

This practice uses the access log stream **lts-waf-access** of log group
**lts-waf** as an example to describe how to use LTS to quickly query
and analyze logs.

## Prerequisites

- You have connected the website you want to protect to WAF.
- You have [enabled LTS for WAF
    logging](https://docs.otc.t-systems.com/web-application-firewall-dedicated/umn/enabling_lts_for_waf_logging.html).

## Procedure

1. Log in to the management console.

2. Click ![image1](/_static/images/en-us_image_0000001192435242.jpg) in
    the upper left corner of the management console and select a region
    or project.

3. Click ![image2](/_static/images/en-us_image_0000001237195219.png) in
    the upper left corner of the page and choose *Management &
    Governance* -> *Log Tank Service*.

4. In the *Log Group Name* column, click the name of the target log
    group (for example, **lts-group-waf**) to go the log stream page.

5. In the *Log Stream Name* column, click the name of the log stream
    used for WAF access logs (for example, **lts-topic-waf-access**).
    Then, select the *Log Stream* tab.

    ![**Figure 1** Accessing the log stream
    page](/_static/images/en-us_image_0000001698121802.png)

6. On the log stream details page, click
    ![image3](/_static/images/en-us_image_0000001811225769.png) in the
    upper right corner. On the page displayed, click the *Cloud
    Structured Parsing* tab.

7. Select *JSON* as the log structure, as shown in figure below:

    ![**Figure 2**
    JSON](/_static/images/en-us_image_0000001236748339.png)

8. In the *Step 1 Select a sample log event.* area, click *Select
    from existing log events*. In the displayed *Select Log Event*
    dialog box, select a log and click *OK*.

    ![**Figure 3** Select Log
    Event](/_static/images/en-us_image_0000001192108582.png)

9. In the *Step 2 Extract fields* area, click *Intelligent
    Extraction* and enable quick analysis for the log field you want to
    analyze (for example, **remote_ip**).

    **remote_ip**: IP address of a client from which the request
    originates.

    ![**Figure 4** Selecting log fields for quick
    analysis](/_static/images/en-us_image_0000001192348152.png)

10. Click *Save*. Then, LTS will start a quick analysis and do
    statistics for logs collected in a certain period.

    ![**Figure 5** Quickly analysis of access
    logs](/_static/images/en-us_image_0000001192109594.png)

11. In the navigation pane, choose *Visualization*. On the right pane,
    select a log query time range, enter an SQL statement in the search
    box, and click *Query* to query the specified log.

    You can enter either of the following SQL statements in the search
    box to query logs of a specified IP address:

    ```sql
    select * where remote_ip = 'xx.xx.xx.xx' 
    ```

    or

    ```sql
    select * where remote_ip like 'xx.xx.xx%'
    ```
