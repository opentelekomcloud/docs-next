import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import ServiceCallouts, { Callout } from './../callout';
import {
    ClockIcon,
    CogIcon,
    CubeTransparentIcon,
    RectangleGroupIcon,
    RectangleStackIcon,
    ShareIcon,
    SparklesIcon,
    UsersIcon,
  } from "@heroicons/react/24/outline";

 var calloutsList: Callout[] = [
    {
      title: "Anti-DDoS",
      text: "Anti-DDoS Traffic Cleaning Service",
      link: "/docs/tags/anti-ddos",
      icon: RectangleStackIcon,
    },
    {
        title: "DDS",
        text: "Database Security Service",
        link: "/docs/tags/dss",
        icon: RectangleStackIcon,
    },
    {
      title: "HSS",
      text: "Host Security Service",
      link: "/docs/tags/hss",
      icon: RectangleStackIcon,
    },
    {
      title: "IAM",
      text: "Identity & Access Management",
      link: "/docs/tags/iam",
      icon: RectangleStackIcon,
    },
    {
      title: "KMS",
      text: "Key Management Service",
      link: "/docs/tags/kms",
      icon: RectangleStackIcon,
    },
    {
      title: "WAF",
      text: "Web Application Firewall",
      link: "/docs/tags/waf",
      icon: RectangleStackIcon,
    },
    {
      title: "Dedicated WAF",
      text: "Dedicated Web Application Firewall",
      link: "/docs/tags/dedicated-waf",
      icon: RectangleStackIcon,
    },
  ];

export default function SecurityServices(): JSX.Element {
    return (
        <div>
            <ServiceCallouts callouts={calloutsList} />
        </div>
    );
}