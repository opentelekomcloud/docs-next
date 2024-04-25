import React, { type ComponentProps } from 'react';
import clsx from 'clsx';
import { useThemeConfig } from '@docusaurus/theme-common';
import {
  useHideableNavbar,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';
import NavbarMobileSidebar from '@theme/Navbar/MobileSidebar';
import type { Props } from '@theme/Navbar/Layout';

import styles from './styles.module.css';

function NavbarBackdrop(props: ComponentProps<'div'>) {
  return (
    <div
      role="presentation"
      {...props}
      className={clsx('navbar-sidebar__backdrop', props.className)}
    />
  );
}

export default function NavbarLayout({ children }: Props): JSX.Element {
  const {
    navbar: { hideOnScroll, style, title },
  } = useThemeConfig();
  const mobileSidebar = useNavbarMobileSidebar();
  const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll);
  return (
    <nav
      ref={navbarRef}
      aria-label={translate({
        id: 'theme.NavBar.navAriaLabel',
        message: 'Main',
        description: 'The ARIA label for the main navigation',
      })}
      className={clsx(
        'navbar',
        'navbar--fixed-top',
        hideOnScroll && [
          styles.navbarHideable,
          !isNavbarVisible && styles.navbarHidden,
        ],
        {
          'navbar--dark': style === 'dark',
          'navbar--primary': style === 'primary',
          'navbar-sidebar--show': mobileSidebar.shown,
        },
      )}>
      {children}
      <NavbarBackdrop onClick={mobileSidebar.toggle} />
      <NavbarMobileSidebar />
    </nav>

      // <scale-telekom-header
      //   app-name={title}
      //   app-name-link="https://example.com"
      //   meta-nav-aria-label="Meta navigation section"
      //   meta-nav-external-aria-label="External navigation section"
      //   lang-switcher-aria-label="Language switcher section"
      //   main-nav-aria-label="Main navigation section">
      //   <scale-telekom-nav-list slot="main-nav" aria-label="Main Navigation Links">
      //     <scale-telekom-nav-item aria-label="Topic One">
      //       <a href="#">Topic One</a>
      //     </scale-telekom-nav-item>
      //   </scale-telekom-nav-list>
      // </scale-telekom-header>
  );
}
