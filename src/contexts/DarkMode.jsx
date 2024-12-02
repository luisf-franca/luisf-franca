import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  // useEffect(() => {
  //   const prefersDarkMode = window.matchMedia(
  //     '(prefers-color-scheme: dark)',
  //   ).matches;
  //   if (prefersDarkMode) {
  //     toggleDarkMode();
  //   }
  // }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.body.classList.toggle('dark-mode', newMode);
      document.body.style.backgroundColor = newMode ? '#0E0F11' : '#F6F6F6';
      document.body.style.color = newMode ? '#FFFFFF' : '#000000';
      return newMode;
    });
  };

  return { darkMode, toggleDarkMode };
};

export default useDarkMode;
