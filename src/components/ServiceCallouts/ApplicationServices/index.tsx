import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import ServiceCallouts, { Callout } from './../callout';

 var calloutsList: Callout[] = [
    {
      title: "AOM",
      text: "Application Operations Management",
      link: "/docs/tags/aom",
      icon: require('@site/static/img/services/aom.svg').default,
    },
    {
        title: "APIG",
        text: "API Gateway",
        link: "/docs/tags/apig",
        icon: require('@site/static/img/services/apig.svg').default,
    },
    {
      title: "DMS",
      text: "Distributed Message Service",
      link: "/docs/tags/dms",
      icon: require('@site/static/img/services/DMS.svg').default,
    },
    {
      title: "SMN",
      text: "Simple Message Notification",
      link: "/docs/tags/smn",
      icon: require('@site/static/img/services/SMN.svg').default,
    },
  ];

export default function ApplicationServices(): JSX.Element {
    return (
        <div>
            <ServiceCallouts callouts={calloutsList} />
        </div>
    );
}