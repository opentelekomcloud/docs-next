---
id: converting-the-image-format-using-qemu-img
title: Converting the Image Format Using qemu-img
tags: [ims, qemu]
---

# Converting the Image Format Using qemu-img

This guide describes how you can import an image file in VHD, VMDK, QCOW2, RAW, VHDX, QCOW, VDI, QED, ZVHD, or ZVHD2 format to T Cloud Public. Image files in other formats need to be converted before being imported, using the open-source **qemu-img** tool. It also highlights key conversion requirements and validation steps to ensure image compatibility before uploading files to OBS and creating private images.

:::tip
qemu-img is an open-source tool for converting image formats. You can obtain it from: https://qemu.weilnetz.de/w64/
:::

## Constraints

* **qemu-img** can be used for mutual conversion of image formats VHD, VMDK, QCOW2, RAW, VHDX, QCOW, VDI, and QED.
* ZVHD and ZVHD2 are the cloud's self-developed image file formats and cannot be identified by **qemu-img**. To convert image files to any of the two formats, use the **qemu-img-hw** tool. For details, see [Converting the Image Format Using qemu-img-hw](https://support.huaweicloud.com/intl/en-us/bestpractice-ims/ims_bp_0052.html).
* When you run a command to convert the format of VHD image files, replace **vhd** with **vpc**.

    For example, to convert a CentOS 6.9 image file from VHD to QCOW2, run the following command:

    ```
    qemu-img convert -p -f vpc -O qcow2 centos6.9.vhd centos6.9.qcow2
    ```

    :::important
    If an error occurs, delete **\-f vpc**. Then, qemu-img can identify the correct image format.
    :::

## Windows

1. Install qemu-img.
    1. Download the qemu-img package from [https://qemu.weilnetz.de/w64/](https://qemu.weilnetz.de/w64/).
    2. Double-click the setup file to install qemu-img in **D:\\Program Files\\qemu** (an example installation path).
2. Configure environment variables.
    1. Choose **Start** -> **Computer** and right-click **Properties**.
    2. Click **Advanced system settings**.
    3. In the **System Properties** dialog box, click **Advanced** -> **Environment Variables**.
    4. In the **Environment Variables** dialog box, search for **Path** in the **System Variable** area and click **Edit**. Add **D:\\Program Files\\qemu** to **Variable Value**. Use semicolons (;) to separate variable values.

        :::note
        If **Path** does not exist, add it and set its value to **D:\\Program Files\\qemu**.
        :::

    5. Click **OK**.
3. Verify the installation.

    Choose **Start** -> **Run**, enter **cmd**, and press **Enter**. In the **cmd** window, enter **qemu-img --help**. If the qemu-img version information is contained in the command output, the installation is successful.

4. Convert the image format.

    1. In the **cmd** window, run the following commands to switch to **D:\\Program Files\\qemu**:

        ```
        d:
        cd D:\Program Files\qemu
        ```

    1. Convert the image file format from VMDK to QCOW2.

        ```
        qemu-img convert -p -f vmdk -O qcow2 centos6.9.vmdk centos6.9.qcow2
        ```

        The parameters are described as follows:

        * **\-p** indicates the image conversion progress.
        * **\-f** indicates the source image format.
        * The part following **\-O** (which must be in upper case) consists of the required format, source image file, and target image file.

        After the conversion is complete, the target image file is displayed in the directory where the source image file is located.

        The following information is displayed:

        ```
        # qemu-img convert -p -f vmdk -O qcow2 centos6.9.vmdk centos6.9.qcow2
            (100.00/100%)
        ```

    1. Query details about the converted image file in QCOW2 format.

        ```
        qemu-img info centos6.9.qcow2
        ```

        The following information is displayed:

        ```
        # qemu-img info centos6.9.qcow2
        image: centos6.9.qcow2
        file format: qcow2
        virtual size: 1.0G (1073741824 bytes)
        disk size: 200K
        cluster_size: 65536
        Format specific information:
            compat: 1.1
            lazy refcounts: false
        ```

## Linux

1. Install qemu-img.
    * For Ubuntu or Debian, run the following command:

        ```
        apt install qemu-utils
        ```

    * For CentOS, Red Hat, or Oracle, run the following command:

        ```
        yum install -y qemu-img
        ```

    * For SUSE or openSUSE, run the following command:

        ```
        zypper install qemu-img
        ```

2. Check whether the installation is successful.

    ```
    qemu-img -V
    ```

    If the version information and help manual of the qemu-img tool are contained in the command output, the installation is successful. If CentOS 7 is used, the command output is as follows:

    ```
    [root@CentOS7 ~]# qemu-img -V
    qemu-img version 1.5.3, Copyright (c) 2004-2008 Fabrice Bellard
    usage: qemu-img command [command options]
    QEMU disk image utility

    Command syntax:
    check [-q] [-f fmt] [--output=ofmt] [-r [leaks | all]] [-T src_cache] filename
    create [-q] [-f fmt] [-o options] filename [size]
    commit [-q] [-f fmt] [-t cache] filename
    compare [-f fmt] [-F fmt] [-T src_cach]
    ```

3. Convert the image format. For example, convert the format of an image file from VMDK to QCOW2 in CentOS 7.
    1. Convert the image file format to QCOW2.

        ```
        qemu-img convert -p -f vmdk -O qcow2 centos6.9.vmdk centos6.9.qcow2
        ```

        The parameters are described as follows:

        * **\-p**: indicates the conversion progress.
        * **\-f** indicates the source image format.
        * The part following **\-O** (which must be in upper case) consists of the required image format, source image file, and target image file.

        After the conversion is complete, the target image file is displayed in the directory where the source image file is located.

        The following information is displayed:

        ```
        [root@CentOS7 home]# qemu-img convert -p -f vmdk -O qcow2 centos6.9.vmdk centos6.9.qcow2
            (100.00/100%)
        ```

    2. Query details about the converted image file in QCOW2 format.

        ```
        qemu-img info centos6.9.qcow2
        ```

        The following information is displayed:

        ```
        [root@CentOS7 home]# qemu-img info centos6.9.qcow2
        image: centos6.9.qcow2
        file format: qcow2
        virtual size: 1.0G (1073741824 bytes)
        disk size: 200K
        cluster_size: 65536
        Format specific information:
            compat: 1.1
            lazy refcounts: false
        ```

## Example

    A pre-allocated image depends on two files: _xxxx_**.vmdk** (configuration file) and _xxxx_**\-flat.vmdk** (data file) and cannot be directly imported to the cloud platform. When you export a pre-allocated image in VMDK monolithic flat format from the VMware platform, you must convert its format to common VMDK or QCOW2 before it can be imported to the cloud platform.

    The following uses the files **centos6.9-64bit-flat.vmdk** and **centos6.9-64bit.vmdk** as an example to describe how to use qemu-img to convert image formats.

### Procedure

1. Query image file details.

    ```
    ls -lh centos6.9-64bit*
    qemu-img info centos6.9-64bit.vmdk
    qemu-img info centos6.9-64bit-flat.vmdk
    ```

    The following information is displayed:

    ```
    [root@CentOS7 tmp]# ls -lh centos6.9-64bit*
    -rw-r--r--. 1 root root 10G Jun 13 05:30 centos6.9-64bit-flat.vmdk
    -rw-r--r--. 1 root root 327 Jun 13 05:30 centos6.9-64bit.vmdk
    [root@CentOS7 tmp]# qemu-img info centos6.9-64bit.vmdk
    image: centos6.9-64bit.vmdk
    file format: vmdk
    virtual size: 10G (10737418240 bytes)
    disk size: 4.0K
    Format specific information:
        cid: 3302005459
        parent cid: 4294967295
        create type: monolithicFlat
        extents:
            [0]:
                virtual size: 10737418240
                filename: centos6.9-64bit-flat.vmdk
                format: FLAT
    [root@CentOS7 tmp]# qemu-img info centos6.9-64bit-flat.vmdk
    image: centos6.9-64bit-flat.vmdk
    file format: raw
    virtual size: 10G (10737418240 bytes)
    disk size: 0
    ```

    :::note
    The command output shows that the format of **centos6.9-64bit.vmdk** is VMDK and that of **centos6.9-64bit-flat.vmdk** is RAW. You can convert the format of only **centos6.9-64bit.vmdk**.
    :::

2. Query the configuration file of the pre-allocated image.

    ```
    cat centos6.9-64bit.vmdk
    ```

    The following information is displayed:

    ```
    [root@CentOS7 tmp]# cat centos6.9-64bit.vmdk
    # Disk DescriptorFile
    version=1
    CID=c4d09ad3
    parentCID=ffffffff
    createType="monolithicFlat"
    
    # Extent description
    RW 20971520 FLAT "centos6.9-64bit-flat.vmdk" 0
    
    # The Disk Data Base
    #DDB
    
    ddb.virtualHWVersion = "4"
    ddb.geometry.cylinders = "20805"
    ddb.geometry.heads = "16"
    ddb.geometry.sectors = "63"
    ddb.adapterType = "ide"
    ```

3. Place **centos6.9-64bit-flat.vmdk** and **centos6.9-64bit.vmdk** in the same directory. Run the following command to convert the format of **centos6.9-64bit.vmdk** to QCOW2 using qemu-img:

    ```
    [root@CentOS7 tmp]# qemu-img convert -p -f vmdk -O qcow2 centos6.9-64bit.vmdk centos6.9-64bit.qcow2
        (100.00/100%)
    ```

4. Query details about the converted file in QCOW2 format.

    ```
    qemu-img info centos6.9-64bit.qcow2
    ```

    The following information is displayed:

    ```
    [root@CentOS7 tmp]# qemu-img info centos6.9-64bit.qcow2
    image: centos6.9-64bit.qcow2
    file format: qcow2
    virtual size: 10G (10737418240 bytes)
    disk size: 200K
    cluster_size: 65536
    Format specific information:
        compat: 1.1
        lazy refcounts: false
    ```

:::important Follow-up Procedure
After the image file format is converted, you can use obsutil to upload the image file to an OBS bucket for creating a private image.
:::
