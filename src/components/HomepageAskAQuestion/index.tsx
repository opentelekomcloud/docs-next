import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { ODSButton, ODSCardContentBasic, ODSCardBasic } from '@telekom-ods/react-ui-kit';

export default function HomepageAskAQuestion(): JSX.Element {
  const webinarsUrl = useBaseUrl('/webinars');

  return (
    // <div className={clsx("row row--no-gutters ", styles.item)}>
    //   <div className={clsx("col col--12", styles.item__inner)}>
    //     <div>
    //       <h1 className={clsx("margin-bottom--md", styles.item__title)}>
    //         Ask a Technical Question
    //       </h1>
    //       <p className="margin-bottom--md">
    //         Connect with people sharing the same passion for Open Telekom Cloud.
    //         Discover our exciting upcoming Events and Webinars!
    //       </p>
    //       {/* <a className="button button--secondary margin-right--md" href="https://community.open-telekom-cloud.com/community/?id=community_home" target='_blank'>
    //         Join our Community Forum
    //       </a>
    //       <a className="button button--secondary" href={webinarsUrl}>
    //         Browse our Webinars
    //       </a> */}
    //                         <ODSButton variant="outline" buttonType='standard' size='small' label='Join our Community Forum' href="https://community.open-telekom-cloud.com/community/?id=community_home" target='_blank' />

    //     </div>
    //   </div>

    // </div>
<ODSCardBasic
  action={function jQ(){}}
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
  contentSlot={<ODSCardContentBasic className="ods-card-content-basic-container" content="Connect with people sharing the same passion for Open Telekom Cloud. Discover our exciting upcoming Events and Webinars!" heading="Ask a Technical Question" label="Community" showContent size="small"/>}
  href="https://www.telekom.com/"
  role="link"
  size="large"
  tabIndex={-1}
  target="_blank"
/>
    // </section>
  );
}