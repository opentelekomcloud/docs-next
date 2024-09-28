import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import FeaturedServices from '../ServiceCallouts/FeaturedServices';

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
              <a className="button button--secondary" href="/docs/best-practices">
                Explore our Best Practices
              </a>
            </div>
          </div>
          <div className="col col--8" aria-hidden="true" style={{ paddingTop: '40px' }}>
            <FeaturedServices />
          </div>
        </div>
      </section>
    );
  }