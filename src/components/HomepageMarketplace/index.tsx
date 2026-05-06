import clsx from 'clsx';
import styles from './styles.module.css';

export default function HomepageMarketplace(): JSX.Element {  
    return (
      <div className={clsx("row row--no-gutters ", styles.item)}>
        <div className={clsx("col col--12", styles.item__inner)}>
          <div>
            <h1 className={clsx("margin-bottom--md", styles.item__title)}>
              Find the right solution
            </h1>
            <p className="margin-bottom--md">
              Find additional XaaS offerings provided in Marketplace either directly by the T Cloud Public or by sellers.
            </p>
            <a className="button button--secondary margin-right--md" href="https://marketplace.otc.t-systems.com/" target='_blank'>
              Visit the Marketplace
            </a>
             <a className="button button--secondary" href="https://marketplace.otc.t-systems.com/seller/sign-up?role=register/seller&route=/seller/sign-up/registration">
              Become a Seller
            </a>
          </div>
        </div>
      </div>
    // </section>
    );
  }