import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import ServiceCallouts, { Callout } from './callout';

 const calloutsList: Callout[] = [
    {
      title: "ttt",
      text: "Application Operations Management",
      link: "/docs/best-practices/building-highly-available-web-server-clusters-with-keepalived",
      icon: require('@site/static/img/services/DNS.svg').default,
    },
    {
        title: "yyy",
        text: "Application Operations Management",
        link: "/docs/best-practices/building-highly-available-web-server-clusters-with-keepalived",
        icon: require('@site/static/img/services/DNS.svg').default,
      },
  ];

export default function BestPractices(): JSX.Element {
    return (
        <div>
            <ServiceCallouts callouts={calloutsList} />
        </div>
    );
}