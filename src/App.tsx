import React from 'react';
import './App.css';
import Home from './pages/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './pages/About';
import HigherEd from './pages/HigherEd';
import ArtsCommunity from './pages/ArtsCommunity';
import Contact from './pages/Contact';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/highered" element={<HigherEd />} />
          <Route path="/arts-and-community" element={<ArtsCommunity />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
