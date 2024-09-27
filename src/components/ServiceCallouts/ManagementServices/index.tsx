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
      title: "APM",
      text: "Application Performance Management",
      link: "/docs/tags/apm",
      icon: RectangleStackIcon,
    },
    {
        title: "Cloud Create",
        text: "Multi-Cloud Management Platform",
        link: "/docs/tags/cloud-create",
        icon: RectangleStackIcon,
    },
    {
      title: "CloudEye",
      text: "Multi-Dimensional Monitoring Platform",
      link: "/docs/tags/cloudeye",
      icon: RectangleStackIcon,
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
      icon: RectangleStackIcon,
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