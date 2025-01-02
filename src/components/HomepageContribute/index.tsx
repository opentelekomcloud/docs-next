import clsx from 'clsx';
import styles from './styles.module.css';

export default function HomepageContribute(): JSX.Element {

  return (
    // <section className="container" style={{ paddingTop: '20px', paddingBottom: '45px' }}>
    <div className={clsx("row row--no-gutters", styles.item)}>
      <div className={clsx("col col--12", styles.item__inner)}>
        <div>
          <h1 className="margin-bottom--md">Contribute</h1>
          <p className="margin-bottom--md">
            Share with our vibrant community all that cool staff you've built with Open Telekom Cloud.
          </p>
          <a href='https://github.com/opentelekomcloud/docs-next' className="button button--secondary" style={{ marginRight: '10px', marginBottom: '10px' }} >
            Join us on GitHub
          </a>
          {/* <a href={useBaseUrl("/docs/features/version-and-publish")} className="button button--secondary" style={{ marginRight: '10px', marginBottom: '10px' }}>
            Join us on Medium
          </a> */}
        </div>
      </div>
    </div>
    // </section>
  );
}