import React from 'react'
import Topbar from './components/Topbar.jsx'
import Intro from './components/Intro.jsx'
import Portfolio from './components/Portfolio.jsx'
import Testomonial from './components/Testomonial.jsx'
import Works from './components/Works.jsx'
import Contact from './components/Contact.jsx'
import './components/app.scss'
function App() {
  return (
    <div className="app">
     <Topbar/>
     <div className="section">
     <Intro/>
     <Portfolio/>
     
     <Works/>
    <Contact/>
    </div>
    </div>
  );
}

export default App;
