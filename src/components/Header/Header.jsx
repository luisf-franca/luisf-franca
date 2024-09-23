import React, { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import useDarkMode from '../../contexts/DarkMode';
import '../../styles/styles.css';

// IMAGES
import dark_logo from '../../assets/logo_dark.png';
import white_logo from '../../assets/logo_white.png';
import dark_mode from '../../assets/darkmode.png';

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const translate = (textEn, textPt) => (language === 'en' ? textEn : textPt);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > window.innerHeight) {
        header.classList.add('fixed');
      } else {
        header.classList.remove('fixed');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <header className="initial">
      <div>
        <a href="#home" className="logo-link">
          <img
            src={darkMode ? dark_logo : white_logo}
            alt="logo"
            className="logo"
          />
        </a>
      </div>

      <div className="header_links">
        <nav>
          <ul className="header">
            {[
              { en: '// home', pt: '// início' },
              { en: '// expertise', pt: '// experiência' },
              { en: '// work', pt: '// trabalho' },
              { en: '// contact', pt: '// contato' },
            ].map(({ en, pt }) => (
              <li key={en}>
                <a href={`#${en}`}>{translate(en, pt)}</a>
              </li>
            ))}
          </ul>

          <div className="header_mobile">
            {['home', 'expertise', 'work', 'contact'].map((section) => (
              <li key={section}>
                <a href={`#${section}`}>{translate(section, section)}</a>
              </li>
            ))}
          </div>
        </nav>

        <div className="selectors">
          <img
            id="darkModeButton"
            src={dark_mode}
            alt="Dark Mode Toggle"
            onClick={toggleDarkMode}
          />
          <button id="languageButton" onClick={toggleLanguage}>
            EN/PT
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
