---
id: using-dbeaver-to-connect-to-mrs-hetuengine
title: Using DBeaver to Connect to MRS HetuEngine
tags: [mrs, dbeaver, hetuengine]
---

# Using DBeaver to Connect to MRS HetuEngine

DBeaver is an SQL client and database management tool. For relational databases, you can use JDBC APIs to interact with a database through the JDBC driver. For NoSQL databases, you can use the dedicated database driver.
The following uses DBeaver as an example to describe how to access HetuEngine.

## Solution Design

Enterprises usually store massive data, such as from various databases and warehouses, for management and information collection. However, diversified data sources, hybrid dataset structures, and scattered data storage raise the development cost for cross-source queries and prolong the cross-source query duration. HetuEngine simplifies cross-source analysis operations by providing unified standard SQL statements for collaborative analysis.

<center>
![Solution design: DBeaver accesses HetuEngine through JDBC, and HetuEngine queries GaussDB A, HBase, and Hive](/img/docs/best-practices/big-data-and-data-analysis/mapreduce-service/hetuengine-dbeaver-diagram.png)  
<small>**Figure 1:** Solution Design, DBeaver accesses HetuEngine through JDBC, and HetuEngine queries GaussDB A, HBase, and Hive.</small>
</center>

## Prerequisites

1. An MRS cluster with the HetuEngine component is created.
2. Kerberos authentication is disabled.
3. An EIP (elastic public IP address).
4. Secure communications are enabled.
5. A Windows ECS is in the same network/VPC as the MRS cluster.
6. Private network communication between the MRS cluster and the ECS is enabled through a security group.

## Creating the `hetu_admin` and `hetu_user` Users

### Creating a HetuEngine Administrator

1. Log in to *MRS Manager*.
2. Choose *System* -> *Permission* -> *User* and click *Create*.
3. Enter a username, for example, `hetu_admin`.
4. Set User Type to `Human-machine`.
5. Set Password and Confirm Password.
6. In the *User Group* area, click *Add* to add the `hive`, `hetuadmin`, `hadoop`, `hetuuser`, and `yarnviewgroup` user groups for the user.
7. In the *Primary Group* drop-down list, select `hive` as the primary group.
8. In the *Role* area, click *Add* to assign the `default`, `System_administrator`, and other desired tenant roles to the user.
9. Click *OK*.

### Creating a Common HetuEngine User

1. Log in to *MRS Manager*.
2. Choose *System* -> *Permission* -> *User* and click *Create*.
3. Enter a username, for example, `hetu_user`.
4. Set User Type to `Human-machine`.
5. Set Password and Confirm Password.
6. In the *User Group* area, click *Add* to add the `hetuuser` user group for the user.
7. In the *Role* area, click *Add* to assign the `default` or other desired tenant roles to the user.
8. Click OK.

## Creating a HetuEngine Compute Instance

:::note
You must use a leaf tenant when you create a HetuEngine compute instance because YARN jobs can only be submitted to the queues of a leaf tenant.
To avoid uncertainties caused by resource competition, you are advised to create independent resource pools for tenants used by HetuEngine.
:::

1. Log in to *MRS Manager* as user `hetu_user` and choose *Cluster* -> *Services* -> *HetuEngine*.
2. In the *Basic Information* area on the *Dashboard* page, click the link next to *HSConsole WebUI*. The *HSConsole* page is displayed.
3. Click *Compute Instance*, then *Create Configuration*, and configure the compute instance parameters:  
    i.   Set parameters in the Basic Configuration area.  
    ii.  Set parameters in the Coordinator Container Resource Configuration area.  
    iii. Set parameters in the Worker Container Resource Configuration area.  
    iv.  Set parameters in the Advanced Configuration area.  
    v.   Configure the Custom Configuration parameters.  

## Obtaining the JDBC JAR Package and Configuring Host Mapping

### Obtaining the JDBC JAR package

Download the HetuEngine client to obtain the JDBC JAR package.

1. Log in to *MRS Manager*.
2. Choose *Cluster* -> *Services* -> *HetuEngine* -> *Dashboard*.
3. In the upper right corner of the page, choose *More* -> *Download Client* and download the *Complete Client* to the local PC as prompted.
4. Decompress the HetuEngine client package **MRS\_Cluster ID\_ HetuEngine\_Client.tar** to obtain the JDBC file and save it to a local directory, for example, **D:\\test**.

:::note
How to obtain the JDBC file: Decompress the package in the **MRS\_Cluster ID\_HetuEngine\_ClientConfig\\HetuEngine** directory, in the subdirectory matching the CPU architecture (`arm` or `x86`), to obtain the **hetu-jdbc-\*.jar** file.
:::

### Adding the host mapping

Add the mapping of the host where the instance is located in the HSFabric or HSBroker mode to the local **hosts** file. The format is `Host IP address Host name`.

Example:

```text title="hosts"
192.168.42.90 server-2110081635-0001
```

:::note
The local **hosts** file in a Windows environment is stored in, for example, **C:\\Windows\\System32\\drivers\\etc**.
:::

## Configuring the MRS HetuEngine

1. Check that all roles are correctly assigned to `hetu_user`. The default role is `hive`.

    <center>
        ![User hetu\_user with its user groups, primary group, and roles in FusionInsight Manager](/img/docs/best-practices/big-data-and-data-analysis/mapreduce-service/hetuengine-dbeaver-hetu_user-groups-and-roles.png)
        <small>**Figure 2:** User *hetu_user* with its user groups, primary group, and roles in FusionInsight Manager.</small>
    </center>
2. In *MRS Manager*, go to *HetuEngine* -> *Configuration*.
3. Set `tenant.strictmode` to `false`.
    <center>
        ![HetuEngine configuration with the tenant strict mode parameter set to false](/img/docs/best-practices/big-data-and-data-analysis/mapreduce-service/hetuengine-dbeaver-hetuengine-tenant-strict-mode.png)
        <small>**Figure 3:** HetuEngine configuration with the tenant strict mode parameter set to false</small>
    </center>

4. Restart all MRS cluster services in MRS Manager.

## Creating the HetuEngine Database Connection

### Installing DBeaver

Download DBeaver (Community Edition) from [https://dbeaver.io/download/](https://dbeaver.io/download/) and install it on Windows.

### Configuring the driver

1. Open DBeaver, choose *Database* -> *New Database Connection*, search for *PrestoSQL* in *ALL*, and open *PrestoSQL*.
2. Click *Edit Driver Settings* and set the parameters by referring to the following table.

:::tip
Please use HSBroker by default. If HSBroker cannot be used for accessing HetuEngine across network segments, use HSFabric instead.
:::

Table 1: Driver settings

| Parameter      | Value                                          |
| -------------- | ---------------------------------------------- |
| *Class Name*   | `io.prestosql.jdbc.PrestoDriver`               |
| *URL Template* | See the HSFabric and HSBroker templates below. |

#### Accessing HetuEngine with HSFabric

```text
jdbc:presto://<HSFabricIP1:port1>,<HSFabricIP2:port2>,<HSFabricIP3:port3>/hive/default?serviceDiscoveryMode=hsfabric
```

Example:

```text
jdbc:presto://192.168.42.90:29902,192.168.42.91:29902,192.168.42.92:29902/hive/default?serviceDiscoveryMode=hsfabric
```

#### Accessing HetuEngine with HSBroker

```text
jdbc:presto://<HSBrokerIP1:port1>,<HSBrokerIP2:port2>,<HSBrokerIP3:port3>/hive/default?serviceDiscoveryMode=hsbroker
```

Example:

```text
jdbc:presto://192.168.42.90:29861,192.168.42.91:29861,192.168.42.92:29861/hive/default?serviceDiscoveryMode=hsbroker
```

:::note
To obtain the IP addresses and port numbers of the HSFabric and HSBroker nodes, perform the following operations:

1. Log in to *MRS Manager*.
2. Choose *Cluster* -> *Services* -> *HetuEngine*. Click the *Instance* tab to obtain the service IP addresses of all HSFabric or HSBroker instances. You can select one or more normal instances for connection.
3. To obtain the port numbers, choose *Cluster* -> *Services* -> *HetuEngine*. Click *Configurations*, then *All Configurations*.

   * Search for `gateway.port` to obtain the HSFabric port number. The default port number is `29902` in security mode and `29903` in normal mode.
   * Search for `server.port` to obtain the HSBroker port number. The default port number is `29860` in security mode and `29861` in normal mode.
  
:::

:::tip
If the connection fails, disable the proxy and try again.
:::

1. Click *Add File* and upload the JDBC driver package obtained in [Obtaining the JDBC JAR Package and Configuring Host Mapping](#obtaining-the-jdbc-jar-package-and-configuring-host-mapping).
2. Click *Find Class*. The driver class is automatically obtained. Click *OK* to complete the driver setting.

:::note
If `io.prestosql:presto-jdbc:RELEASE` exists in *Libraries*, delete it before clicking *Find Class*.
:::

### Creating the connection

1. Normal mode (clusters with Kerberos authentication disabled): on the page for creating a connection, configure the parameters on the *Driver properties* tab. Set `user` to the user created in [Creating the hetu\_admin and hetu\_user Users](#creating-the-hetu_admin-and-hetu_user-users).

    <center>
   ![DBeaver driver properties tab showing the Kerberos and SSL properties](/img/docs/best-practices/big-data-and-data-analysis/mapreduce-service/hetuengine-dbeaver-driver-config1.png)
    <small>**Figure 4:** DBeaver driver properties tab showing the Kerberos and SSL properties</small>

   ![DBeaver driver properties tab showing the authentication, hostname, and proxy properties](/img/docs/best-practices/big-data-and-data-analysis/mapreduce-service/hetuengine-dbeaver-driver-config2.png)
    <small>**Figure 5:**DBeaver driver properties tab showing the authentication, hostname, and proxy properties</small>

   ![DBeaver driver properties tab with the user property set to hetu\_user](/img/docs/best-practices/big-data-and-data-analysis/mapreduce-service/hetuengine-dbeaver-driver-config3.png)
    <small>**Figure 6:** DBeaver driver properties tab with the user property set to hetu\_user</small>

    </center>
2. Click *Test Connection*. After the connection is successful, click *OK*, then *Finish*. You can click *Connection details (name, type, ...)* to change the connection name.
    <center>

   ![DBeaver connection test dialog reporting a successful connection](/img/docs/best-practices/big-data-and-data-analysis/mapreduce-service/hetuengine-dbeaver-success.png)
    <small>**Figure 7:** DBeaver connection test dialog reporting a successful connection</small>

    </center>

After completing this guide, you will have prepared an MRS cluster for HetuEngine access, created the required users and a compute instance, and configured DBeaver with the HetuEngine JDBC driver. You can then execute SQL statements against HetuEngine directly from DBeaver.