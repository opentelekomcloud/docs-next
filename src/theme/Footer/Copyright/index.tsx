import type { Props } from '@theme/Footer/Copyright';

export default function FooterCopyright({ copyright }: Props): JSX.Element {
  return (
    <span slot="notice">{copyright}</span>
  );
}
