import React, { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import useDarkMode from '../../contexts/DarkMode';
import './Header.css';

// IMAGES
import dark_logo from '../../assets/logo_dark.png';
import white_logo from '../../assets/logo_white.png';
import dark_mode from '../../assets/darkmode.png';

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { language, toggleLanguage } = useLanguage();
  const translate = (enText, ptText) => (language === 'en' ? enText : ptText);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      header.classList.toggle('fixed', window.scrollY > window.innerHeight - 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (url) => {
    if (window.location.pathname !== '/') {
      window.location.href = '/';
    }
    window.location.hash = `#${url}`;
  };

  const links = [
    { url: 'home', en: '// home', pt: '// início' },
    { url: 'expertise', en: '// expertise', pt: '// experiência' },
    { url: 'work', en: '// work', pt: '// trabalho' },
    { url: 'contact', en: '// contact', pt: '// contato' },
  ];

  return (
    <header className="initial">
      <div>
        <a href="/" className="logo-link">
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
            {links.map(({ url, en, pt }) => (
              <li key={url}>
                <a
                  href={`#${url}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(url);
                  }}
                >
                  {translate(en, pt)}
                </a>
              </li>
            ))}
          </ul>

          <div className="header_mobile">
            {links.map(({ url, en, pt }) => (
              <li key={url}>
                <a
                  href={`#${url}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(url);
                  }}
                >
                  {translate(en, pt)}
                </a>
              </li>
            ))}
          </div>
        </nav>

        {/* <div className="selectors">
          <img
            id="darkModeButton"
            src={dark_mode}
            alt="Dark Mode Toggle"
            onClick={toggleDarkMode}
          />
          <button id="languageButton" onClick={toggleLanguage}>
            EN/PT
          </button>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
