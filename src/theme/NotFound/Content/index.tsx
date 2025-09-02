import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import type { Props } from '@theme/NotFound/Content';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function NotFoundContent({ className }: Props): JSX.Element {
  return (
    <main className={clsx('container margin-vert--xl', className)}>
      <div className="row">
        <div className="col col--6 col--offset-3">
          <Heading as="h1" className="hero__title">
            <Translate
              id="theme.NotFound.title"
              description="The title of the 404 page">
              We are sorry...
            </Translate>
          </Heading>
          <p>
            <Translate
              id="theme.NotFound.p1"
              description="The first paragraph of the 404 page">
              We could not find anything related to what you were looking for.
            </Translate>
          </p>
          {/* <p>
            <Translate
              id="theme.NotFound.p2"
              description="The 2nd paragraph of the 404 page">
              Please contact the owner of the site that linked you to the
              original URL and let them know their link is broken.
            </Translate>
          </p> */}
          <scale-button size="small" variant="primary" href="/portfolio">
            <scale-icon-navigation-map></scale-icon-navigation-map>
            <Translate
              id="theme.tags.tagsPageLink"
              description="The label of the link targeting the portfolio navigator page">
              Go to Portfolio Navigator
            </Translate>
          </scale-button>
          <span className={styles.filtersSep} aria-hidden="true"></span>
          <scale-button size="small" variant="secondary" href="/docs/tags">
            <scale-icon-content-available-keychain></scale-icon-content-available-keychain>
            <Translate
              id="theme.tags.tagsPageLink"
              description="The label of the link targeting the tag list page">
              View All Tags
            </Translate>
          </scale-button>

          <span className={styles.filtersSep} aria-hidden="true"></span>
          <scale-button size="small" variant="secondary" href="/">
            <scale-icon-home-home></scale-icon-home-home>
            <Translate
              id="theme.tags.tagsPageLink"
              description="The label of the link targeting the portfolio navigator page">
              Return Home
            </Translate>
          </scale-button>
        </div>
      </div>
    </main>
  );
}
