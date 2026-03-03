import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import type { Props } from '@theme/NotFound/Content';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import { ODSButton } from '@telekom-ods/react-ui-kit';
import { ODSIcon } from '@telekom-ods/react-icons';

export default function NotFoundContent({ className }: Props): JSX.Element {
  return (
    <main className={clsx('container margin-vert--xl', className)}>
      <div className="row">
        <div className="col col--6 col--offset-3 text--center">
          <ODSIcon name="error-type-standard" size="126" />

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

          <div className={styles.buttonGroup}>
            <ODSButton
              buttonIcon="map-type-standard"
              buttonType="link"
              href="/portfolio"
              label="Go to Portfolio Navigator"
              rel="noopener noreferrer"
              leftIcon
              size="small"
              target="_self"
              variant="primary"
            />

            <ODSButton
              buttonIcon="price-tag-type-standard"
              buttonType="link"
              href="/docs/tags"
              label="View All Tags"
              rel="noopener noreferrer"
              leftIcon
              size="small"
              target="_self"
              variant="outline"
            />

            <ODSButton
              buttonIcon="home-type-standard"
              buttonType="link"
              href="/"
              label="Return Home"
              rel="noopener noreferrer"
              leftIcon
              size="small"
              target="_self"
              variant="outline"
            />
          </div>


        </div>
      </div>
    </main>
  );
}
