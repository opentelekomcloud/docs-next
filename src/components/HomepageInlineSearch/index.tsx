import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { ODSInlineSearch, } from '@telekom-ods/react-ui-kit';

export default function HomepageInlineSearch(): JSX.Element {
  const webinarsUrl = useBaseUrl('/webinars');

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--12')}>
            <ODSInlineSearch
              containerProps={{}}
              labelText="What are you building today?"
              // onChange={function jQ() { }}
              // onClear={function jQ() { }}
              // onSelectValue={function jQ() { }}
              onClick={() => console.log("clicked")}
              size="large"
            />
          </div>

        </div>
      </div>
    </section>

  );
}