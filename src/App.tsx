import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import InfoPage from './pages/InfoPage';
import Portfoilo from './pages/Portfoilo';

const App = () =>{
  const links: string[] = ['home','portfoilo','about'];

  return (
    <HashRouter>
      <NavBar title='React' links={links}/>
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
