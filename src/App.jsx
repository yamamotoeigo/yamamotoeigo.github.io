import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import AboutMe from './components/AboutMe';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Links from './components/Links';
import Footer from './components/Footer';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import './styles/App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const App = () => {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Container>
        <Introduction />
        <AboutMe />
        <TechStack />
        <Projects />
        <Links />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
