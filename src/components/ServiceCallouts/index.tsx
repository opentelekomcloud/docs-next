import ServiceCallouts, { Callout } from './callout';

import DnsSvg from '@site/static/img/services/DNS.svg'

const calloutsList: Callout[] = [
  {
    title: "ttt",
    text: "Application Operations Management",
    link: "/docs/best-practices/building-highly-available-web-server-clusters-with-keepalived",
    icon: DnsSvg
  },
  {
      title: "yyy",
      text: "Application Operations Management",
      link: "/docs/best-practices/building-highly-available-web-server-clusters-with-keepalived",
      icon: DnsSvg
    },
];

export default function BestPractices(): JSX.Element {
    return (
        <div>
            <ServiceCallouts callouts={calloutsList} />
        </div>
    );
}