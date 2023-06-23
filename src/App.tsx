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
import MethodNotImplementedContext from './contexts/MethodNotImplementedContext';


function App() {
  const { isOpen, mousePosition } = React.useContext(MethodNotImplementedContext)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<HomeView/>} />
            <Route path="/characters" element={<CharactersView/>}/>
            <Route path="*" element={<NotFoundView />} />
          </Routes>
      <Footer/>
      </BrowserRouter>
      <MethodNotImplemented isOpened={ isOpen } mousePosition={mousePosition} />
    </ThemeProvider>
  );
}

export default App;