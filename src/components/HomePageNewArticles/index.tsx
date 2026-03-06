import clsx from 'clsx';
import styles from './styles.module.css';
import { ODSCardCarousel } from '@telekom-ods/react-ui-kit';
import NewArticleCard from './NewArticleCard';

export default function HomePageNewArticles(): JSX.Element {

  return (
    <div className={clsx("col col--12")}>
      <ODSCardCarousel align='right'>
        <div className='row' style={{ display: 'flex', gap: '8px', padding: '20px' }}>
          <div className={styles.card}>
            <NewArticleCard 
              id="3"
              title="Deploy OpenDesk on T Cloud Public"
              description="OpenDesk (branded as openDesk) is an open-source, sovereign digital workplace solution designed for public administration under the coordination of the German Federal Ministry of the Interior. This series of articles showcase how to deploy scalable, high-availability (HA) instances of OpenDesk on T Cloud Public."
              link="/docs/blueprints/by-use-case/sovereignty/opendesk"
              banner="img/templates/opendesk.png"
            />
          </div>
          <div className={styles.card}>
            <NewArticleCard 
              id="1"
              title="Enabling External Traffic with Ingress API"
              description="In this guide, we'll install and configure essential prerequisites required to expose services securely such as an Ingress Controller for routing external traffic, cert-manager for managing TLS certificates, and other supporting workloads."
              banner="img/templates/T_background_runway.jpg"
            />
          </div>
          <div className={styles.card}>
            <NewArticleCard 
              id="2"
              title="Deploy the NVIDIA GPU Operator on CCE"
              description="This guide outlines how to deploy the NVIDIA GPU Operator on CCE cluster. The process involves preparing GPU nodes, installing necessary components, configuring the cluster for GPU support, deploying an application leveraging GPUs, and verifying functionality."
              link="/docs/blueprints/by-use-case/ai/deploy-the-nvidia-gpu-operator-on-cce"
              banner="img/templates/nvidia.png"
            />
          </div>
        </div>

        <div className='row' style={{ display: 'flex', gap: '8px', padding: '20px' }}>
          <div className={styles.card}>
            <NewArticleCard 
              id="1"
              title="Aggregate CCE Logs with Fluent Bit & Grafana Loki"
              description="This blueprint explains how to collect and centralize logs from Cloud Container Engine (CCE) workloads using Fluent Bit and Grafana Loki. It covers the end-to-end setup for forwarding logs from CCE nodes and containers to a centralized Loki instance, enabling efficient querying, visualization, and troubleshooting through Grafana dashboards."
              link="/docs/blueprints/by-use-case/observability/aggregate-cce-logs-with-fluentbit-and-grafana-loki"
              banner="img/templates/T_background_wall.jpg"
            />
          </div>
          <div className={styles.card}>
            <NewArticleCard 
              id="1"
              title="Issue an ACME Certificate with DNS01 Solver in CCE"
              description="A DNS01 challenge is a type of challenge used in the Domain Name System (DNS) to verify ownership of a domain during the process of obtaining an SSL/TLS certificate, often through services like Let's Encrypt."
              link="/docs/best-practices/containers/cloud-container-engine/issue-an-acme-certificate-with-dns01-solver-in-cce"
              banner="img/templates/letsencrypt.png"
            />
          </div>
          <div className={styles.card}>
            <NewArticleCard 
              id="1"
              title="Azure Entra ID as Identity Provider for IAM"
              description="In this guide, we'll walk you through the implemention of an Identity Provider (IdP) on Open Telekom Cloud, in order to enable authentication via Azure Entra ID. This allows users managed in Entra ID to access Open Telekom Cloud resources through federated login, without requiring separate user accounts on Open Telekom Cloud."
              link="/docs/blueprints/by-use-case/security/microsoft/azure-entraid-as-identity-provider-iam"
              banner="img/templates/T_background_wall.jpg"
            />
          </div>
        </div>
      </ODSCardCarousel>
    </div>
  );
}