import ServiceCallouts, { Callout } from './../callout';

import AsmSvg from '@site/static/img/services/asm.svg'
import CceSvg from '@site/static/img/services/CCE.svg'
import CciSvg from '@site/static/img/services/cci.svg'
import SwrSvg from '@site/static/img/services/swr.svg'

 const calloutsList: Callout[] = [
    {
      title: "ASM",
      text: "Application Service Mesh",
      link: "/docs/tags/asm",
      icon: AsmSvg,
    },
    {
      title: "CCE",
      text: "Cloud Container Engine",
      link: "/docs/tags/cce",
      icon: CceSvg,
    },
    {
      title: "CCI",
      text: "Serverless Container Engine",
      link: "/docs/tags/cci",
      icon: CciSvg,
    },
    {
        title: "SWR",
        text: "Software Repository for Containers",
        link: "/docs/tags/swr",
        icon: SwrSvg,
    },
  ];

export default function ContainerServices(): JSX.Element {
    return (
        <div>
            <ServiceCallouts callouts={calloutsList} />
        </div>
    );
}