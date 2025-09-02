import React from 'react';
import styles from './styles.module.css';
import TemplateCard, { TemplateItem } from './TemplateCard';

import telekomPng from '@site/static/img/templates/logos/telekom.png';
import iitsPng from '@site/static/img/templates/logos/iits.png';

const TemplatesList: TemplateItem[] = [
    {
        title: 'OpenShift',
        logo: telekomPng,
        description: (
            <>
                This template deploys a Self-managed OpenShift Container Platform on Open Telekom Cloud with worker nodes in one availability zone.
                To deploy worker nodes in three availability zones, use the template OpenStack HA.
            </>
        ),
        type: 'Cloud Create',
        link: 'https://designer.otc-service.com/#/applications/list',
    },
    {
        title: 'OpenShift HA',
        logo: telekomPng,
        description: (
            <>
                This template deploys a Self-managed OpenShift Container Platform on Open Telekom Cloud with master and worker nodes in 3 availability zones.
            </>
        ),
        type: 'Cloud Create',
        link: 'https://designer.otc-service.com/#/applications/list',
    },
    {
        title: 'Nextcloud',
        logo: telekomPng,
        description: (
            <>
                This template deploys NextCloud app (version 28) on Open Telekom Cloud using Object Storage and Relational Database Service as the storage back-end and the MySQL Server, respectively.
            </>
        ),
        type: 'Cloud Create',
        link: 'https://designer.otc-service.com/#/applications/list',
    },
    {
        title: 'CCE',
        logo: telekomPng,
        description: (
            <>
                Use this template to deploy a CCE cluster with a NAT gateway, worker nodes, a bastion host, and a kubectl client. The kubectl client is pre-configured with a kubeconfig file on the bastion host and is ready to connect to the CCE cluster. You can adjust the CustomSetup script on the bastion host to configure k8s resources inside the CCE cluster with the kubectl command.
            </>
        ),
        type: 'Cloud Create',
        link: 'https://designer.otc-service.com/#/applications/list',
    },
    {
        title: 'Bastion Host',
        logo: telekomPng,
        description: (
            <>
                This template demonstrates the usecase of the bastion host and the NAT gateway. The bastion host is used as a jump-host to access the private compute via the Admin Network. The private compute has the network port in the Data Network as the default port for outgoing traffic. The NAT gateway is used for SNAT outgoing traffic from the private compute.
            </>
        ),
        type: 'Cloud Create',
        link: 'https://designer.otc-service.com/#/applications/list',
    },
    {
        title: 'Prometheus',
        logo: telekomPng,
        description: (
            <>
                This template creates a Prometheus monitoring system with Prometheus server (v2.54.1), Grafana (v11.2.2), node exporter (v1.8.2), and alertmanager (v0.27.0).
            </>
        ),
        type: 'Cloud Create',
        link: 'https://designer.otc-service.com/#/applications/list',
    },
    {
        title: 'P2S VPN',
        logo: telekomPng,
        description: (
            <>
                Deploy and maintain Point-to-Site OpenVPN connections on Open Telekom Cloud using Terraform + Ansible.
                Provision VPC, ECS instance, security groups (SSH/UDP), and private DNS in one go.
                Automate OpenVPN/EasyRSA installation, firewall hardening, and user certificate lifecycle (create, revoke, package).
                Built-in backup/restore workflows ensure seamless operational continuity.
            </>
        ),
        type: 'Terraform, Ansible',
        link: 'https://github.com/opentelekomcloud-blueprints/ovpn',
    },
    {
        title: 'ACME',
        logo: iitsPng,
        description: (
            <>
                Automate ACME SSL/TLS certificate issuance and renewal on Open Telekom Cloud.
                Automatically provision a DNS Admin user, enforce 30-day key rotation, and orchestrate DNS-01 challenges.
                Support wildcard/SAN certs with ECDSA/RSA key options and configurable renewal thresholds for scalable, compliant HTTPS.
            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-acme',
        partner: true,
    },
    {
        title: 'CCE',
        logo: iitsPng,
        description: (
            <>
                Provision a production-grade Open Telekom Cloud Container Engine (CCE) cluster with a single Terraform module.
                Seamlessly integrate VPC/subnets, node pools with autoscaling, and optional high availability.
                Customize cluster version, node flavors, storage, and addons for resilient, scalable container workloads.
            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-cce',
        partner: true,
    },
    {
        title: 'CCE GPU Node Pool',
        logo: iitsPng,
        description: (
            <>
                Provision a production-grade CCE cluster on Open Telekom Cloud with a single Terraform module.
                Automate VPC/subnet setup, node pools with autoscaling, and optional multi-AZ high availability.
                Customize Kubernetes version, node flavors, storage classes, and addon integrations.
                Simplify scalable, resilient container orchestration with end-to-end infrastructure automation.
            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-cce',
        partner: true,

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
                Automate extraction and deployment of Kubernetes CRDs from Helm charts into your OTC cluster.
                Preload cert-manager, Traefik, Kyverno, Prometheus CRDs—or add custom charts—with version overrides.
            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-crd-installer',
        partner: true,

    },
    {
        title: 'CTS',
        logo: iitsPng,
        description: (
            <>
                Provision OTC Cloud Trace Service with a secure, encrypted OBS bucket and CTS tracker.
                Customize data retention (default 180 days), object prefixes, and optional trace analysis.
                Leverage built-in KMS key management for compliant encryption.
                Automate trace collection and storage with a single Terraform module.
            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-cts',
        partner: true,

    },
    {
        title: 'Dedicated ELB',
        logo: iitsPng,
        description: (
            <>
                Deploy a dedicated ELB instance with public and private IPs (including EIP) on Open Telekom Cloud via Terraform.
                Automate availability zone, subnet, network, and bandwidth provisioning with selectable L4/L7 load-balancer flavors.
                Expose ELB ID, private/public IP outputs, and apply custom tags for seamless infrastructure governance.
            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-dedicated-loadbalancer',
        partner: true,

    },
    {
        title: 'Enterprise VPN Connection',
        logo: iitsPng,
        description: (
            <>
                Orchestrate OTC Enterprise VPN gateway and IPSec connections with Terraform.
                Configure IPsec tunnels (static/policy/BGP) with customizable IKE/IPsec policies, DPD, NQA, and HA modes (active-active/standby).
                Automate remote gateway and PSK provisioning along with multi-tunnel orchestration.
                Export connection details for secure, scalable on-premises connectivity.
            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-enterprise-vpn-connection',
        partner: true,

    },
    {
        title: 'Enterprise VPN Gateway',
        logo: iitsPng,
        description: (
            <>
                Automate deployment of Open Telekom Cloud Enterprise VPN gateways with Terraform.
                Customize gateway name, bandwidth, description, IKE/IPsec policies, BGP settings, and HA mode.
                Enable active-active or standby high availability for resilient connectivity.
                Expose gateway IDs, IP addresses, and status outputs for seamless integration.
            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-enterprise-vpn-gateway',
        partner: true,

    },
    {
        title: 'EVS',
        logo: iitsPng,
        description: (
            <>
                Automate encrypted EVS volume provisioning on Open Telekom Cloud with a single Terraform module.
                Define multiple volumes across availability zones with custom specs (size, type, device) and unified tags.
                Generate and manage KMS keys by prefix, exposing a map of volume resources for seamless orchestration.
            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-evs',
        partner: true,

    },
    {
        title: 'Jumphosts',
        logo: iitsPng,
        description: (
            <>
                Deploy a secure SSH jumphost on Open Telekom Cloud via Terraform.
                Automate VPC/subnet, ECS instance with boot volume, floating IP, and security group rules.
                Enable cloud-init customization, host key persistence, and optional KMS disk encryption.
                Expose public/private IPs and security group ID for seamless integration.

            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-jumphost',
        partner: true,

    },
    {
        title: 'Keycloak SSO (OIDC)',
        logo: iitsPng,
        description: (
            <>
                Provision Keycloak as an OIDC SSO identity provider for Open Telekom Cloud with a single Terraform module.
                Automatically create a Keycloak OpenID client, default scopes, and OTC identity_provider resource with JSON-driven claim mappings for users and groups.
                Supports custom domain, realm, endpoint configuration and outputs the OTC SSO URL for seamless integration.
            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-keycloak-sso-oidc',
        partner: true,

    },
    {
        title: 'Keycloak SSO (SAML)',
        logo: iitsPng,
        description: (
            <>
                Provision Keycloak as an SAML SSO identity provider for Open Telekom Cloud with a single Terraform module.
                Automatically create a Keycloak OpenID client, default scopes, and OTC identity_provider resource with JSON-driven claim mappings for users and groups.
                Supports custom domain, realm, endpoint configuration and outputs the OTC SSO URL for seamless integration.
            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-keycloak-sso-saml',
        partner: true,

    },
    {
        title: 'ELB',
        logo: iitsPng,
        description: (
            <>
                Provision scalable L4/L7 load balancers on Open Telekom Cloud with Terraform.
                Create listeners, pools, health monitors, and backend members with customizable protocols, ports, and session persistence.
                Enable SSL termination, cross-AZ deployment, autoscaling, and tagging for end-to-end traffic management.
            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-loadbalancer',
        partner: true,

    },
    {
        title: 'Restricted OBS Bucket',
        logo: iitsPng,
        description: (
            <>
                Provision a KMS-SSE encrypted OBS bucket with a dedicated access user scoped to that bucket on OTC.
                Automatically create the user, group, roles, and KMS key, with optional versioning, force-destroy, and tagging.
                Expose bucket name plus scoped access and secret keys for secure, compliant object storage.
            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-obs-restricted',
        partner: true,

    },
    {
        title: 'OBS Secrets Reader',
        logo: iitsPng,
        description: (
            <>
                Read JSON-formatted secrets from an encrypted OBS bucket on Open Telekom Cloud.
                Automatically fetch and parse your secrets file, exposing values as Terraform outputs.
                Works with KMS-SSE encryption and scoped IAM credentials for secure, in-Terraform secret retrieval.
            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-obs-secrets-reader',
        partner: true,

    },
    {
        title: 'OBS Secrets Writer',
        logo: iitsPng,
        description: (
            <>
                Automate writing JSON-formatted secrets to an encrypted OBS bucket on Open Telekom Cloud.
                Provision or reuse a KMS-SSE bucket with scoped IAM credentials, versioning, and force-destroy options.
                Serialize Terraform variables into a secrets file and upload via OBS object.
                Output bucket details and object path for seamless consumption by downstream modules.
            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-obs-secrets-writer',
        partner: true,

    },
    {
        title: 'Private DNS',
        logo: iitsPng,
        description: (
            <>
                Manage private DNS in Open Telekom Cloud with a single Terraform module.
                Automate creation of DNS zones, VPC zone associations, and recordsets (A, CNAME, MX, TXT, SRV).
                Customize TTLs, tags, and forwarding rules for secure, scalable internal name resolution.
            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-private-dns',
        partner: true,

    },
    {
        title: 'Projects',
        logo: iitsPng,
        description: (
            <>
                Optimize tenant project lifecycle on Open Telekom Cloud with Terraform.
                Automate creation, deletion, and quota configuration—including service enablement and custom resource limits.
                Assign users, roles, and tags, exposing project IDs and credentials for integrated access management.
            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-projects',
        partner: true,

    },
    {
        title: 'Public DNS',
        logo: iitsPng,
        description: (
            <>
                Manage public DNS zones on Open Telekom Cloud with a single Terraform module.
                Automate creation of zones, recordsets (A, AAAA, CNAME, MX, TXT, SRV), and optional reverse DNS entries.
                Customize TTLs, tags, and forwarding policies for resilient, high-performance domain resolution.
                Enable self-service domain management with minimal operational overhead.
            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-public-dns',
        partner: true,

    },
    {
        title: 'RDS',
        logo: iitsPng,
        description: (
            <>
                Provision managed MySQL, PostgreSQL, or SQL Server instances on Open Telekom Cloud with Terraform.
                Customize engine version, compute/storage specs, HA replicas, backup retention, and KMS-encrypted volumes.
                Integrate monitoring, security groups, optional EIP, and output endpoints and credentials for seamless app integration.
            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-rds',
        partner: true,

    },
    {
        title: 'SFS',
        logo: iitsPng,
        description: (
            <>
                Provision and manage Scalable File Service (SFS) volumes with KMS encryption and automated CBR backups via a single Terraform module.
                Create SFS Turbo shares, security groups, and backup vault/policies with customizable retention and iCal-based trigger schedules.
                Configure availability zone, VPC/subnet, volume size/type, and KMS key lifecycle for resilient, secure file storage.
            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-sfs',
        partner: true,

    },
    {
        title: 'SNAT',
        logo: iitsPng,
        description: (
            <>
                Provision a dedicated NAT gateway with SNAT rules to enable internet egress from your VPC subnets.
                Customize gateway bandwidth, size, and target networks using subnet IDs or CIDRs.
                Defaults to its own subnet if no networks specified and outputs the allocated EIP for seamless integration.
            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-snat',
        partner: true,

    },
    {
        title: 'Encrypted Terraform Remote State',
        logo: iitsPng,
        description: (
            <>
                Provision an encrypted OBS bucket for Terraform remote state on Open Telekom Cloud with a single module.
                Encrypt the bucket using a KMS key, enforce <code>prevent_destroy</code> for immutability, and output a ready-to-use backend configuration.
                It streamlines secure, compliant state management at scale.
            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-state-bucket',
        partner: true,

    },
    {
        title: 'VPC/Subnet',
        logo: iitsPng,
        description: (
            <>
                Deploy a VPC with multiple subnets on Open Telekom Cloud using a single Terraform module.
                Customize your CIDR block, DNS server list, and tags uniformly across all subnets.
                Automatically output the VPC and subnet objects for seamless integration and scalable network foundations.
            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-vpc',
        partner: true,

    },
    {
        title: 'WAF',
        logo: iitsPng,
        description: (
            <>
                Protect web apps with OTC WAF, automating DNS CNAME record, WAF domain and certificate resources via Terraform.
                Configure backend server endpoints, enforce TLSv1.2 or v1.1 with customizable cipher suites, and opt-in client/server insecure modes.
                Leverage default or custom WAF policies for Layer-7 threat mitigation and bot protection in code-driven deployments.
            </>
        ),
        type: 'Terraform',
        link: 'https://github.com/iits-consulting/terraform-opentelekomcloud-waf',
        partner: true,

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
