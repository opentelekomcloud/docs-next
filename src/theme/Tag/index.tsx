import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import type {Props} from '@theme/Tag';

import styles from './styles.module.css';

export default function Tag({
  permalink,
  label,
  count,
  description,
}: Props): ReactNode {
  return (
    <>
      <scale-tag >
          <Link href={permalink} title={description}>
            {label}
          </Link>
      </scale-tag>
    </>
  );
}
