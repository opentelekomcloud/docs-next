import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import NewServices from '../ServiceCallouts/NewServices';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function HomepageNewServices(): JSX.Element {
  return (
    <section className="container" style={{ paddingTop: '20px', paddingBottom: '45px' }}>
      <div className={clsx("row row--no-gutters", styles.item)}>
        <div className="col col--8" aria-hidden="true" style={{ paddingTop: '40px' }}>
          <NewServices />
        </div>
        <div className={clsx("col col--4", styles.item__inner)}>
          <div>
            <h1 className={clsx("margin-bottom--md", styles.item__title)}>
              Meet the New Comers
            </h1>
            <p className="margin-bottom--md">
              Explore the new services added in Open Telekom Cloud portfolio.
            </p>
            <a className="button button--secondary" href={useBaseUrl("/docs/best-practices")}>
              Check the Roadmap Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}