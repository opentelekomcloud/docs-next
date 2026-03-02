import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

import BestPracticesSvg from '@site/static/img/best-practices.svg';
import BlueprintsSvg from '@site/static/img/blueprints.svg';
import TemplatesSvg from '@site/static/img/templates.svg';
// import CafSvg from '@site/static/img/caf.svg';
import { ODSButton, ODSCardContentBasic, ODSCardBasic, ODSCardImage } from '@telekom-ods/react-ui-kit';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  label?: string;
  link?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Best Practices',
    Svg: BestPracticesSvg,
    description: (
      <>
        Explore the recommended strategies for resource management, such as
        efficient utilization of compute and storage resources. Gain insights into designing for high availability and fault tolerance
        to ensure robust system performance.
      </>
    ),
    label: 'Consult our',
    link: '/docs/best-practices'
  },
  {
    title: 'Blueprints',
    Svg: BlueprintsSvg,
    description: (
      <>
        Discover tailored out-of-the-box solutions and
        practical implementations for a range of scenarios. Explore real-world examples demonstrating the versatility and optimal
        application and infrastructure design using Open Telekom Cloud.
      </>
    ),
    label: 'Explore our',
    link: '/docs/blueprints'
  },
  {
    title: 'Templates',
    Svg: TemplatesSvg,
    description: (
      <>
        Use our turnkey solutions in Terraform and TOSCA to streamline both simple and complex infrastructure scenarios on Open Telekom Cloud;
        whether with Cloud Create, Resource Formation Service, or directly using Terraform or OpenTofu.
      </>
    ),
    label: 'Browse the',
    link: '/templates'
  },
  // {
  //   title: 'Cloud Adoption Framework',
  //   Svg: CafSvg,
  //   description: (
  //     <>
  //       The Cloud Adoption Framework provides a structured approach for organizations to transition their business to 
  //       Open Telekom Cloud. It covers various stages such as strategy, planning, readiness, migration, governance, and management. 
  //     </>
  //   ),
  //   link: '/caf'
  // },
];

function Feature({ title, Svg, description, link }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <ODSCardBasic 
        action={() => {}}
        contentSlot={<ODSCardContentBasic className="ods-card-content-basic-container" content={description} heading={title} showContent size="small" />}
        href={useBaseUrl(link)}
        role="link"
        size="large"
        tabIndex={-1}
        target="_blank"
      />
      {/* <ODSCardImage
        action={() => {}}
        backgroundImage={"https://img.freepik.com/free-photo/side-view-hands-holding-map_23-2149764140.jpg"}
        backgroundImageProps={{
          alt: 'Telekom Μascot'
        }}
        contentSlot={<ODSCardContentBasic className="ods-card-content-basic-container" content={description} heading={title} showContent size="small" />}
        href={link}
        imagePosition="top"
        logoProps={{
          alt: 'Telekom Logo',
          'aria-label': 'Telekom Logo',
          src: 'data:image/svg+xml,%3csvg%20width=\'48\'%20height=\'49\'%20viewBox=\'0%200%2048%2049\'%20fill=\'none\'%20xmlns=\'http://www.w3.org/2000/svg\'%3e%3cpath%20d=\'M15.5763%2030.7455H8V23.1455H15.5763V30.7455ZM8%205.64551V18.5455H10.2928V18.1455C10.2928%2012.0455%2013.6822%208.24551%2020.162%208.24551H20.5607V35.6455C20.5607%2039.4455%2019.0654%2040.9455%2015.2773%2040.9455H14.081V43.6455H33.8193V40.9455H32.7227C28.9346%2040.9455%2027.4393%2039.4455%2027.4393%2035.6455V8.34551H27.838C34.3178%208.34551%2037.7072%2012.1455%2037.7072%2018.2455V18.6455H40V5.64551L8%205.64551ZM32.2243%2030.7455H39.8006V23.1455H32.2243V30.7455Z\'%20fill=\'%23E20074\'/%3e%3c/svg%3e',
          title: 'Telekom Logo'
        }}
        role="link"
        size="medium"
        target="_blank"
      /> */}
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
