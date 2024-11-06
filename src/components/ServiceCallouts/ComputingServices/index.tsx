import ServiceCallouts, { Callout } from './../callout';

import AsSvg from '@site/static/img/services/AS.svg'
import BmsSvg from '@site/static/img/services/BMS.svg'
import DhsSvg from '@site/static/img/services/DHS.svg'
import EcsSvg from '@site/static/img/services/ECS.svg'
import FgsSvg from '@site/static/img/services/fg.svg'
import ImsSvg from '@site/static/img/services/IMS.svg'

const calloutsList: Callout[] = [
  {
    title: "AS",
    text: "Auto Scaling",
    link: "/docs/tags/as",
    icon: AsSvg,
  },
  {
    title: "BMS",
    text: "Bare Metal Services",
    link: "/docs/tags/bms",
    icon: BmsSvg,
  },
  {
    title: "DHS",
    text: "Dedicated Host",
    link: "/docs/tags/dhs",
    icon: DhsSvg,
  },
  {
    title: "ECS",
    text: "Elastic Cloud Server",
    link: "/docs/tags/ecs",
    icon: EcsSvg,
  },
  {
    title: "FGS",
    text: "FunctionGraph",
    link: "/docs/tags/functiongraph",
    icon: FgsSvg,
  },
  {
    title: "IMS",
    text: "Image Management Service",
    link: "/docs/tags/ims",
    icon: ImsSvg,
  },
];

export default function ComputingServices(): JSX.Element {
  return (
    <div>
      <ServiceCallouts callouts={calloutsList} />
    </div>
  );
}