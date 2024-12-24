import './Contact.css'
import map_image from '../assets/Mapsicle Map.png'

import React, { useState } from "react";
import {Link} from 'react-router-dom'
import About from '../about/About';
const Contact =()=>{
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

 
  const [subscriptionEmail, setSubscriptionEmail] = useState('');

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleSubscriptionChange = (e) => {
    setSubscriptionEmail(e.target.value);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ firstName: "", lastName: "", email: "", message: "" }); 
  };

  
  const handleSubscriptionSubmit = (e) => {
    e.preventDefault();
    console.log(`Subscribed with email: ${subscriptionEmail}`);
    setSubscriptionEmail(''); 
  };

  const handleClick = ()=>{
    window.location.href = "/about"
  }
  

  return (
    <>
     <div>
        <div className='contact-container'>
            <div className='contact-content'>
              <h1>You've got vital info for us?</h1>
              <p>Do well and reach out to us</p>
              <button type="submit" onClick={handleClick} className='submit-button'>Contact Us</button>
            </div>
        </div>
        <div className='box-container'>
          <div className='contact-left-section'>
             <div className='phone'>
             <h3>Phone</h3>
             <p>+234 908 8867 843</p>
             </div>
             <div className='email'>
              <h3>Email</h3>
              <p>help@thenextgenshow.com</p>
             </div>
             <div className='office'>
              <h3>Office</h3>
              <p>78, Westhill Estate, Abuja</p>
             </div>
          </div>

          <div className="contact-right-section">
          
             <form onSubmit={handleSubmit} className="form-container">
             <h2>Send us a message</h2>
            <p>Lorem ipsum dolor sit amet consectetur. <br />
            Sit curabitur nulla justo tellus amet.</p>
                <div className="form-row">
                   <div className="form-group">
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        required
                      />
               </div>
               <div className="form-group">
                     <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      required
                    />
               </div>
             </div>

             <div className="form-row">
               <div className="form-group">
                  <input
                   type="email-form"
                   id="email"
                   name="email"
                   value={formData.email}
                   onChange={handleChange}
                    placeholder="Email address"
                   required
                  />
               </div>
             </div>

             <div className="form-row">
               <div className="form-group">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                  ></textarea>
               </div>
             </div>

            <button type="submit"  className="submit-btn">Send Message</button>
          </form>
         </div>
       </div>
         <div className='map'>
          <h1>Find us on the Map</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Sit <br /> curabitur nulla justo tellus amet. </p>
          <img src={map_image} alt="map" width={1000} />
         </div>
         <article className='part6'>
        <h1>Subscribe to our Newsletter</h1>
        <p>Join our mailing list to get the latest news</p>
        <div className='form'>
          <form onSubmit={handleSubscriptionSubmit}>
            <div className='forms'>
              <input
                type="email"
                id="email"
                name="email"
                value={subscriptionEmail}
                onChange={handleSubscriptionChange}
                placeholder="Enter your email"
                required
              />
              <button type="submit" className='home'>Subscribe</button>
            </div>
          </form>
        </div>
      </article>
      <footer className='contact-part'>
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
     <div className='writing-container'>
     <div className='introduction'>
      <h1>Introduction</h1>
      <p>The Next Gen Show is a Social Enterprise that uses talents and <br /> abilities as a tool
         to facilitate opportunities for youth employment and <br /> engagement.
      
        <p> it caters to young people from more than 20 countries in Africa that are <br /> passionate about 
         any form of talent they've got.
        </p>
         This initiative is just coming to an inception not to show that we are new but <br />for the fact 
         that we understand the concept of nation building and the <br /> impact the youths are able to lay, we are 
         creating a platform for African Youth <br /> to leverage on so that they become what they are ambitious of 
         no matter <br /> what their background is.
      </p>
     </div>
     <div className='vision'>
      <h1>Our Vision</h1>
      <p>To raise transformational youth Ambassadors for Africa who can break the <br /> box and stand out 
         in all Continents.
      </p>
     </div>
     <div className='mission'>
      <h1>Our Mission</h1>
      <p>
      We believe that young people can make a sustainable living doing what they <br /> love.
      Furthеrmоrе, we dо nоt wаnt a соntinеnt that does nоt sustain new tаlеntѕ, <br /> wе аrе tired оf thаt.
      Wе wаnt to create a platform оf ѕuрроrt tо make thе <br /> African youth rеасh their potentials and nеvеr settling 
      fоr the lеѕѕ which is <br /> раrt оf the reason why we mаkе it a tаlеnt ѕhоw-соmреtitivе!
      </p>
     </div>
     </div>
     </div>
    </>
  )
}

export default Contact;