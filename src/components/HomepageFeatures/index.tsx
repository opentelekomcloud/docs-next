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
  const href = /^https?:\/\//.test(link) ? link : useBaseUrl(link);

  const open = () => {
    window.location.href = href;
  };

  return (
    <div className={clsx('col col--4')}>
      <ODSCardBasic
        action={open}
        contentSlot={<ODSCardContentBasic className="ods-card-content-basic-container" content={description} heading={title} showContent size="small" />}
        href={href}
        role="link"
        size="large"
        target="_blank"
      />
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
