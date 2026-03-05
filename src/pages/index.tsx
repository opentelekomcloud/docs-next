import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
// import Heading from '@theme/Heading';
// import { useThemeConfig } from '@docusaurus/theme-common';
// import useBaseUrl from '@docusaurus/useBaseUrl';

// import styles from './index.module.css';
import HomepageFeaturedServices from '../components/HomepageFeaturedServices';
import HomepageContribute from '../components/HomepageContribute';
import HomepageMarketplace from '../components/HomepageMarketplace';
import HomepageInlineSearch from '../components/HomepageInlineSearch';
import HomeHeroPromo from '../components/HomeHeroPromo';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.title}`}>
      {/* <HomepageHeader /> */}
      <main>
        
        <section className="container" style={{ paddingTop: '40px', paddingBottom: '0px' }}>
          <div className={clsx("row")}>
            <HomeHeroPromo />
          </div>
        </section>

        <HomepageFeaturedServices />

        <section className="container" style={{ paddingTop: '0px', paddingBottom: '45px' }}>
          <div className={clsx("row")}>
            <div className={clsx("col col--6")}>
              <HomepageContribute />
            </div>
            <div className={clsx("col col--6")}>
              <HomepageMarketplace />
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
}
