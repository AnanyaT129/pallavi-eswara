import React from 'react';
import './App.css';
import Home from './pages/Home';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import About from './pages/About';
import HigherEd from './pages/HigherEd';
import ArtsCommunity from './pages/ArtsCommunity';
import Contact from './pages/Contact';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh'
        }}>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/highered" element={<HigherEd />} />
                <Route path="/arts-and-community" element={<ArtsCommunity />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer></Footer>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
