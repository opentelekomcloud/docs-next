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
      title: "ASM",
      text: "Application Service Mesh (Istio-Based)",
      link: "/docs/tags/asm",
      icon: require('@site/static/img/services/asm.svg').default,
    },
    {
      title: "CCI",
      text: "Serverless Container Engine",
      link: "/docs/tags/cci",
      icon: require('@site/static/img/services/cci.svg').default,
    },
    {
      title: "Config",
      text: "Continuously Evaluate Resource Configuration",
      link: "/docs/tags/config",
      icon: require('@site/static/img/services/rms.svg').default,
    },
    {
      title: "OCR",
      text: "Optical Character Recognition",
      link: "/docs/tags/ocr",
      icon: require('@site/static/img/services/ocr.svg').default,
    },
    {
      title: "FGS",
      text: "FunctionGraph",
      link: "/docs/tags/functiongraph",
      icon: require('@site/static/img/services/fg.svg').default,
    },
    {
      title: "GeminiDB",
      text: "Distributed, Multi-Model NoSQL Database Service",
      link: "/docs/tags/gemini-db",
      icon: require('@site/static/img/services/RDS .svg').default,
    },
  ];

export default function NewServices(): JSX.Element {
    return (
        <div>
            <ServiceCallouts callouts={calloutsList} />
        </div>
    );
}