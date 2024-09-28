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
      icon: require('@site/static/img/services/DCS-redis.svg').default,
    },
    {
        title: "DDM",
        text: "Distributed Database Middleware",
        link: "/docs/tags/ddm",
        icon: require('@site/static/img/services/ddm.svg').default,
    },
    {
      title: "DDS",
      text: "Document Database Service",
      link: "/docs/tags/dds",
      icon: require('@site/static/img/services/DDS.svg').default,
    },
    {
      title: "DRS",
      text: "Data Replication Service",
      link: "/docs/tags/drs",
      icon: require('@site/static/img/services/drs.svg').default,
    },
    {
      title: "GaussDB for MySQL",
      text: "Enterprise-Class Distributed Database",
      link: "/docs/tags/gaussdb-mysql",
      icon: require('@site/static/img/services/gaussdb_mysql.svg').default,
    },
    {
      title: "GaussDB NoSQL",
      text: "Distributed NoSQL Database Service ",
      link: "/docs/tags/model-arts",
      icon: require('@site/static/img/services/gaussdb_nosql.svg').default,
    },
    {
      title: "RDS",
      text: "Relational Database Service",
      link: "/docs/tags/rds",
      icon: require('@site/static/img/services/RDS .svg').default,
    },
  ];

export default function DatabaseServices(): JSX.Element {
    return (
        <div>
            <ServiceCallouts callouts={calloutsList} />
        </div>
    );
}