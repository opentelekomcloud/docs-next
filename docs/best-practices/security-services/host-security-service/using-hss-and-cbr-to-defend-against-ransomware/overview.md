---
id: overview
title: Overview
tags: [hss, cbr,ransomware]
---


# Overview

## Scenario

Ransomware attacks have become one of the biggest security challenges facing companies today. Ransomware is a type of malware attack in which the attacker locks the victim's data or asset devices and then demands a payment to unlock the data. Sometimes, attackers may not unlock the data even after receiving the ransom. Ransomware attacks can cause interruption to your services and the leakage or loss of critical information and data. As a result, the operation, economy, and reputation of your company may be greatly affected and security problems may hinder your company development.


When attacking cloud infrastructure, attackers usually attack multiple resources in an attempt to obtain access to customer data or company secrets. The process of a ransomware attack can be divided into three stages: investigation and detection, intrusion and lateral movement, and extortion.

- **Intrusion**: Attackers collect basic information, look for attack vectors, enter the environment, and establish an internal foothold.
- **Lateral movement**: Attackers deploy attack resources, detect network assets, elevate access permissions, steal credentials, implant ransomware, damage the detection and defense mechanism, and expand the attack scope.
- **Encryption extortion**: Attackers steal confidential data, encrypt key data, load ransomware information, and ask for ransom.
    
    **Figure 1** Extortion process  
    ![image](/img/docs/best-practices/security-services/host-security-service/en-us_image_0000001897127453.png)

    

This solution describes how to use HSS and CBR to implement three-phase protection for servers, including pre-event prevention, in-event detection and timely blocking, and post-event backup and restoration.

## Architecture

Enterprises or individuals can use HSS to detect ransomware and identify system risks. CBR can be used to back up service data and plan and control account permissions and organizational structures.

The following figure [HSS+CBR ransomware protection](#figure2) shows the protection principle.

<a id="figure2"></a>
**Figure 2** HSS+CBR ransomware protection

![](/img/docs/best-practices/security-services/host-security-service/en-us_image_0000001875291117.png)

For details about the defense measures in the figure, see:

- Pre-event: Identify weak passwords and vulnerabilities and assist users in fixing them.

    For details, see [Identifying and Fixing Ransomware](./defense-measures/identifying-and-fixing-ransomware.md).
    
- In-event: Detect ransomware, deploy bait files, and block encryption.
    
    For details, see [Enabling Ransomware Prevention and Backup](./defense-measures/enabling-ransomware-prevention-and-backup.md).
    
- Post-event: Restore the backup data.
    
    For details, see [Restoring Backup Data](./defense-measures/restoring-backup-data.md).
    

## Advantages

- Reduce system risks.
    
    Users can use HSS to periodically detect vulnerabilities and risks in the system and rectify them in a timely manner.
    
- Detect and block ransomware attacks in real time.
    
    After ransomware protection is enabled, HSS detects ransomware attacks in real time, generates alarms, and isolates ransomware programs.
    
- Back up service data to enhance anti-risk capabilities.
    
    If a server is attacked by ransomware, CBR can be used to restore backup data and services in a timely manner and reduce losses.
    