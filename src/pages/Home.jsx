import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/home.css';

// COMPONENTS
import MyExpertise from '../components/MyExpertise/MyExpertise';
import MyWork from '../components/MyWork/MyWork';

const Home = () => {
  const { language } = useLanguage();
  const translate = (textEn, textPt) => (language === 'en' ? textEn : textPt);

  return (
    <main>
      <section id="home" className="home">
        <h1 className="name">LUÍS FILIPE</h1>
        <p className="title">
          {translate(
            'FRONT END & APP DEVELOPER.',
            'FRONT END E DESENVOLVEDOR DE APLICATIVOS.',
          )}
        </p>
      </section>

      <MyExpertise />
      <MyWork />
    </main>
  );
};

export default Home;
