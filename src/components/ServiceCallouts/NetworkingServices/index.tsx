import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import ServiceCallouts, { Callout } from './../callout';
import {
    ClockIcon,
    CogIcon,
    CubeTransparentIcon,
    RectangleGroupIcon,
    RectangleStackIcon,
    ShareIcon,
    SparklesIcon,
    UsersIcon,
  } from "@heroicons/react/24/outline";

 var calloutsList: Callout[] = [
    {
      title: "Direct Connect",
      text: "Dedicated Network Connection",
      link: "/docs/tags/direct-connect",
      icon: require('@site/static/img/services/DC_DirectConnect.svg').default,
    },
    {
        title: "DNS",
        text: "Domain Name Service",
        link: "/docs/tags/dns",
        icon: require('@site/static/img/services/DNS.svg').default,
    },
    {
      title: "EIP",
      text: "Elastic IP",
      link: "/docs/tags/eip",
      icon: require('@site/static/img/services/IP-EIP.svg').default,
    },
    {
      title: "ELB",
      text: "Elastic Load Balancing",
      link: "/docs/tags/elb",
      icon: require('@site/static/img/services/ELB.svg').default,
    },
    {
      title: "Enterprise Router",
      text: "Cloud Router Service",
      link: "/docs/tags/enterprise-router",
      icon: RectangleStackIcon,
    },
    {
      title: "NATGW",
      text: "NAT Gateway",
      link: "/docs/tags/natgw",
      icon: require('@site/static/img/services/nat-nat-gateway.svg').default,
    },
    {
      title: "PLAS",
      text: "Private Link Access Service",
      link: "/docs/tags/plas",
      icon: require('@site/static/img/services/plas.svg').default,
    },
    {
      title: "Secure Mail Gateway",
      text: "Anti-Spam & Anti-Junk Outgoing Email Traffic",
      link: "/docs/tags/smg",
      icon: RectangleStackIcon,
    },
    {
      title: "VPC",
      text: "Virtual Private Cloud",
      link: "/docs/tags/vpc",
      icon: require('@site/static/img/services/VPC.svg').default,
    },
    {
      title: "VPCEP",
      text: "Virtual Private Cloud Endpoint",
      link: "/docs/tags/vpcep",
      icon: require('@site/static/img/services/Vpc Endpoint.svg').default,
    },
    {
      title: "VPN",
      text: "Virtual Private Network",
      link: "/docs/tags/vpn",
      icon: require('@site/static/img/services/VPN.svg').default,
    },
  ];

export default function NetworkingServices(): JSX.Element {
    return (
        <div>
            <ServiceCallouts callouts={calloutsList} />
        </div>
    );
}