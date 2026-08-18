import ServiceCallouts, { Callout } from '../callout';

import CciSvg from '@site/static/img/services/cci.svg'
import DmsRMQSvg from '@site/static/img/services/dms_rocketmq.svg'
import UcsSvg from '@site/static/img/services/ucs.svg'
import CcnSvg from '@site/static/img/services/ccn.svg'
import EswSvg from '@site/static/img/services/esw.svg'
import ErSvg from '@site/static/img/services/er.svg'

const calloutsList: Callout[] = [
  {
    title: "UCS",
    text: "Ubiquitous Cloud Native Service",
    link: "https://docs.otc.t-systems.com/ubiquitous-cloud-native-service/index.html",
    icon: UcsSvg
  },
  {
    title: "DMS (for RocketMQ)",
    text: "Distributed Message Service",
    link: "https://docs.otc.t-systems.com/distributed-message-service-rocketmq/index.html",
    icon: DmsRMQSvg
  },
  {
    title: "CCI",
    text: "Serverless Container Engine",
    link: "https://docs.otc.t-systems.com/cloud-container-instance/index.html",
    icon: CciSvg
  },
  {
    title: "CCN",
    text: "Cloud Connect",
    link: "https://docs.otc.t-systems.com/cloud-connect/index.html",
    icon: CcnSvg
  },
   {
    title: "ER",
    text: "Enterprise Router",
    link: "https://docs.otc.t-systems.com/enterprise-router/index.html",
    icon: ErSvg
  },
  {
    title: "ESW",
    text: "Enterprise Switch",
    link: "https://docs.otc.t-systems.com/enterprise-switch/index.html",
    icon: EswSvg
  },
 
  // {
  //   title: "GeminiDB",
  //   text: "Distributed, Multi-Model NoSQL Database Service",
  //   link: "https://docs.otc.t-systems.com/geminidb/index.html",
  //   icon: GeminidbSvg
  // },
];

export default function NewServices(): JSX.Element {
  return (
    <div>
      <ServiceCallouts callouts={calloutsList} />
    </div>
  );
}