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

useColorModeWithScale();