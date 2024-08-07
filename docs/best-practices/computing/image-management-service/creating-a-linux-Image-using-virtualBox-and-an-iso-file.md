---
id: creating-a-linux-Image-using-virtualBox-and-an-iso-file
title: Creating a Linux Image Using VirtualBox and an ISO File
tags: [ims, migration]
---

# Creating a Linux Image Using VirtualBox and an ISO File

Introduction
------------

#### VirtualBox

VirtualBox is free, open-source virtualization software. It was first offered by InnoTek GmbH from Germany and re-branded as Oracle VM VirtualBox when InnoTek was acquired by Oracle Corporation.

For more information about VirtualBox, visit the Oracle official website. Click [here](https://www.virtualbox.org/wiki/Guest_OSes) to see the guest OSs that can work with VirtualBox.

#### Scenarios

You can use a 32-bit or 64-bit Linux guest OS provided by VirtualBox to create an image file in VHD format.

#### Advantages

You can customize Linux image files.

#### Tools and Costs

#### Image Creation Process

The following figure shows how to use VirtualBox to create an image from an ISO file.

**Figure 1** Image creation process  
![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/en-us_image_0200645302.png)

Step 1: Installing VirtualBox
-----------------------------

#### Preparations

The host where VirtualBox is to be installed must meet the following requirements:

*   A 64-bit Windows OS (recommended).
*   At least 4 GB of memory and a dual-core processor. For example, the host specifications can be 8U16G.
*   At least 20 GB of available disk space.
*   Hardware virtualization (Intel VT-x or AMD-V). For how to enable this, see [Host CPU Settings (Hardware Virtualization)](#ims_bp_0017__section1503794314311).

#### Host CPU Settings (Hardware Virtualization)

For an Intel host, perform the following operations to enable hardware virtualization:

![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/public_sys-resources/note_3.0-en-us.png)

The operations may differ depending on the CPU type. You can do it as prompted.

1.  During the host startup, press the BIOS key set by the manufacturer to access the BIOS.
2.  Choose **Configuration** > **Intel Virtual Technology**, and press **Enter**.
3.  Select **Enabled** and press **Enter**. The value of **Intel Virtual Technology** will become **Enabled**.
4.  Press **F10** to save the settings and exit.
    
    **Figure 1** Enabling hardware virtualization  
    ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/en-us_image_0107215471.png)
    

#### Procedure

1.  Download the VirtualBox installation package. VirtualBox-5.2.0 is used as an example.
    
    Download it from [https://www.virtualbox.org/wiki/Downloads](https://www.virtualbox.org/wiki/Downloads).
    
2.  Decompress the package. Right-click **VirtualBox-5.2.0-118431-Win.exe**, choose **Run as administrator**, and click **Next**.
    
    **Figure 2** Installing VirtualBox  
    ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/en-us_image_0107215473.png)
    
3.  Select the VirtualBox installation path and click **Next**.
    
    **Figure 3** Selecting an installation path  
    ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/en-us_image_0107215475.png)
    
4.  Personalize the settings and click **Next**.
    
    **Figure 4** Personalized settings  
    ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/en-us_image_0107215477.png)
    
5.  Click **Finish**.


Step 2: Creating a VM and Installing an OS
------------------------------------------

## Creating an Empty VM

#### Prerequisites

VirtualBox has been installed.

#### Procedure

1.  Open VirtualBox and click **New**. In the displayed **Create Virtual Machine** dialog box, enter a VM name, select an OS type and version, and click **Next**.
    
    Take Ubuntu as an example. The type must be **Linux**.
    
    Ensure that the selected version is the same as that of the OS you want to install on the VM.
    
    **Figure 1** Creating a VM  
    ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/en-us_image_0268280658.png)
    
2.  In the **Memory size** dialog box, set a value and click **Next**.
    
    You can reference the VM specifications or official OS requirements. The minimum value is 256 MB. You can set the memory size to 512 MB as an example.
    
    **Figure 2** Setting the memory size  
    ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/en-us_image_0268284967.png)
    
3.  In the **Hard disk** dialog box, select **Create a virtual hard disk now** and click **Create**.
    
    **Figure 3** Creating a virtual hard disk  
    ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/en-us_image_0268287010.png)
    
4.  In the **Hard disk file type** dialog box, select **VHD** and click **Next**.
    
    **Figure 4** Setting the hard disk file type  
    ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/en-us_image_0268287244.png)
    
5.  In the **Storage on physical hard disk** dialog box, select **Dynamically allocated** and click **Next**.
    
    **Figure 5** Selecting the disk allocation mode  
    ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/en-us_image_0268288436.png)
    
6.  In the **File location and size** dialog box, set the disk size and storage location.
    
    For example, you can set the disk size to 20 GB.
    
    **Figure 6** Setting the disk location and size  
    ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/en-us_image_0268290676.png)
    
7.  Click **Create**.

## Installing a Linux OS on the VM

The procedure varies depending on the image file you use. This section uses Ubuntu 20.04 as an example to describe how to install a Linux OS on the VM.

#### Prerequisites

You have obtained the ISO image file, for example, **Ubuntu-20.04-server.iso**.

#### Procedure

Use the ISO file to install Linux for the empty VM.

1.  In VirtualBox Manager, select the new VM and click **Settings**.
    
    **Figure 1** Setting the VM  
    ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/en-us_image_0268393798.png)
    
2.  Choose **Storage** > **Empty**, click ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/en-us_image_0268393752.png) in the **Attributes** area, and select the ISO image file **Ubuntu-20.04-server.iso**.
    
    **Figure 2** Selecting the ISO file to be mounted  
    ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/en-us_image_0268393846.png)
    
    **Figure 3** Mounted ISO file  
    ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/en-us_image_0000001457709502.png)
    
3.  Click **OK**.
4.  In VirtualBox Manager, select the new VM and click **Start**.
    
    **Figure 4** Starting the VM  
    ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/en-us_image_0268337032.png)
    
5.  Install the OS.
    1.  Select **English** and press **Enter**.
        
        ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/en-us_image_0000001514305585.png)
        
    2.  Select **Continue without updating**.
        
        ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/en-us_image_0000001464149800.png)
        
    3.  Retain the default settings for the keyboard. Select **Done**
        
        ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/en-us_image_0000001514311097.png)
        
    4.  Retain the default settings for the installation base. Select **Done**.
        
        ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/en-us_image_0000001514670405.png)
        
    5.  Retain the default settings for the network. Select **Done**.
        
        The installation program will automatically identify the IP address. If the network cannot be found, the installation program can still continue and you can configure the network again after the installation is complete.
        
        ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/en-us_image_0000001463836772.png)
        
    6.  Retain the default settings for the proxy. Select **Done**.
        
        ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/en-us_image_0000001514558429.png)
        
    7.  Retain the default settings for the software source. Select **Done**.
        
        ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/en-us_image_0000001463840256.png)
        
    8.  Retain the default settings for disk partitioning (use an entire disk and set up this disk as an LVM group). Select **Done**.
        
        ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/en-us_image_0000001514561077.png)
        
        The file system information will be displayed. Check it and select **Done**.
        
        ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/en-us_image_0000001463841764.png)
        
        Confirm the destructive action and select **Continue**.
        
        ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/en-us_image_0000001514681605.png)
        
    9.  Configure the server name, username, and password. Select **Done**.
        
        **Your name**: It is not a username for logging in to the server. You can consider it as server description.
        
        **Your Server's name**: It is a unique server name on the same network. The name cannot contain uppercase letters.
        
        **Pick a username**: It is a username for logging in to the server. If you forget it or its password, you will not be allowed to log in to the server.
        
        **Choose a password**: It is the password for logging in to the server.
        
        **Confirm your password**: Enter your password again.
        
        ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/en-us_image_0000001464161876.png)
        
    10.  Install SSH so that you can remotely connect to the Linux server.
        
        Select **Install OpenSSH server**. Then, press **Tab** to select **Done**.
        
        ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/en-us_image_0000001514587325.png)
        
    11.  Select **Done** to start the OS installation.
        
        ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/en-us_image_0000001464002560.png)
        
    12.  After the installation is complete, select **Reboot** to restart the system.
        
        ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/en-us_image_0000001464031938.png)



Step 3: Configuring the VM
--------------------------

## Installing Drivers and Changing the Disk Identifiers to the UUID Format

To ensure that the ECSs created from the image support both Xen and KVM virtualization, install Native Xen and KVM drivers and change the disk identifiers to the UUID format for the VM which is used as the image source.

This section describes how to perform these operations on a Linux VM that runs Ubuntu 20.04. For other OSs, see [Optimization Process (Linux)](https://support.huaweicloud.com/intl/en-us/usermanual-ims/en-us_topic_0047501133.html).

#### Install Native Xen and KVM Drivers

1.  Run the following command to open the **modules** file:
    
    **vi /etc/initramfs-tools/modules**
    
2.  Press **i** to enter the editing mode and add the native Xen (xen-pv) and KVM (virtio) drivers to the **/etc/initramfs-tools/modules** file (the format depends on the OS requirements).
    
    ``
[root@CTU10000xxxxx ~]#vi /etc/initramfs-tools/modules 
...
# Examples: 
# 
# raid1 
# sd_mOd 
xen-blkfront 
xen-netfront 
virtio_blk 
virtio_scsi 
virtio_net 
virtio_pci 
virtio_ring 
virtio  
``

    
3.  Press **Esc**, enter **:wq**, and press **Enter** to save the settings and exit the vi editor.
4.  Run the following command to generate initrd again:
    
    **update-initramfs -u**
    
5.  Run the following commands to check whether native Xen and KVM drivers have been installed:
    
    **lsinitramfs /boot/initrd.img-\`uname -r\` |grep xen**
    
    **lsinitramfs /boot/initrd.img-\`uname -r\` |grep virtio**
    
    ``
[root@ CTU10000xxxxx home]# lsinitramfs /boot/initrd.img-`uname -r` |grep xen 
lib/modules/3.5.0-23-generic/kernel/drivers/net/ethernet/qlogic/netxen 
lib/modules/3.5.0-23-generic/kernel/drivers/net/ethernet/qlogic/netxen/netxen_nic.ko 
lib/modules/3.5.0-23-generic/kernel/drivers/net/xen-netback 
lib/modules/3.5.0-23-generic/kernel/drivers/net/xen-netback/xen-netback.ko 
lib/modules/3.5.0-23-generic/kernel/drivers/block/xen-blkback 
lib/modules/3.5.0-23-generic/kernel/drivers/block/xen-blkback/xen-blkback.ko 
 
[root@ CTU10000xxxxx home]# lsinitramfs /boot/initrd.img-`uname -r` |grep virtio 
lib/modules/3.5.0-23-generic/kernel/drivers/scsi/virtio_scsi.ko
``

    
    ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/public_sys-resources/note_3.0-en-us.png)
    
    If you add built-in drivers to the initrd or initramfs file, the VM will not be affected. This makes it easy to modify the drivers. However, the drivers cannot be shown by running the **lsinitrd** command. You can run the following commands to check whether the drivers are built-in ones in the kernel:
    
    ``
[root@ CTU10000xxxxx home]# cat /boot/config-`uname -r` | grep CONFIG_VIRTIO | grep y
CONFIG_VIRTIO_BLK=y
CONFIG_VIRTIO_NET=y
CONFIG_VIRTIO=y
CONFIG_VIRTIO_RING=y
CONFIG_VIRTIO_PCI=y
CONFIG_VIRTIO_MMIO_CMDLINE_DEVICES=y
[root@ CTU10000xxxxx home]# cat /boot/config-`uname -r` | grep CONFIG_XEN | grep y
CONFIG_XEN_BLKDEV_FRONTEND=y
CONFIG_XEN_NETDEV_FRONTEND=y
``

    

#### Change the Disk Identifier in the GRUB Configuration File to the UUID Format

Take Ubuntu 20.04 as an example. Run **blkid** to obtain the UUID of the root partition. Modify the **/boot/grub/grub.cfg** file and use the UUID of the root partition to configure the boot item. If the root partition already uses UUID, no modification is required. The procedure is as follows:

1.  Log in to the newly created VM as user **root**.
2.  Run the following command to query all types of mounted file systems and their device UUIDs:
    
    **blkid**
    
    The following information is displayed:
    
    ``
/dev/xvda1: UUID="ec51d860-34bf-4374-ad46-a0c3e337fd34" TYPE="ext3"
/dev/xvda5: UUID="7a44a9ce-9281-4740-b95f-c8de33ae5c11" TYPE="swap"
``

    

3.  Run the following command to query the **grub.cfg** file:
    
    **cat /boot/grub/grub.****cfg**
    
    The following information is displayed:
    
    ``
......menuentry 'Ubuntu Linux, with Linux 3.13.0-24-generic' --class ubuntu --class gnu-linux --class gnu --class os --unrestricted $menuentry_id_option 'gnulinux-3.13.0-24-generic-advanced-ec51d860-34bf-4374-ad46-a0c3e337fd34' {
recordfail
load_video
gfxmode $linux_gfx_mode
insmod gzio
insmod part_msdos
insmod ext2
if [ x$feature_platform_search_hint = xy ]; then
search --no-floppy --fs-uuid --set=root ec51d860-34bf-4374-ad46-a0c3e337fd34
else
search --no-floppy --fs-uuid --set=root ec51d860-34bf-4374-ad46-a0c3e337fd34
fi
echo 'Loading Linux 3.13.0-24-generic ...'
linux /boot/vmlinuz-3.13.0-24-generic root=/dev/xvda1 ro 
echo 'Loading initial ramdisk ...'
initrd /boot/initrd.img-3.13.0-24-generic 
}
``

    

4.  Check whether the **/boot/grub/grub.cfg** configuration file contains **root=/dev/xvda1** or **root=UUID=ec51d860-34bf-4374-ad46-a0c3e337fd34**.
    *   If **root=UUID=ec51d860-34bf-4374-ad46-a0c3e337fd34** is contained, the root partition is in the UUID format and no further action is required.
    *   If **root=/dev/xvda1** is contained, the root partition is represented by a device name. Go to step [5](#ims_bp_0022__en-us_topic_0106036281_lf7085be4afa540f3b52640d8d9157c9a).

5.  Obtain the UUID of the root partition based on **root=/dev/xvda1** and information obtained by running the **blkid** command.
6.  Run the following command to open the **grub.cfg** file:
    
    **vi /boot/grub/grub.cfg**
    
7.  Press **i** to enter the editing mode. Change the identifier of the root partition to the UUID format. For example, change **root=/dev/xvda1** to **root=UUID=ec51d860-34bf-4374-ad46-a0c3e337fd34**.
8.  Press **Esc**, enter **:wq**, and press **Enter** to save the settings and exit the vi editor.
9.  Run the following command to verify the change:
    
    **cat /boot/grub/grub.****cfg**
    
    The change is successful if information similar to the following is displayed:
    
    ``
......menuentry 'Ubuntu Linux, with Linux 3.13.0-24-generic' --class ubuntu --class gnu-linux --class gnu --class os --unrestricted $menuentry_id_option 'gnulinux-3.13.0-24-generic-advanced-ec51d860-34bf-4374-ad46-a0c3e337fd34' {
recordfail
load_video
gfxmode $linux_gfx_mode
insmod gzio
insmod part_msdos
insmod ext2
if [ x$feature_platform_search_hint = xy ]; then
search --no-floppy --fs-uuid --set=root ec51d860-34bf-4374-ad46-a0c3e337fd34
else
search --no-floppy --fs-uuid --set=root ec51d860-34bf-4374-ad46-a0c3e337fd34
fi
echo 'Loading Linux 3.13.0-24-generic ...'
linux /boot/vmlinuz-3.13.0-24-generic root=UUID=ec51d860-34bf-4374-ad46-a0c3e337fd34 ro
echo 'Loading initial ramdisk ...'
initrd /boot/initrd.img-3.13.0-24-generic
}
``

    

#### Change the Disk Identifiers in the fstab File to the UUID Format

Take Ubuntu 20.04 as an example. Run **blkid** to obtain the UUIDs of all partitions. Modify the **/etc/fstab** file and use the partition UUIDs to configure automatic partition mounting.

1.  Run the following command to query all types of mounted file systems and their device UUIDs:
    
    **blkid**
    
    The following information is displayed:
    
    ``
/dev/xvda2: UUID="4eb40294-4c6f-4384-bbb6-b8795bbb1130" TYPE="xfs"  
/dev/xvda1: UUID="2de37c6b-2648-43b4-a4f5-40162154e135" TYPE="swap"
``

    
2.  Run the following command to query the **fstab** file:
    
    **cat /etc/fstab**
    
    The following information is displayed:
    
    ``
[root@CTU1000028010 ~]# cat /etc/fstab  
/dev/xvda2  /       xfs     defaults    0 0 
/dev/xvda1  swap    swap    defaults    0 0     
``

    
3.  Check whether the disk identifiers in the **fstab** file are device names or UUIDs.
    *   If they are UUIDs, no further action is required.
    *   If they are device names, go to step [4](#ims_bp_0022__en-us_topic_0106036281_li63646666154817).
4.  Run the following command to open the **fstab** file:
    
    **vi /etc/fstab**
    
5.  Press **i** to enter the editing mode and change the disk identifiers to the UUID format.
6.  Press **Esc**, enter **:wq**, and press **Enter** to save the settings and exit the vi editor.

## Installing Cloud-Init
#### Scenarios

To ensure that you can use the user data injection function to inject initial custom information into ECSs created from a private image (such as setting the ECS login password), install Cloud-Init on the ECS used to create the image.

*   You need to download Cloud-Init from its official website. Therefore, you must bind an EIP to the ECS.
*   If Cloud-Init is not installed, you cannot configure an ECS. As a result, you can only use the password in the image file to log in to the created ECSs.
*   By default, ECSs created from a public image have Cloud-Init installed. You do not need to install or configure Cloud-Init on such ECSs.
*   For ECSs created using an external image file, install and configure Cloud-Init by performing the operations in this section. For how to configure Cloud-Init, see [Configuring Cloud-Init](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/ims_bp_0024.html#ims_bp_0024).

![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/public_sys-resources/note_3.0-en-us.png)

Cloud-Init is open-source software. If the installed version has security vulnerabilities, you are advised to upgrade it to the latest version.

#### Prerequisites

*   An EIP has been bound to the ECS.
*   You have logged in to the ECS.
*   The IP address obtaining mode of the ECS is DHCP.

#### Procedure

1.  Check whether Cloud-Init has been installed.
    
    For details, see [Check Whether Cloud-Init Has Been Installed](#ims_bp_0023__en-us_topic_0030730603_section57525650153449).
    
2.  Install Cloud-Init.
    
    You can install Cloud-Init in any of the following ways: [(Recommended) Install Cloud-Init Using the Official Installation Package](#ims_bp_0023__en-us_topic_0030730603_section9013470154018), [Install Cloud-Init Using the Official Source Code Package and pip](#ims_bp_0023__en-us_topic_0030730603_section124220553610), and [Install Cloud-Init Using the Official GitHub Source Code](#ims_bp_0023__en-us_topic_0030730603_section14939636151511).
    

#### Check Whether Cloud-Init Has Been Installed

Perform the operations provided here to check whether Cloud-Init has been installed. The methods of checking whether Cloud-Init is installed vary depending on the OSs.

*   If you are in a Python 3 environment, run the following command to check whether Cloud-Init is installed (Ubuntu 22.0.4 is used as an example):
    
    **which cloud-init**
    
    *   If information similar to the following is displayed, Cloud-Init has been installed:
        
        ``
/usr/bin/cloud-init
``

        
    *   If information similar to the following is displayed, Cloud-Init is not installed:
        
        ``
/usr/bin/which: no cloud-init in (/usr/local/bin:/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin)
``

        
*   If you are in a Python 2 environment, run the following command to check whether Cloud-Init is installed (CentOS 6 is used as an example):
    
    **which cloud-init**
    
    *   If information similar to the following is displayed, Cloud-Init has been installed:
        
        ``
cloud-init-0.7.5-10.el6.centos.2.x86_64
``

        
    *   If no information is returned, Cloud-Init is not installed.
        
        ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/public_sys-resources/note_3.0-en-us.png)
        
        To confirm Cloud-Init is really not installed, you are advised to run **rpm -qa |grep cloud-init** to check again. If either of **which cloud-init** and **rpm -qa |grep cloud-init** shows that Cloud-Init has been installed, Cloud-Init is installed.
        

If Cloud-Init has been installed, perform the following operations:

*   Check whether to use the SSH certificate in the ECS OS. If the certificate is no longer used, delete it.
    *   If the certificate is stored in a directory of user **root**, for example, _/$path/$to/$root_**/.ssh/authorized\_keys**, run the following commands:
        
        **cd /root/.ssh**
        
        **rm authorized\_keys**
        
    *   If the certificate is not stored in a directory of user **root**, for example, _/$path/$to/$none-root_**/.ssh/authorized\_keys**, run the following commands:
        
        **cd /home/centos/.ssh**
        
        **rm authorized\_keys**
        
*   Run the following command to delete the cache generated by Cloud-Init and ensure that the ECS created from the private image can be logged in by using the certificate:
    
    **sudo rm -rf /var/lib/cloud/\***
    

![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/public_sys-resources/note_3.0-en-us.png)

Do not restart the ECS after performing the configuration. Otherwise, you need to configure it again.

#### (Recommended) Install Cloud-Init Using the Official Installation Package

The method of installing Cloud-Init on an ECS varies depending on the OS. Perform the installation operations as user **root**.

The following describes how to install Cloud-Init on an ECS running SUSE Linux, CentOS, Fedora, Debian, and Ubuntu. For other OS types, install the required type of Cloud-Init. For example, you need to install coreos-cloudinit on ECSs running CoreOS.

*   SUSE Linux
    
    Paths for obtaining the Cloud-Init installation package for SUSE Linux
    
    [https://ftp5.gwdg.de/pub/opensuse/repositories/Cloud:/Tools/](https://ftp5.gwdg.de/pub/opensuse/repositories/Cloud:/Tools)
    
    [http://download.opensuse.org/repositories/Cloud:/Tools/](http://download.opensuse.org/repositories/Cloud:/Tools/)
    
    ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/public_sys-resources/note_3.0-en-us.png)
    
    Select the required repo installation package in the provided paths.
    
    Take SUSE Enterprise Linux Server 12 as an example. Perform the following steps to install Cloud-Init:
    
    1.  Log in to the ECS used to create a Linux private image.
    2.  Run the following command to install the network installation source for SUSE Enterprise Linux Server 12:
        
        **zypper ar https://ftp5.gwdg.de/pub/opensuse/repositories/Cloud:/Tools/SLE\_12\_SP3/Cloud:Tools.repo**
        
    3.  Run the following command to update the network installation source:
        
        **zypper refresh**
        
    4.  Run the following command to install Cloud-Init:
        
        **zypper install cloud-init**
        
    5.  Run the following commands to enable Cloud-Init to automatically start upon system boot:
        
        *   SUSE 11
            
            **chkconfig cloud-init-local on; chkconfig cloud-init on; chkconfig cloud-config on; chkconfig cloud-final on**
            
            **service cloud-init-local status; service cloud-init status; service cloud-config status; service cloud-final status**
            
        *   SUSE 12 and openSUSE 12/13/42
            
            **systemctl enable cloud-init-local.service cloud-init.service cloud-config.service cloud-final.service**
            
            **systemctl status cloud-init-local.service cloud-init.service cloud-config.service cloud-final.service**
            
        
        ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/public_sys-resources/caution_3.0-en-us.png)
        
        For SUSE and openSUSE, perform the following steps to disable dynamic change of the ECS name:
        
        1.  Run the following command to open the **dhcp** file using the vi editor:
            
            **vi** **etc/sysconfig/network/dhcp**
            
        2.  Change the value of **DHCLIENT\_SET\_HOSTNAME** in the **dhcp** file to **no**.
        
*   **CentOS**
    
    [Table 1](#ims_bp_0023__en-us_topic_0030730603_table859383892814) lists the Cloud-Init installation paths for CentOS. Select the required installation package from the following addresses.
    
    1.  Run the following commands to install Cloud-Init:
        
        **yum install** _Cloud-Init installation package address_**/epel-release-**_x-y_**.noarch.rpm**
        
        **yum install cloud-init**
        
        ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/public_sys-resources/note_3.0-en-us.png)
        
        _Cloud-Init installation package address_ indicates the address of the Cloud-Init epel-release installation package, and _x-y_ indicates the version of the Cloud-Init epel-release required by the current OS. Replace them with the actual values according to [Table 1](#ims_bp_0023__en-us_topic_0030730603_table859383892814).
        
        *   Take CentOS 6 64-bit as an example. If the version is 6.8, the command is as follows:
            
            **yum install https://archives.fedoraproject.org/pub/archive/epel/6/x86\_64/epel-release-****6-8****.noarch.rpm**
            
        *   Take CentOS 7 64-bit as an example. If the version is 7.14, the command is as follows:
            
            **yum install https://archives.fedoraproject.org/pub/epel/7/x86\_64/Packages/e/epel-release-****7-14****.noarch.rpm**
            
        
    2.  Run the following commands to enable Cloud-Init to automatically start upon system boot:
        
        **systemctl enable cloud-init-local.service cloud-init.service cloud-config.service cloud-final.service**
        
        **systemctl status cloud-init-local.service cloud-init.service cloud-config.service cloud-final.service**
        
*   Fedora
    
    Before installing Cloud-Init, ensure that the network installation source address has been configured for the OS by checking whether the **/etc/yum.repo.d/fedora.repo** file contains the installation source address of the software package. If the file does not contain the address, configure the address by following the instructions on the Fedora official website.
    
    1.  Run the following command to install Cloud-Init:
        
        **yum install cloud-init**
        
    2.  Run the following commands to enable Cloud-Init to automatically start upon system boot:
        
        **systemctl enable cloud-init-local.service cloud-init.service cloud-config.service cloud-final.service**
        
        **systemctl status cloud-init-local.service cloud-init.service cloud-config.service cloud-final.service**
        
*   Debian and Ubuntu
    
    Before installing Cloud-Init, ensure that the network installation source address has been configured for the OS by checking whether the **/etc/apt/sources.list** file contains the installation source address of the software package. If the file does not contain the address, configure the address by following the instructions on the Debian or Ubuntu official website.
    
    1.  Run the following commands to install Cloud-Init:
        
        **apt-get update**
        
        **apt-get install** **cloud-init**
        
    2.  Run the following commands to enable Cloud-Init to automatically start upon system boot:
        
        **systemctl enable cloud-init-local.service cloud-init.service cloud-config.service cloud-final.service**
        
        **systemctl status cloud-init-local.service cloud-init.service cloud-config.service cloud-final.service**
        
    
    **Cloud-Init-23.2.2 is used as an example to describe how to install Cloud-Init on CentOS, Fedora, Ubuntu, Debian, and SUSE.**
    
    Download the **cloud-init-23.2.2.tar.gz** source code package from [https://launchpad.net/cloud-init/trunk/23.2.2/+download/cloud-init-23.2.2.tar.gz](https://launchpad.net/cloud-init/trunk/23.2.2/+download/cloud-init-23.2.2.tar.gz).
    
*   **Centos 7/Fedora Server 36**
    
    ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/public_sys-resources/notice_3.0-en-us.png)
    
    Ensure that Python 3 has been installed.
    
    1.  Check whether Cloud-Init has been installed. If any command output is displayed, Cloud-Init has been installed.
        
        ``
cloud-init -v
``

        
    2.  Delete the cache directory of Cloud-Init.
        
        ``
rm -rf /var/lib/cloud/*
``

        
    3.  Install dependency packages of Cloud-Init.
        
        ``
yum install python3-pip -y
yum install python3-devel
``

        
    4.  Download the Cloud-Init package.
        
        ``
wget https://launchpad.net/cloud-init/trunk/23.2.2/+download/cloud-init-23.2.2.tar.gz
``

        
    5.  Decompress the Cloud-Init package.
        
        ``
tar -zxvf cloud-init-23.2.2.tar.gz
``

        
    6.  Go to the **cloud-init-23.2.2** directory and install dependent libraries:
        
        ``
cd cloud-init-23.2.2
pip3 install -r requirements.txt
``

        
    7.  Install Cloud-Init.
        
        ``
python3 setup.py build
python3 setup.py install --init-system systemd
``

        
    8.  (Optional) Diable Cloud-Init's network configuration capability by modifying the **/etc/cloud/cloud.cfg** file.
        
        ``
vi /etc/cloud/cloud.cfg
``

        
        Add the following content to the file:
        
        ``
network:
  config: disabled
``

        
    9.  Restart Cloud-Init and check its status.
        
        ``
systemctl restart cloud-init-local.service cloud-init.service cloud-config.service cloud-final.service
systemctl status cloud-init-local.service cloud-init.service cloud-config.service cloud-final.service
``

        
        ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/en-us_image_0000001688060529.png)
        
    10.  Enable Cloud-Init related services to automatically start upon system boot.
        
        ``
systemctl enable cloud-init-local.service cloud-init.service cloud-config.service cloud-final.service
``

        
    11.  Check whether Cloud-Init is running properly.
        
        ``
cloud-init -v
cloud-init init --local 
``

        
        ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/en-us_image_0000001639899816.png)
        
*   **Ubuntu 22.0.4/Debian 11**
    
    ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/public_sys-resources/notice_3.0-en-us.png)
    
    Ensure that Python 3 has been installed.
    
    1.  Check and delete redundant Cloud-Init configuration files.
        
        ``
rm -rf /var/lib/cloud/*
rm -f /var/log/cloud-init*
``

        
        Delete all files except log-related configuration files from the **/etc/cloud/cloud.cfg.d/** directory.
        
    2.  Update your package list and check whether Wget is installed. If it is not, install it.
        
        ``
sudo apt update
sudo apt install wget 
``

        
    3.  Install dependency packages.
        
        ``
apt-get install cloud-guest-utils -y
apt-get install python3-pip -y
apt-get install python3-devel
``

        
    4.  Download the Cloud-Init package.
        
        ``
wget https://launchpad.net/cloud-init/trunk/23.2.2/+download/cloud-init-23.2.2.tar.gz
``

        
    5.  Decompress the Cloud-Init package.
        
        ``
tar -zxvf cloud-init-23.2.2.tar.gz
``

        
    6.  Go to the **cloud-init** directory.
        
        ``
cd cloud-init-23.2.2
``

        
    7.  Install dependent libraries.
        
        ``
pip3 install -r requirements.txt
``

        
    8.  Install Cloud-Init.
        
        ``
python3 setup.py install
``

        
    9.  (Optional) Disable Cloud-Init's network configuration capability.
        
        You need to do so when the Cloud-Init version is 0.7.9 or later and you want to configure the network.
        
        ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/public_sys-resources/note_3.0-en-us.png)
        
        1\. Open the **/etc/cloud/cloud.cfg** file.
        
        ``
vi /etc/cloud/cloud.cfg
``

        
        2\. Enter **i** and configure **network**. (If there is no such a configuration item, add it.)
        
        ``
network:
  config: disabled
``

        
    10.  Restart Cloud-Init and check its status.
        
        ``
systemctl restart cloud-init-local.service cloud-init.service cloud-config.service cloud-final.service
systemctl status cloud-init-local.service cloud-init.service cloud-config.service cloud-final.service
``

        
    11.  Enable Cloud-Init related services to automatically start upon system boot.
        
        ``
systemctl enable cloud-init-local.service cloud-init.service cloud-config.service cloud-final.service
``

        
    12.  Check whether Cloud-Init is running properly.
        
        ``
cloud-init -v
cloud-init init --local
``

        
*   **SUSE Enterprise Linux Server 15**
    
    ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/public_sys-resources/notice_3.0-en-us.png)
    
    Ensure that Python 3 has been installed.
    
    1.  View existing SUSE repositories.
        
        ``
zypper lr
``

        
    2.  Delete the SUSE repositories.
        
        ``
zypper rr No. of repositories listed in 1
``

        
    3.  Configure a SUSE repository.
        
        ``
zypper ar https://ftp5.gwdg.de/pub/opensuse/repositories/Cloud:/Tools/SLE_15_SP4/Cloud:Tools.repo
``

        
    4.  Refresh the SUSE repository.
        
        ``
zypper refresh
``

        
    5.  Install Cloud-Init.
        
        ``
zypper install cloud-init
``

        
    6.  Run **cloud-init -v**. If error messages similar to the following are displayed, install the dependency packages.
        
        ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/en-us_image_0000001688251829.png)
        
        ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/en-us_image_0000001640131918.png)
        
        ``
pip install requests pyyaml oauthlib jsonschema jsonpatch jinja2 configobj
``

        
    7.  Check whether Cloud-Init is successfully installed. If the following error message is displayed, configure **datasource\_list** in **/etc/cloud/cloud.cfg**.
        
        ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/en-us_image_0000001639765024.png)
        
        ``
datasource_list: [ OpenStack ]
datasource:
  OpenStack:
    metadata_urls: ['http://169.254.169.254']
    max_wait: 120
    timeout: 5
    apply_network_config: false
``

        
    8.  Modify the configuration file, restart Cloud-Init, and check the Cloud-Init status.
        
        ``
systemctl restart cloud-init-local.service cloud-init.service cloud-config.service cloud-final.service 
systemctl status cloud-init-local.service cloud-init.service cloud-config.service cloud-final.service
``

        
    9.  Enable Cloud-Init related services to automatically start upon system boot.
        
        ``
systemctl enable cloud-init-local.service cloud-init.service cloud-config.service cloud-final.service
``

        
        ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/en-us_image_0000001688204517.png)
        
    10.  Check whether Cloud-Init is running properly.
        
        ``
cloud-init -v
cloud-init init --local
``

        

#### Install Cloud-Init Using the Official Source Code Package and pip

The following operations use Cloud-Init 0.7.9 as an example to describe how to install Cloud-Init.

1.  Download the **cloud-init-0.7.9.tar.gz** source code package (version 0.7.9 is recommended) and upload it to the **/home/** directory of the ECS.
    
    Download **cloud-init-0.7.9.tar.gz** from the following path:
    
    [https://launchpad.net/cloud-init/trunk/0.7.9/+download/cloud-init-0.7.9.tar.gz](https://launchpad.net/cloud-init/trunk/0.7.9/+download/cloud-init-0.7.9.tar.gz)
    
2.  Create a **pip.conf** file in the **~/.pip/** directory and edit the following content:
    
    ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/public_sys-resources/note_3.0-en-us.png)
    
    If the **~/.pip/** directory does not exist, run the **mkdir ~/.pip** command to create it.
    
    ``
[global]
index-url  = https://<$mirror>/simple/
trusted-host = <$mirror>
``

    
3.  Run the following command to install the downloaded Cloud-Init source code package (select **\--upgrade** as needed during installation):
    
    **pip install \[--upgrade\] /home/cloud-init-0.7.9.tar.gz**
    
4.  Run the **cloud-init -v** command. Cloud-Init is installed successfully if the following information is displayed:
    
    ``
cloud-init 0.7.9
``

    
5.  Enable Cloud-Init to automatically start upon system boot.
    *   If the OS uses SysVinit to manage automatic start of services, run the following commands:
        
        **chkconfig --add cloud-init-local; chkconfig --add cloud-init; chkconfig --add cloud-config; chkconfig --add cloud-final**
        
        **chkconfig cloud-init-local on; chkconfig cloud-init on; chkconfig cloud-config on; chkconfig cloud-final on**
        
        **service cloud-init-local status; service cloud-init status; service cloud-config status; service cloud-final status**
        
    *   If the OS uses Systemd to manage automatic start of services, run the following commands:
        
        **systemctl enable cloud-init-local.service cloud-init.service cloud-config.service cloud-final.service**
        
        **systemctl status cloud-init-local.service cloud-init.service cloud-config.service cloud-final.service**
        

![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/public_sys-resources/caution_3.0-en-us.png)

If you install Cloud-Init using the official source code package and pip, pay attention to the following:

1.  Add user **syslog** to the **adm** group during the installation. If user **syslog** exists, add it to the **adm** group. For some OSs (such as CentOS and SUSE), user **syslog** may not exist. Run the following commands to create user **syslog** and add it to the **adm** group:
    
    **useradd syslog**
    
    **groupadd adm**
    
    **usermod -g adm syslog**
    
2.  Change the value of **distro** in **system\_info** in the **/etc/cloud/cloud.cfg** file based on the OS release version, such as **distro: ubuntu**, **distro: sles**, **distro: debian**, and **distro: fedora**.

#### Install Cloud-Init Using the Official GitHub Source Code

You can obtain the Cloud-Init source code from GitHub at [https://github.com/canonical/cloud-init/](https://github.com/canonical/cloud-init/)

1.  Run the following commands to download the source code package and copy it to the **/tmp/CLOUD-INIT** folder:
    
    ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/public_sys-resources/note_3.0-en-us.png)
    
    **wget** **https://github.com/canonical/cloud-init/archive/refs/tags/0.7.6.zip**
    
    **mkdir /tmp/CLOUD-INIT**
    
    **cp **cloud-init-0.7.6.zip** /tmp/CLOUD-INIT**
    
    **cd /tmp/CLOUD-INIT**
    
2.  Run the following command to decompress the package:
    
    **unzip **cloud-init-0.7.6.zip****
    
3.  Run the following command to enter the **cloud-init-0.7.6** folder:
    
    **cd **cloud-init**\-0.7.6**
    
4.  (Optional) If the Cloud-Init version is 18.3 to 22.3, run the following commands:
    
    **sed -i '/VALID\_DMI\_ASSET\_TAGS =/a\\VALID\_DMI\_ASSET\_TAGS += \["HUAWEICLOUD"\]' cloudinit/sources/DataSourceOpenStack.py**
    
    **cat cloudinit/sources/DataSourceOpenStack.py | grep VALID\_DMI\_ASSET\_TAGS**
    
    If the following information is displayed, the execution is successful.
    
    ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/en-us_image_0000001390619817.png)
    
5.  Install Cloud-Init. The commands vary depending on the OS type.
    
    *   For CentOS 6.x or SUSE 11.x, run the following commands:
        
        **python setup.py build**
        
        **python setup.py install --init-system sysvinit**
        
    *   For CentOS 7.x or SUSE 12.x, run the following commands:
        
        **python setup.py build**
        
        **python setup.py install --init-system systemd**
        
    
    ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/public_sys-resources/note_3.0-en-us.png)
    
    Add user **syslog** to the **adm** group during the installation. If user **syslog** exists, add it to the **adm** group. For some OSs (such as CentOS and SUSE), user **syslog** may not exist. Run the following commands to create user **syslog** and add it to the **adm** group:
    
    **useradd syslog**
    
    **groupadd adm**
    
    **usermod -g adm syslog**
    
6.  Enable Cloud-Init to automatically start upon system boot.
    *   If the OS uses SysVinit to manage automatic start of services, run the following commands:
        
        **chkconfig --add cloud-init-local; chkconfig --add cloud-init; chkconfig --add cloud-config; chkconfig --add cloud-final**
        
        **chkconfig cloud-init-local on; chkconfig cloud-init on; chkconfig cloud-config on; chkconfig cloud-final on**
        
        **service cloud-init-local status; service cloud-init status; service cloud-config status; service cloud-final status**
        
    *   If the OS uses Systemd to manage automatic start of services, run the following commands:
        
        **systemctl enable cloud-init-local.service cloud-init.service cloud-config.service cloud-final.service**
        
        **systemctl status cloud-init-local.service cloud-init.service cloud-config.service cloud-final.service**
        
7.  Run the following commands to check whether Cloud-Init has been installed:
    
    **cloud-init -v**
    
    **cloud-init init --local**
    
    Cloud-Init is successfully installed if the following information is displayed:
    
    ``
cloud-init 0.7.6
``

## (Optional) Installing the One-Click Password Reset Plug-in_Image Management Service

To ensure that you can reset the password of each ECS created from the image with a few clicks, you are advised to install the one-click password reset plug-in (CloudResetPwdAgent) on the VM which is used as the image source.

#### Procedure

1.  Download the CloudResetPwdAgent software package.
    
    ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/public_sys-resources/note_3.0-en-us.png)
    
    The one-click password reset plug-in can be automatically updated only if an EIP is bound to the VM.
    
    You can download the **CloudResetPwdAgent.zip** package from:
    
    For 32-bit OSs: [http://ap-southeast-1-cloud-reset-pwd.obs.ap-southeast-1.myhuaweicloud.com/linux/32/reset\_pwd\_agent/CloudResetPwdAgent.zip](http://ap-southeast-1-cloud-reset-pwd.obs.ap-southeast-1.myhuaweicloud.com/linux/32/reset_pwd_agent/CloudResetPwdAgent.zip)
    
    For 64-bit OSs: [http://ap-southeast-1-cloud-reset-pwd.obs.ap-southeast-1.myhuaweicloud.com/linux/64/reset\_pwd\_agent/CloudResetPwdAgent.zip](http://ap-southeast-1-cloud-reset-pwd.obs.ap-southeast-1.myhuaweicloud.com/linux/64/reset_pwd_agent/CloudResetPwdAgent.zip)
    
2.  Run the following command to decompress **CloudResetPwdAgent.zip**:
    
    **unzip -o -d** _Decompressed directory_ **CloudResetPwdAgent.zip**
    
    There is no special requirement for the directory that stores the decompressed **CloudResetPwdAgent.zip**. You can choose a directory as you need. If the directory is **/home/PwdAgent/test**, the command is as follows:
    
    **unzip -o -d /home/PwdAgent/test CloudResetPwdAgent.zip**
    
3.  Install the one-click password reset plug-in.
    1.  Run the following command to open the **CloudResetPwdAgent.Linux** file:
        
        **cd CloudResetPwdAgent/CloudResetPwdAgent.Linux**
        
    2.  Run the following command to add the execute permission for the **setup.sh** file:
        
        **chmod +x setup.sh**
        
    3.  Run the following command to install the plug-in:
        
        **sudo sh setup.sh**
        
    4.  Run the following command to check whether the installation is successful:
        
        **service cloudResetPwdAgent status**
        
        If the status of CloudResetPwdAgent is not **unrecognized service**, the installation is successful. Otherwise, the installation failed.
        
        ![](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/public_sys-resources/note_3.0-en-us.png)
        
        If the installation failed, check whether the installation environment meets requirements and install the plug-in again.

## Configuring NetworkManager

Linux allows you to use NetworkManager to automatically configure the VM network. You are advised to use NetworkManager for new OS versions.

Alternatively, you can use the native network management service of the OS.

#### Red Hat, Oracle, CentOS 6.x, CentOS 7.x, EulerOS 2.x, Fedora 22, or Later

Install NetworkManager and use it for automatic network configuration.

1.  Run the following command to install NetworkManager:
    
    **yum install NetworkManager**
    
2.  Delete **ifcfg-eth1** to **ifcfg-eth11** from the **/etc/sysconfig/network-scripts/** directory and retain only **ifcfg-eth0**.
3.  Run the following command to disable the network:
    
    **service network stop**
    
4.  Run the following command to disable automatic startup of the network:
    
    **chkconfig network off**
    
5.  Run the following commands to restart messagebus and NetworkManager and enable NetworkManager to start automatically at startup:
    
    **service messagebus restart**
    
    **service NetworkManager restart**
    
    **chkconfig NetworkManager on**
    

#### Debian 9.0 or Later

Install NetworkManager and use it for automatic network configuration.

1.  Run the following command to install NetworkManager:
    
    **apt-get install network-manager**
    
2.  Change the value of **managed** in the **/etc/NetworkManager/NetworkManager.conf** file to **true**.
3.  Modify **/etc/network/interfaces** and retain only **eth0**.
4.  Run the following commands to disable the network, restart messagebus and NetworkManager, and enable NetworkManager to start automatically at startup:
    
    **service network-manager restart**
    
    **chkconfig network-manager on**
    
    **service networking stop**
    
    **service messagebus restart**
    
    **service network-manager restart**
    

#### Ubuntu 14 or Later

Install NetworkManager and use it for automatic network configuration.

1.  Run the following command to install NetworkManager:
    
    **apt-get install network-manager**
    
2.  Change the value of **managed** in the **/etc/NetworkManager/NetworkManager.conf** file to **true**.
3.  Modify **/etc/network/interfaces** and retain only **eth0**.
4.  Run the following command to disable the network:
    
    **service networking stop**
    
5.  Run the following command to disable automatic startup of the network:
    
    **chkconfig network off**
    
6.  Run the following commands to restart D-Bus and NetworkManager:
    
    **service dbus restart**
    
    **service network-manager restar****t**
    

#### SUSE 11 SP3 and openSUSE 13 or Later

Install NetworkManager and use it for automatic network configuration.

1.  Delete **ifcfg-eth1** to **ifcfg-eth11** from the **/etc/sysconfig/network-scripts/** directory and retain only **ifcfg-eth0**.
2.  Run the following command to install NetworkManager:
    
    **zypper install NetworkManager**
    
3.  Start YaST, choose **Network Devices** in the navigation pane on the left, and select **Network Settings** in the right pane. In the **Network Setup Method** area of the **Global Options** page, change **Traditional Method with ifup** to **User Controlled with NetworkManager**


Step 4: Obtaining the Image File_Image Management Service
---------------------------------------------------------
Updated on 2022-08-29 GMT+08:00

After the VM is configured, perform the following operations to generate and export a Linux image file:

1.  Open VirtualBox, select the VM, choose **Settings** > **Storage**, and select **Linux.vhd**.
    
    **Linux** is the VM name.
    
2.  On the right pane, view the image file location.
3.  Go to the location to obtain the generated **Linux.vhd** image file.

Step 5: Registering the Image File as a Private Image
-----------------------------------------------------
Upload the image file to an OBS bucket and register it as a private image.

#### Constraints

*   Only an unencrypted image file or an image file encrypted using SSE-KMS can be uploaded to an OBS bucket.
*   When uploading an image file, you must select an OBS bucket with the storage class of Standard.

#### Procedure

1.  Use OBS Browser+ to upload the image file. For details, see [OBS Browser+ Best Practices](https://support.huaweicloud.com/intl/en-us/browsertg-obs/obs_03_1006.html).
    
    For how to download OBS Browser+, see [https://support.huaweicloud.com/intl/en-us/browsertg-obs/obs\_03\_1003.html](https://support.huaweicloud.com/intl/en-us/browsertg-obs/obs_03_1003.html).
    
2.  Register the external image file as a private image. For details, see [Registering an Image File as a Private Image (Linux)](https://support.huaweicloud.com/intl/en-us/usermanual-ims/ims_01_0211.html).