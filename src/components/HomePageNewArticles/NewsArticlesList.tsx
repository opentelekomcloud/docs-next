import { NewsArticleCard, NewsArticleItem } from './NewsArticleCard';

import telekomPng from '@site/static/img/templates/logos/telekom.png';
import iitsPng from '@site/static/img/templates/logos/iits.png';
import nextCloudPng from '@site/static/img/templates/nextcloud.png';
import prometheusPng from '@site/static/img/templates/prometheus.png';
import openShiftPng from '@site/static/img/templates/openshift.png';
import keycloakPng from '@site/static/img/templates/keycloak.png';
import letsencrypt from '@site/static/img/templates/letsencrypt.png';


export const NewsArticlesList: NewsArticleItem[] = [
    {
        id: 'openshift',
        title: 'OpenShift',
        description: (
            <>
                This template deploys a Self-managed OpenShift Container Platform on Open Telekom Cloud with worker nodes in one availability zone.
                To deploy worker nodes in three availability zones, use the template OpenStack HA.
            </>
        ),
        type: 'Cloud Create',
        link: 'https://designer.otc-service.com/#/applications/list',
        banner: openShiftPng,
    },
    {
        id: 'openshift-ha',
        title: 'OpenShift HA',
        description: (
            <>
                This template deploys a Self-managed OpenShift Container Platform on Open Telekom Cloud with master and worker nodes in 3 availability zones.
            </>
        ),
        type: 'Cloud Create',
        link: 'https://designer.otc-service.com/#/applications/list',
        banner: openShiftPng,
    },
    {
        id: 'nextcloud',
        title: 'Nextcloud',
        description: (
            <>
                This template deploys NextCloud app (version 28) on Open Telekom Cloud using Object Storage and Relational Database Service as the storage back-end and the MySQL Server, respectively.
            </>
        ),
        type: 'Cloud Create',
        link: 'https://designer.otc-service.com/#/applications/list',
        banner: nextCloudPng,
    },
    {
        id: 'cce',
        title: 'CCE',
        description: (
            <>
                Use this template to deploy a CCE cluster with a NAT gateway, worker nodes, a bastion host, and a kubectl client. The kubectl client is pre-configured with a kubeconfig file on the bastion host and is ready to connect to the CCE cluster. You can adjust the CustomSetup script on the bastion host to configure k8s resources inside the CCE cluster with the kubectl command.
            </>
        ),
        type: 'Cloud Create',
        link: 'https://designer.otc-service.com/#/applications/list',
    },
    
];