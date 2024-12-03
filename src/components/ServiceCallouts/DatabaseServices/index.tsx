import ServiceCallouts, { Callout } from './../callout';

import DcsSvg from '@site/static/img/services/DCS-redis.svg'
import DdmSvg from '@site/static/img/services/ddm.svg'
import DdsSvg from '@site/static/img/services/DDS.svg'
import DrsSvg from '@site/static/img/services/drs.svg'
import GaussdbmysqlSvg from '@site/static/img/services/gaussdb_mysql.svg'
import GaussdbnosqlSvg from '@site/static/img/services/gaussdb_nosql.svg'
import RdsSvg from '@site/static/img/services/RDS .svg'
import GeminidbSvg from '@site/static/img/services/RDS .svg'

 const calloutsList: Callout[] = [
    {
      title: "DCS",
      text: "Distributed Cache Service",
      link: "/docs/tags/dcs",
      icon: DcsSvg
    },
    {
        title: "DDM",
        text: "Distributed Database Middleware",
        link: "/docs/tags/ddm",
        icon: DdmSvg
    },
    {
      title: "DDS",
      text: "Document Database Service",
      link: "/docs/tags/dds",
      icon: DdsSvg
    },
    {
      title: "DRS",
      text: "Data Replication Service",
      link: "/docs/tags/drs",
      icon: DrsSvg
    },
    {
      title: "GaussDB for MySQL",
      text: "Enterprise-Class Distributed Database",
      link: "/docs/tags/gaussdb-mysql",
      icon: GaussdbmysqlSvg
    },
    {
      title: "GaussDB NoSQL",
      text: "Distributed NoSQL Database Service ",
      link: "/docs/tags/model-arts",
      icon: GaussdbnosqlSvg
    },
    {
      title: "GeminiDB",
      text: "Distributed, Multi-Model NoSQL Database Service",
      link: "/docs/tags/gemini-db",
      icon: GeminidbSvg
    },
    {
      title: "RDS",
      text: "Relational Database Service",
      link: "/docs/tags/rds",
      icon: RdsSvg
    },
  ];

export default function DatabaseServices(): JSX.Element {
    return (
        <div>
            <ServiceCallouts callouts={calloutsList} />
        </div>
    );
}