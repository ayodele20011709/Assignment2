import './Navbar.css'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar =()=>{

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
     
    
     <div className="navbar">

        <div className="logo">
          <span className="white">The</span>
          <span className="gold">Next Gen</span>
          <span className="red">SHOW</span>
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
      <Link to="/contact">
        <Button variant="outline-light" className='button'>Join Us</Button>
      </Link>
     
    </div>
   
 </>
  )
}

export default Navbar;