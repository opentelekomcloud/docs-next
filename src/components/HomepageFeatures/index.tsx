import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

import BestPracticesSvg from '@site/static/img/best-practices.svg';
import BlueprintsSvg from '@site/static/img/blueprints.svg';
import TemplatesSvg from '@site/static/img/templates.svg';
// import CafSvg from '@site/static/img/caf.svg';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
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
        <scale-card to={useBaseUrl(link)} class="scale-telekom-feature-card">
          <div style={{margin: '-24px'}}>
            <div className="text--center">
              <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md" style={{margin: '0 0 16px 0'}}> 
              {/* <h4 style={{margin: '0px 0 16px 0', font: 'var(--telekom-text-style-heading-4)'}}>{title} </h4> */}
              <Heading as="h3" style={{margin: '8px'}}>{title}</Heading>
              <span  className={clsx(styles.hideOnTouch)}>
                {description}              
              </span>
              {/* <scale-button style={{margin: '16px'}} icon-position="after">
                Get Started <scale-icon-navigation-right></scale-icon-navigation-right>
              </scale-button>  */}
          </div>
        </div>
      </scale-card>
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
