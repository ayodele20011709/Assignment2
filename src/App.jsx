import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './home/Home';
import About from './about/About';

import Faq from './faq/Faq';
import Talents from './talent/Talents';
import Contact from './contact/Contact';
import Events from './event/Events';
import Navbar from './navbar/Navbar';
import './App.css'

const App =()=>{

  return (
    <>
    
     <div>
     <Navbar/>
     <div className='page-content'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/event" element={<Events/>} />
        <Route path="/talent" element={<Talents />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq/>} />
      </Routes>
      
      </div>
     </div>

    
     
      
    </>
  )
}

export default App;
