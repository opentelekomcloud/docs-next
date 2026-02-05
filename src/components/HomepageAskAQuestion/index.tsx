import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function HomepageAskAQuestion(): JSX.Element {
    const webinarsUrl = useBaseUrl('/webinars');
  
    return (
      <div className={clsx("row row--no-gutters ", styles.item)}>
        <div className={clsx("col col--12", styles.item__inner)}>
          <div>
            <h1 className={clsx("margin-bottom--md", styles.item__title)}>
              Ask a Technical Question
            </h1>
            <p className="margin-bottom--md">
              Connect with people sharing the same passion for Open Telekom Cloud. 
              Discover our exciting upcoming Events and Webinars!
            </p>
            <a className="button button--secondary margin-right--md" href="https://community.open-telekom-cloud.com/community/?id=community_home" target='_blank'>
              Join our Community Forum
            </a>
             <a className="button button--secondary" href={webinarsUrl}>
              Browse our Webinars
            </a>
          </div>
        </div>
      </div>
    // </section>
    );
  }