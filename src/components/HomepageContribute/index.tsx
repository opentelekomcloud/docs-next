import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function HomepageContribute(): JSX.Element {
    return (
      // <section className="container" style={{ paddingTop: '20px', paddingBottom: '45px' }}>
          <div className={clsx("row row--no-gutters", styles.item)} style={{ marginBottom: '20px' }}>
            <div className={clsx("col col--12", styles.item__inner)}>
              <div>
                <h1 className="margin-bottom--md">Contribute</h1>
                <p className="margin-bottom--md">
                  Share with our vibrant community all that cool staff you've built with Open Telekom Cloud.
                </p>
                <a href="https://github.com/opentelekomcloud/docs-next" className="button button--secondary" style={{ marginRight: '10px', marginBottom: '10px' }} >
                  Join us on GitHub
                </a>
                <a href="https://www.medium.com/" className="button button--secondary" style={{ marginRight: '10px', marginBottom: '10px' }}>
                  Join us on Medium
                </a>
              </div>
            </div>
            {/* <div
              className="col col--6"
              aria-hidden="true"
              style={{
                backgroundImage: "url('./img/factory-inside.svg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right",
              }}
            ></div> */}
          </div>
        // </section>
    );
  }