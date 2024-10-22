import {
  ClockIcon,
  CogIcon,
  CubeTransparentIcon,
  RectangleGroupIcon,
  RectangleStackIcon,
  ShareIcon,
  SparklesIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import React from "react";
import styles from "./styles.modules.css";
import useBaseUrl from '@docusaurus/useBaseUrl';

export interface Callout {
  title: string;
  text?: string;
  link: string;
  icon: (props: React.ComponentProps<"svg">) => JSX.Element;
}

function Callout(props: Callout): JSX.Element {
  return (
    <a href={useBaseUrl(props.link)} className={styles.callout__link}>
      <div className={clsx("card", styles.callout, styles.callout__shadow)} style={{ marginBottom: '30px' }}>
        <div className="card__header">
          <h3 style={{ fontWeight: 'bold', fontSize: 'medium', alignItems: 'center', display: 'flex', marginBottom: '0' }}>
            <props.icon className={styles.callout__icon} stroke="currentColor" aria-hidden="true" role="img" />
            {props.title}
          </h3>
        </div>
        <div className="card__body" style={{ paddingTop: '0' }}>
          <span className="link--inset" aria-hidden="true"></span>
          <p>
            {props.text}
          </p>
        </div>
        <div className={styles.callout__bottom} />
      </div>
    </a>
  );
}

export interface ServiceCalloutsProps {
  callouts: Callout[];
}

export default function ServiceCallouts({ callouts }: ServiceCalloutsProps): JSX.Element {
  return (
    <section className="container">
      <div className="row">
        {callouts.map((c) => (
          <div key={c.title} className="col col--4">
            <Callout title={c.title} text={c.text} link={useBaseUrl(c.link)} icon={c.icon} />
          </div>
        ))}
      </div>
    </section>
  );
}