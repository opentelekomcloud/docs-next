import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import ServiceCallouts, { Callout } from './../callout';

 var calloutsList: Callout[] = [
    {
      title: "Anti-DDoS",
      text: "Anti-DDoS Traffic Cleaning Service",
      link: "/docs/tags/anti-ddos",
      icon: require('@site/static/img/services/Anti-DDoS.svg').default,
    },
    {
        title: "DDS",
        text: "Database Security Service",
        link: "/docs/tags/dss",
        icon: require('@site/static/img/services/dbss.svg').default,
    },
    {
      title: "HSS",
      text: "Host Security Service",
      link: "/docs/tags/hss",
      icon: require('@site/static/img/services/hss.svg').default,
    },
    {
      title: "IAM",
      text: "Identity & Access Management",
      link: "/docs/tags/iam",
      icon: require('@site/static/img/services/IAM.svg').default,
    },
    {
      title: "KMS",
      text: "Key Management Service",
      link: "/docs/tags/kms",
      icon: require('@site/static/img/services/Security-KMS.svg').default,
    },
    {
      title: "WAF",
      text: "Web Application Firewall",
      link: "/docs/tags/waf",
      icon: require('@site/static/img/services/web-WAF.svg').default,
    },
    {
      title: "Dedicated WAF",
      text: "Dedicated Web Application Firewall",
      link: "/docs/tags/dedicated-waf",
      icon: require('@site/static/img/services/web-WAF.svg').default,
    },
  ];

export default function SecurityServices(): JSX.Element {
    return (
        <div>
            <ServiceCallouts callouts={calloutsList} />
        </div>
    );
}