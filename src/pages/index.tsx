import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import { useColorMode, useThemeConfig } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.css';
import HomepageFeaturedServices from '../components/HomepageFeaturedServices';
import HomepageAskAQuestion from '../components/HomepageAskAQuestion';
import HomepageContribute from '../components/HomepageContribute';
import HomepageNewServices from '../components/HomepageNewServices';

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
          <scale-button href={useBaseUrl("/docs/blueprints")} variant={buttonVariant}>
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
        <HomepageFeaturedServices />

        <section className="container" style={{ paddingTop: '20px', paddingBottom: '45px' }}>
          <div className={clsx("row")}>
            <div className={clsx("col col--6")}>
              <HomepageContribute />
            </div>
            <div className={clsx("col col--6")}>
              <HomepageAskAQuestion />
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
}
