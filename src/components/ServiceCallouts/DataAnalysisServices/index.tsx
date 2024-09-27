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
      title: "CSS",
      text: "Cloud Search Service",
      link: "/docs/tags/css",
      icon: require('@site/static/img/services/CSS.svg').default,
    },
    {
        title: "DataArts Studio",
        text: "Data Operations Platform",
        link: "/docs/tags/data-arts",
        icon: RectangleStackIcon,
    },
    {
      title: "DIS",
      text: "Data Ingestion Service",
      link: "/docs/tags/dis",
      icon: require('@site/static/img/services/DIS.svg').default,
    },
    {
      title: "DLI",
      text: "Data Lake Insight",
      link: "/docs/tags/dli",
      icon: RectangleStackIcon,
    },
    {
      title: "DWS",
      text: "Data Warehouse Service",
      link: "/docs/tags/dws",
      icon: require('@site/static/img/services/DWS.svg').default,
    },
    {
      title: "ModelArts",
      text: "Development Platform for AI",
      link: "/docs/tags/model-arts",
      icon: RectangleStackIcon,
    },
    {
      title: "MRS",
      text: "MapReduce Service",
      link: "/docs/tags/mrs",
      icon: require('@site/static/img/services/mapReduce-MRS.svg').default,
    },
    {
      title: "OCR",
      text: "Optical Character Recognition",
      link: "/docs/tags/ocr",
      icon: RectangleStackIcon,
    },
  ];

export default function DataAnalysisServices(): JSX.Element {
    return (
        <div>
            <ServiceCallouts callouts={calloutsList} />
        </div>
    );
}