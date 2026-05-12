import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import type { Props } from '@theme/NotFound/Content';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function NotFoundContent({ className }: Props): JSX.Element {
  return (
    <main className={clsx(styles.notFoundPage, className)}>
      <section className={styles.card}>
        {/* <div className={styles.code}>404</div> */}

        <Heading as="h1" className={styles.title}>
          <Translate
            id="theme.NotFound.title"
            description="The title of the 404 page">
            We are sorry...
          </Translate>
        </Heading>

        <p className={styles.description}>
          <Translate
            id="theme.NotFound.p1"
            description="The first paragraph of the 404 page">
            We could not find anything related to what you were looking for.
          </Translate>
        </p>

        <div className={styles.actions}>
          <scale-button size="small" variant="primary" href="/portfolio">
            <scale-icon-navigation-map></scale-icon-navigation-map>
            Go to Portfolio Navigator
          </scale-button>

          <scale-button size="small" variant="secondary" href="/docs/tags">
            <scale-icon-content-available-keychain></scale-icon-content-available-keychain>
            View All Tags
          </scale-button>

          <scale-button size="small" variant="secondary" href="/">
            <scale-icon-home-home></scale-icon-home-home>
            Return Home
          </scale-button>
        </div>
      </section>
    </main>
  );
}