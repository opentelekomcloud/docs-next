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
      title: "CBR",
      text: "Cloud Backup & Recovery",
      link: "/docs/tags/cbr",
      icon: RectangleStackIcon,
    },
    {
        title: "CSBS",
        text: "Cloud Server Backup Service",
        link: "/docs/tags/csbs",
        icon: RectangleStackIcon,
    },
    {
      title: "EVS",
      text: "Elastic Volume Service",
      link: "/docs/tags/evs",
      icon: RectangleStackIcon,
    },
    {
      title: "OBS",
      text: "Object Storage Service",
      link: "/docs/tags/obs",
      icon: RectangleStackIcon,
    },
    {
      title: "SDRS",
      text: "Storage Disaster Recovery Service",
      link: "/docs/tags/sdrs",
      icon: RectangleStackIcon,
    },
    {
      title: "SFS",
      text: "Scalable File Service",
      link: "/docs/tags/sfs",
      icon: RectangleStackIcon,
    },
    {
      title: "VBS",
      text: "Volume Backup Service",
      link: "/docs/tags/vbs",
      icon: RectangleStackIcon,
    },
  ];

export default function StorageServices(): JSX.Element {
    return (
        <div>
            <ServiceCallouts callouts={calloutsList} />
        </div>
    );
}