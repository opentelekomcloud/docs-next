// index.tsx

import { translate } from '@docusaurus/Translate';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
  usePluralForm,
} from '@docusaurus/theme-common';
import SearchMetadata from '@theme/SearchMetadata';
import type { Props } from '@theme/DocTagDocListPage';
import Heading from '@theme/Heading';
import { File, FlaskConical, Factory, FileCheck } from 'lucide-react';
import styles from './styles.module.css';
import clsx from "clsx";

import { ODSButton, ODSCardQuickAction, ODSQuickActionCardPreferredContent } from '@telekom-ods/react-ui-kit';


// Custom pluralization hook
function useNDocsTaggedPlural() {
  const { selectMessage } = usePluralForm();
  return (count: number) =>
    selectMessage(
      count,
      translate(
        {
          id: 'theme.docs.tagDocListPageTitle.nDocsTagged',
          description: 'Pluralized label for "{count} docs tagged"',
          message: 'We found one article tagged|We found {count} articles tagged',
        },
        { count },
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
    { nDocsTagged, tagName: props.tag.label },
  );
}

// Single document item
function DocItem({ doc }: { doc: Props['tag']['items'][number] }): JSX.Element {
  const url = doc.permalink;
  const IconComponent = url.includes('best-practices')
    ? FileCheck
    : url.includes('by-industry')
      ? Factory
      : url.includes('blueprints')
        ? FlaskConical
        : File;

  return (
    <div className={styles.quickActionWrapper__content}>
      <ODSCardQuickAction
        aria-label={doc.title}
        contentSlot={
          <div>
            <ODSQuickActionCardPreferredContent
              subtitle={doc.description}
              title={
              <div className={clsx(styles.quickActionHeader)}>
                <IconComponent size={24} className={clsx(styles.iconComponent)} />
                {doc.title}
              </div>
            }
              titleType="text"
            // tag1Props={{label: 'New props', type: 'strong'}} tag2Props={{label: 'V2', type: 'basic'}} 
            />
          </div>
        }
        filled
        href={doc.permalink}
        size="small"
        target="_self"
      />
    </div>
  );
}

// Metadata component
function DocTagDocListPageMetadata({
  title,
  tag,
}: Props & { title: string }): JSX.Element {
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
}: Props & { title: string }): JSX.Element {
  return (
    <HtmlClassNameProvider
      className={ThemeClassNames.page.docsTagDocListPage}
    >
      <div className={styles.page}>
        {tag.unlisted && <Unlisted />}
        <header className={styles.header}>
          <Heading as="h1">{title}</Heading>
          {tag.description && <p>{tag.description}</p>}
          <div className={styles.headerActions}>
            <ODSButton
              buttonIcon="price-tag-type-standard"
              buttonType="link"
              href="/docs/tags"
              label="View All Tags"
              rel="noopener noreferrer"
              leftIcon
              size="small"
              target="_self"
              variant="primary"
            />
            <ODSButton
              buttonIcon="map-type-standard"
              buttonType="link"
              href="/portfolio"
              label="Go to Portfolio Navigator"
              rel="noopener noreferrer"
              leftIcon
              size="small"
              target="_self"
              variant="outline"
            />
          </div>
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
