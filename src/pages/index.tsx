import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import { useColorMode, useThemeConfig } from '@docusaurus/theme-common';

import styles from './index.module.css';
import DatabaseServices from '../components/ServiceCallouts/DatabaseServices';
import ManagementServices from '../components/ServiceCallouts/ManagementServices';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const navbarStyle = useThemeConfig().navbar.style;
  var buttonVariant = navbarStyle === 'dark' ? "primary" : "secondary-white"
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">Open Telekom Cloud {siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <scale-button href="/docs/blueprints" variant={buttonVariant}>
            Get Started <scale-icon-navigation-right></scale-icon-navigation-right>
          </scale-button>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.title}`}>
      {/* <HomepageHeader /> */}
      <main>
        <HomepageFeatures />

        {/* <FeaturedServices/> */}
        {/* <RecentArticles/> */}
        {/* <Contribute/> */}
        {/* <AskTheCommunity/> */}

        {/* <section className="container">
          <div className="row">
            <div key='something' className="col col--3">
              <div className={clsx("card shadow--lw", styles.callout)}>
                <div className="card__header">
                  <h3 className={styles.callout__title}>
                    Something
                  </h3>
                </div>
                <div className="card__body" style={{ paddingTop: '0' }}>
                  <p>
                    <a href='#' className={styles.callout__link}>
                      <span className="link--inset" aria-hidden="true"></span>
                      click me
                    </a>
                  </p>
                </div>
                <div className={styles.callout__bottom} />
              </div>
            </div>
            <div key='something' className="col col--3">
              <div className={clsx("card shadow--lw", styles.callout)}>
                <div className="card__header">
                  <h3 className={styles.callout__title}>
                    Something
                  </h3>
                </div>
                <div className="card__body" style={{ paddingTop: '0' }}>
                  <p>
                    <a href='#' className={styles.callout__link}>
                      <span className="link--inset" aria-hidden="true"></span>
                      click me
                    </a>
                  </p>
                </div>
                <div className={styles.callout__bottom} />
              </div>
            </div>
            <div key='something' className="col col--3">
              <div className={clsx("card shadow--lw", styles.callout)}>
                <div className="card__header">
                  <h3 className={styles.callout__title}>
                    Something
                  </h3>
                </div>
                <div className="card__body" style={{ paddingTop: '0' }}>
                  <p>
                    <a href='#' className={styles.callout__link}>
                      <span className="link--inset" aria-hidden="true"></span>
                      click me
                    </a>
                  </p>
                </div>
                <div className={styles.callout__bottom} />
              </div>
            </div>
            <div key='something' className="col col--3">
              <div className={clsx("card shadow--lw", styles.callout)}>
                <div className="card__header">
                  <h3 className={styles.callout__title}>
                    Something
                  </h3>
                </div>
                <div className="card__body" style={{ paddingTop: '0' }}>
                  <p>
                    <a href='#' className={styles.callout__link}>
                      <span className="link--inset" aria-hidden="true"></span>
                      click me
                    </a>
                  </p>
                </div>
                <div className={styles.callout__bottom} />
              </div>
            </div>
          </div>
        </section> */}

        <section className="container" style={{ paddingTop: '20px', paddingBottom: '45px' }}>
          <div className={clsx("row row--no-gutters", styles.item)}>
            <div className={clsx("col col--4", styles.item__inner)}>
              <div>
                <h1 className={clsx("margin-bottom--md", styles.item__title)}>
                  Explore our Featured Services
                </h1>
                <p className="margin-bottom--md">
                  Discover our collection of technical solutions, best practices and cool hacks for the most common services of Open Telekom Cloud.
                </p>
                <a className="button button--secondary" href="/docs/features/run-tasks">
                  Explore our Best Practices
                </a>
              </div>
            </div>
            <div className="col col--8" aria-hidden="true" style={{ paddingTop: '40px' }}>
              <ManagementServices />
            </div>
          </div>
        </section>

        <section className="container" style={{ paddingTop: '20px', paddingBottom: '45px' }}>
          <div className={clsx("row row--no-gutters ", styles.item)}>
            <div
              className="col col--6"
              aria-hidden="true"
              style={{
                backgroundImage: "url('./img/homeoffice.svg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
            <div className={clsx("col col--6", styles.item__inner)}>
              <div>
                <h1 className={clsx("margin-bottom--md", styles.item__title)}>
                  Ask a Technical Question
                </h1>
                <p className="margin-bottom--md">
                  Connect with people sharing the same passion for Open Telekom Cloud. Discover our exciting upcoming Events and Webinars!
                </p>
                <a className="button button--secondary" href="/docs/features/run-tasks">
                  Join our Community Forum
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="container" style={{ paddingTop: '20px', paddingBottom: '45px' }}>
          <div className={clsx("row row--no-gutters", styles.item)}>
            <div className={clsx("col col--6", styles.item__inner)}>
              <div>
                <h1 className="margin-bottom--md">Contribute</h1>
                <p className="margin-bottom--md">
                  Share with our vibrant community all that cool staff you've built with Open Telekom Cloud.
                  If you are a Partner join us in GitHub, if you are a Customer you are more than happy to host you
                  in our brand new Medium Publication.
                </p>
                <a href="/docs/features/version-and-publish" className="button button--secondary" style={{ marginRight: '10px' }} >
                  Join us on GitHub
                </a>
                <a href="/docs/features/version-and-publish" className="button button--secondary" style={{ marginRight: '10px' }}>
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

      </main>
    </Layout>
  );
}
