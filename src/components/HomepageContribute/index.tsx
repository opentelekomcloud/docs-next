import clsx from 'clsx';
import styles from './styles.module.css';
import { ODSButton, ODSCardContentBasic, ODSCardBasic } from '@telekom-ods/react-ui-kit';

export default function HomepageContribute(): JSX.Element {

  return (
    <ODSCardBasic
      action={function jQ() { }}
      actionSlot={<ODSButton variant="secondary" label="Join us on GitHub" onClick={function jQ() { }} onKeyDown={function jQ() { }} size="small" href="https://github.com/opentelekomcloud/docs-next" target='_blank' />}
      contentSlot={<ODSCardContentBasic className="ods-card-content-basic-container" content="Share with our vibrant community all that cool staff you've built with T Cloud Public." heading="Contribute" label="GitHub" showContent size="small" />}
      href="https://www.telekom.com/"
      role="link"
      size="large"
      tabIndex={-1}
      target="_blank"
      // data-scheme="jacuzzi"
    />
  );
}