import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import ServiceCallouts, { Callout } from './../callout';

 const calloutsList: Callout[] = [
    {
      title: "CBR",
      text: "Cloud Backup & Recovery",
      link: "/docs/tags/cbr",
      icon: require('@site/static/img/services/CBR.svg').default,
    },
    {
        title: "CSBS",
        text: "Cloud Server Backup Service",
        link: "/docs/tags/csbs",
        icon: require('@site/static/img/services/CSBS.svg').default,
    },
    {
      title: "EVS",
      text: "Elastic Volume Service",
      link: "/docs/tags/evs",
      icon: require('@site/static/img/services/EVS.svg').default,
    },
    {
      title: "OBS",
      text: "Object Storage Service",
      link: "/docs/tags/obs",
      icon: require('@site/static/img/services/OBS.svg').default,
    },
    {
      title: "SDRS",
      text: "Storage Disaster Recovery Service",
      link: "/docs/tags/sdrs",
      icon: require('@site/static/img/services/sdrs.svg').default,
    },
    {
      title: "SFS",
      text: "Scalable File Service",
      link: "/docs/tags/sfs",
      icon: require('@site/static/img/services/SFS.svg').default,
    },
    {
      title: "VBS",
      text: "Volume Backup Service",
      link: "/docs/tags/vbs",
      icon: require('@site/static/img/services/VBS.svg').default,
    },
  ];

export default function StorageServices(): JSX.Element {
    return (
        <div>
            <ServiceCallouts callouts={calloutsList} />
        </div>
    );
}