---
id: from-on-premises-oracle-to-gaussdb-distributed
title: From On-premises Oracle to GaussDB Distributed
tags: [drs, oracle, gaussdb]
---
Purpose
-------

#### Description

You can use real-time synchronization of DRS to synchronize on-premises Oracle to GaussDB. Full+incremental synchronization can ensure that data is always in sync between the source Oracle and the destination GaussDB.

#### Problems

*   With the rapid increase of enterprise workloads, traditional databases have poor scalability and distributed databases are required.
*   Building traditional databases require purchasing and install servers, systems, databases, and other software. Its O&M is expensive and difficult.
*   The performance of complex queries for traditional databases is poor.
*   It is hard for traditional databases to smoothly migrate data without interrupting services.

#### Migration Architecture

![](/img/docs/best-practices/databases/data-replication-service/en-us_image_0000001606659998.png)

#### Migration Principles

Perform the following operations to complete full and incremental synchronization:

1.  In the full synchronization phase, migrate tables, primary keys, and unique keys.
2.  Start incremental data extraction to ensure that the incremental data generated during full data synchronization is completely extracted to the DRS instance.
3.  Start the full migration task.
4.  Automatically perform incremental synchronization after the full migration is complete. The playback starts from the location where the full migration starts.
5.  Start the comparison task after the incremental replay is complete to check the data consistency. Real-time comparison is supported.
6.  Start migration if the data is consistent.

![](/img/docs/best-practices/databases/data-replication-service/en-us_image_0000001606979486.png)

#### Service List

*   Virtual Private Cloud (VPC)
*   GaussDB
*   Data Replication Service (DRS)
*   Data Admin Service (DAS)

#### Notes on Usage

*   The resource planning in this document is for demonstration only. Adjust it as needed.
*   The end-to-end test data in this document is for reference only.
*   Full synchronization is used to migrate data. Incremental synchronization is used to synchronize data between the source and destination databases in real time.

#### Prerequisites

*   You have registered with Open Telekomn Cloud and completed account authentication.
*   You have set up an on-premises Oracle database for testing.
*   You have obtained the IP address, port number, account, and password of the Oracle database to be migrated.

Resource Planning
-----------------

    Table 1 Resource planning   


*       Category:       VPC
  *       Subcategory:       VPC name
  *       Planned Value:       vpc-src-172
  *       Remarks:       Customize a name for easy identification.
*       Category:       Region
  *       Subcategory:       Test region
  *       Planned Value:       For low network latency and quick resource access, select the region nearest to you.
  *       Remarks: 
*       Category:       AZ
  *       Subcategory:       AZ3
  *       Planned Value:       -
  *       Remarks: 
*       Category:       Subnet
  *       Subcategory:       172.16.0.0/16
  *       Planned Value:       Select a subnet with sufficient network resources.
  *       Remarks: 
*       Category:       Subnet name
  *       Subcategory:       subnet-src-172
  *       Planned Value:       Customize a name for easy identification.
  *       Remarks: 
*       Category:       Oracle
  *       Subcategory:       Name
  *       Planned Value:       orcl
  *       Remarks:       Customize a name for easy identification.
*       Category:       Specifications
  *       Subcategory:       16 vCPUs | 32 GB
  *       Planned Value:       -
  *       Remarks: 
*       Category:       Database version
  *       Subcategory:       11.2.0.1
  *       Planned Value:       -
  *       Remarks: 
*       Category:       Database user
  *       Subcategory:       test_info
  *       Planned Value:       Customize a user. However, the user must have the following permissions during migration: CREATE SESSION, SELECT ANY TRANSACTION, SELECT ANY TABLE, SELECT ANY DICTIONARY, and EXECUTE_CATALOG_ROLE.
  *       Remarks: 
*       Category:       GaussDB
  *       Subcategory:       Instance name
  *       Planned Value:       Auto-drs-gaussdbv5-tar-1
  *       Remarks:       Customize a name for easy identification.
*       Category:       Database version
  *       Subcategory:       GaussDB 1.3 Enterprise Edition
  *       Planned Value:       -
  *       Remarks: 
*       Category:       Instance type
  *       Subcategory:       Distributed (1 CN, 3 DN shards, and 3 replicas)
  *       Planned Value:       Select a distributed instance for the test.
  *       Remarks: 
*       Category:       Deployment model
  *       Subcategory:       Independent
  *       Planned Value:       -
  *       Remarks: 
*       Category:       Transaction consistency
  *       Subcategory:       Strong consistency
  *       Planned Value:       -
  *       Remarks: 
*       Category:       Shards
  *       Subcategory:       3
  *       Planned Value:       -
  *       Remarks: 
*       Category:       Coordinator nodes
  *       Subcategory:       3
  *       Planned Value:       -
  *       Remarks: 
*       Category:       Storage type
  *       Subcategory:       Ultra-high I/O
  *       Planned Value:       -
  *       Remarks: 
*       Category:       AZ
  *       Subcategory:       AZ2
  *       Planned Value:       Select a single AZ for the test. You are advised to select multiple AZs to improve instance availability in actual use.
  *       Remarks: 
*       Category:       Instance specifications
  *       Subcategory:       General-enhanced II 8 vCPUs | 64 GB
  *       Planned Value:       Select small specifications for the test. You are advised to configure specifications based on service requirements in actual use.
  *       Remarks: 
*       Category:       Storage space
  *       Subcategory:       480G
  *       Planned Value:       Select a small storage space for the test. You are advised to configure storage space based on service requirements in actual use.
  *       Remarks: 
*       Category:       Disk encryption
  *       Subcategory:       Disable
  *       Planned Value:       In this example, disk encryption is disabled. Enabling disk encryption improves data security, but slightly affects the read and write performance of the database.
  *       Remarks: 
*       Category:       Logging in to the database through DAS                        
  *       Subcategory:       DB engine
  *       Planned Value:       GaussDB
  *       Remarks:       -
*       Category:       Database source
  *       Subcategory:       GaussDB
  *       Planned Value:       Select the GaussDB instance created in this example.
  *       Remarks: 
*       Category:       Database name
  *       Subcategory:       postgres
  *       Planned Value:       -
  *       Remarks: 
*       Category:       Username
  *       Subcategory:       root
  *       Planned Value:       -
  *       Remarks: 
*       Category:       Password
  *       Subcategory:       -
  *       Planned Value:       Password of the root user of the GaussDB instance created in this example
  *       Remarks: 
*       Category:       DRS migration task
  *       Subcategory:       Migration task name
  *       Planned Value:       DRS-test-info
  *       Remarks:       Customize a name for easy identification.
*       Category:       Destination database name
  *       Subcategory:       test_database_info
  *       Planned Value:       Customize a name for easy identification, but the name must be compatible with the Oracle database name.
  *       Remarks: 
*       Category:       Source DB engine
  *       Subcategory:       Oracle
  *       Planned Value:       -
  *       Remarks: 
*       Category:       Destination DB engine
  *       Subcategory:       GaussDB
  *       Planned Value:       -
  *       Remarks: 
*       Category:       Network type
  *       Subcategory:       Public
  *       Planned Value:       Select the public network for the test.
  *       Remarks: 

Operation Process
-----------------

Figure 1 shows the main operation flowchart.

**Figure 1** Operation flowchart  
![](/img/docs/best-practices/databases/data-replication-service/en-us_image_0000001655860045.png)


Step 1: Create a VPC
--------------------

1.  Log in to the management console.
    
2.  Click ![image1](https://docs.otc.t-systems.com/virtual-private-cloud/umn/_images/en-us_image_0000001818982734.png) in the upper left corner and select the desired region and project.
    
3.  Click ![image2](https://docs.otc.t-systems.com/virtual-private-cloud/umn/_images/en-us_image_0000001865663089.png) in the upper left corner and choose **Network** > **Virtual Private Cloud**.
    
    The **Virtual Private Cloud** page is displayed.
    
4.  Click **Create VPC**.
    
5.  On the **Create VPC** page, set parameters as prompted.
    
    A default subnet will be created together with a VPC and you can also click **Add Subnet** to create more subnets for the VPC.
    
    ![**Figure 1** Create a VPC and subnet](https://docs.otc.t-systems.com/virtual-private-cloud/umn/_images/en-us_image_0000001865837676.png)
    
    **Figure 1** Create a VPC and subnet
    
    
Table 1 VPC parameter descriptions¶


* Category: Basic Information
  * Parameter: Region
  * Description: Select the region nearest to you to ensure the lowest latency possible.
  * Example Value: eu-de
* Category: Basic Information
  * Parameter: Name
  * Description: The VPC name.The name can contain a maximum of 64 characters, which may consist of letters, digits, underscores (_), hyphens (-), and periods (.). The name cannot contain spaces.
  * Example Value: VPC-001
* Category: Basic Information
  * Parameter: IPv4 CIDR Block
  * Description: The CIDR block of the VPC. The CIDR block of a subnet can be the same as the CIDR block for the VPC (for a single subnet in the VPC) or a subset of the CIDR block for the VPC (for multiple subnets in the VPC).The following CIDR blocks are supported:10.0.0.0/8-24172.16.0.0/12-24192.168.0.0/16-24
  * Example Value: 192.168.0.0/16
* Category: Basic Information
  * Parameter: Enterprise Project
  * Description: The enterprise project to which the VPC belongs.An enterprise project facilitates project-level management and grouping of cloud resources and users. The name of the default project is default.
  * Example Value: default
* Category: Basic Information/Advanced Settings
  * Parameter: Tag
  * Description: The VPC tag, which consists of a key and value pair. You can add a maximum of 20 tags to each VPC.The tag key and value must meet the requirements listed in Table 2.
  * Example Value: Key: vpc_key1Value: vpc-01
* Category: Basic Information/Advanced Settings
  * Parameter: Description
  * Description: Supplementary information about the VPC. This parameter is optional.The VPC description can contain a maximum of 255 characters and cannot contain angle brackets (< or >).
  * Example Value: N/A
* Category: Default Subnet
  * Parameter: Name
  * Description: The subnet name.The name can contain a maximum of 64 characters, which may consist of letters, digits, underscores (_), hyphens (-), and periods (.). The name cannot contain spaces.
  * Example Value: Subnet
* Category: Default Subnet
  * Parameter: IPv4 CIDR Block
  * Description: The CIDR block for the subnet. This value must be within the VPC CIDR block.
  * Example Value: 192.168.0.0/24
* Category: Default Subnet
  * Parameter: IPv6 CIDR Block
  * Description: Specifies whether to set IPv6 CIDR Block to Enable.After the IPv6 function is enabled, the system automatically assigns an IPv6 CIDR block to the created subnet. Currently, the IPv6 CIDR block cannot be customized. IPv6 cannot be disabled after the subnet is created.
  * Example Value: -
* Category: Default Subnet
  * Parameter: Associated Route Table
  * Description: The default route table to which the subnet will be associated. You can change the route table to a custom route table on the Subnets page.
  * Example Value: Default
* Category: Default Subnet/Advanced Settings
  * Parameter: Gateway
  * Description: The gateway address of the subnet.
  * Example Value: 192.168.0.1
* Category: Default Subnet/Advanced Settings
  * Parameter: DNS Server Address
  * Description: By default, two DNS server addresses are configured. You can change them as required. A maximum of five DNS server addresses can be configured. Multiple IP addresses must be separated using commas (,).
  * Example Value: 100.125.x.x
* Category: Default Subnet/Advanced Settings
  * Parameter: NTP Server Address
  * Description: The IP address of the NTP server. This parameter is optional.You can configure the NTP server IP addresses to be added to the subnet as required. The IP addresses are added in addition to the default NTP server addresses. If you do not specify this parameter, no additional NTP server IP addresses will be added.A maximum of four IP addresses can be configured. Multiple IP addresses must be separated using commas (,).
  * Example Value: 192.168.2.1
* Category: Default Subnet/Advanced Settings
  * Parameter: Tag
  * Description: The subnet tag, which consists of a key and value pair. You can add a maximum of 20 tags to each subnet.The tag key and value must meet the requirements listed in Table 3.
  * Example Value: Key: subnet_key1Value: subnet-01
* Category: Default Subnet/Advanced Settings
  * Parameter: Description
  * Description: Supplementary information about the subnet. This parameter is optional.The subnet description can contain a maximum of 255 characters and cannot contain angle brackets (< or >).
  * Example Value: N/A

    
    
Table 2 VPC tag key and value requirements¶


* Parameter: Key
  * Requirements: Cannot be left blank.Must be unique for each VPC and can be the same for different VPCs.Can contain a maximum of 36 characters.Can contain only the following character types:Uppercase lettersLowercase lettersDigitsOnly hyphens (-), underscores (_), and at signs (@) are allowed.
  * Example Value: vpc_key1
* Parameter: Value
  * Requirements: Can contain a maximum of 43 characters.Can contain only the following character types:Uppercase lettersLowercase lettersDigitsOnly underscores (_), hyphens (-), and at signs (@) are allowed.
  * Example Value: vpc-01

    
    
Table 3 Subnet tag key and value requirements¶


* Parameter: Key
  * Requirements: Cannot be left blank.Must be unique for each subnet.Can contain a maximum of 36 characters.Can contain only the following character types:Uppercase lettersLowercase lettersDigitsOnly hyphens (-), underscores (_), and at signs (@) are allowed.
  * Example Value: subnet_key1
* Parameter: Value
  * Requirements: Can contain a maximum of 43 characters.Can contain only the following character types:Uppercase lettersLowercase lettersDigitsOnly underscores (_), hyphens (-), and at signs (@) are allowed.
  * Example Value: subnet-01

    
6.  Click **Create Now**.

Step 2: Create a Security Group
-------------------------------

1.  Log in to the management console.
    
2.  Click ![image1](https://docs.otc.t-systems.com/virtual-private-cloud/umn/_images/en-us_image_0000001818982734.png) in the upper left corner and select the desired region and project.
    
3.  Click ![image2](https://docs.otc.t-systems.com/virtual-private-cloud/umn/_images/en-us_image_0000001865582681.png) in the upper left corner and choose **Network** > **Virtual Private Cloud**.
    
    The **Virtual Private Cloud** page is displayed.
    
4.  In the navigation pane on the left, choose **Access Control** > **Security Groups**.
    
    The security group list is displayed.
    
5.  In the upper right corner, click **Create Security Group**.
    
    The **Create Security Group** page is displayed.
    
6.  Configure the parameters as prompted.
    
    ![**Figure 1** Create Security Group](https://docs.otc.t-systems.com/virtual-private-cloud/umn/_images/en-us_image_0000001865662885.png)
    
    **Figure 1** Create Security Group
    
    
Table 2 Parameter description¶


* Parameter: Name
  * Description: MandatoryEnter the security group name.The security group name can contain a maximum of 64 characters, which may consist of letters, digits, underscores (_), hyphens (-), and periods (.). The name cannot contain spaces.NoteYou can change the security group name after a security group is created. It is recommended that you give each security group a different name.
  * Example Value: sg-AB
* Parameter: Enterprise Project
  * Description: MandatoryWhen creating a security group, you can add the security group to an enabled enterprise project.An enterprise project facilitates project-level management and grouping of cloud resources and users. The name of the default project is default.
  * Example Value: default
* Parameter: Template
  * Description: MandatoryThe system provides several security group templates for you to create a security group. A security group template has preconfigured inbound and outbound rules. You can select a template based on your service requirements.Table 1 describes the security group templates.
  * Example Value: General-purpose web server
* Parameter: Description
  * Description: OptionalSupplementary information about the security group. This parameter is optional.The security group description can contain a maximum of 255 characters and cannot contain angle brackets (< or >).
  * Example Value: N/A

    
7.  Confirm the inbound and outbound rules of the template and click **OK**.


Step 3: Create a GaussDB Instance
----------------------------------
This section describes how to create a GaussDB instance as the destination database.

1.  Log in to the management console
2.  Click ![](https://support.huaweicloud.com/intl/en-us/bestpractice-drs/en-us_image_0000001655860509.png) in the upper left corner and select a region.
3.  Under the service list, choose **Databases** > **GaussDB**.
4.  Click **Buy DB Instance**.
5.  Configure the instance name and basic information.
    
    ![](https://support.huaweicloud.com/intl/en-us/bestpractice-drs/en-us_image_0000001606660766.png)
    
6.  Configure instance specifications.
    
    ![](https://support.huaweicloud.com/intl/en-us/bestpractice-drs/en-us_image_0000001607020226.png)
    
    Select small specifications for the test. You are advised to configure specifications based on service requirements in actual use.
    
7.  Select a VPC and security group (created in [Creating a VPC and Security Group](https://support.huaweicloud.com/intl/en-us/bestpractice-drs/drs_04_0031.html)) for the instance and configure the database port.
    
    ![](https://support.huaweicloud.com/intl/en-us/bestpractice-drs/en-us_image_0000001655980449.png)
    
8.  Configure password and other information.
    
    ![](https://support.huaweicloud.com/intl/en-us/bestpractice-drs/en-us_image_0000001656100217.png)
    
9.  Click **Next**, confirm the information, and click **Submit**.
10.  Go to the instance list.
    
    If the instance status becomes available, the instance has been created.
    