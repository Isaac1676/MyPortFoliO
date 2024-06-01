import React from 'react';
import "./App.css";
import Home from './components/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import Services from './components/services/Services';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio';

const App = () => {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Contact />
      </main>
    </>
  )
}

export default App