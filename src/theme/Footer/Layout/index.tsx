import clsx from 'clsx';
import type { Props } from '@theme/Footer/Layout';

export default function FooterLayout({
  style,
  links,
  copyright,
}: Props): JSX.Element {
  return (
    <footer className={clsx('footer', { 'footer--dark': style === 'dark', })}>
      <div className="container container-fluid">
        <div className="align-items-center" style={{margin: '0 0 0 32px'}}>
          {/* <div className={clsx('col-2')}>
                {(logo || copyright) && (
                  <div className="footer__bottom text--center" style={{margin: '-16px 100px 0 8px'}}>
                    {logo && <div className="margin-bottom--sm">{logo}
                    </div>}
                  </div>
                )}
          </div> */}
          <div className={clsx('col-10 text-right')}>
              {links}
          </div>
        </div>        
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
    </footer >
  );
}
