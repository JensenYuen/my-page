import React from 'react';
import { useTranslation } from 'react-i18next';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import InfoPage from './pages/InfoPage';
import Portfoilo from './pages/Portfoilo';

const App = () => {
  const links: string[] = ['home','portfoilo','about'];

  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  }

  return (
    <HashRouter>
      <NavBar title='React' links={links} onChangeLanguage={changeLanguage}/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/portfoilo' element={<Portfoilo />} />
        <Route path='/about' element={<InfoPage />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
