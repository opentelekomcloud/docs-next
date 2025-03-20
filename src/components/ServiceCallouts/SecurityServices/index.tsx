import ServiceCallouts, { Callout } from './../callout';

import AntiddosSvg from '@site/static/img/services/Anti-DDoS.svg'
import DbssSvg from '@site/static/img/services/dbss.svg'
import HssSvg from '@site/static/img/services/hss.svg'
import IamSvg from '@site/static/img/services/IAM.svg'
import KmsSvg from '@site/static/img/services/Security-KMS.svg'
import WafSvg from '@site/static/img/services/web-WAF.svg'
import DwafSvg from '@site/static/img/services/web-WAF.svg'
import CfwSvg from '@site/static/img/services/cfw.svg'

 const calloutsList: Callout[] = [
    {
      title: "Anti-DDoS",
      text: "Anti-DDoS Traffic Cleaning Service",
      link: "/docs/tags/anti-ddos",
      icon: AntiddosSvg
    },
    {
      title: "CFW",
      text: "Cloud Firewall",
      link: "/docs/tags/cfw",
      icon: CfwSvg
    },
    {
        title: "DDS",
        text: "Database Security Service",
        link: "/docs/tags/dss",
        icon: DbssSvg
    },
    {
      title: "HSS",
      text: "Host Security Service",
      link: "/docs/tags/hss",
      icon: HssSvg
    },
    {
      title: "IAM",
      text: "Identity & Access Management",
      link: "/docs/tags/iam",
      icon: IamSvg
    },
    {
      title: "KMS",
      text: "Key Management Service",
      link: "/docs/tags/kms",
      icon: KmsSvg
    },
    {
      title: "WAF",
      text: "Web Application Firewall",
      link: "/docs/tags/waf",
      icon: WafSvg
    },
    {
      title: "Dedicated WAF",
      text: "Dedicated Web Application Firewall",
      link: "/docs/tags/dedicated-waf",
      icon: DwafSvg
    },
  ];

export default function SecurityServices(): JSX.Element {
    return (
        <div>
            <ServiceCallouts callouts={calloutsList} />
        </div>
    );
}