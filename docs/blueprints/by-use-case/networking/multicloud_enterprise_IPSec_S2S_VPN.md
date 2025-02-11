---
id: multicloud-enterprise-ipsec-s2s-vpn
title: "Multicloud Connecting AWS and Open Telekom Cloud with Site-to-Site VPN"
tags: [networking, vpn, aws]
---


# Connecting AWS VPC and Open Telekom Cloud VPC with Site-to-Site VPN

## Introduction and Overview

In today's multi-cloud world, enterprises often find themselves needing to connect resources across different cloud platforms to optimize performance, cost, and reliability. One common scenario involves connecting Virtual Private Clouds (VPCs) in AWS and Open Telekom Cloud (OTC) using an enterprise site-to-site VPN. This approach leverages the strengths of both platforms, allowing seamless communication between resources hosted in different environments.

This setup is particularly useful for scenarios such as disaster recovery, data migration, and hybrid cloud applications.

In this article, we will walk through the steps to set up and configure a site-to-site VPN connection between an AWS VPC and an OTC VPC. We will cover the necessary configurations in both cloud environments.

## Setting Up the AWS VPC and VPN

### Step 1: Creating a VPC in AWS

1. Log in to the AWS Management Console.
2. Navigate to the VPC Dashboard by selecting "Services" and then "VPC".
3. Click on "Create VPC".
4. In the "Create VPC" dialog, enter the following information:
   - **Name tag:** `AWS-VPC`
   - **IPv4 CIDR block:** `10.0.0.0/16`
   - **Tenancy:** `Default`
5. Click "Create" and then "Close".

![Create VPC](aws-create-vpc.png)

### Step 2: Setting Up a VPN Gateway in AWS

1. In the VPC Dashboard, select "VPN Gateways" from the left-hand menu.
2. Click on "Create VPN Gateway".
3. In the "Create VPN Gateway" dialog, enter the following information:
   - **Name tag:** `AWS-VPN-Gateway`
   - **Type:** `Virtual Private Gateway`
   - **Amazon side ASN:** `65000`
4. Click "Create VPN Gateway" and then "Close".

![Create VPN Gateway](aws-create-vpn-gateway.png)

### Step 3: Attaching the VPN Gateway to the VPC

1. Select the newly created VPN gateway from the list.
2. Click on "Actions" and then "Attach to VPC".
3. In the "Attach to VPC" dialog, select the VPC you created earlier (`AWS-VPC`) and click "Attach".

![Attach VPN Gateway](aws-attach-vpn-gateway.png)

### Step 4: Creating a Customer Gateway

1. In the VPC Dashboard, select "Customer Gateways" from the left-hand menu.
2. Click on "Create Customer Gateway".
3. In the "Create Customer Gateway" dialog, enter the following information:
   - **Name tag:** `OTC-Customer-Gateway`
   - **Routing:** `Static`
   - **IP Address:** (Enter the public IP address of the OTC VPN Gateway)
   - **BGP ASN:** `65001`
4. Click "Create Customer Gateway" and then "Close".

![Create Customer Gateway](aws-create-customer-gateway.png)

### Step 5: Creating the Site-to-Site VPN Connection

1. In the VPC Dashboard, select "Site-to-Site VPN Connections" from the left-hand menu.
2. Click on "Create VPN Connection".
3. In the "Create VPN Connection" dialog, enter the following information:
   - **Name tag:** `AWS-OTC-VPN`
   - **Target Gateway Type:** `Virtual Private Gateway`
   - **Virtual Private Gateway:** `AWS-VPN-Gateway`
   - **Customer Gateway:** `Existing`
   - **Customer Gateway ID:** `OTC-Customer-Gateway`
   - **Routing Options:** `Static`
   - **Static IP Prefixes:** `10.1.0.0/16` (The CIDR block of the OTC VPC)
4. Click "Create VPN Connection" and then "Close".

![Create VPN Connection](aws-create-vpn-connection.png)

### Step 6: Downloading the VPN Configuration File

1. Select the newly created VPN connection from the list.
2. Click on "Download Configuration".
3. Choose the appropriate configuration template for your VPN device (open source).
4. Click "Download" to get the configuration file.

![Download VPN Configuration](aws-download-vpn-configuration.png)

With the AWS side of the VPN setup complete, we can now move on to configuring the VPN on the Open Telekom Cloud side.


