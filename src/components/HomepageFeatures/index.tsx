import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Best Practices',
    Svg: require('@site/static/img/best-practices.svg').default,
    description: (
      <>
        Explore the recommended strategies for resource management, such as
        efficient utilization of compute and storage resources. Gain insights into designing for high availability and fault tolerance
        to ensure robust system performance.
      </>
    ),
  },
  {
    title: 'Blueprints',
    Svg: require('@site/static/img/blueprints.svg').default,
    description: (
      <>
        Discover tailored out-of-the-box solutions and
        practical implementations for a range of scenarios. Explore real-world examples demonstrating the versatility and optimal
        application and infrastructure design using Open Telekom Cloud. 
      </>
    ),
  },
  {
    title: 'Cloud Adoption Framework',
    Svg: require('@site/static/img/caf.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
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
