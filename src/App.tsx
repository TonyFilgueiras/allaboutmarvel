import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import HomeView from './views/HomeView';
import NotFoundView from './views/NotFoundView';
import Header from './components/Header';


const theme = {
  colors: {
    red: "#e23636",
    gray: "#504a4a",
    black: "#222",
    cyan: "#518cca",
    orange: "#f78f3f"
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<HomeView/>} />
            <Route path="*" element={<NotFoundView />} />
          </Routes>

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;