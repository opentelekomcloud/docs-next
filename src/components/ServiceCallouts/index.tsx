import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import ServiceCallouts, { Callout } from './callout';
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
      title: "ttt",
      text: "Application Operations Management",
      link: "/docs/best-practices/building-highly-available-web-server-clusters-with-keepalived",
      icon: RectangleStackIcon,
    },
    {
        title: "yyy",
        text: "Application Operations Management",
        link: "/docs/best-practices/building-highly-available-web-server-clusters-with-keepalived",
        icon: RectangleStackIcon,
      },
  ];

export default function BestPractices(): JSX.Element {
    return (
        <div>
            <ServiceCallouts callouts={calloutsList} />
        </div>
    );
}