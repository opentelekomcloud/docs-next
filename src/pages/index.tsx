import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeaturedServices from '../components/HomepageFeaturedServices';
import HomepageContribute from '../components/HomepageContribute';
import HomepageMarketplace from '../components/HomepageMarketplace';
import HomePageHeroPromo from '../components/HomePageHeroPromo';
import HomePageNewArticles from '../components/HomePageNewArticles';

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
            <HomePageHeroPromo />
          </div>
        </section>

        <HomepageFeaturedServices />

        <section className="container" style={{ paddingTop: '10px', paddingBottom: '15px' }}>
          <div className={clsx("row")}>
            <HomePageNewArticles />
          </div>
        </section>

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
