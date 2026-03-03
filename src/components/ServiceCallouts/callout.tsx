import clsx from "clsx";
import styles from "./styles.module.css";
import { ComponentType, SVGProps } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { ODSCardFeature, ODSCardFeaturePreferredContent } from "@telekom-ods/react-ui-kit";

export interface Callout {
  title: string;
  text?: string;
  link: string;

  // icon: (props: React.ComponentProps<"svg">) => JSX.Element;
  // icon: ComponentType<SVGProps<SVGSVGElement>>;
  icon: string;
}
function Callout(props: Callout): JSX.Element {
  return (
    <div className={clsx(styles.odscard__feature_content)}>
      <ODSCardFeature
        contentSlot={
          <ODSCardFeaturePreferredContent
            productName={props.title}
            productPrice={props.text ?? ""}
          />
        }
        imageProps={{ src: useBaseUrl(props.icon), alt: props.title }}
        buttonProps={{
          onClick: () => {
            const currentDomain = window.location.hostname;
            const linkDomain = new URL(props.link, window.location.origin).hostname;

            if (currentDomain === linkDomain) {
              window.location.href = props.link;
            } else {
              window.open(props.link, '_blank');
            }
          }
        }}
      />
    </div>
  );
}

export interface ServiceCalloutsProps {
  callouts: Callout[];
}

export default function ServiceCallouts({ callouts }: ServiceCalloutsProps): JSX.Element {
  return (
    <section className="container" style={{ marginTop: "30px" }}>
      <div className="row">
        {callouts.map((c) => (
          <div key={c.title} className="col col--6">
            <Callout title={c.title} text={c.text} link={c.link} icon={c.icon} />
          </div>
        ))}
      </div>
    </section>
  );
}