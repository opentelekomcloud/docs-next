import clsx from 'clsx';
import styles from './styles.module.css';
import { ODSCardCarousel, ODSCardPromo, ODSSheetTitleLabel } from '@telekom-ods/react-ui-kit';

import bestPracticesSegment1 from '@site/static/img/assets/video/CardPromoVideo-CUxfusaj.mp4';
import bestPracticesSegment2 from '@site/static/img/assets/video/T_background_runway.jpg';
import blueprintsSegment1 from '@site/static/img/assets/video/T_background_wall.jpg';

import templatesSegment1 from '@site/static/img/assets/video/T_pattern_2023_abstract_tec_topview_hd.mp4';

export default function HomePageHeroPromo(): JSX.Element {

  return (
    <div className={clsx("col col--12", styles.odsHeroWrapper__content)}>
      <ODSCardCarousel align='left' loop>
        <ODSCardPromo
          carouselTimerProps={{
            delay: 10000
          }}
          mediaSrc={[
            {
              src: bestPracticesSegment1,
              type: 'video'
            },
            {
              src: bestPracticesSegment2,
              type: 'image'
            }
          ]}
          onActionButtonClicked={function jQ() { }}
          segmentTexts={[
            'Explore the recommended strategies for resource management, such as efficient utilization of compute and storage resources. Gain insights into designing for high availability and fault tolerance to ensure robust system performance.',
          ]}
          segments={2}
          titleSlot={<ODSSheetTitleLabel titleLabel="Best Practices" />}
          actionButtonProps={{
            variant: 'primary',
            label: 'Let\'s go',
            href: '/docs/best-practices',
            target: '_self'

          }}
        />
        <ODSCardPromo
          carouselTimerProps={{
            delay: 10000
          }}
          mediaSrc={[
            {
              src: blueprintsSegment1,
              type: 'image'
            },
          ]}
          onActionButtonClicked={function jQ() { }}
          segmentTexts={[
            'Discover tailored out-of-the-box solutions and practical implementations for a range of scenarios. Explore real-world examples demonstrating the versatility and optimal application and infrastructure design using T Cloud Public.',
          ]}
          segments={1}
          titleSlot={<ODSSheetTitleLabel titleLabel="Blueprints" />}
          actionButtonProps={{
            variant: 'primary',
            label: 'Let\'s go',
            href: '/docs/blueprints',
            target: '_self'
          }}
        />
        <ODSCardPromo
          carouselTimerProps={{
            delay: 10000
          }}
          mediaSrc={[
            {
              src: templatesSegment1,
              type: 'video'
            },
          ]}
          onActionButtonClicked={function jQ() { }}
          segmentTexts={[
            'Use our turnkey solutions in Terraform and Crossplane to streamline both simple and complex infrastructure scenarios on T Cloud Public; whether with Cloud Create, Resource Formation Service, or directly using Terraform or OpenTofu.',
          ]}
          segments={1}
          titleSlot={<ODSSheetTitleLabel titleLabel="Templates" />}
          actionButtonProps={{
            variant: 'primary',
            label: 'Let\'s go',
            href: '/templates',
            target: '_self'
          }}
        />
      </ODSCardCarousel>

    </div >

  );
}