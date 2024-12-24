import './Navbar.css'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar =()=>{
  const location = useLocation(); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const getNavbarStyle = () => {
    switch (location.pathname) {
      case '/about':
        return 'navbar navbar-about';
      case '/event':
        return 'navbar navbar-event';
      case '/talent':
        return 'navbar navbar-talent';
      case '/contact':
        return 'navbar navbar-contact';
      default:
        return 'navbar navbar-default'; 
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
     
    
     <div className={getNavbarStyle()}>

        <div className="logo">
          <h3 className="white">The</h3>
          <h2 className="gold">Next Gen</h2>
          <h1 className="red">SHOW</h1>
        </div>
        
        <button className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? <CloseIcon style={{ color: 'white', fontSize: '30px' }} /> : <MenuIcon style={{ color: 'white', fontSize: '30px' }} />}
        </button>
        
        <nav className={`links ${isMenuOpen ? 'open' : ''}`}>
        <li> <Link to="/" onClick={toggleMenu}>Home</Link> </li>
        <li> <Link to="/about" onClick={toggleMenu}>About Us</Link> </li>
        <li> <Link to="/event" onClick={toggleMenu}>Events</Link> </li>
        <li>  <Link to="/talent" onClick={toggleMenu}>Talents</Link> </li>
        <li> <Link to="/contact" onClick={toggleMenu}>Contact</Link> </li>
     </nav>
     <Button variant="outline-light" className='button'>Join Us</Button>
     
    </div>
   
 </>
  )
}

export default Navbar;