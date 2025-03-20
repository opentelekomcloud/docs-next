import ServiceCallouts, { Callout } from './../callout';

import AomSvg from '@site/static/img/services/aom.svg'
import ApigSvg from '@site/static/img/services/apig.svg'
import ApmSvg from '@site/static/img/services/apm.svg'
import DmsSvg from '@site/static/img/services/DMS.svg'
import SmnSvg from '@site/static/img/services/SMN.svg'

 const calloutsList: Callout[] = [
    {
      title: "AOM",
      text: "Application Operations Management",
      link: "/docs/tags/aom",
      icon: AomSvg,
    },
    {
        title: "APIG",
        text: "API Gateway",
        link: "/docs/tags/apig",
        icon: ApigSvg,
    },
    {
      title: "APM",
      text: "Application Performance Management",
      link: "/docs/tags/apm",
      icon: ApmSvg
    },
    {
      title: "DMS",
      text: "Distributed Message Service",
      link: "/docs/tags/dms",
      icon: DmsSvg,
    },
    {
      title: "SMN",
      text: "Simple Message Notification",
      link: "/docs/tags/smn",
      icon: SmnSvg,
    },
  ];

export default function ApplicationServices(): JSX.Element {
    return (
        <div>
            <ServiceCallouts callouts={calloutsList} />
        </div>
    );
}