import clsx from 'clsx';
import styles from './styles.module.css';

export default function HomepageAskAQuestion(): JSX.Element {
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
            <a className="button button--secondary" href="https://community.open-telekom-cloud.com/community/?id=community_home" target='_blank'>
              Join our Community Forum
            </a>
          </div>
        </div>
      </div>
    // </section>
    );
  }