import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import ServiceCallouts, { Callout } from './../callout';

 var calloutsList: Callout[] = [
    {
      title: "ASM",
      text: "Application Service Mesh",
      link: "/docs/tags/asm",
      icon: require('@site/static/img/services/asm.svg').default,
    },
    {
      title: "CCE",
      text: "Cloud Container Engine",
      link: "/docs/tags/cce",
      icon: require('@site/static/img/services/CCE.svg').default,
    },
    {
      title: "CCI",
      text: "Serverless Container Engine",
      link: "/docs/tags/cci",
      icon: require('@site/static/img/services/cci.svg').default,
    },
    {
        title: "SWR",
        text: "Software Repository for Containers",
        link: "/docs/tags/swr",
        icon: require('@site/static/img/services/swr.svg').default,
    },
  ];

export default function ContainerServices(): JSX.Element {
    return (
        <div>
            <ServiceCallouts callouts={calloutsList} />
        </div>
    );
}