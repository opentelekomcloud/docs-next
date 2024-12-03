import ServiceCallouts, { Callout } from './../callout';

import CbrSvg from '@site/static/img/services/CBR.svg'
import CsbsSvg from '@site/static/img/services/CSBS.svg'
import EvsSvg from '@site/static/img/services/EVS.svg'
import ObsSvg from '@site/static/img/services/OBS.svg'
import SdrsSvg from '@site/static/img/services/sdrs.svg'
import SfsSvg from '@site/static/img/services/SFS.svg'
import VbsSvg from '@site/static/img/services/VBS.svg'

 const calloutsList: Callout[] = [
    {
      title: "CBR",
      text: "Cloud Backup & Recovery",
      link: "/docs/tags/cbr",
      icon: CbrSvg
    },
    {
        title: "CSBS",
        text: "Cloud Server Backup Service",
        link: "/docs/tags/csbs",
        icon: CsbsSvg
    },
    {
      title: "EVS",
      text: "Elastic Volume Service",
      link: "/docs/tags/evs",
      icon: EvsSvg
    },
    {
      title: "OBS",
      text: "Object Storage Service",
      link: "/docs/tags/obs",
      icon: ObsSvg
    },
    {
      title: "SDRS",
      text: "Storage Disaster Recovery Service",
      link: "/docs/tags/sdrs",
      icon: SdrsSvg
    },
    {
      title: "SFS",
      text: "Scalable File Service",
      link: "/docs/tags/sfs",
      icon: SfsSvg
    },
    {
      title: "VBS",
      text: "Volume Backup Service",
      link: "/docs/tags/vbs",
      icon: VbsSvg
    },
  ];

export default function StorageServices(): JSX.Element {
    return (
        <div>
            <ServiceCallouts callouts={calloutsList} />
        </div>
    );
}