"use client";
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export function useThemeDetection() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isThemeDetected, setIsThemeDetected] = useState(false);
  const [fallbackReason, setFallbackReason] = useState<string | null>(null);

  useEffect(() => {
    // Check if theme detection is working
    const checkThemeDetection = () => {
      // Check if localStorage is available
      const isLocalStorageAvailable = (() => {
        try {
          localStorage.setItem('test', 'test');
          localStorage.removeItem('test');
          return true;
        } catch {
          return false;
        }
      })();

      // Check if system preference is available
      const isSystemPreferenceAvailable = window.matchMedia && 
        window.matchMedia('(prefers-color-scheme: dark)').media !== 'not all';

      // Check if theme is actually set
      const isThemeSet = theme && theme !== 'system';

      if (!isLocalStorageAvailable) {
        setFallbackReason('localStorage unavailable (private browsing)');
      } else if (!isSystemPreferenceAvailable) {
        setFallbackReason('system preference not available (old browser)');
      } else if (!isThemeSet && theme === 'system') {
        setFallbackReason('using system preference');
      } else {
        setFallbackReason(null);
      }

      setIsThemeDetected(true);
    };

    // Run detection after a short delay to ensure theme is loaded
    const timer = setTimeout(checkThemeDetection, 100);
    return () => clearTimeout(timer);
  }, [theme]);

  // Force a theme if detection completely fails
  const forceTheme = (forcedTheme: 'light' | 'dark') => {
    setTheme(forcedTheme);
    setFallbackReason(`forced to ${forcedTheme} (detection failed)`);
  };

  return {
    theme,
    resolvedTheme,
    isThemeDetected,
    fallbackReason,
    forceTheme,
    isUsingFallback: fallbackReason !== null
  };
}
