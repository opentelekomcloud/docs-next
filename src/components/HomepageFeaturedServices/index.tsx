import clsx from 'clsx';
import styles from './styles.module.css';
import FeaturedServices from '../ServiceCallouts/FeaturedServices';
import NewServices from '../ServiceCallouts/NewServices';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { ODSButton } from '@telekom-ods/react-ui-kit';

export default function HomepageFeaturedServices(): JSX.Element {
  return (
    <section className="container" style={{ paddingTop: '20px', paddingBottom: '40px' }}>
      <div className={clsx("row row--no-gutters", styles.item)} style={{ paddingBottom: '40px' }}>
        <div className={clsx("col col--4", styles.item__inner)}>
          <div>
            <h1 className={clsx("margin-bottom--md", styles.item__title)}>
              Explore our Featured Services
            </h1>
            <p className="margin-bottom--md">
              Check out our collection of technical solutions, best practices and cool tips for the most popular services of T Cloud Public.
            </p>

            {/* <a className="button button--secondary" href={useBaseUrl("/portfolio")}>
              Open Portfolio Navigator
            </a> */}
          </div>
        </div>

        <div className="col col--8" aria-hidden="true" style={{ paddingTop: '40px' }}>
          <FeaturedServices />
        </div>
        <div className={clsx("col col--12", styles.btn__inner)}>
          <ODSButton
                variant="primary"
                label="Open Portfolio Navigator"
                size="small"
                href={useBaseUrl("/portfolio")}
                target="_self"
              />
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
            {/* <a className="button button--secondary" href="https://www.open-telekom-cloud.com/en/products-services/roadmap" target="_blank">
              Check the Portfolio Roadmap
            </a> */}
          </div>
        </div>
        <div className="col col--8" aria-hidden="true" style={{ paddingTop: '20px' }}>
          <NewServices />
        </div>
        <div className={clsx("col col--12", styles.btn2__inner)}>
          <ODSButton
                variant="secondary"
                label="Check the Portfolio Roadmap"
                size="small"
                href="https://www.open-telekom-cloud.com/en/products-services/roadmap"
                target="_blank"
              />
        </div>
      </div>
    </section >
  );
}