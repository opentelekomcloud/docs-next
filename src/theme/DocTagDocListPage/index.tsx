// index.tsx

import React from 'react';
import Link from '@docusaurus/Link';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
  usePluralForm,
} from '@docusaurus/theme-common';
import Translate, {translate} from '@docusaurus/Translate';
import SearchMetadata from '@theme/SearchMetadata';
import type {Props} from '@theme/DocTagDocListPage';
import Heading from '@theme/Heading';
import {File, FlaskConical, Factory, FileCheck} from 'lucide-react';
import styles from './styles.module.css';

// Custom pluralization hook
function useNDocsTaggedPlural() {
  const {selectMessage} = usePluralForm();
  return (count: number) =>
    selectMessage(
      count,
      translate(
        {
          id: 'theme.docs.tagDocListPageTitle.nDocsTagged',
          description: 'Pluralized label for "{count} docs tagged"',
          message: 'We found one article tagged|We found {count} articles tagged',
        },
        {count},
      ),
    );
}

// Compose the page title
function usePageTitle(props: Props): string {
  const nDocsTagged = useNDocsTaggedPlural()(props.tag.count);
  return translate(
    {
      id: 'theme.docs.tagDocListPageTitle',
      description: 'Title of the docs tag list page',
      message: '{nDocsTagged} with "{tagName}"',
    },
    {nDocsTagged, tagName: props.tag.label},
  );
}

// Single document item
function DocItem({doc}: {doc: Props['tag']['items'][number]}): JSX.Element {
  const url = doc.permalink;
  const IconComponent = url.includes('best-practices')
    ? FileCheck
    : url.includes('by-industry')
    ? Factory
    : url.includes('blueprints')
    ? FlaskConical
    : File;

  return (
    <article className={styles.article}>
      <div className={styles.itemRow}>
        <div className={styles.icon}>
          <IconComponent size={24} />
        </div>
        <div className={styles.content}>
          <Link to={doc.permalink} className={styles.title}>
            {doc.title}
          </Link>
          {doc.description && (
            <p className={styles.description}>{doc.description}</p>
          )}
        </div>
      </div>
    </article>
  );
}

// Metadata component
function DocTagDocListPageMetadata({
  title,
  tag,
}: Props & {title: string}): JSX.Element {
  return (
    <>
      <PageMetadata title={title} description={tag.description} />
      <SearchMetadata tag="doc_tag_doc_list" />
    </>
  );
}

// Main content component
function DocTagDocListPageContent({
  tag,
  title,
}: Props & {title: string}): JSX.Element {
  return (
    <HtmlClassNameProvider
      className={ThemeClassNames.page.docsTagDocListPage}
    >
      <div className={styles.page}>
        {tag.unlisted && <Unlisted />}
        <header className={styles.header}>
          <Heading as="h1">{title}</Heading>
          {tag.description && <p>{tag.description}</p>}
          <scale-button size="small" variant="secondary" href={tag.allTagsPath}>
                <scale-icon-action-backward></scale-icon-action-backward> 
                  <Translate
                    id="theme.tags.tagsPageLink"
                    description="The label of the link targeting the tag list page">
                    View All Tags
                  </Translate>
              </scale-button>

        </header>
        <section>
          {tag.items.map((doc) => (
            <DocItem key={doc.id} doc={doc} />
          ))}
        </section>
      </div>
    </HtmlClassNameProvider>
  );
}

// Exported page component
export default function DocTagDocListPage(props: Props): JSX.Element {
  const title = usePageTitle(props);
  return (
    <>
      <DocTagDocListPageMetadata {...props} title={title} />
      <DocTagDocListPageContent {...props} title={title} />
    </>
  );
}
