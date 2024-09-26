import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import ServiceCallouts, { Callout } from '../callout';
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
      title: "IAM",
      text: "Identity & Access Management",
      link: "/docs/tags/iam",
      icon: RectangleStackIcon,
    },
    {
      title: "DMS",
      text: "Distributed Message Service",
      link: "/docs/tags/dms",
      icon: RectangleStackIcon,
    },
    {
      title: "ECS",
      text: "Elastic Cloud Server",
      link: "/docs/tags/ecs",
      icon: RectangleStackIcon,
    },
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
    {
      title: "VPC",
      text: "Virtual Private Cloud",
      link: "/docs/tags/vpc",
      icon: RectangleStackIcon,
    },
    {
      title: "ELB",
      text: "Elastic Load Balancing",
      link: "/docs/tags/elb",
      icon: RectangleStackIcon,
    },
    {
      title: "OBS",
      text: "Object Storage Service",
      link: "/docs/tags/obs",
      icon: RectangleStackIcon,
    },
    {
      title: "Cloud Create",
      text: "Multi-Cloud Management Platform",
      link: "/docs/tags/cloud-create",
      icon: RectangleStackIcon,
  },
  ];

export default function FeaturedServices(): JSX.Element {
    return (
        <div>
            <ServiceCallouts callouts={calloutsList} />
        </div>
    );
}