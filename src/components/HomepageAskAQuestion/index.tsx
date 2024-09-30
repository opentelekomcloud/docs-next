import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function HomepageAskAQuestion(): JSX.Element {
    return (
      // <section className="container" style={{ paddingTop: '20px', paddingBottom: '45px' }}>
      <div className={clsx("row row--no-gutters ", styles.item)}>
        {/* <div
          className="col col--6"
          aria-hidden="true"
          style={{
            backgroundImage: "url('./img/homeoffice.svg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div> */}
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