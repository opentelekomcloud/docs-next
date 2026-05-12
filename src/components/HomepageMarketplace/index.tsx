import clsx from 'clsx';
import styles from './styles.module.css';

export default function HomepageMarketplace(): JSX.Element {
  return (
    <section className={styles.marketplaceSection}>
      <div className={clsx('row row--no-gutters', styles.marketplaceCard)}>
        <div className={clsx('col col--12', styles.content)}>
          <div className={styles.inner}>
            <div className={styles.textContent}>
              {/* <span className={styles.eyebrow}>Marketplace</span> */}

              <h2 className={styles.title}>
                Find the right solution
              </h2>

              <p className={styles.description}>
                Discover additional XaaS offerings provided through Marketplace,
                either directly by T Cloud Public or by trusted sellers and partners.
              </p>

              <div className={styles.actions}>
                <a
                  className={styles.primaryButton}
                  href="https://marketplace.otc.t-systems.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit the Marketplace
                </a>

                <a
                  className={styles.secondaryButton}
                  href="https://marketplace.otc.t-systems.com/seller/sign-up?role=register/seller&route=/seller/sign-up/registration"
                  target="_blank"
                  rel="noreferrer"
                >
                  Become a Seller
                </a>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}