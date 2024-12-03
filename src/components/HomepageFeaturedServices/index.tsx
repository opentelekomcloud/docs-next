import clsx from 'clsx';
import styles from './styles.module.css';
import FeaturedServices from '../ServiceCallouts/FeaturedServices';
import NewServices from '../ServiceCallouts/NewServices';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function HomepageFeaturedServices(): JSX.Element {
  return (
    <section className="container" style={{ paddingTop: '20px', paddingBottom: '45px' }}>
      <div className={clsx("row row--no-gutters", styles.item)}>
        <div className={clsx("col col--4", styles.item__inner)}>
          <div>
            <h1 className={clsx("margin-bottom--md", styles.item__title)}>
              Explore our Featured Services
            </h1>
            <p className="margin-bottom--md">
              Check out our collection of technical solutions, best practices and cool tips for the most popular services of Open Telekom Cloud.
            </p>
            <a className="button button--secondary" href={useBaseUrl("/docs/best-practices")}>
              Explore our Best Practices
            </a>
          </div>
        </div>
        <div className="col col--8" aria-hidden="true" style={{ paddingTop: '40px' }}>
          <FeaturedServices />
        </div>
        {/* <scale-divider></scale-divider> */}
        <div className={clsx("col col--4", styles.item__inner)}>
          <div>
            <h1 className={clsx("margin-bottom--md", styles.item__title)}>
              What's new?
            </h1>
            <p className="margin-bottom--md">
              Explore the technical documentation of our brand new services in Help Center.
            </p>
            <a className="button button--secondary" href="https://www.open-telekom-cloud.com/en/products-services/roadmap" target="_blank">
              Check the Portfolio Roadmap
            </a>
          </div>
        </div>
        <div className="col col--8" aria-hidden="true" style={{ paddingTop: '40px' }}>
          <NewServices />
        </div>

      </div>
    </section >
  );
}