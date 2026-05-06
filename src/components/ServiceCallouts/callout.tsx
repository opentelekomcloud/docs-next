import styles from './styles.module.css';
import { ComponentType, SVGProps } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export interface Callout {
  title: string;
  text?: string;
  link: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

function Callout(props: Callout): JSX.Element {
  return (
    <a href={useBaseUrl(props.link)} className={styles.calloutLink}>
      <article className={styles.callout}>
        <div className={styles.calloutHeader}>
          <props.icon
            className={styles.calloutIcon}
            stroke="currentColor"
            aria-hidden="true"
            role="img"
          />

          <h3 className={styles.calloutTitle}>
            {props.title}
          </h3>
        </div>

        {props.text && (
          <p className={styles.calloutText}>
            {props.text}
          </p>
        )}
      </article>
    </a>
  );
}

export interface ServiceCalloutsProps {
  callouts: Callout[];
}

export default function ServiceCallouts({ callouts }: ServiceCalloutsProps): JSX.Element {
  return (
    <section className={styles.calloutsSection}>
      <div className="row">
        {callouts.map((c) => (
          <div key={c.title} className="col col--4">
            <Callout title={c.title} text={c.text} link={c.link} icon={c.icon} />
          </div>
        ))}
      </div>
    </section>
  );
}