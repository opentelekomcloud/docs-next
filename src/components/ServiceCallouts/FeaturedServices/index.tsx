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
    // {
    //   title: "VPC",
    //   text: "Virtual Private Cloud",
    //   link: "/docs/tags/vpc",
    //   icon: "/img/services/VPC.svg"
    // },
    {
      title: "ECS",
      text: "Elastic Cloud Server",
      link: "/docs/tags/ecs",
      icon: "/img/services/ECS.svg"
    },
    {
      title: "OBS",
      text: "Object Storage Service",
      link: "/docs/tags/obs",
      icon: "/img/services/OBS.svg"
    },
    {
      title: "IAM",
      text: "Identity & Access Management",
      link: "/docs/tags/iam",
      icon: "/img/services/IAM.svg"
    },
    {
      title: "ELB",
      text: "Elastic Load Balancing",
      link: "/docs/tags/elb",
      icon: "/img/services/ELB.svg"
    },
    {
      title: "DMS",
      text: "Distributed Message Service",
      link: "/docs/tags/dms",
      icon: "/img/services/DMS.svg"
    },
    {
      title: "CCE",
      text: "Cloud Container Engine",
      link: "/docs/tags/cce",
      icon: "/img/services/CCE.svg"
    },
    // {
    //   title: "SWR",
    //   text: "Software Repository for Containers",
    //   link: "/docs/tags/swr",
    //   icon: "/img/services/swr.svg"
    // },
  //   {
  //     title: "Cloud Create",
  //     text: "Multi-Cloud Management Platform",
  //     link: "/docs/tags/cloud-create",
  //     icon: "/img/services/cc.svg"
  // },
  ];

export default function FeaturedServices(): JSX.Element {
    return (
        <div>
            <ServiceCallouts callouts={calloutsList} />
        </div>
    );
}