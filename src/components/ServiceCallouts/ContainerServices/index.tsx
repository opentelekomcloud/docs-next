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
      title: "CCE",
      text: "Cloud Container Engine",
      link: "/docs/tags/cce",
      icon: RectangleStackIcon,
    },
    {
        title: "SWR",
        text: "Software Repository for Containers",
        link: "/docs/tags/swr",
        icon: RectangleStackIcon,
    },
  ];

export default function ContainerServices(): JSX.Element {
    return (
        <div>
            <ServiceCallouts callouts={calloutsList} />
        </div>
    );
}