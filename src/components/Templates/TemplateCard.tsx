import React from 'react';
import styles from './styles.module.css';

import { ODSCardImage, ODSCardContentBasic, ODSTagStatic } from '@telekom-ods/react-ui-kit';
import { useColorMode } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';

export type TemplateItem = {
  id: string;
  title: string;
  logo: string;
  description: JSX.Element;
  type?: string;
  link?: string;
  partner?: boolean;
  banner?: string;
};

const TemplateCard: React.FC<TemplateItem> = ({ title, logo, description, type, link, banner , partner }) => {
  const tags = type
    .split(',')
    .map(t => t.trim())
    .filter(Boolean)

  const open = () => {
    window.open(link, "_blank", "noopener");
  };

  const { colorMode } = useColorMode(); // "light" | "dark"

  if (!banner) {
    banner = useBaseUrl(
      colorMode === 'dark' ? '/img/night_banner.png' : '/img/day_banner.png'
    );
  }

  return (
      <ODSCardImage className={styles.odsCardImageWrapper__content}
        action={open}
        imagePosition="top"
        backgroundImage={banner}
        backgroundImageProps={{ style: { objectFit: 'cover', backgroundColor: '#f1f1f1', marginLeft: 'auto' } }}
        backgroundImageAspectRatio="31"
        customHeight={true}
        contentSlot={
          <>
            <div className="content-top">
              <ODSCardContentBasic
                className="ods-card-content-basic-container"
                content={description}
                heading={title}
                showContent
                size="small"
                titleProps={{ tabIndex: -1 }}
              />
            </div>

            <div className="tags-container">
              {tags.map((tag, i) => (
                <ODSTagStatic key={i} label={tag} type="promotion" icon="checkmark-type-standard-size-small" disabled={false} />
              ))}
            </div>
          </>

        }
        href={link}
        logoProps={{ src: logo, title: 'Telekom/Partner Logo', style: { maxHeight: '56px', maxWidth: '56px', objectFit: 'contain', backgroundColor: '#f1f1f1' } }}
        showLogo={true}
        role="link"
        size="medium"
        target="_blank"
      />
  );

};

export default TemplateCard;
