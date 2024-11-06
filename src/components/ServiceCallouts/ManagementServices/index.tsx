import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import ServiceCallouts, { Callout } from './../callout';

 const calloutsList: Callout[] = [
    {
      title: "APM",
      text: "Application Performance Management",
      link: "/docs/tags/apm",
      icon: require('@site/static/img/services/apm.svg').default,
    },
    {
        title: "Cloud Create",
        text: "Multi-Cloud Management Platform",
        link: "/docs/tags/cloud-create",
        icon: require('@site/static/img/services/cc.svg').default,
    },
    {
      title: "CloudEye",
      text: "Multi-Dimensional Monitoring Platform",
      link: "/docs/tags/cloudeye",
      icon: require('@site/static/img/services/CES.svg').default,
    },
    {
      title: "Config",
      text: "Continuously Evaluate Resource Configuration",
      link: "/docs/tags/config",
      icon: require('@site/static/img/services/rms.svg').default,
    },
    {
      title: "CTS",
      text: "Cloud Trace Service",
      link: "/docs/tags/cts",
      icon: require('@site/static/img/services/CTS.svg').default,
    },
    {
      title: "LTS",
      text: "Log Tank Service",
      link: "/docs/tags/lts",
      icon: require('@site/static/img/services/LTS.svg').default,
    },
    {
      title: "RMS",
      text: "Resource Management Service ",
      link: "/docs/tags/rms",
      icon: require('@site/static/img/services/rms.svg').default,
    },
    {
      title: "TMS",
      text: "Tag Management Service",
      link: "/docs/tags/rds",
      icon: require('@site/static/img/services/TMS.svg').default,
    },
  ];

export default function ManagementServices(): JSX.Element {
    return (
        <div>
            <ServiceCallouts callouts={calloutsList} />
        </div>
    );
}