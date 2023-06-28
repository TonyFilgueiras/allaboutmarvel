import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import HomeView from './views/HomeView';
import NotFoundView from './views/NotFoundView';
import Header from './components/Header';
// import CardsView from './views/CardsView';
import { theme } from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';
import Footer from './components/Footer';
import MethodNotImplemented from './components/MethodNotImplemented';
import { CharactersDataProvider } from './contexts/CharactersContext';
import CardsInfoView from './views/CardsInfoView';
import InfoDetailsView from './views/InfoDetailsView';
import { ComicsDataProvider } from './contexts/ComicsContext';
import { EventsDataProvider } from './contexts/EventsContext';
import { SeriesDataProvider } from './contexts/SeriesContext';
import CharactersView from './views/CharactersView';
import ComicsView from './views/ComicsView';
import EventsView from './views/EventsView';
import SeriesView from './views/SeriesView';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <BrowserRouter>
        <Header/>
        <EventsDataProvider>
        <SeriesDataProvider>
        <ComicsDataProvider>
        <CharactersDataProvider>
          <Routes>
            <Route path="/" element={<HomeView />} />
            {/* <Route path="/:cards" element={<CardsView/>}/> */}
            <Route path="/characters" element={<CharactersView/>}/>
            <Route path="/comics" element={<ComicsView/>}/>
            <Route path="/events" element={<EventsView/>}/>
            <Route path="/series" element={<SeriesView/>}/>
            <Route path="/:cards/:id" element={<CardsInfoView />}>
              <Route path=":detail" element={<InfoDetailsView/>}/>             
            </Route>
            <Route path="*" element={<NotFoundView />} />
          </Routes>
        </CharactersDataProvider>
        </ComicsDataProvider>
        </SeriesDataProvider>
        </EventsDataProvider>
      <Footer/>
      </BrowserRouter>
      <MethodNotImplemented/>
    </ThemeProvider>
  );
}

export default App;