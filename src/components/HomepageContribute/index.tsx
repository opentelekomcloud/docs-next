import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function HomepageContribute(): JSX.Element {
    return (
      <section className="container" style={{ paddingTop: '20px', paddingBottom: '45px' }}>
          <div className={clsx("row row--no-gutters", styles.item)}>
            <div className={clsx("col col--6", styles.item__inner)}>
              <div>
                <h1 className="margin-bottom--md">Contribute</h1>
                <p className="margin-bottom--md">
                  Share with our vibrant community all that cool staff you've built with Open Telekom Cloud.
                  If you are a Partner join us on GitHub, if you are a Customer we are more than happy to host you
                  on our brand new Medium Publication.
                </p>
                <a href="/docs/features/version-and-publish" className="button button--secondary" style={{ marginRight: '10px', marginBottom: '10px' }} >
                  Join us on GitHub
                </a>
                <a href="/docs/features/version-and-publish" className="button button--secondary" style={{ marginRight: '10px', marginBottom: '10px' }}>
                  Join us on Medium
                </a>
              </div>
            </div>
            <div
              className="col col--6"
              aria-hidden="true"
              style={{
                backgroundImage: "url('./img/factory-inside.svg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right",
              }}
            ></div>
          </div>
        </section>

    );
  }