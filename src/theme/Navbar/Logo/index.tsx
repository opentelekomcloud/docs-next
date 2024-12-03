import Logo from '@theme/Logo';

export default function NavbarLogo(): JSX.Element {
  return (
    <Logo
      className="navbar__brand"
      imageClassName="navbar__logo"
      titleClassName="navbar__title text--truncate">
            {/* <scale-logo size="32" variant="magenta" transparent="true"></scale-logo> */}
    </Logo>


  );
}
