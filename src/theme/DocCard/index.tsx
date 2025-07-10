import React, { type ReactNode } from 'react';
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

import { File, FileStack, SquareArrowOutUpRight } from 'lucide-react';

import styles from './styles.module.css';

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
}: CardLayoutProps): JSX.Element {
  return (
    <CardContainer href={href}>
      {/* Icon + one-line‐truncated title */}
      <Heading as="h2" className={styles.cardTitle} title={title}>
        <span className={styles.cardIcon}>{icon}</span>
        <span className={styles.cardText}>{title}</span>
      </Heading>

      {/* Description clamped to 3 lines (always 3 lines tall) */}
      {description && (
        <p className={styles.cardDescription}>
          {description}
        </p>
      )}
    </CardContainer>
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
      icon={<FileStack />}
      title={item.label}
      description={item.description ?? categoryItemsPlural(item.items.length)}
    />
  );
}



function CardLink({ item }: { item: PropSidebarItemLink }): ReactNode {
  const link = isInternalUrl(item.href)
  const icon = link ? <File /> : <SquareArrowOutUpRight />;
  const doc = useDocById(item.docId ?? undefined);

  // temporarily suppress all sidebar links from being rendered 
  if (!link) {
    return null;
  }

  return (
    <CardLayout
      href={item.href}
      icon={icon}
      title={item.label}
      description={item.description ?? doc?.description}
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
