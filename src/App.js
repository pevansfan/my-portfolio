import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <div>
      <Sidebar />
      <main className='main'>
        <Home />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;

