import { type ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
  useDocById,
  findFirstSidebarItemLink,
} from '@docusaurus/plugin-content-docs/client';
import { usePluralForm } from '@docusaurus/theme-common';
import isInternalUrl from '@docusaurus/isInternalUrl';
import { translate } from '@docusaurus/Translate';

import type { Props } from '@theme/DocCard';
import Heading from '@theme/Heading';
import type {
  PropSidebarItemCategory,
  PropSidebarItemLink,
} from '@docusaurus/plugin-content-docs';

import { File, FileStack } from 'lucide-react';

import styles from './styles.module.css';

import { ODSButton, ODSCardQuickAction, ODSQuickActionCardPreferredContent } from '@telekom-ods/react-ui-kit';


function useCategoryItemsPlural() {
  const { selectMessage } = usePluralForm();
  return (count: number) =>
    selectMessage(
      count,
      translate(
        {
          message: '1 item|{count} items',
          id: 'theme.docs.DocCard.categoryDescription.plurals',
          description:
            'The default description for a category card in the generated index about how many items this category includes',
        },
        { count },
      ),
    );
}

/**
 * Props for a single card:
 * - href:      link URL
 * - icon:      a ReactNode (e.g. a Lucide icon)
 * - title:     heading text
 * - description?: optional description string
 */
export type CardLayoutProps = {
  href: string;
  icon: ReactNode;
  title: string;
  description?: string;
  internal?: boolean;
};

/**
 * CardContainer wraps the content in Docusaurus’s <Link> styled as a card.
 * We add our flex‐column class so children stack top‐down.
 */
function CardContainer({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}): JSX.Element {
  return (
    <Link
      href={href}
      className={clsx('card padding--lg', styles.cardContainer)}
    >
      {children}
    </Link>
  );
}

/**
 * CardLayout: renders icon + title + multi-line description.
 * Description is always clamped to 3 lines (and forced to occupy 3 lines’ height),
 * which makes every card exactly the same height when placed in a grid or flex
 * parent using align-items: stretch (the default for CSS Grid rows).
 */
export function CardLayout({
  href,
  icon,
  title,
  description,
  internal,
}: CardLayoutProps): JSX.Element {
  const target = internal || internal === undefined ? '_self' : '_blank';

  return (
    <div className={styles.quickActionWrapper__content}>
      <ODSCardQuickAction
        aria-label={title}
        contentSlot={
          <div>
            <ODSQuickActionCardPreferredContent
              subtitle={description}
              title={
              <div className={clsx(styles.quickActionHeader)}>
                {icon}
                {title}
              </div>
            }
              titleType="text"
            />
          </div>
        }
        filled
        href={href}
        size="small"
        target={target}
      />
    </div>
  );
}

function CardCategory({ item }: { item: PropSidebarItemCategory }): ReactNode {
  const href = findFirstSidebarItemLink(item);
  const categoryItemsPlural = useCategoryItemsPlural();

  // Unexpected: categories that don't have a link have been filtered upfront
  if (!href) {
    return null;
  }

  return (
    <CardLayout
      href={href}
      icon={<FileStack className={clsx(styles.iconComponent)} />}
      title={item.label}
      description={item.description ?? categoryItemsPlural(item.items.length)}
    />
  );
}



function CardLink({ item }: { item: PropSidebarItemLink }): ReactNode {
  const article = isInternalUrl(item.href)
  const icon = article ? <File size={24} className={clsx(styles.iconComponent)} /> : '';
  const doc = useDocById(item.docId ?? undefined);

  // temporarily suppress all sidebar links from being rendered 
  if (!article) {
    item.description = "For more information consult the Service & API Reference manuals in T Cloud Public Help Center."
  }

  return (
    <CardLayout
      href={item.href}
      icon={icon}
      title={item.label}
      description={item.description ?? doc?.description}
      internal={article}
    />
  );
}

export default function DocCard({ item }: Props): ReactNode {
  switch (item.type) {
    case 'link':
      return <CardLink item={item} />;
    case 'category':
      return <CardCategory item={item} />;
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}
