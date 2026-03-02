import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { ODSButton, ODSCardContentBasic, ODSCardBasic } from '@telekom-ods/react-ui-kit';

export default function HomepageMarketplace(): JSX.Element {
  const webinarsUrl = useBaseUrl('/webinars');

  return (
    <ODSCardBasic
      action={function jQ() { }}
      actionSlot={
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <ODSButton
            variant="outline"
            label="Visit the Marketplace"
            size="small"
            href="https://marketplace.otc.t-systems.com/"
            target="_blank"
          />
          <ODSButton
            variant="outline"
            label="Become a Seller"
            size="small"
            href="https://marketplace.otc.t-systems.com/seller/sign-up?role=register/seller&route=/seller/sign-up/registration"
            target="_blank"
          />
        </div>}
      contentSlot={<ODSCardContentBasic className="ods-card-content-basic-container" content="Find additional XaaS offerings provided either directly by the T Cloud Public or by sellers." heading="Get to know our partners" label="Marketplace" showContent size="small" />}
      href="https://www.telekom.com/"
      role="link"
      size="large"
      tabIndex={-1}
      target="_blank"
      // data-scheme="basketball"
    />
    // </section>
  );
}