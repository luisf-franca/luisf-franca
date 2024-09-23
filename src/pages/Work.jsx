import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Work = () => {
  const { language } = useLanguage();
  const translate = (textEn, textPt) => (language === 'en' ? textEn : textPt);

  return <div>Work</div>;
};

export default Work;
