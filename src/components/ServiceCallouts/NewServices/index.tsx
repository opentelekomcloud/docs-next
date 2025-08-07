import ServiceCallouts, { Callout } from '../callout';

import AsmSvg from '@site/static/img/services/asm.svg'
import CciSvg from '@site/static/img/services/cci.svg'
import OcrSvg from '@site/static/img/services/ocr.svg'
import FgSvg from '@site/static/img/services/fg.svg'
import RfsSvg from '@site/static/img/services/rfs.svg'
import CfwSvg from '@site/static/img/services/cfw.svg'

 const calloutsList: Callout[] = [
    {
      title: "ASM",
      text: "Application Service Mesh (Istio-Based)",
      link: "https://docs.otc.t-systems.com/application-service-mesh/index.html",
      icon: AsmSvg
    },
    {
      title: "CCI",
      text: "Serverless Container Engine",
      link: "https://docs.otc.t-systems.com/cloud-container-instance/index.html",
      icon: CciSvg
    },
    {
      title: "RFS",
      text: "Resource Formation Service",
      link: "https://docs.otc.t-systems.com/resource-formation-service/index.html",
      icon: RfsSvg
    },
    // {
    //   title: "Config",
    //   text: "Continuously Evaluate Resource Configuration",
    //   link: "https://docs.otc.t-systems.com/config/index.html",
    //   icon: ConfigSvg
    // },
    {
      title: "OCR",
      text: "Optical Character Recognition",
      link: "https://docs.otc.t-systems.com/optical-character-recognition/index.html",
      icon: OcrSvg
    },
    {
      title: "FGS",
      text: "FunctionGraph",
      link: "https://docs.otc.t-systems.com/function-graph/index.html",
      icon: FgSvg
    },
    {
      title: "CFW",
      text: "Cloud Firewall",
      link: "https://docs.otc.t-systems.com/cloud-firewall/index.html",
      icon: CfwSvg
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