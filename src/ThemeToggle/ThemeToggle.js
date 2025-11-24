import React from 'react';
import './ThemeToggle.css';
import { useTheme } from '../theme/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggle } = useTheme();

  return (
    <button
      className={`theme-toggle ${theme === 'dark' ? 'dark' : 'light'}`}
      onClick={toggle}
      aria-pressed={theme === 'dark'}
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;
