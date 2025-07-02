import React from 'react';
import styles from './styles.module.css';

export type TemplateItem = {
  title: string;
  logo: string;
  description: JSX.Element;
  type: string;
  link?: string;
  partner?: boolean;
};

const TemplateCard: React.FC<TemplateItem> = ({ title, logo, description, type, link, partner }) => {
  const Wrapper: React.ElementType = link ? 'a' : 'div';
  const wrapperProps = link
    ? {
      href: link,
      target: '_blank',
      rel: 'noopener noreferrer',
    }
    : {};

  const tags = type
    .split(',')
    .map(t => t.trim())
    .filter(Boolean)

  return (
    <Wrapper {...wrapperProps} className={styles.card}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img
            src={logo}
            alt={`${title} logo`}
            className={styles.logoImg}
          />
        </div>
        {partner && (
          <span className={styles.partnerLabel}>
            Partner Template
          </span>
        )}
      </div>

      <div className={styles.content}>
        <div className={styles.text}>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
        </div>
        <div className={styles.tagsContainer}>
          {tags.map((tag, i) => (
            <scale-tag color="teal" key={i}>
              <span className={styles.type}>{tag}</span>
            </scale-tag>
          ))}
        </div>
      </div>
    </Wrapper>
  );

};

export default TemplateCard;
