import React from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import ColorModeToggle from '@theme/ColorModeToggle';
import type {Props} from '@theme/Navbar/ColorModeToggle';
import styles from './styles.module.css';

import { useColorMode as originalUseColorMode } from '@docusaurus/theme-common';
import { useEffect } from 'react';

// Create a custom hook that extends the original useColorMode for Scale
export function useColorModeWithScale() {
  const { colorMode, setColorMode } = originalUseColorMode();
  const toggleScaleColorMode = (newMode) => {
    document.documentElement.dataset.mode = newMode
  };

  useEffect(() => {
    // On component mount, sync the initial color mode between Docusaurus and Scale
    toggleScaleColorMode(colorMode);
  }, [colorMode]);

  return {
    colorMode,
    setColorMode,
    toggleScaleColorMode,
  };
}

export default function NavbarColorModeToggle({
  className,
}: Props): JSX.Element | null {
  const navbarStyle = useThemeConfig().navbar.style;
  const disabled = useThemeConfig().colorMode.disableSwitch;
  const {colorMode, setColorMode, toggleScaleColorMode} = useColorModeWithScale();

  if (disabled) {
    return null;
  }

  return (
    <ColorModeToggle
      className={className}
      buttonClassName={
        navbarStyle === 'dark' ? styles.darkNavbarColorModeToggle : undefined
      }
      value={colorMode}
      onChange={(newMode) => {
        setColorMode(newMode);
        toggleScaleColorMode(newMode);
      }}
    />
  );
}
