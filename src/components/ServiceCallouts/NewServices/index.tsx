import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import ServiceCallouts, { Callout } from '../callout';

 const calloutsList: Callout[] = [
    {
      title: "ASM",
      text: "Application Service Mesh (Istio-Based)",
      link: "https://docs.otc.t-systems.com/application-service-mesh/index.html",
      icon: require('@site/static/img/services/asm.svg').default,
    },
    {
      title: "CCI",
      text: "Serverless Container Engine",
      link: "https://docs.otc.t-systems.com/cloud-container-instance/index.html",
      icon: require('@site/static/img/services/cci.svg').default,
    },
    {
      title: "Config",
      text: "Continuously Evaluate Resource Configuration",
      link: "https://docs.otc.t-systems.com/config/index.html",
      icon: require('@site/static/img/services/rms.svg').default,
    },
    {
      title: "OCR",
      text: "Optical Character Recognition",
      link: "https://docs.otc.t-systems.com/optical-character-recognition/index.html",
      icon: require('@site/static/img/services/ocr.svg').default,
    },
    {
      title: "FGS",
      text: "FunctionGraph",
      link: "https://docs.otc.t-systems.com/function-graph/index.html",
      icon: require('@site/static/img/services/fg.svg').default,
    },
    {
      title: "GeminiDB",
      text: "Distributed, Multi-Model NoSQL Database Service",
      link: "https://docs.otc.t-systems.com/geminidb/index.html",
      icon: require('@site/static/img/services/RDS .svg').default,
    },
  ];

export default function NewServices(): JSX.Element {
    return (
        <div>
            <ServiceCallouts callouts={calloutsList} />
        </div>
    );
}