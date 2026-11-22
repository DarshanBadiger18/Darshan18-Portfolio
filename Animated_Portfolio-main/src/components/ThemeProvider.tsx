import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { App } from '../App';

const THEME_KEY = 'portfolio-theme';

type Theme = 'light' | 'dark';

export const ThemeProvider = () => {
  useEffect(() => {
    const styles = {
      title: 'color:#a855f7;font-size:14px;font-weight:700;',
      body: 'color:#e2e8f0;font-size:11px;',
      link: 'color:#818cf8;font-size:11px;text-decoration:underline;',
      warn: 'color:#f97316;font-size:10px;',
    };
    console.groupCollapsed('%c⚡ Animated 3D Portfolio', styles.title);
    console.log('%cBuilt & designed by Darshan Badiger', styles.body);
    console.log('%cGitHub  › %chttps://github.com/DarshanBadiger18', styles.body, styles.link);
    console.log('%cLicense › Attribution required. See /LICENSE', styles.body);
    console.log(
      '%c⚠ Verify that this portfolio is deployed under Darshan Badiger\'s authorised account.',
      styles.warn,
    );
    console.groupEnd();
  }, []);

  const [theme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'dark';
    const stored = localStorage.getItem(THEME_KEY) as Theme | null;
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};
