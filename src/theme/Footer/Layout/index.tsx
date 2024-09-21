import React from 'react';
import clsx from 'clsx';
import type { Props } from '@theme/Footer/Layout';

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
              <a href="https://open-telekom-cloud.com/en/contact"> Contact </a>
            </li>
            <li>
              <a href="https://open-telekom-cloud.com/en/data-protection"> Data privacy </a>
            </li>
            <li>
              <a href="https://open-telekom-cloud.com/en/disclaimer-of-liability"> Disclaimer of liabilities </a>
            </li>
            <li>
              <a href="https://open-telekom-cloud.com/en/imprint"> Imprint </a>
            </li>
            {/* <li>
              <span> v{ "0.1-development" } </span>
            </li> */}
          </ul>
        </scale-telekom-footer-content>
      </scale-telekom-footer>
    </footer>
  );
}
