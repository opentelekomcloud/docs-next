---
id: debugging-and-starting-the-application
title: Debugging and Starting the Application
tags: [cce, migration, velero, obs]
---

# Debugging and Starting the Application

## Application Verification

Debug and access the application to check data:

1.  In the navigation pane, choose *Resource Management* -> *Network*. Pick the EIP next to the WordPress Service.

![**Figure 1** Obtaining the access address](/img/docs/best-practices/containers/cloud-container-engine/en-us_image_0264587870.png)

2.  If the access is normal, and the migration is successful.

![**Figure 2** WordPress welcome page](/img/docs/best-practices/containers/cloud-container-engine/en-us_image_0264587871.png)

## Service Verification

Testing personnel check the functions of the new cluster without interrupting the live traffic.

-  Configure a test domain name.
-  Test service functions.
-  Check O&M functions, such as log monitoring and alarm reporting.

### Switching Live Traffic to the CCE Cluster

O&M switch DNS to direct live traffic to the CCE cluster.

-  DNS traffic switching: Adjust the DNS configuration to switch traffic.
-  Client traffic switching: Upgrade the client code or update the configuration to switch traffic.

### Bringing Other Cluster Offline

After confirming that the service on the CCE cluster is normal, bring other cluster offline and delete the backup files.

-  Verify that the service on the CCE cluster is running properly.
-  Bring other cluster offline.
-  Delete backup files.