import type { Props } from '@theme/Footer/Copyright';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function FooterCopyright({ copyright }: Props): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const version: string = siteConfig.customFields.version as string; 

  let color: string = "orange"
  if (version.startsWith("v")) {
    color = "cyan"
  } else if (version.includes("-development")){
    color = "violet"
  }

  return (
    <>
      <span slot="notice">{copyright} <scale-tag size="small" style={{margin: '0 0 0 8px'}} color={color} type="strong">{version}</scale-tag></span>
    </>
  );
}
