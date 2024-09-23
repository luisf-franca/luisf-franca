import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();
  const translate = (textEn, textPt) => (language === 'en' ? textEn : textPt);

  return (
    <footer id="contact" className="contact">
      <div className="container1">
        <h2>{translate('Contact', 'Contato')}</h2>
        <a
          href="mailto:luisfranca@outlook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          luisfranca@outlook.com
        </a>
        <a
          href="https://instagram.com/luisf.franca"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://www.linkedin.com/in/luisfilipefranca/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/luisf-franca"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.behance.net/luisffranca"
          target="_blank"
          rel="noopener noreferrer"
        >
          Behance
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5531988680589&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20cria%C3%A7%C3%A3o%20de%20sites%20e%20aplicativos!"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </footer>
  );
};

export default Footer;
