---
id: identifying-and-fixing-ransomware
title: Identifying and Fixing Ransomware
tags: [hss, cbr,ransomware]
---

# Identifying and Fixing Ransomware


According to the Open Telekom Cloud statistics on security intrusion events, 90% of ransomware attacks result from weak passwords, vulnerability exploits, and unsafe baseline settings. Identifying and fixing risks before real intrusions can significantly improve the system security. Open Telekom Cloud HSS helps you quickly identify risks and provides the one-click fix function to reduce O&M costs.

## Increasing Password Strength

HSS automatically scans servers every early morning for common weak passwords and [the passwords you banned](https://docs.otc.t-systems.com/host-security-service/umn/security_operations/policy_management/configuring_policies.html). You can then ask the weak password users to set stronger passwords. HSS can detect weak passwords in SSH, FTP, and MySQL.

1.  [Log in to the management console](https://console.otc.t-systems.com/console/).
2.  In the upper left corner of the page, select a region, click ![](/img/en-us_image_0000001312049497.png), and choose **Security** > **HSS**.
3.  In the navigation pane on the left, choose **Prediction** > **Baseline Checks**.
4.  Click the **Common Weak Password Detection** tab to view the weak passwords of the server.
    
    **Figure 1** Viewing common weak password detection  
    ![](/img/docs/best-practices/security-services/host-security-service/en-us_image_0000002177288488.png)
    
5.  Log in to servers to harden weak passwords based on the server names, account names, and account types corresponding to the detected weak passwords.
    
    After hardening weak passwords, you are advised to perform [manual scan](https://docs.otc.t-systems.com/host-security-service/umn/prediction/baseline_inspection/baseline_inspection_overview.html) immediately.
    

## Hardening Baseline Configurations

HSS scans your software for unsafe settings every early morning and provides suggestions. You can modify your settings accordingly to enhance server security.

1.  [Log in to the management console](https://console.otc.t-systems.com/console/).
2.  In the upper left corner of the page, select a region, click ![](/img/en-us_image_0000001312049497.png), and choose **Security** > **HSS**.
3.  In the navigation pane on the left, choose **Prediction** > **Baseline Checks**.
4.  Click the **Unsafe Configurations** tab to view the unsafe configurations of the server.
5.  Click the target baseline name. The baseline details page is displayed.
6.  Click the **Check Items** tab and click **Failed** to view baseline risk items.
    
    **Figure 2** Viewing baseline check details  
    ![](/img/docs/best-practices/security-services/host-security-service/en-us_image_0000002080792692.png)
    
7.  Click **View Details** in the **Operation** column of a check item to view the modification suggestions and affected servers.
8.  Log in to the affected server and harden the configuration based on the modification suggestions.
9.  After hardening a configuration, click **Verify** in the **Operation** column to verify the hardening result.
    
    :::note
        You are advised to repeat the preceding steps to fix all high-risk configurations.
    :::

## Fixing Vulnerabilities

By default, HSS automatically performs a comprehensive vulnerability detection every week and provides fixing suggestions. You can fix the vulnerabilities based on the suggestions. You can also configure the automatic vulnerability detection period. For details, see [Automatic Vulnerability Scan](https://docs.otc.t-systems.com/host-security-service/umn/prediction/vulnerability_management/vulnerability_scan.html).

:::note
    There are four levels of vulnerability fix priorities: critical, high, medium, and low. You are advised to fix vulnerabilities of the critical and high levels promptly and fix vulnerabilities of the medium and low levels based on service requirements.
:::

1.  [Log in to the management console](https://console.otc.t-systems.com/console/).
2.  In the upper left corner of the page, select a region, click ![](/img/en-us_image_0000001312049497.png), and choose **Security** > **HSS**.
3.  In the navigation pane on the left, choose **Prediction** > **Vulnerabilities**. The vulnerability management page is displayed.
4.  Click the **Linux Vulnerabilities**, **Windows Vulnerabilities**, **Web-CMS Vulnerabilities**, **Application Vulnerabilities**, and **Emergency Vulnerabilities** tabs to view the vulnerabilities of the server.
5.  Fix vulnerabilities based on vulnerability types.
    *   Linux and Windows vulnerabilities
        
        In the row of the vulnerability you want to fix, click **Fix** in the **Operation** column. You can also select multiple vulnerabilities and click **Fix** in the upper left corner of the vulnerability list to fix them in batches.
        
        Fixing kernel vulnerabilities may cause servers to be unavailable. Therefore, HSS does not automatically fix the server kernel vulnerabilities of CCE, MRS, or BMS. When batch fixing vulnerabilities, HSS filters out these types of vulnerabilities.
        
    *   Web-CMS, application, and emergency vulnerabilities
        1.  Click a vulnerability name to view vulnerability fixing suggestions.
        2.  Log in to the server affected by the vulnerability and manually fix the vulnerability.
            
            Vulnerability fixing may affect service stability. You are advised to use either of the following methods to avoid such impacts:
            
            *   Method 1: Create a VM to fix the vulnerability.
                1.  Create an image for the ECS to be fixed.
                    
                    For details, see [Creating a Full-ECS Image from an ECS](https://docs.otc.t-systems.com/image-management-service/umn/creating_a_private_image/creating_a_full-ecs_image_from_an_ecs.html).
                    
                2.  Use the image to create an ECS.
                    
                    For details, see [Creating an ECS from an Image](https://docs.otc.t-systems.com/image-management-service/umn/managing_private_images/creating_an_ecs_from_an_image.html).
                    
                3.  Fix the vulnerability on the new ECS and verify the result.
                4.  Switch services over to the new ECS and verify they are stably running.
                5.  Release the original ECS.
                    
                    If a fault occurs after the service switchover and cannot be rectified, you can switch services back to the original ECS.
                    
            *   Method 2: Fix the vulnerability on the target server.
                
                1.  Create a backup for the ECS to be fixed.
                    
                    For details, see [Creating a CSBS Backup](https://docs.otc.t-systems.com/cloud-server-backup-service/umn/getting_started/creating_a_csbs_backup.html).
                    
                2.  Fix vulnerabilities on the current server.
                3.  If services become unavailable after the vulnerability is fixed and cannot be recovered in a timely manner, use the backup to restore the server.
                

                :::note         
                    *   Use method 1 if you are fixing a vulnerability for the first time and cannot estimate impact on services. You are advised to choose the pay-per-use billing mode for the newly created ECS. After the service switchover, you can change the billing mode to yearly/monthly. In this way, you can release the ECS at any time to save costs if the vulnerability fails to be fixed.
                    *   Use method 2 if you have fixed the vulnerability on similar servers before.
                :::
                
        3.  After a vulnerability is fixed, click the vulnerability name to go to the vulnerability details page.
        4.  Click the **Affected** tab and choose in the **Operation** column of an affected asset or IP address to verify the vulnerability fixing result.
