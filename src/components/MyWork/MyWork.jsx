import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

// IMAGES
import allboro from '../../assets/allboro.png';

const MyWork = () => {
  const { language } = useLanguage();
  const translate = (textEn, textPt) => (language === 'en' ? textEn : textPt);

  return (
    <section id="work" className="work container">
      <div className="allboro_container">
        <h2>{translate('My Work', 'Meu Trabalho')}</h2>
        <p className="allboro_description">
          {translate(
            'As the leader of the programming team, I had the honor of playing a pivotal role in the development of All Boro Tours, an innovative tourism project based in Manhattan, New York City. My focus was on the front end, utilizing React JS and React Native, in addition to integrating an API developed in C#. I worked to create intuitive and efficient interfaces, providing an engaging experience for users. I take pride in having led the team on this project, contributing to the development of a platform that connects tourists to the wonders of different places.',
            'Como líder da equipe de programadores, tive a honra de desempenhar um papel fundamental no desenvolvimento do All Boro Tours, um projeto inovador de turismo sediado na ilha de Manhattan, em Nova York. Concentrei-me nos esforços no front-end, utilizando React JS e React Native, além de integrar uma API desenvolvida em C#. Trabalhei para criar interfaces intuitivas e eficientes, proporcionando uma experiência envolvente para os usuários. Fico orgulhoso de ter liderado a equipe nesse projeto, contribuindo para o desenvolvimento de uma plataforma que conecta turistas às maravilhas de diferentes lugares.',
          )}
        </p>
      </div>
      <img src={allboro} alt="allboro" className="allboro_image" />
    </section>
  );
};

export default MyWork;
