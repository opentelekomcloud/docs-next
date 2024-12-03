import ServiceCallouts, { Callout } from './../callout';

import DcSvg from '@site/static/img/services/DC_DirectConnect.svg'
import DnsSvg from '@site/static/img/services/DNS.svg'
import EipSvg from '@site/static/img/services/IP-EIP.svg'
import ElbSvg from '@site/static/img/services/ELB.svg'
import ErSvg from '@site/static/img/services/er.svg'
import NatgwSvg from '@site/static/img/services/nat-nat-gateway.svg'
import PlasSvg from '@site/static/img/services/plas.svg'
import SmgSvg from '@site/static/img/services/smg.svg'
import VpcSvg from '@site/static/img/services/VPC.svg'
import VpcepSvg from '@site/static/img/services/Vpc Endpoint.svg'
import VpnSvg from '@site/static/img/services/VPN.svg'

 const calloutsList: Callout[] = [
    {
      title: "Direct Connect",
      text: "Dedicated Network Connection",
      link: "/docs/tags/direct-connect",
      icon: DcSvg
    },
    {
        title: "DNS",
        text: "Domain Name Service",
        link: "/docs/tags/dns",
        icon: DnsSvg
    },
    {
      title: "EIP",
      text: "Elastic IP",
      link: "/docs/tags/eip",
      icon: EipSvg
    },
    {
      title: "ELB",
      text: "Elastic Load Balancing",
      link: "/docs/tags/elb",
      icon: ElbSvg
    },
    {
      title: "Enterprise Router",
      text: "Cloud Router Service",
      link: "/docs/tags/enterprise-router",
      icon: ErSvg
    },
    {
      title: "NATGW",
      text: "NAT Gateway",
      link: "/docs/tags/natgw",
      icon: NatgwSvg
    },
    {
      title: "PLAS",
      text: "Private Link Access Service",
      link: "/docs/tags/plas",
      icon: PlasSvg
    },
    {
      title: "Secure Mail Gateway",
      text: "Anti-Spam & Anti-Junk Outgoing Email Traffic",
      link: "/docs/tags/smg",
      icon: SmgSvg
    },
    {
      title: "VPC",
      text: "Virtual Private Cloud",
      link: "/docs/tags/vpc",
      icon: VpcSvg
    },
    {
      title: "VPCEP",
      text: "Virtual Private Cloud Endpoint",
      link: "/docs/tags/vpcep",
      icon: VpcepSvg
    },
    {
      title: "VPN",
      text: "Virtual Private Network",
      link: "/docs/tags/vpn",
      icon: VpnSvg
    },
  ];

export default function NetworkingServices(): JSX.Element {
    return (
        <div>
            <ServiceCallouts callouts={calloutsList} />
        </div>
    );
}