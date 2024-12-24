import './Events.css'
import {Link} from 'react-router-dom'
import React, { useState } from 'react';
const Events =()=>{
   const [email, setEmail] = useState('');
       
         
         const handleInputChange = (e) => {
           setEmail(e.target.value);
         };
       
         
         const handleSubmit = (e) => {
           e.preventDefault();
           console.log('Email entered:', email);
           
           setEmail('');
         }
  return (
    <>
     <div>
           <div className='event-content'>
              <h1>This is Our Event Page</h1>
              <p>Blog post goes here</p>
           </div>
                   <article className='part6'>
                        <h1>Subscribe to our Newsletter</h1>
                        <p>Join our mailing list to get the latest news</p>
                      <div className='form'> 
                  <form onSubmit={handleSubmit}>
                    <div className='forms'>
                      <input
                         type="email"
                         id="email"
                         name="email"
                         value={email}
                         onChange={handleInputChange}
                         placeholder="Enter your email"
                         required
                      />
                      <button type="submit" className='home'>Subscribe</button>
                    </div>
                   </form>
                 </div>
                 </article>
                   <footer className='final-part'>
             <div class="ourfooters">
              <div className='logo'> <h3 className='white'>The</h3> <h2 className='gold'>Next Gen</h2> <h1 className='red'>SHOW</h1> </div>
                <div class="ourfooter">
                  <h3>COMPANY</h3>
                  <li><Link to='/about'>How it works</Link></li> 
                  <li><Link to='/talent'>Talents</Link></li> 
                  <li><Link to='/event'>Events</Link></li> 
                </div>
                <div class="ourfooter">
                  <h3>RESOURCES</h3>
                  <li><Link to='/event'>Blog post name goes here</Link></li> 
                  <li><Link to='/event'>Blog post name goes here</Link></li> 
                  <li><Link to='/event'>Blog post name goes here</Link></li> 
                  <li><Link to='/'>See all resources</Link></li>  
                </div>
                <div class="ourfooter">
                  <h3>ABOUT</h3>
                  <li><Link to='/about'>Terms & Conditions</Link></li> 
                  <li><Link to='/about'>Privacy Policy</Link></li> 
                  <li><Link to='/faq'>Faq</Link></li>  
                </div>
              </div>
              <div className='pp'><h5>Copyright © 2023 The NextGen Show</h5></div>
            </footer>
     </div>
    </>
  )
}

export default Events;