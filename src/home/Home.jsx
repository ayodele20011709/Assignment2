import './Home.css';
import content_image from '../assets/Content.jpg'
import gallery_image from '../assets/Gallery Scroll.jpg'
import blog2_image from '../assets/blog2.png'
import column_image from '../assets/Columns.png'
import vector_image from '../assets/Vector 1.png'
import Button from 'react-bootstrap/Button';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PersonIcon from '@mui/icons-material/Person';
import EventIcon from '@mui/icons-material/Event';
import GradingIcon from '@mui/icons-material/Grading';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import {Link} from 'react-router-dom'
import AssignmentIcon from '@mui/icons-material/Assignment';

import React, { useState } from 'react';


const Home =()=>{
 
  const [email, setEmail] = useState('');

  
  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email entered:', email);
    
    setEmail('');
  };

  return (
    <>
   <div>
    <main className='image-container'>
        <div className="home-content">
           <h1>Impacting <br /> Lives of Young <br /> People in Africa.</h1>
           <p> Making youngsters leverage their <br /> skills, abilities, and talents stand <br /> out as a goal-getter. </p>
           <div className="home-buttons">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Button variant="light" onClick={()=>(window.location.href = "/about")} className='button2'>Join Us</Button>
                  <PlayCircleIcon style={{ fontSize: 30, color: 'white' }} />
                  <p style={{ margin: '0 0 0 10px' }}>How it works</p>
                </div>
           </div>
         </div>
    </main>
    <section className='home-page2'>
        <div className='part2' >
           <h1>How it works</h1>
           <p>Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla justo <br />
             tellus amet. Ut placerat dolor massa metus quisque sodales semper. <br />
             Hac donec vulputate pharetra augue eu congue.
           </p>
        </div>
      <div className='container'>
        <div className='left-section'>
         <div style={{ display: 'flex', alignItems: 'center' }}>
           <PersonIcon style={{ fontSize: 40, color: 'gray' }} />
           <p style={{ margin: '0 0 0 10px', color:'gray' }}>Create an Account</p>
         </div>

         <div style={{ display: 'flex', alignItems: 'center' }}>
           <EventIcon style={{ fontSize: 38, color: 'gray' }} />
           <p style={{ margin: '0 0 0 10px', color:'gray' }}>Join an Event</p>
         </div>

         <div style={{ display: 'flex', alignItems: 'center' }}>
           <GradingIcon style={{ fontSize: 40, color: 'black' }} />
           <p style={{ margin: '0 0 0 10px' }}>Submit Requirements</p>
         </div>

         <div style={{ display: 'flex', alignItems: 'center' }}>
           <AssignmentIcon style={{ fontSize: 38, color: 'gray' }} />
           <p style={{ margin: '0 0 0 10px', color:'gray' }}>Get Shortlisted</p>
         </div>

         <div style={{ display: 'flex', alignItems: 'center' }}>
           < HowToVoteIcon style={{ fontSize: 40, color: 'gray' }} />
           <p style={{ margin: '0 0 0 10px', color:'gray' }}>Get the Highest Vote</p>
         </div>
        </div>

       
      
       <div className="right-section">
         <GradingIcon style={{ fontSize: 40, color: 'black' }} />
         <h3>Submit Requirements</h3>
         <p>
          Lorem ipsum dolor sit amet consectetur. Sit <br /> curabitur nulla justo
          tellus amet. Ut placerat <br /> dolor massa metus quisque sodales semper. <br /> Hac
          donec vulputate pharetra augue eu congue.
         </p>
       </div>
      </div>
    </section>
    
       <div className='part3'>
          <h1>Our partners</h1>
          <p>People who have trust in us</p>
           <img src={content_image} alt="logos" width={800}  /> 
       </div>
       <div className='image2' style={{ margin: '0', padding: '0' }}>
         <img src={gallery_image} alt="gallery" style={{ display: 'block', width: '100%', margin: '0', padding: '0' }}  />
       </div>
       <div className='part4'>
         <h1>What people say about Us</h1>
         <img src={column_image} alt="columns" width={1000} />
      </div>

      <div className='part5'>
          <h1>Our Blog</h1>
          <p>Lorem ipsum dolor sit amet consectetur. <br/> Sit curabitur nulla justo tellus amet.</p>
          <img src={vector_image} alt="image" width={150} style={{ marginTop: '-50px' }}  /> <br/>
          <img src={blog2_image} alt="our blog" width={1000} style={{ marginTop: '-100px' }} />
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

export default Home;