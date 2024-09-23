import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const MyExpertise = () => {
  const { language } = useLanguage();
  const translate = (textEn, textPt) => (language === 'en' ? textEn : textPt);

  return (
    <section id="expertise" className="expertise container">
      <h2>{translate('My Expertise', 'Minha Experiência')}</h2>

      <div className="expertise-container">
        {[
          {
            titleEn: 'Software Development',
            titlePt: 'Desenvolvimento de software',
            descEn: 'Experienced in Python, JavaScript, TypeScript.',
            descPt: 'Experiente em Python, JavaScript, TypeScript',
          },
          {
            titleEn: 'Front-end Dev ReactJS',
            titlePt: 'Front-end Dev ReactJS',
            descEn:
              'Passionate about UI/UX. Development experience in HTML, CSS, JS, React and NodeJS frameworks.',
            descPt:
              'Apaixonado por UI/UX. Experiência em desenvolvimento com HTML, CSS, JS, React e frameworks NodeJS.',
          },
          {
            titleEn: 'React Native Android, iOS',
            titlePt: 'React Native Android, iOS',
            descEn:
              'Skilled in developing mobile apps using the React Native framework.',
            descPt:
              'Habilidoso em desenvolver aplicativos móveis utilizando o framework React Native.',
          },
        ].map((item, index) => (
          <div className="expertise-item" key={index}>
            <h3>{translate(item.titleEn, item.titlePt)}</h3>
            <p>{translate(item.descEn, item.descPt)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyExpertise;
