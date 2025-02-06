import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import type {Props} from '@theme/Tag';

export default function TagWithCount({
  permalink,
  label,
  count,
  description,
}: Props): ReactNode {
  return (
    <>
      <scale-tag >
          <Link href={permalink} title={description}>
            <scale-notification-badge label={count} type="text">
              {label}
            </scale-notification-badge>
          </Link>
      </scale-tag>
    </>
  );
}
