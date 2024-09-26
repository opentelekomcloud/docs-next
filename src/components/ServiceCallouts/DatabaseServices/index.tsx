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
      title: "DCS",
      text: "Distributed Cache Service",
      link: "/docs/tags/dcs",
      icon: RectangleStackIcon,
    },
    {
        title: "DDM",
        text: "Distributed Database Middleware",
        link: "/docs/tags/ddm",
        icon: RectangleStackIcon,
    },
    {
      title: "DDS",
      text: "Document Database Service",
      link: "/docs/tags/dds",
      icon: RectangleStackIcon,
    },
    {
      title: "DRS",
      text: "Data Replication Service",
      link: "/docs/tags/drs",
      icon: RectangleStackIcon,
    },
    {
      title: "GaussDB for MySQL",
      text: "Enterprise-Class Distributed Database",
      link: "/docs/tags/gaussdb-mysql",
      icon: RectangleStackIcon,
    },
    {
      title: "GaussDB NoSQL",
      text: "Distributed NoSQL Database Service ",
      link: "/docs/tags/model-arts",
      icon: RectangleStackIcon,
    },
    {
      title: "RDS",
      text: "Relational Database Service",
      link: "/docs/tags/rds",
      icon: RectangleStackIcon,
    },
  ];

export default function DatabaseServices(): JSX.Element {
    return (
        <div>
            <ServiceCallouts callouts={calloutsList} />
        </div>
    );
}