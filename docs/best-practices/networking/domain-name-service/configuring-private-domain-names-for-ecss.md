---
id: configuring-private-domain-names-for-ecss
title: Configuring Private Domain Names for ECSs
tags: [dns, ecs]
---

# Configuring Private Domain Names for ECSs

If one of your ECSs is not working normally and you need to use the
backup ECS to handle requests, but you have not configured private zones
for the two ECSs, you need to change the private IP address in the code
for the faulty ECS. This will interrupt your services and cause you to
publish your website again, which is time- and labor-consuming.

Assume that you have configured private zones for the ECSs and have
included their private domain names in the code. If one ECS is
malfunctioning, you only need to change the DNS records to direct
traffic to a normal ECS. Your services will not be interrupted, and you
do not need to publish the website again.

## Solution Design

The figure below shows the networking of
a website where ECSs and RDS instances are deployed in a VPC.

- **ECS0**: primary service node
- **ECS1**: public service node -> **ECS2**: backup service node
- **RDS1**: service database -> **RDS2**: backup database

![**Figure 1** Networking example](/img/docs/best-practices/networking/domain-name-service/en-us_image_0000001394829705.png)

:::note

- **Higher efficiency and security**: You can use private domain names
    to access ECSs in the VPCs, without going through the Internet.
- **Easier management**: Compared with IP addresses, domain names are
    easier to modify in the code. When an ECS is changed, you only need
    to change the DNS records without modifying the code.

:::

## Prerequisites

This table lists private zones and record sets planned for the cloud
servers.
<!-- 
  -------------------------------------------------------------------------------------
  Resource   Private Zone  Associated   Private IP    Record Set Description
                           VPC          Address       Type
  ---------- ------------- ------------ ------------- ---------- ----------------------
  ECS1       api.ecs.com   VPC_001      192.168.2.8   A          Public service node

  ECS2       api.ecs.com   VPC_001      192.168.3.8   A          Backup for the public
                                                                 service node

  RDS1       db.com        VPC_001      192.168.2.5   A          Service database

  RDS2       db.com        VPC_001      192.168.3.5   A          Backup database
  -------------------------------------------------------------------------------------

  : **Table 1** Private zones and record sets for each server -->

<!-- +---+---+---+-------------------------------+---+--------------------------+
| R | S | R | Description                   | Q | Monthly Price            |
| e | e | e |                               | u |                          |
| g | r | s |                               | a |                          |
| i | v | o |                               | n |                          |
| o | i | u |                               | t |                          |
| n | c | r |                               | i |                          |
|   | e | c |                               | t |                          |
|   |   | e |                               | y |                          |
+===+===+===+===============================+===+==========================+
| e | V | V | The DNS server addresses must | 1 | Free                     |
| u | P | P | be the same as the private    |   |                          |
| - | C | C | DNS server addresses of Open  |   |                          |
| d |   | _ | Telekom Cloud.                |   |                          |
| e |   | 0 |                               |   |                          |
|   |   | 0 | For details, see              |   |                          |
|   |   | 1 | [Availability of secondary    |   |                          |
|   |   |   | DNS](https://www.open         |   |                          |
|   |   |   | -telekom-cloud.com/en/support |   |                          |
|   |   |   | /release-notes/secondary-dns) |   |                          |
+---+---+---+-------------------------------+---+--------------------------+
|   | E | E | -   Private domain name:      | 3 | For details, see [ECS    |
|   | C | C |     api.ecs.com               |   | Product Pricing          |
|   | S | S |                               |   | Details](https://ope     |
|   |   | 0 | -   Associated VPC: VPC_001   |   | n-telekom-cloud.com/en/p |
|   |   |   |                               |   | rices/price-calculator). |
|   |   | E | -   ECS1: public service node |   |                          |
|   |   | C |                               |   |                          |
|   |   | S |     Private IP address:       |   |                          |
|   |   | 1 |     192.168.2.8               |   |                          |
|   |   |   |                               |   |                          |
|   |   | E | -   ECS2: backup service node |   |                          |
|   |   | C |                               |   |                          |
|   |   | S | -   Private IP address:       |   |                          |
|   |   | 2 |     192.168.3.8               |   |                          |
+---+---+---+-------------------------------+---+--------------------------+
|   | R | R | -   Private domain name:      | 2 | For details, see [RDS    |
|   | D | D |     db.com                    |   | Product Pricing          |
|   | S | S |                               |   | Details](https://ope     |
|   |   | 1 | -   Associated VPC: VPC_001   |   | n-telekom-cloud.com/en/p |
|   |   |   |                               |   | rices/price-calculator). |
|   |   | R | -   RDS1: service database    |   |                          |
|   |   | D |                               |   |                          |
|   |   | S |     Private IP address:       |   |                          |
|   |   | 2 |     192.168.2.5               |   |                          |
|   |   |   |                               |   |                          |
|   |   |   | -   RDS2: backup database     |   |                          |
|   |   |   |                               |   |                          |
|   |   |   |     Private IP address:       |   |                          |
|   |   |   |     192.168.3.5               |   |                          |
+---+---+---+-------------------------------+---+--------------------------+
|   | D | a | -   api.ecs.com:              | 2 | Free                     |
|   | N | p |                               |   |                          |
|   | S | i |     Associated VPC: VPC_001   |   |                          |
|   |   | . |                               |   |                          |
|   |   | e |     Record set type: A        |   |                          |
|   |   | c |                               |   |                          |
|   |   | s |     Value: 192.168.2.8        |   |                          |
|   |   | . |                               |   |                          |
|   |   | c | -   db.com                    |   |                          |
|   |   | o |                               |   |                          |
|   |   | m |     Associated VPC: VPC_001   |   |                          |
|   |   |   |                               |   |                          |
|   |   | d |     Record set type: A        |   |                          |
|   |   | b |                               |   |                          |
|   |   | . |     Value: 192.168.2.5        |   |                          |
|   |   | c |                               |   |                          |
|   |   | o |                               |   |                          |
|   |   | m |                               |   |                          |
+---+---+---+-------------------------------+---+--------------------------+ -->

## Configuring Private Zones

### Summary

The figure below shows the process for configuring private zones:

![**Figure 2** Process for configuring private
zones](/img/docs/best-practices/networking/domain-name-service/en-us_image_0173959206.png)

1. (Optional) Create a VPC and a subnet on the VPC console. This
    operation is required when you are configuring private domain names
    for servers during website deployment.
2. Create private zones and associate them with the VPC and add a
    record set to each private zone on the DNS console.
3. (Optional) Change the DNS server addresses of the VPC subnet on the
    VPC console. This operation is required when you are configuring
    private domain names for servers where your website is running.

### Procedure

1. (Optional) Create a VPC and a subnet.

    Before configuring private domain names for the ECSs and databases
    required by your website, you need to create a VPC and a subnet.

    a.  Log in to the management console.

    b.  Click ![image1](/img/docs/best-practices/networking/domain-name-service/en-us_image_0131021386.png) in
        the upper left corner and select the desired region and project.

    c.  Choose *Network* -> *Virtual Private Cloud*.

    d.  In the navigation pane on the left, choose *Virtual Private
        Cloud*.

    e.  Click *Create VPC* and configure the parameters based on
        `Table 3 <dns_bestprac_0002__table65603559163645>`

    f.  Click *Create Now*.

2. Create private zones.

    Create private zones for the domain names used by ECS1 and RDS1.

    a.  Choose *Network* -> *Domain Name Service*.
        
        The DNS console is displayed.

    b.  In the navigation pane on the left, choose *Private Zones*.

    c. Click *Create Private Zone*.

    d.  Configure the parameters based on

    e.  Click *OK*. Then check the private zone created for `api.ecs.com`.

        You can view details about this private zone on the *Private
        Zones* page.

     :::note
     Click the domain name to view SOA and NS record sets
     automatically generated for the zone.

     -   The SOA record set identifies the base DNS information about
         the domain name.
     -   The NS record set defines authoritative DNS servers for the
         domain name.

     :::

    f.  Repeat steps to create a private zone for `db.com`.

3. Add a record set to each private zone.

    Add record sets to translate private domain names to private IP
    addresses of ECS1 and RDS1.

    a.  Click the domain name.

        The record set page is displayed.

    b.  Click *Add Record Set*.

    c.  Configure the parameters

    d.  Click *OK*. An A record set is added for `api.ecs.com`.

    e.  Repeat steps to add an A record set for `db.com`.

        Set the record set value of `db.com` to `192.168.2.5`.

4. (Optional) Change the DNS server addresses of the VPC subnet.

    After you configure private domain names for nodes in the website
    application, you need to change the DNS servers of the VPC subnet to
    those provided by the DNS service so that the domain names can be
    resolved.

    For details, see [How Do I Change Default DNS Servers of an ECS to
    Huawei Cloud Private DNS
    Servers?](https://support.huaweicloud.com/intl/en-us/dns_faq/dns_faq_005.html)

5. Switch to the backup ECS.

    When ECS1 becomes faulty, you can switch services to ECS2 by
    changing the value of the record set added to private zone
    `api.ecs.com`.

    a.  Log in to the management console.

    b.  Click ![image1](/img/docs/best-practices/networking/domain-name-service/en-us_image_0131021386.png) in
        the upper left and select *eu-de*.

    c.  Choose *Network* -> *Domain Name Service*.

        The DNS console is displayed.

    d.  In the navigation pane on the left, choose *Private Zones*.

    e.  In the private zone list, click the name of the zone
        `api.ecs.com`.

    f.  Locate the A record set and click *Modify* under
        *Operation*.

    g.  Change the value to `192.168.3.8`.

    h.  Click *OK*.

    Traffic to ECS1 will be directed to ECS2 by the private DNS server.