---
id: enabling-ransomware-prevention-and-backup
title: Enabling Ransomware Prevention and Backup
tags: [hss, cbr,ransomware]
---


# Enabling Ransomware Prevention and Backup
Once being attacked by ransomware, we need to identify and isolate ransomware and back up and restore service data in a timely manner. HSS is an anti-intrusion, anti-encryption, and anti-proliferation ransomware detection engine that uses the dynamic deception technology. HSS can scan and kill ransomware in seconds, back up and recover service data in minutes, and provide industry-leading ransomware prevention and control capabilities.

You can enable ransomware prevention and backup to defend against ransomware attacks and reduce service loss risks, enhancing the ransomware prevention capabilities.

## Step 1: Creating a Ransomware Prevention Policy

Create a ransomware prevention policy and configure honeypot file directories, excluded directories, and protected file types based on service requirements.

1.  [Log in to the management console](https://console.otc.t-systems.com/console/).
2.  In the upper left corner of the page, select a region, click ![](/img/en-us_image_0000001312049497.png), and choose **Security** > **HSS**.
3.  Choose **Prevention** > **Ransomware Prevention**.
4.  Click the **Policies** tab. Click **Add Policy**. The **Add Policy** dialog box is displayed.
    
    **Figure 1** Adding a protection policy  
    ![](/img/docs/best-practices/security-services/host-security-service/en-us_image_0000001955394073.png)
    

5.  Configure the policy information by referring to [Table 1](#table1).
    
    **Figure 2** Protection policy parameters  
    ![](/img/docs/best-practices/security-services/host-security-service/en-us_image_0000002107288888.png)
    
    
        Table 1 Protection policy parameters       

<a id="table1"></a>
**Table 1: Protection policy parameters**



| Parameter                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Example Value                                                                                          |
|-------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| OS                            | Server OS.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Linux                                                                                                  |
| Policy                        | Policy name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | test                                                                                                   |
| Action                        | How an event is handled.<br/>- **Report alarm and isolate**<br/>- **Report alarm**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | **Report alarm and isolate**                                                                           |
| Dynamic Honeypot Protection   | After honeypot protection is enabled, the system deploys honeypot files in protected directories and other random locations (unless otherwise specified by users). The honeypot files deployed in random locations are automatically deleted every 12 hours and then randomly deployed again. A honeypot file occupies a few server resources. Therefore, configure the directories that you do not want to deploy the honeypot file in the excluded directories.<br/> (see also [Note](#note1)).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Enabled                                                                                                |
| Honeypot File Directories     | Directory that needs to be protected by static honeypot (excluding subdirectories). You are advised to configure important service directories or data directories.<br/><br/>Separate multiple directories with semicolons (;). You can configure up to 20 directories.<br/><br/>This parameter is mandatory for Linux servers and optional for Windows servers.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Linux: **/etc**<br/><br/>Windows: **C:\Test**                                                          |
| Excluded Directory (Optional) | Directory that does not need to be protected by honeypot files.<br/><br/>Separate multiple directories with semicolons (;). You can configure up to 20 excluded directories.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Linux: **/etc/lesuo**<br/><br/>Windows: **C:\Test\ProData**                                            |
| File Type                     | Types of files to be protected.<br/><br/>More than 70 file formats can be protected, including databases, containers, code, certificate keys, and backups.<br/><br/>This parameter is mandatory only for Linux servers.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Select all                                                                                             |
| (Optional) Process Whitelist  | Paths of the process files that can be automatically ignored during the detection, which can be obtained from alarms.<br/><br/>This parameter is mandatory only for Windows servers.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | -                                                                                                      |
| AI Ransomware Prevention      | This feature monitors all files on servers. If multiple files of the same process were created, deleted, modified, or renamed, this feature analyzes whether the files were encrypted by ransomware.<br/><br/>The graph engine further performs comprehensive source tracing analysis on suspicious operations to identify ransomware attacks. For details about graph engine detection, see [Policy Management Overview](https://docs.otc.t-systems.com/host-security-service/umn/security_operations/policy_management/policy_management_overview.html).<br/><br/>To use AI ransomware prevention, your Windows agent version must be 4.0.28 or later.To use the graph engine, you need to enable it and the HIPS policy as well. For details, see [Configuring Policies](https://docs.otc.t-systems.com/host-security-service/umn/security_operations/policy_management/configuring_policies.html).<br/><br/>To use AI ransomware prevention, your Windows agent version must be 4.0.28 or later.<br/><br/>**This parameter is mandatory only for Windows servers.** | ![](/img/docs/best-practices/security-services/host-security-service/en-us_image_0000002184519910.png) |


<a id="note1"></a>
:::note
    Currently, Linux servers support dynamic generation and deployment of honeypot files. Windows servers support only static deployment of honeypot files.
:::

6.  Confirm the policy information and click **OK**.

## Step 2: Enabling Ransomware Prevention

If the version of the agent installed on the Linux server is 3.2.8 or later or the version of the agent installed on the Windows server is 4.0.16 or later, ransomware prevention is automatically enabled with the HSS premium, WTP, or container edition. If the agent version does not support the automatic enabling of ransomware prevention, you can manually enable it.

1.  [Log in to the management console](https://console.otc.t-systems.com/console/).
2.  In the upper left corner of the page, select a region, click ![](/img/en-us_image_0000001312049497.png), and choose **Security** > **HSS**.
3.  Choose **Prevention** > **Ransomware Prevention**.
4.  Click the **Protected Servers** tab.
5.  Select the target server and click **Enable Ransomware Prevention** above the list.
6.  In the **Enable Ransomware Prevention** dialog box, confirm the server information and select a protection policy.
7.  Click **OK**.
    
    If the **Ransomware Prevention Status** of the server changes to **Protected**, ransomware protection is enabled.
    

## Step 3: Enabling Backup

To prevent service loss caused by ransomware attacks, enable the backup function for your servers to periodically back up service data.

:::note
If you do not have available vaults, purchase one by referring to [Purchasing a Server Backup Vault](https://docs.otc.t-systems.com/cloud-backup-recovery/umn/getting_started/step_3_create_a_backup/creating_a_cloud_server_backup.html) and then enable the backup function.
:::


1.  [Log in to the management console](https://console.otc.t-systems.com/console/).
2.  In the upper left corner of the page, select a region, click ![](/img/en-us_image_0000001312049497.png), and choose **Security** > **HSS**.
3.  Choose **Prevention** > **Ransomware Prevention**.
4.  Click the **Protected Servers** tab.
5.  Select a server and click **Enable Backup** in the upper part of the server list.
    
    **Figure 3** Enabling backup  
    ![](/img/docs/best-practices/security-services/host-security-service/en-us_image_0000001874909397.png)
    
6.  In the **Enable Backup** dialog box, select a vault.
    

    :::note
    
    A vault that meets the following conditions can be bound:
    
    *   The vault is in **Available** or **Locked** state.
    *   The backup policy is in **Enabled** state.
    *   The vault has backup capacity available.
    *   The vault is bound to fewer than 256 servers.
    :::
    
7.  Click **OK**.
    
    If the binding status of the repository on the target server is **Bound**, the ransomware backup function is enabled.
    

## Step 4: Handling the Alarm and Isolate the Infected Device.

When an intruder bypasses the defense mechanism, if you can detect and block the intruder in a timely manner, a disaster can be avoided. When enabling ransomware protection, you need to handle intrusion alarms in a timely manner to prevent ransomware from running and spreading.

1.  [Log in to the management console](https://console.otc.t-systems.com/console/).
2.  In the upper left corner of the page, select a region, click ![](/img/en-us_image_0000001312049497.png), and choose **Security** > **HSS**.
3.  In the navigation tree on the left, choose .
4.  Click the **Events** tab to view ransomware alarms.
5.  Click an alarm name to view its details.
    
    You can check whether ransomware exists on the server based on alarms and forensics.
    
6.  Select an alarm handling mode at the bottom of the page.
    
    **Figure 4** Selecting an alarm handling mode  
    ![](/img/docs/best-practices/security-services/host-security-service/en-us_image_0000001929843648.png)
    
    *   **Mark as handled**: If you have handled the event manually, you can choose **Mark as handled**.
    *   **Ignore**: If an alarm does not need to be handled, you can choose **Ignore**. After the alarm is ignored, the alarm status changes to **Handled**. HSS will not collect statistics on this event.
    *   **Add to alarm whitelist**: If an alarm is falsely reported, you can select **Add to alarm whitelist**. HSS will not report alarms later.
    *   **Isolate and kill**: If the alarm is caused by a ransomware program, you can select **Isolate and kill**. After the isolation, the program cannot perform **read/write** operations, and the process of the program is terminated immediately.
    
    :::caution
    Once being attacked, immediately disconnect the network or power off the system to prevent the spread of the ransomware attack. In addition, change the passwords of infected devices and other devices on the same LAN in a timely manner.
    :::

7.  In the **Handle Event** dialog box, click **OK**.

## Related Operations

Besides using HSS and CBR, you are advised to use the following methods to improve **anti-attack capabilities**.

*   **Minimize the scope exposed to the Internet**: Periodically scan external ports and ensure only necessary ports are enabled.
*   **Enhance network access control**: Clearly define network security zones and access control rules, minimize access rights, and update access control rules in a timely manner.
*   **Enhance account permission control**: Assign accounts and permissions to different roles based on access control rules such as identity management and fine-grained permission control. Improve the security of privileged accounts. Properly set and save accounts and passwords for key service assets of your company. Configure two-factor authentication to identify the personnel that access key assets and reduce brute-force cracking risks.
*   **Establish high-reliability service architecture**: Deploy cloud services in cluster mode. If an emergency occurs on a node, services will be switched to the standby node, improving reliability and preventing data loss. If you have sufficient resources, you can build intra-city or remote DR and backup systems. If the primary system is attacked by ransomware, your services can be quickly switched to the backup system and will not be interrupted.
*   **Develop emergency plans for security incidents**: Establish an emergency organization and management mechanism to deal with cybersecurity incidents such as ransomware attacks, and specify work principles, division of responsibilities, emergency handling processes, and key measures. Once your service is attacked by ransomware, immediately start the internal cyber security emergency plan and carry out standardized emergency handling to mitigate and eliminate the impact of the ransomware attack.
*   **Enhance employees' security awareness**: Improve employees' cyber security awareness through training and drills. Ensure that employees understand national cyber security laws and regulations and Open Telekom cyber security regulations, can identify common cyber security attacks such as phishing, have certain incident handling capabilities, and know the consequences and impacts of security incidents.