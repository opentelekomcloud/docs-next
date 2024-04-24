import React from 'react';
import clsx from 'clsx';
import type {Props} from '@theme/Footer/Layout';

export default function FooterLayout({
  style,
  links,
  logo,
  copyright,
}: Props): JSX.Element {
  return (
    <footer className={clsx('footer', { 'footer--dark': style === 'dark', })}>
      <div className="container container-fluid">
        {links}
        {(logo || copyright) && (
          <div className="footer__bottom text--center">
            {logo && <div className="margin-bottom--sm">{logo}
          </div>}
      </div>
        )}
      </div>
      <scale-telekom-footer type="minimal">
        <scale-telekom-footer-content>
          {copyright}
          <ul slot="navigation">
            <li>
              <a href="#"> Imprint </a>
            </li>
            <li>
              <a href="#"> Data privacy </a>
            </li>
            <li>
              <a href="#"> Terms and conditions </a>
            </li>
            <li>
              <a href="#"> Consumer protection </a>
            </li>
            <li>
              <a href="#"> Product information sheet </a>
            </li>
            <li>
              <a href="#"> Youth protection </a>
            </li>
          </ul>
        </scale-telekom-footer-content>
      </scale-telekom-footer>
    </footer>
  );
}
