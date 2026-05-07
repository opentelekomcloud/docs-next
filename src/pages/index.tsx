import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import MediaJumbotron from '@site/src/components/MediaJumbotron';
import HomepageFeaturedServices from '../components/HomepageFeaturedServices';
import HomepageMarketplace from '../components/HomepageMarketplace';
import HomepageContribute from '../components/HomepageContribute';
import ArticleHighlights from '../components/ArticleHighlights';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.title}`}>
      {/* <HomepageHeader /> */}
      <main>
        {/* <HomepageFeatures /> */}
        <MediaJumbotron />
        <HomepageFeaturedServices />

        <ArticleHighlights />

        <section className="container" style={{ paddingTop: '20px', paddingBottom: '45px' }}>
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
