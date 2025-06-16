import React from 'react';
import styles from './styles.module.css';
import TemplateCard, { TemplateItem } from './TemplateCard';

import telekomPng from '@site/static/img/templates/logos/telekom.png';
import iitsPng from '@site/static/img/templates/logos/iits.png';

const TemplatesList: TemplateItem[] = [
    {
        title: 'P2S VPN',
        logo: telekomPng,
        description: (
            <>
                Setup and Maintain Point-to-Site VPN Connections between Development Machines and a VPC using Terraform and Ansible.
            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/opentelekomcloud-blueprints/ovpn',
    },
    {
        title: 'ACME',
        logo: iitsPng,
        description: (
            <>
                Create, sign and update HTTPS certificates via Open Telekom Cloud DNS.

            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-acme',
    },
    {
        title: 'CCE',
        logo: iitsPng,
        description: (
            <>
                Cloud Container Engine Terraform module.
                A module designed to support full capabilities of OTC CCE while simplifying the configuration for ease of use.
            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-cce',
    },
    {
        title: 'CCE GPU Node Pool',
        logo: iitsPng,
        description: (
            <>
                A module designed to create a CCE GPU Node Pool.
            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-cce',
    },
    // {
    //     title: 'Cert-Manager',
    //     logo: iitsPng,
    //     description: (
    //         <>
    //             A module designed to install cert-manager Helm chart with DNS challenge capabilities.
    //         </>
    //     ),
    //     type: 'Terraform',
    //     link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-cert-manager',
    // },
    {
        title: 'CRD Installer',
        logo: iitsPng,
        description: (
            <>
                A module designed to automatically extract the crds from Helm charts and install them on the target kubernetes cluster.
            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-crd-installer',
    },
    {
        title: 'CTS',
        logo: iitsPng,
        description: (
            <>
                This module enables the Cloud Tracing Service in Open Telekom Cloud. It creates a encrypted OBS bucket and connects it to a CTS tracker.
            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-cts',
    },
    {
        title: 'Dedicated ELB',
        logo: iitsPng,
        description: (
            <>
                A module designed to create and manage a dedicated ELB instance with private and public IP.
            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-dedicated-loadbalancer',
    },
    {
        title: 'Enterprise VPN Connection',
        logo: iitsPng,
        description: (
            <>
A module pair (enterprise_vpn_gateway, enterprise_vpn_connection) designed to support full capabilities of OTC Enterpise VPN while simplifying the configuration for ease of use.

            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-enterprise-vpn-connection',
    },
    {
        title: 'Enterprise VPN Gateway',
        logo: iitsPng,
        description: (
            <>
A module pair (enterprise_vpn_gateway, enterprise_vpn_connection) designed to support full capabilities of OTC Enterpise VPN while simplifying the configuration for ease of use.
            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-enterprise-vpn-gateway',
    },
    {
        title: 'EVS',
        logo: iitsPng,
        description: (
            <>
This is a Terraform module that provisions encrypted Elastic Volume Service (EVS) on Open Telekom Cloud. This module is capable of creating multiple EVS volumes using parameters for their names, specifications, and availability zones.

            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-evs',
    },
     {
        title: 'Jumphosts',
        logo: iitsPng,
        description: (
            <>
A module designed to create SSH jumphosts via Open Telekom Cloud ECS for private networks.
            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-jumphost',
    },
    {
        title: 'Keycloak SSO (OIDC)',
        logo: iitsPng,
        description: (
            <>
Configure Keycloak as a Single Sign-on Identity Provider for Open Telekom Cloud. (OIDC)

            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-keycloak-sso-oidc',
    },
    {
        title: 'Keycloak SSO (SAML)',
        logo: iitsPng,
        description: (
            <>
Configure Keycloak as a Single Sign-on Identity Provider for Open Telekom Cloud. (SAML)

            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-keycloak-sso-saml',
    },
    {
        title: 'ELB',
        logo: iitsPng,
        description: (
            <>
This module manages an Elastic Load Balancer (opentelekomcloud_lb_loadbalancer_v2). The public IP is an output.

            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-loadbalancer',
    },
    {
        title: 'Restricted OBS Bucket',
        logo: iitsPng,
        description: (
            <>
This modules creates an OBS Bucket with KMS SSE default encryption and user that able to access to it.
            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-obs-restricted',
    },
     {
        title: 'OBS Secrets Reader',
        logo: iitsPng,
        description: (
            <>
This modules reads JSON formatted secrets from an OBS bucket.

Use this module if you need to read your JSON formatted data and secrets from an OBS bucket.            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-obs-secrets-reader',
    },
    {
        title: 'OBS Secrets Writer',
        logo: iitsPng,
        description: (
            <>
            This modules creates an OBS Bucket with KMS SSE default encryption and a JSON encoded secrets file within the bucket.
            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-obs-secrets-writer',
    },
    {
        title: 'Private DNS',
        logo: iitsPng,
        description: (
            <>
Create a private DNS for your VPC.
            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-private-dns',
    },
    {
        title: 'Projects',
        logo: iitsPng,
        description: (
            <>
A module designed to create and manage projects. The module is designed to automatically add agencies required for KMS-SSE and CCE to all projects it creates.

            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-projects',
    },
     {
        title: 'Public DNS',
        logo: iitsPng,
        description: (
            <>
Manage your domain name records via Open Telekom Cloud DNS
            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-public-dns',
    },
    {
        title: 'RDS',
        logo: iitsPng,
        description: (
            <>
A module designed to support full capabilities of Open Telekom Cloud Relational Database Service while simplifying the configuration for ease of use.
            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-rds',
    },
    {
        title: 'SFS',
        logo: iitsPng,
        description: (
            <>
A module designed to create and manage SFS volumes with configurable encryption and backup systems.

            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-sfs',
    },
     {
        title: 'SNAT',
        logo: iitsPng,
        description: (
            <>
A module designed to create a NAT gateway with SNAT rule to allow internet access from VPCs and Subnets


            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-snat',
    },
    {
        title: 'Encrypted Terraform Remote State',
        logo: iitsPng,
        description: (
            <>
The script essentially sets up an Open Telekom Cloud Object Storage Service (OBS) bucket for storing Terraform states. 
This bucket is encrypted using an Open Telekom Cloud Key Management Service (KMS) key.
            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-state-bucket',
    },
     {
        title: 'VPC/Subnet',
        logo: iitsPng,
        description: (
            <>
Module to auto create VPC and multiple Subnets.
            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-vpc',
    },
    {
        title: 'VPC/Subnet',
        logo: iitsPng,
        description: (
            <>
Module to auto create VPC and multiple Subnets.
            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-vpc',
    },
     {
        title: 'WAF',
        logo: iitsPng,
        description: (
            <>
Create Web Application Firewall for a Domain
            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-waf',
    },
];

const Templates: React.FC = () => {
    return (
        <div className={styles.grid}>
            {TemplatesList.map((template) => (
                <TemplateCard key={template.title} {...template} />
            ))}
        </div>
    );
};

export default Templates;
