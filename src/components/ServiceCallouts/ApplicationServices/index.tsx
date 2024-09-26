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
      title: "AOM",
      text: "Application Operations Management",
      link: "/docs/tags/aom",
      icon: RectangleStackIcon,
    },
    {
        title: "APIG",
        text: "API Gateway",
        link: "/docs/tags/apig",
        icon: RectangleStackIcon,
    },
    {
      title: "DMS",
      text: "Distributed Message Service",
      link: "/docs/tags/dms",
      icon: RectangleStackIcon,
    },
    {
      title: "SMN",
      text: "Simple Message Notification",
      link: "/docs/tags/smn",
      icon: RectangleStackIcon,
    },
  ];

export default function ApplicationServices(): JSX.Element {
    return (
        <div>
            <ServiceCallouts callouts={calloutsList} />
        </div>
    );
}