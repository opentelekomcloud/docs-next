import React from 'react';
import type { Props } from '@theme/Footer/Copyright';

export default function FooterCopyright({ copyright }: Props): JSX.Element {
  return (
    // <div
    //   className="footer__copyright"
    //   // Developer provided the HTML, so assume it's safe.
    //   // eslint-disable-next-line react/no-danger
    //   dangerouslySetInnerHTML={{__html: copyright}}
    // />
    // <div className="footer__copyright">
    //   <scale-telekom-footer type="minimal">
    //     <scale-telekom-footer-content>
    //       <span slot="notice">{copyright}</span>
    //       <ul slot="navigation">
    //         <li>
    //           <a href="#"> Imprint </a>
    //         </li>
    //         <li>
    //           <a href="#"> Data privacy </a>
    //         </li>
    //         <li>
    //           <a href="#"> Terms and conditions </a>
    //         </li>
    //         <li>
    //           <a href="#"> Consumer protection </a>
    //         </li>
    //         <li>
    //           <a href="#"> Product information sheet </a>
    //         </li>
    //         <li>
    //           <a href="#"> Youth protection </a>
    //         </li>
    //       </ul>
    //     </scale-telekom-footer-content>
    //   </scale-telekom-footer>
    // </div>
    <span slot="notice">{copyright}</span>
  );
}
