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
      title: "AS",
      text: "Auto Scaling",
      link: "/docs/tags/as",
      icon: RectangleStackIcon,
    },
    {
        title: "BMS",
        text: "Bare Metal Services",
        link: "/docs/tags/bms",
        icon: RectangleStackIcon,
    },
    {
      title: "DHS",
      text: "Dedicated Host",
      link: "/docs/tags/dhs",
      icon: RectangleStackIcon,
    },
    {
      title: "ECS",
      text: "Elastic Cloud Server",
      link: "/docs/tags/ecs",
      icon: RectangleStackIcon,
    },
    {
      title: "FGS",
      text: "FunctionGraph",
      link: "/docs/tags/functiongraph",
      icon: RectangleStackIcon,
    },
    {
      title: "IMS",
      text: "Image Management Service",
      link: "/docs/tags/ims",
      icon: RectangleStackIcon,
    },
  ];

export default function ComputingServices(): JSX.Element {
    return (
        <div>
            <ServiceCallouts callouts={calloutsList} />
        </div>
    );
}