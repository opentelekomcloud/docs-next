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
    icon: require('@site/static/img/services/AS.svg').default,
  },
  {
    title: "BMS",
    text: "Bare Metal Services",
    link: "/docs/tags/bms",
    icon: require('@site/static/img/services/BMS.svg').default,
  },
  {
    title: "DHS",
    text: "Dedicated Host",
    link: "/docs/tags/dhs",
    icon: require('@site/static/img/services/DeH.svg').default,
  },
  {
    title: "ECS",
    text: "Elastic Cloud Server",
    link: "/docs/tags/ecs",
    icon: require('@site/static/img/services/ECS.svg').default,
  },
  {
    title: "FGS",
    text: "FunctionGraph",
    link: "/docs/tags/functiongraph",
    icon: require('@site/static/img/services/fg.svg').default,
  },
  {
    title: "IMS",
    text: "Image Management Service",
    link: "/docs/tags/ims",
    icon: require('@site/static/img/services/IMS.svg').default,
  },
];

export default function ComputingServices(): JSX.Element {
  return (
    <div>
      <ServiceCallouts callouts={calloutsList} />
    </div>
  );
}