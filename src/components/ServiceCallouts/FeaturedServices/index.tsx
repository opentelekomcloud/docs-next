import ServiceCallouts, { Callout } from '../callout';

import VpcSvg from '@site/static/img/services/VPC.svg'
import EcsSvg from '@site/static/img/services/ECS.svg'
import ObsSvg from '@site/static/img/services/OBS.svg'
import IamSvg from '@site/static/img/services/IAM.svg'
import ElbSvg from '@site/static/img/services/ELB.svg'
import DmsSvg from '@site/static/img/services/DMS.svg'
import CceSvg from '@site/static/img/services/CCE.svg'
import SwrSvg from '@site/static/img/services/swr.svg'
import CcSvg from '@site/static/img/services/cc.svg'

 const calloutsList: Callout[] = [
    {
      title: "VPC",
      text: "Virtual Private Cloud",
      link: "/docs/tags/vpc",
      icon: VpcSvg
    },
    {
      title: "ECS",
      text: "Elastic Cloud Server",
      link: "/docs/tags/ecs",
      icon: EcsSvg
    },
    {
      title: "OBS",
      text: "Object Storage Service",
      link: "/docs/tags/obs",
      icon: ObsSvg
    },
    {
      title: "IAM",
      text: "Identity & Access Management",
      link: "/docs/tags/iam",
      icon: IamSvg
    },
    {
      title: "ELB",
      text: "Elastic Load Balancing",
      link: "/docs/tags/elb",
      icon: ElbSvg
    },
    {
      title: "DMS",
      text: "Distributed Message Service",
      link: "/docs/tags/dms",
      icon: DmsSvg
    },
    {
      title: "CCE",
      text: "Cloud Container Engine",
      link: "/docs/tags/cce",
      icon: CceSvg
    },
    {
      title: "SWR",
      text: "Software Repository for Containers",
      link: "/docs/tags/swr",
      icon: SwrSvg
    },
    {
      title: "Cloud Create",
      text: "Multi-Cloud Management Platform",
      link: "/docs/tags/cloud-create",
      icon: CcSvg
  },
  ];

export default function FeaturedServices(): JSX.Element {
    return (
        <div>
            <ServiceCallouts callouts={calloutsList} />
        </div>
    );
}