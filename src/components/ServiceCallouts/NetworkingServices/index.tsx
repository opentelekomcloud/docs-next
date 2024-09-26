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
      icon: RectangleStackIcon,
    },
    {
        title: "DNS",
        text: "Domain Name Service",
        link: "/docs/tags/dns",
        icon: RectangleStackIcon,
    },
    {
      title: "EIP",
      text: "Elastic IP",
      link: "/docs/tags/eip",
      icon: RectangleStackIcon,
    },
    {
      title: "ELB",
      text: "Elastic Load Balancing",
      link: "/docs/tags/elb",
      icon: RectangleStackIcon,
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
      icon: RectangleStackIcon,
    },
    {
      title: "PLAS",
      text: "Private Link Access Service",
      link: "/docs/tags/plas",
      icon: RectangleStackIcon,
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
      icon: RectangleStackIcon,
    },
    {
      title: "VPCEP",
      text: "Virtual Private Cloud Endpoint",
      link: "/docs/tags/vpcep",
      icon: RectangleStackIcon,
    },
    {
      title: "VPN",
      text: "Virtual Private Network",
      link: "/docs/tags/vpn",
      icon: RectangleStackIcon,
    },
  ];

export default function NetworkingServices(): JSX.Element {
    return (
        <div>
            <ServiceCallouts callouts={calloutsList} />
        </div>
    );
}