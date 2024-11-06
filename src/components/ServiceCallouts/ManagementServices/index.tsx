import ServiceCallouts, { Callout } from './../callout';

import ApmSvg from '@site/static/img/services/apm.svg'
import CesSvg from '@site/static/img/services/CES.svg'
import ConfigSvg from '@site/static/img/services/rms.svg'
import CtsSvg from '@site/static/img/services/CTS.svg'
import LtsSvg from '@site/static/img/services/LTS.svg'
import RmsSvg from '@site/static/img/services/rms.svg'
import TmsSvg from '@site/static/img/services/TMS.svg'
import CcSvg from '@site/static/img/services/cc.svg'

 const calloutsList: Callout[] = [
    {
      title: "APM",
      text: "Application Performance Management",
      link: "/docs/tags/apm",
      icon: ApmSvg
    },
    {
        title: "Cloud Create",
        text: "Multi-Cloud Management Platform",
        link: "/docs/tags/cloud-create",
        icon: CcSvg
    },
    {
      title: "CloudEye",
      text: "Multi-Dimensional Monitoring Platform",
      link: "/docs/tags/cloudeye",
      icon: CesSvg
    },
    {
      title: "Config",
      text: "Continuously Evaluate Resource Configuration",
      link: "/docs/tags/config",
      icon: ConfigSvg
    },
    {
      title: "CTS",
      text: "Cloud Trace Service",
      link: "/docs/tags/cts",
      icon: CtsSvg
    },
    {
      title: "LTS",
      text: "Log Tank Service",
      link: "/docs/tags/lts",
      icon: LtsSvg
    },
    {
      title: "RMS",
      text: "Resource Management Service ",
      link: "/docs/tags/rms",
      icon: RmsSvg
    },
    {
      title: "TMS",
      text: "Tag Management Service",
      link: "/docs/tags/rds",
      icon: TmsSvg
    },
  ];

export default function ManagementServices(): JSX.Element {
    return (
        <div>
            <ServiceCallouts callouts={calloutsList} />
        </div>
    );
}