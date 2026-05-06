import clsx from 'clsx';
import styles from './styles.module.css';

export default function HomepageContribute(): JSX.Element {
  return (
    <section className={styles.contributeSection}>
      <div className={clsx('row row--no-gutters', styles.contributeCard)}>
        <div className={clsx('col col--12', styles.content)}>
          <div className={styles.inner}>
            <div className={styles.textContent}>
              {/* <span className={styles.eyebrow}>GitHub</span> */}

              <h2 className={styles.title}>
                Contribute & Share
              </h2>

              <p className={styles.description}>
                Share with our vibrant community all that cool staff you've built with T Cloud Public.
              </p>

              <div className={styles.actions}>
                <a
                  href="https://github.com/opentelekomcloud/docs-next"
                  className={styles.primaryButton}
                  target="_blank"
                >
                  Join us on GitHub
                </a>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
}