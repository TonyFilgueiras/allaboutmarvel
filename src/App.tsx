import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import HomeView from './views/HomeView';
import NotFoundView from './views/NotFoundView';
import Header from './components/Header';
import CharactersView from './views/CharactersView';
import { theme } from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';
import Footer from './components/Footer';
import MethodNotImplemented from './components/MethodNotImplemented';
import { CharactersDataProvider } from './contexts/CharactersContext';
import CharacterInfoView from './views/CharacterInfoView';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <BrowserRouter>
        <Header/>
        <CharactersDataProvider>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/characters" element={<CharactersView/>}/>
            <Route path="/characters/:id" element={<CharacterInfoView/>}/>
            <Route path="*" element={<NotFoundView />} />
          </Routes>
        </CharactersDataProvider>
      <Footer/>
      </BrowserRouter>
      <MethodNotImplemented/>
    </ThemeProvider>
  );
}

export default App;