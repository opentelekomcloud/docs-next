import React from 'react';
import styles from './styles.module.css';

export type TemplateItem = {
  title: string;
  logo: string;
  description: JSX.Element;
  type: string;
  link?: string;
};

const TemplateCard: React.FC<TemplateItem> = ({ title, logo, description, type, link }) => {
  return (
    <div className={styles.card}>
      <div className={styles.logo}>
        <img src={logo} alt={`${title} logo`} className={styles.logoImg} />
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          {link ? (
            <a href={link} className={styles.title}>
              {title}
            </a>
          ) : (
            <div className={styles.title}>{title}</div>
          )}
          <div className={styles.description}>{description}</div>
        </div>
        <span className={styles.type}>{type}</span>
      </div>
    </div>
  );
};

export default TemplateCard;
