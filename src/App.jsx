import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Router from './components/Router/Router';
import Footer from './components/Footer/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Header />
      <Router />
      <Footer />
    </LanguageProvider>
  );
}

export default App;
