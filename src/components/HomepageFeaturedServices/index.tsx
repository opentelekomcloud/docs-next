import clsx from 'clsx';
import styles from './styles.module.css';
import FeaturedServices from '../ServiceCallouts/FeaturedServices';
import NewServices from '../ServiceCallouts/NewServices';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function HomepageFeaturedServices(): JSX.Element {
  return (
    <section className={styles.featuredSection}>
      <div className={clsx('row row--no-gutters', styles.featuredCard)}>
        <div className={clsx('col col--4', styles.contentBlock)}>
          <div className={styles.inner}>
            {/* <span className={styles.eyebrow}>Featured</span> */}

            <h2 className={styles.title}>
              Explore our Featured Services
            </h2>

            <p className={styles.description}>
              Check out our collection of technical solutions, best practices and cool tips
              for the most popular services of T Cloud Public.
            </p>

            <a className={styles.primaryButton} href={useBaseUrl('/portfolio')}>
              Open Portfolio Navigator
            </a>
          </div>
        </div>

        <div className={clsx('col col--8', styles.servicesBlock)} aria-hidden="true">
          <FeaturedServices />
        </div>

        <div className={clsx('col col--4', styles.contentBlock)}>
          <div className={styles.inner}>
            {/* <span className={styles.eyebrow}>New</span> */}

            <h2 className={styles.title}>
              What&apos;s new?
            </h2>

            <p className={styles.description}>
              Explore the technical documentation of our brand new services in Help Center.
            </p>

            <a
              className={styles.primaryButton}
              href="https://www.open-telekom-cloud.com/en/products-services/roadmap"
              target="_blank"
              rel="noreferrer"
            >
              Check the Portfolio Roadmap
            </a>
          </div>
        </div>

        <div className={clsx('col col--8', styles.servicesBlock)} aria-hidden="true">
          <NewServices />
        </div>
      </div>
    </section>
  );
}