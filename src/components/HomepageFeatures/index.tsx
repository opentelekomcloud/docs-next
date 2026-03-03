import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

import BestPracticesSvg from '@site/static/img/best-practices.svg';
import BlueprintsSvg from '@site/static/img/blueprints.svg';
import TemplatesSvg from '@site/static/img/templates.svg';
// import CafSvg from '@site/static/img/caf.svg';

import { ODSCardContentBasic, ODSCardBasic } from '@telekom-ods/react-ui-kit';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  label?: string;
  link?: string;
  scheme?: string;
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
    link: '/docs/best-practices',
    scheme: 'grey'
  },
  {
    title: 'Blueprints',
    Svg: BlueprintsSvg,
    description: (
      <>
        Discover tailored out-of-the-box solutions and
        practical implementations for a range of scenarios. Explore real-world examples demonstrating the versatility and optimal
        application and infrastructure design using T Cloud Public.
      </>
    ),
    label: 'Explore our',
    link: '/docs/blueprints',
    scheme: 'grey'
  },
  {
    title: 'Templates',
    Svg: TemplatesSvg,
    description: (
      <>
        Use our turnkey solutions in Terraform and TOSCA to streamline both simple and complex infrastructure scenarios on T Cloud Public;
        whether with Cloud Create, Resource Formation Service, or directly using Terraform or OpenTofu.
      </>
    ),
    label: 'Browse the',
    link: '/templates',
    scheme: 'grey'
  },
];

function Feature({ title, Svg, description, link, scheme }: FeatureItem) {
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
        target="_self"
        data-scheme={scheme}
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
