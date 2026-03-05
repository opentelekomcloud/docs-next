import React from 'react';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

import { ODSCardImage, ODSCardContentBasic } from '@telekom-ods/react-ui-kit';

export type NewsArticleItem = {
    id: string;
    title: string;
    description: JSX.Element;
    type?: string;
    link?: string;
    banner?: string;
};

const NewsArticleCard: React.FC<NewsArticleItem> = ({ title, description, type, link, banner }) => {
    const open = () => {
        window.open(link, "_self", "noopener");
    };

    if (!banner) {
        banner = useBaseUrl('/img/templates/generic-template.png');
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
                </>

            }
            href={link}
            showLogo={false}
            role="link"
            size="medium"
            target="_self"
        />
    );
};

export default NewsArticleCard;
