import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { ODSButton, ODSCardContentBasic, ODSCardBasic } from '@telekom-ods/react-ui-kit';

export default function HomepageAskAQuestion(): JSX.Element {
  const webinarsUrl = useBaseUrl('/webinars');

  return (
    <ODSCardBasic
      action={function jQ() { }}
      actionSlot={
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <ODSButton
            variant="outline"
            label="Join our Community Forum"
            size="small"
            href="https://community.open-telekom-cloud.com/community/?id=community_home"
            target="_blank"
          />
          <ODSButton
            variant="outline"
            label="Webinars"
            size="small"
            href={webinarsUrl}
            target="_blank"
          />
        </div>}
      contentSlot={<ODSCardContentBasic className="ods-card-content-basic-container" content="Connect with people sharing the same passion for T Cloud Public. Discover our exciting upcoming Events and Webinars!" heading="Ask a Technical Question" label="Community" showContent size="small" />}
      href="https://www.telekom.com/"
      role="link"
      size="large"
      tabIndex={-1}
      target="_blank"
    />
    // </section>
  );
}