import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import HomeView from './views/HomeView';
import NotFoundView from './views/NotFoundView';
import Header from './components/Header';
import CharactersView from './views/CardsView';
import { theme } from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';
import Footer from './components/Footer';
import MethodNotImplemented from './components/MethodNotImplemented';
import { CharactersDataProvider } from './contexts/CharactersContext';
import CharacterInfoView from './views/CardsInfoView';
import InfoDetailsView from './views/InfoDetailsView';
import { ComicsDataProvider } from './contexts/ComicsContext';
import { EventsDataProvider } from './contexts/EventsContext';
import { SeriesDataProvider } from './contexts/SeriesContext';
import { StoriesDataProvider } from './contexts/StoriesContext';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <BrowserRouter>
        <Header/>
        <EventsDataProvider>
        <SeriesDataProvider>
        <StoriesDataProvider>
        <ComicsDataProvider>
        <CharactersDataProvider>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/:cards" element={<CharactersView/>}/>
            <Route path="/:cards/:id" element={<CharacterInfoView />}>
              <Route path=":detail" element={<InfoDetailsView/>}/>             
            </Route>
            <Route path="*" element={<NotFoundView />} />
          </Routes>
        </CharactersDataProvider>
        </ComicsDataProvider>
        </StoriesDataProvider>
        </SeriesDataProvider>
        </EventsDataProvider>
      <Footer/>
      </BrowserRouter>
      <MethodNotImplemented/>
    </ThemeProvider>
  );
}

export default App;