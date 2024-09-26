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
  
  interface Callout {
    title: string;
    text?: string;
    link: string;
    icon: (props: React.ComponentProps<"svg">) => JSX.Element;
  }
  
  const callouts: Callout[] = [
    {
      title: "ECS",
      text: "Elastic Cloud Server",
      link: "/docs/best-practices/building-highly-available-web-server-clusters-with-keepalived",
      icon: RectangleStackIcon,
    },
    {
      title: "DCS",
      text: "Distributed Cache Service",
      link: "/docs/getting-started#visualizing-workspace",
      icon: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" {...props} fill="currentColor" viewBox="0 0 16 16">
          <path
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0}
            d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM0 11.5A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"
          />
        </svg>
      ),
    },
  ];
  
  function Callout(props: Callout): JSX.Element {
    return (
      <div className={clsx("card shadow--lw", styles.callout)}>
        <div className="card__header">
          <h3 className={styles.callout__title}>
            <props.icon className={styles.callout__icon} stroke="currentColor" aria-hidden="true" />
            {props.title}
          </h3>
        </div>
        <div className="card__body" style={{paddingTop: '0'}}>
          <p>
            <a href={props.link} className={styles.callout__link}>
              <span className="link--inset" aria-hidden="true"></span>
              {props.text}
            </a>
          </p>
        </div>
        <div className={styles.callout__bottom} />
      </div>
    );
  }
  
  export default function AboutLerna(): JSX.Element {
    return (
      <section className=" container">
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