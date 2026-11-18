---
id: creating-a-windows-Image-using-virtualBox-and-an-iso-file
title: Creating a Windows Image Using VirtualBox and an ISO File
tags: [ims, virtualbox, windows, iso]
---

# Creating a Linux Image Using VirtualBox and an ISO File

[VirtualBox](https://www.virtualbox.org/) is free, open-source virtualization software. It was first offered by InnoTek GmbH from Germany and re-branded as Oracle VM VirtualBox when InnoTek was acquired by Oracle Corporation.

For more information about VirtualBox, visit the Oracle official website. Click [here](https://www.virtualbox.org/wiki/Guest_OSes) to see the guest OSs that can work with VirtualBox.

You can use a 32-bit or 64-bit Windows guest OS provided by VirtualBox to create an image file in VHD format.
  
![**Figure 1** Image creation process](/img/docs/best-practices/computing/image-management-service/en-us_image_0200645302.png)

## Installing VirtualBox

### Prerequisites

The host where VirtualBox is to be installed must meet the following requirements:

* A 64-bit Windows OS (recommended).
* At least 4 GB of memory and a dual-core processor. For example, the host specifications can be 8U16G.
* At least 20 GB of available disk space.
* Hardware virtualization (Intel VT-x or AMD-V). For how to enable this, see [Configuring Host BIOS CPU Settings](#configuring-host-bios-cpu-settings).

:::note
For details about how to install VirtualBox, see the VirtualBox user guide at  
[https://www.virtualbox.org/manual/UserManual.html](https://www.virtualbox.org/manual/UserManual.html).
:::

### Configuring Host BIOS CPU Settings

For an **Intel host**, perform the following operations to enable hardware virtualization:

:::warning
The operations **may differ depending on the CPU type**. You can do it as prompted.
:::

1. During the host startup, press *the BIOS key set by the manufacturer to access the BIOS*.
2. Choose *Configuration* -> *Intel Virtual Technology*, and press *Enter*.
3. Select *Enabled* and press *Enter*. The value of *Intel Virtual Technology* will become *Enabled*.
4. Press *F10* to save the settings and exit.

    **Figure 1** Enabling hardware virtualization  

    ![](/img/docs/best-practices/computing/image-management-service/en-us_image_0107215471.png)

### Installing VirtualBox Binaries

1. Download the VirtualBox installation package. VirtualBox-5.2.0 is used as an example.

    Download it from [https://www.virtualbox.org/wiki/Downloads](https://www.virtualbox.org/wiki/Downloads).

2. Decompress the package. Right-click **VirtualBox-5.2.0-118431-Win.exe**, choose *Run as administrator*, and click *Next*.

    **Figure 2** Installing VirtualBox  

    ![](/img/docs/best-practices/computing/image-management-service/en-us_image_0107215473.png)

3. Select the VirtualBox installation path and click *Next*.

    **Figure 3** Selecting an installation path  

    ![](/img/docs/best-practices/computing/image-management-service/en-us_image_0107215475.png)

4. Personalize the settings and click *Next*.

    **Figure 4** Personalized settings

    ![](/img/docs/best-practices/computing/image-management-service/en-us_image_0107215477.png)

5. Click *Finish*.

## Creating a VM and Installing an OS

### Creating an Empty VM

1. Open VirtualBox and click *New*. In the displayed *Create Virtual Machine* dialog box, enter a VM name, select an OS type and version, and click *Next*.

    Take Ubuntu as an example. The type must be **Linux**. Ensure that the selected version is the same as that of the OS you want to install on the VM.

    **Figure 1** Creating a VM  
    ![](/img/docs/best-practices/computing/image-management-service/en-us_image_0000002111708454.png)

2. In the *Memory size* dialog box, set a value and click *Next*.

    You can reference the VM specifications or official OS requirements. The minimum value is 256 MB. You can set the memory size to 512 MB as an example.

    **Figure 2** Setting the memory size  

    ![](/img/docs/best-practices/computing/image-management-service/en-us_image_0000002111548706.png)

3. In the *Hard disk* dialog box, select *Create a virtual hard disk now* and click *Create*.

    **Figure 3** Creating a virtual hard disk  
    ![](/img/docs/best-practices/computing/image-management-service/en-us_image_0000002147267193.png)

4. In the *Hard disk file type* dialog box, select *VHD* and click *Next*.

    **Figure 4** Setting the hard disk file type  
    ![](/img/docs/best-practices/computing/image-management-service/en-us_image_0268287244.png)

5. In the *Storage on physical hard disk* dialog box, select *Dynamically allocated* and click *Next*.

    **Figure 5** Selecting the disk allocation mode  
    ![](/img/docs/best-practices/computing/image-management-service/en-us_image_0268288436.png)

6. In the *File location and size* dialog box, set the disk size and storage location.

    For example, you can set the disk size to 25 GB.

    **Figure 6** Setting the disk location and size  
    ![](/img/docs/best-practices/computing/image-management-service/en-us_image_0000002111548746.png)

7. Click *Create*.

please fix the markdown format inconsistencies in this > 
### Installing a Windows on the VM

The procedure varies depending on the image file you use. This section uses Windows Server 2008 R2 as an example to describe how to install Windows on the VM.

:::note
Make sure you have obtained the ISO image file of your target OS, for example, **Windows_server_2008_r2.iso**.
:::

Use the ISO file to install Linux for the empty VM.

1. In VirtualBox Manager, select the new VM and click *Settings*.

    **Figure 1** Setting the VM  
    ![](/img/docs/best-practices/computing/image-management-service/en-us_image_0000002147267229.png)

2. Choose *Storage* -> *Empty*, click ![](/img/docs/best-practices/computing/image-management-service/en-us_image_0268393752.png) in the *Attributes* area, and select the ISO image file **Windows_server_2008_r2.iso**.

    **Figure 2** Selecting the ISO file to be mounted  
    ![](/img/docs/best-practices/computing/image-management-service/en-us_image_0000002111708506.png)

    **Figure 3** Mounted ISO file  
    ![](/img/docs/best-practices/computing/image-management-service/en-us_image_0000002111548750.png)

3. Click *OK*.
4. In VirtualBox Manager, select the new VM and click *Start*.

    **Figure 4** Starting the VM  
    ![](/img/docs/best-practices/computing/image-management-service/en-us_image_0000002147267233.png)

5. Install the OS as prompted.

## Configuring the VM

### Install VirtualBox Guest Additions

After Guest Additions are installed on a Windows VM, files can be easily shared between the VM and host.

1.  On the VirtualBox Windows VM, choose **Devices** -> **Insert Guest Additions CD image**.
    
    **Figure 1** Installing Guest Additions  
    ![](/img/docs/best-practices/computing/image-management-service/en-us_image_0000002147237037.jpg)
    
2.  Choose **Computer** -> **CD Drive**, double-click VirtualBox Guest, and complete the installation as prompted.
3.  Verify the installation. After the installation is complete, click **Devices** to check whether a shared folder exists.
    
    **Figure 2** Verifying the installation  
    ![](/img/docs/best-practices/computing/image-management-service/en-us_image_0000002111558202.jpg)
    
4.  Set the folder sharing mode. Select a folder path on the host where VirtualBox has been installed and set the sharing mode. After the folder is shared, you can access it from the VirtualBox VM.
    
    **Figure 3** Setting the folder sharing mode  
    ![](/img/docs/best-practices/computing/image-management-service/en-us_image_0000002111717978.jpg)
    
### Install Cloudbase-Init (Optional)

To ensure that you can inject custom information (for example, the login password) into ECSs created from the image, you are advised to install Cloudbase-Init on the VM that is used as the image source. If you do not install it, you can log in to the ECSs only with the password specified in the image.

:::note
Cloudbase-Init is open-source software. If the installed version has security vulnerabilities, you are advised to upgrade it to the latest version.
In this guide, **CloudbaseInitSetup_0_9_11_x64** is used as an example.
:::

1.  Download a Cloudbase-Init package. Download a Cloudbase-Init package of the required version based on the OS bit from the [Cloudbase-Init official website](https://www.cloudbase.it/cloud-init-for-windows-instances/)
 and save the package to a local shared folder.
2.  On the VirtualBox Windows VM, choose **Computer** -> **Network** -> **VBOXSVR**.
3.  Double-click the shared folder, copy the Cloudbase-Init package to the VM, and double-click the package to install Cloudbase-Init.
    
### Configure Cloudbase-Init

1.  Edit the configuration file **C:\\Program Files\\Cloudbase Solutions\\Cloudbase-Init\\conf\\cloudbase-init.conf** in the Cloudbase-Init installation path.  
    a.  Add **netbios\_host\_name\_compatibility=false** to the last line of the file so that the hostname can have a maximum of 63 characters.
        
    :::note        
    If you are using NetBIOS in your network, the hostname cannot exceed 15 characters because NetBIOS has a 15-character limit.
    :::

    b.  Add **metadata\_services=cloudbaseinit.metadata.services.httpservice.HttpService** to enable the agent to access the IaaS OpenStack data source.  
    c.  Add **plugins** to configure the plugins that will be loaded. Separate plugins with commas (,). The information in bold is the keyword of each plugin. The 
    following plugins are loaded by default. You can keep all or some of them as needed:

        ```
        plugins=cloudbaseinit.plugins.common.localscripts.LocalScriptsPlugin,cloudbaseinit.plugins.common.mtu.MTUPlugin,cloudbaseinit.plugins.windows.createuser.CreateUserPlugin,cloudbaseinit.plugins.common.setuserpassword.SetUserPasswordPlugin,cloudbaseinit.plugins.common.sshpublickeys.SetUserSSHPublicKeysPlugin,cloudbaseinit.plugins.common.sethostname.SetHostNamePlugin,cloudbaseinit.plugins.windows.extendvolumes.ExtendVolumesPlugin,cloudbaseinit.plugins.common.userdata.UserDataPlugin,cloudbaseinit.plugins.windows.licensing.WindowsLicensingPlugin
        ```

        Plugin functions:
            
-   **LocalScriptsPlugin** configures scripts.
-   **MTUPlugin** configures MTU network interfaces.
-   **CreateUserPlugin** creates a user.
-   **SetUserPasswordPlugin** configures a password.
-   **SetUserSSHPublicKeysPlugin** configures a key.
-   **SetHostNamePlugin** configures a hostname.
-   **ExtendVolumesPlugin** expands disk space.
-   **UserDataPlugin** injects user data.
-   **WindowsLicensingPlugin** activates Windows instances.  
    
    :::note
    If you need to change the hostname of ECSs after they are created from this image, and services on the ECSs are sensitive to hostname changes, 
    you are not advised to configure the **SetHostNamePlugin** here.   
    ::: 

    Optional plugins:

    ```
    plugins=cloudbaseinit.plugins.windows.winrmlistener.ConfigWinRMListenerPlugin,cloudbaseinit.plugins.windows.winrmcertificateauth.ConfigWinRMCertificateAuthPlugin
    ```

    Plugin functions:
            
-   **ConfigWinRMListenerPlugin** configures the remote login listener.
-   **ConfigWinRMCertificateAuthPlugin** configures remote logins without password authentication.
                
    :::warning            
    The WinRM plug-ins use a weak cryptographic algorithm, which may cause security risks. So, you are advised not to load these plug-ins.
    :::

        d.  (Optional) Add the following configuration items to configure the number of retry times and interval for obtaining metadata:

                
    ```ini
    retry_count=40
    retry_count_interval=5
    ```

        e.  (Optional) Add the following configuration item to prevent metadata network disconnections caused by the default route added by Windows:

    ```ini
    [openstack]
    add_metadata_private_ip_route=False
    ```

        f.  (Optional) If the Cloudbase-Init version is 0.9.12 or later, you can customize the password length.
        
        Change the value of **user\_password\_length** to customize the password length.
        
        g.  (Optional) Add the following configuration item to disable password changing upon first login:
        
        **first\_logon\_behaviour=no**
        
        h.  (Optional) Add the following configuration item to ensure that time synchronization from BIOS persists through system restarts:
        
        **real\_time\_clock\_utc=true**
        
    :::note
    The registry entry **RealTimeIsUniversal=1** allows the system to synchronize time from BIOS. If **real\_time\_clock\_utc=true** is not added, Cloudbase-Init will set **RealTimeIsUniversal** back to **0**, causing the system to not synchronize time from BIOS after a restart.
    :::

2.  Release the current DHCP address so that the created ECSs can obtain correct addresses. In the Windows command line, run the following command to release the current DHCP address:
    
    ```shell
    ipconfig /release
    ```
    :::note    
    This operation will interrupt network connection and adversely affect ECS use. The network will automatically recover after the ECSs are started again.
    :::

3.  When creating an image using a Windows ECS, you need to change the SAN policy of the ECS to **OnlineAll**. Otherwise, EVS disks attached to the ECSs created from the image may be offline.
    
    Windows has three types of SAN policies: **OnlineAll**, **OfflineShared**, and **OfflineInternal**.
    
Table 1: SAN Policies

| Type            | Description                                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| OnlineAll       | All newly detected disks are automatically brought online.                                                                         |
| OfflineShared   | All disks on sharable buses, such as iSCSI and FC, are left offline by default, while disks on non-sharable buses are kept online. |
| OfflineInternal | All newly detected disks are left offline.                                                                                         |

        a.  Execute **cmd.exe** and run the following command to query the current SAN policy of the ECS using DiskPart: **diskpart**  
        b.  Run the following command to view the SAN policy of the ECS: **san**
-   If the SAN policy is **OnlineAll**, run the **exit** command to exit DiskPart.
-   If the SAN policy is not **OnlineAll**, go to [3.c](#ims_bp_0008__en-us_topic_0030730602_li1823793883810).  
  
        c.  Run the following command to change the SAN policy of the ECS to **OnlineAll**: **san policy=onlineall**

        
4.  Press Win+R to open the **Run** window. Enter **services.msc** and click **OK**.
    
    ![](/img/docs/best-practices/computing/image-management-service/en-us_image_0000002479007721.png)
    
5.  In the **Services** window, search for **cloudbase-init**.
    
    ![](/img/docs/best-practices/computing/image-management-service/en-us_image_0000002445608480.png)
    
6.  Set **Startup type** to **Automatic**.
    
    ![](/img/docs/best-practices/computing/image-management-service/en-us_image_0000002479129765.png)

## Obtaining the Image File

After the VM is configured, perform the following operations to generate and export a Linux image file:

1. Open VirtualBox, select the VM, choose *Settings* -> *Storage*, and select **Windows.vhd**.
2. On the right pane, view the image file location.
3. Go to the location to obtain the generated **Windows.vhd** image file.

## Registering the Image File as a Private Image

Upload the image file to an OBS bucket and register it as a private image.

:::important
- Only an unencrypted image file or an image file encrypted using SSE-KMS can be uploaded to an OBS bucket.
- When uploading an image file, you must select an OBS bucket with the storage class of Standard.
:::

1. Use OBS Browser+ to upload the image file. For details, see [OBS Browser+ Best Practices](https://docs.otc.t-systems.com/object-storage-service/tool-guide/best_practices/index.html). For how to download OBS Browser+, see [https://docs.otc.t-systems.com/object-storage-service/tool-guide/downloading_obs_browser.html](https://docs.otc.t-systems.com/object-storage-service/tool-guide/downloading_obs_browser.html).

2. Register the external image file as a private image. For details, see [Registering an Image File as a Private Image (Windows)](https://docs.otc.t-systems.com/image-management-service/umn/creating_a_private_image/creating_a_windows_system_disk_image_from_an_external_image_file/registering_an_external_image_file_as_a_private_image.html).