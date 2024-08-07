---
id: configuring-anti-crawler-rules-to-prevent-crawler-attacks
title: Configuring Anti-Crawler Rules to Prevent Crawler Attacks
tags: [waf, anti-crawler, security]
---

# Configuring Anti-Crawler Rules to Prevent Crawler Attacks

Web crawlers make network information collection and query easy, but
they also introduce the following negative impacts:

-   Web crawlers always consume too much server bandwidth and increase
    server load as they use specific policies to browser as much
    information of high value on a website as possible.
-   Bad actors may use web crawlers to launch DoS attacks against
    websites. As a result, websites may fail to provide normal services
    due to resource exhaustion.
-   Bad actors may use web crawlers to steal mission-critical data on
    your websites, which will damage your economic interests.

WAF provides three anti-crawler policies, bot detection by identifying
User-Agent, website anti-crawler by checking browser validity, and CC
attack protection by limiting the access frequency, to comprehensively
mitigate crawler attacks against your websites.

## Prerequisites

The domain name has been connected to WAF.

## Enabling Robot Detection to Identify User-Agent

If you enable robot detection, WAF can detect and block threats such as
malicious crawlers, scanners, and web shells.

1.  Log in to the management console.

2.  Click ![image1](/img/docs/best-practices/security-services/web-application-firewall/en-us_image_0000001533036717.jpg) in
    the upper left corner of the management console and select a region
    or project.

3.  Click ![image2](/img/docs/best-practices/security-services/web-application-firewall/en-us_image_0000001533157169.png) in
    the upper left corner and choose **Web Application Firewall** under
    **Security**.

4.  In the navigation pane on the left, choose **Policies**.

5.  Click on **Create Policy**, type in a Policy Name and then click on
    the created Policy after its been created.

6.  Ensure that **Basic Web Protection** is enabled (status:
    ![image3]/img/docs/best-practices/security-services/web-application-firewall/en-us_image_0000001176153064.png)).

    ![**Figure 1** Basic Web Protection configuration
    area](/img/docs/best-practices/security-services/web-application-firewall/en-us_image_0000001716153600.png)

7.  In **Basic Web Protection** click **Advanced Settings** and enable
    **General Check** and **Webshell Detection**.

8.  Enable Anti-Crawler protection functions based on your business
    needs.

    ![**Figure 2** Protection
    functions](/img/docs/best-practices/security-services/web-application-firewall/en-us_image_0000001072768952.png)

If WAF detects that a malicious crawler or scanner is crawling your
website, WAF immediately blocks it and logs the event. You can view the
crawler protection logs on the **Events** page.

![image6](/img/docs/best-practices/security-services/web-application-firewall/en-us_image_0000001182529643.png)

## Enabling Anti-Crawler Protection to Verify Browser Validity

If you enable anti-crawler protection, WAF dynamically analyzes website
service models and accurately identifies crawler behavior based on data
risk control and bot identification approaches.

1.  Log in to the management console.

2.  Click ![image7](/img/docs/best-practices/security-services/web-application-firewall/en-us_image_0000001533461761.jpg) in
    the upper left corner of the management console and select a region
    or project.

3.  Click ![image8](/img/docs/best-practices/security-services/web-application-firewall/en-us_image_0000001483021752.png) in
    the upper left corner and choose **Web Application Firewall** under
    **Security**.

4.  In the navigation pane on the left, choose **Policies**.

5.  Click on **Create Policy**, type in a Policy Name and then click on
    the created Policy after its been created.

6.  Select the **JavaScript** tab and change **Status** if needed.

    **JavaScript** anti-crawler is disabled by default. To enable it,
    click ![image11](/img/docs/best-practices/security-services/web-application-firewall/en-us_image_0234013368.png) and
    then click **Confirm** in the displayed dialog box to toggle on
    ![image12](/img/docs/best-practices/security-services/web-application-firewall/en-us_image_0234013391.png).

    **Protective Action**: **Block**, **Verification code**, and **Log
    only**.

    <div class="note">

    <div class="title">

    Note

    </div>

    **Verification code**: If the JavaScript challenge fails, a
    verification code is required. Requests will be blocked unless the
    visitor enters a correct verification code.

    </div>

    <div class="important">

    <div class="title">

    Important

    </div>

    -   Cookies must be enabled and JavaScript supported by any browser
        used to access a website protected by anti-crawler protection
        rules.

    -   If your service is connected to CDN, exercise caution when using
        the JS anti-crawler function.

        CDN caching may impact JS anti-crawler performance and page
        accessibility.

    </div>

7.  Configure a JavaScript-based anti-crawler rule by referring to
    `Table 1 <waf_06_0006__en-us_topic_0110861318_table158689225415>`.

    Two protective actions are provided: **Protect all requests** and
    **Protect specified requests**.

    -   To protect all requests except requests that hit a specified
        rule

        Set **Protection Mode** to **Protect all requests**. Then, click
        **Exclude Rule**, configure the request exclusion rule, and
        click **Confirm**.

        ![**Figure 3** Exclude
        Rule](/img/docs/best-practices/security-services/web-application-firewall/en-us_image_0000001481001694.png)

    -   To protect a specified request only

        Set **Protection Mode** to **Protect specified requests**, click
        **Add Rule**, configure the request rule, and click **Confirm**.

    <div id="waf_06_0006__en-us_topic_0110861318_table158689225415">

    <table>
    <caption><strong>Table 1</strong> Parameters of a JavaScript-based
    anti-crawler protection rule</caption>
    <colgroup>
    <col style="width: 7%" />
    <col style="width: 82%" />
    <col style="width: 9%" />
    </colgroup>
    <thead>
    <tr class="header">
    <th>Parameter</th>
    <th>Description</th>
    <th>Example Value</th>
    </tr>
    </thead>
    <tbody>
    <tr class="odd">
    <td>Rule Name</td>
    <td>Name of the rule</td>
    <td>waf</td>
    </tr>
    <tr class="even">
    <td>Rule Description</td>
    <td>A brief description of the rule. This parameter is optional.</td>
    <td><code>-</code></td>
    </tr>
    <tr class="odd">
    <td>Effective Date</td>
    <td>Time the rule takes effect.</td>
    <td>Immediate</td>
    </tr>
    <tr class="even">
    <td>Condition List</td>
    <td><p>Parameters for configuring a condition are as follows:</p>
    <ul>
    <li><p><strong>Field</strong>: Select the field you want to protect from
    the drop-down list. Currently, only <strong>Path</strong> and
    <strong>User Agent</strong> are included.</p></li>
    <li><p><strong>Subfield</strong></p></li>
    <li><p><strong>Logic</strong>: Select a logical relationship from the
    drop-down list.</p>
    <div class="note">
    <div class="title">
    <p>Note</p>
    </div>
    <p>If you set <strong>Logic</strong> to <strong>Include any
    value</strong>, <strong>Exclude any value</strong>, <strong>Equal to any
    value</strong>, <strong>Not equal to any value</strong>, <strong>Prefix
    is any value</strong>, <strong>Prefix is not any of them</strong>,
    <strong>Suffix is any value</strong>, or <strong>Suffix is not any of
    them</strong>, you need to select a reference table.</p>
    </div></li>
    <li><p><strong>Content</strong>: Enter or select the content that
    matches the condition.</p></li>
    </ul></td>
    <td><strong>Path</strong> <strong>Include</strong>
    <strong>/admin</strong></td>
    </tr>
    <tr class="odd">
    <td>Priority</td>
    <td>Rule priority. If you have added multiple rules, rules are matched
    by priority. The smaller the value you set, the higher the
    priority.</td>
    <td>5</td>
    </tr>
    </tbody>
    </table>

    **Table 1** Parameters of a JavaScript-based anti-crawler protection
    rule

    </div>

If you enable anti-crawler, web visitors can only access web pages
through a browser.

![image13](/img/docs/best-practices/security-services/web-application-firewall/en-us_image_0000001132757446.png)

## Configuring CC Attack Protection to Limit Access Frequency

A CC attack protection rule uses a specific IP address, cookie, or
referer to limit the access to a specific path (URL), mitigating the
impact of CC attacks on web services.

1.  [Log in to the management
    console](https://console-intl.huaweicloud.com/?locale=en-us).

2.  Click ![image14](/img/docs/best-practices/security-services/web-application-firewall/en-us_image_0000001533701661.jpg)
    in the upper left corner of the management console and select a
    region or project.

3.  Click ![image15](/img/docs/best-practices/security-services/web-application-firewall/en-us_image_0000001533182113.png)
    in the upper left corner and choose **Web Application Firewall**
    under **Security & Compliance**.

4.  In the navigation pane on the left, choose **Policies**.

5.  Click on the **Policy** and ofn the displayed page, keep the
    **Status** toggle on
    (![image16](/img/docs/best-practices/security-services/web-application-firewall/en-us_image_0000001176153064.png)) for
    **CC Attack Protection**.

    ![**Figure 4** CC Attack Protection configuration
    area](/img/docs/best-practices/security-services/web-application-firewall/en-us_image_0000001763942269.png)

6.  In **CC Attack Protection** below **Status** , click **Customize
    Rule** and then **Add rule**. The following uses IP address-based
    rate limiting and human-machine verification as examples to describe
    how to add an IP address-based rate limiting rule, as shown in
    `Figure 5 <waf_06_0006__fig2194154173819>`.

    <div id="waf_06_0006__fig2194154173819">

    ![**Figure 5** Per IP address](/img/docs/best-practices/security-services/web-application-firewall/)

    </div>

    If the number of access requests exceeds the configured rate limit,
    the visitors are required to enter a verification code to continue
    the access.

    ![image17](/img/docs/best-practices/security-services/web-application-firewall/en-us_image_0293910230.png)

