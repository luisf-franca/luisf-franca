import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    if (prefersDarkMode) {
      toggleDarkMode();
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle('dark-mode');
    document.body.style.backgroundColor = darkMode ? '#F6F6F6' : '#0E0F11';
    document.body.style.color = darkMode ? '#000000' : '#FFFFFF';
  };

  return { darkMode, toggleDarkMode };
};

export default useDarkMode;
