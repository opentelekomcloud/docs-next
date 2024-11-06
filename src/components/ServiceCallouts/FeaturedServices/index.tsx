import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import ServiceCallouts, { Callout } from '../callout';

 const calloutsList: Callout[] = [
    {
      title: "VPC",
      text: "Virtual Private Cloud",
      link: "/docs/tags/vpc",
      icon: require('@site/static/img/services/VPC.svg').default,
    },
    {
      title: "ECS",
      text: "Elastic Cloud Server",
      link: "/docs/tags/ecs",
      icon: require('@site/static/img/services/ECS.svg').default,
    },
    {
      title: "OBS",
      text: "Object Storage Service",
      link: "/docs/tags/obs",
      icon: require('@site/static/img/services/OBS.svg').default,
    },
    {
      title: "IAM",
      text: "Identity & Access Management",
      link: "/docs/tags/iam",
      icon: require('@site/static/img/services/IAM.svg').default,
    },
    {
      title: "ELB",
      text: "Elastic Load Balancing",
      link: "/docs/tags/elb",
      icon: require('@site/static/img/services/ELB.svg').default,
    },
    {
      title: "DMS",
      text: "Distributed Message Service",
      link: "/docs/tags/dms",
      icon: require('@site/static/img/services/DMS.svg').default,
    },
    {
      title: "CCE",
      text: "Cloud Container Engine",
      link: "/docs/tags/cce",
      icon: require('@site/static/img/services/CCE.svg').default,
    },
    {
        title: "SWR",
        text: "Software Repository for Containers",
        link: "/docs/tags/swr",
        icon: require('@site/static/img/services/swr.svg').default,
    },
    {
      title: "Cloud Create",
      text: "Multi-Cloud Management Platform",
      link: "/docs/tags/cloud-create",
      icon: require('@site/static/img/services/cc.svg').default,
  },
  ];

export default function FeaturedServices(): JSX.Element {
    return (
        <div>
            <ServiceCallouts callouts={calloutsList} />
        </div>
    );
}