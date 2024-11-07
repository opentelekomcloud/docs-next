import ServiceCallouts, { Callout } from './../callout';

import CssSvg from '@site/static/img/services/CSS.svg'
import DatarartsSvg from '@site/static/img/services/dataarts_studio.svg'
import DisSvg from '@site/static/img/services/DIS.svg'
import DliSvg from '@site/static/img/services/dli.svg'
import DwsSvg from '@site/static/img/services/DWS.svg'
import ModelartsSvg from '@site/static/img/services/ma.svg'
import MrsSvg from '@site/static/img/services/mapReduce-MRS.svg'
import OcrSvg from '@site/static/img/services/ocr.svg'

 const calloutsList: Callout[] = [
    {
      title: "CSS",
      text: "Cloud Search Service",
      link: "/docs/tags/css",
      icon: CssSvg,
    },
    {
        title: "DataArts Studio",
        text: "Data Operations Platform",
        link: "/docs/tags/data-arts",
        icon: DatarartsSvg,
    },
    {
      title: "DIS",
      text: "Data Ingestion Service",
      link: "/docs/tags/dis",
      icon: DisSvg,
    },
    {
      title: "DLI",
      text: "Data Lake Insight",
      link: "/docs/tags/dli",
      icon: DliSvg,
    },
    {
      title: "DWS",
      text: "Data Warehouse Service",
      link: "/docs/tags/dws",
      icon: DwsSvg,
    },
    {
      title: "ModelArts",
      text: "Development Platform for AI",
      link: "/docs/tags/model-arts",
      icon: ModelartsSvg,
    },
    {
      title: "MRS",
      text: "MapReduce Service",
      link: "/docs/tags/mrs",
      icon: MrsSvg,
    },
    {
      title: "OCR",
      text: "Optical Character Recognition",
      link: "/docs/tags/ocr",
      icon: OcrSvg,
    },
  ];

export default function DataAnalysisServices(): JSX.Element {
    return (
        <div>
            <ServiceCallouts callouts={calloutsList} />
        </div>
    );
}