import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

/** Persistent dark/light switch. Writes `data-theme` on <html>. */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const initial = (document.documentElement.dataset.theme as Theme) || 'dark';
    setTheme(initial);
  }, []);

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('bitqar-theme', next); } catch { /* ignore */ }
  };

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      className="theme-toggle"
    >
      <span className="theme-toggle-track" data-theme-state={theme}>
        <span className="theme-toggle-thumb">{theme === 'dark' ? '☾' : '☀'}</span>
      </span>
    </button>
  );
}
