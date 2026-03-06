import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import type { Props } from '@theme/Tag';

import styles from './styles.module.css';
import { ODSBadgeNumber, ODSTagStatic } from '@telekom-ods/react-ui-kit';

export default function Tag({
  permalink,
  label,
  count,
  description,
}: Props): ReactNode {
  return (
    <Link
      rel="tag"
      href={permalink}
      title={description}
      className={styles.tagWrapper}
    >
      <ODSTagStatic label={label} type="subtle" />

      {count && (
        <span className={styles.badge}>
          <ODSBadgeNumber
            notificationNumber={count}
            size="standard"
            variant="notification"
          />
        </span>
      )}
    </Link>
  );
}