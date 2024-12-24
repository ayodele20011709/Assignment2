import './Faq.css'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import people_image from '../assets/Frame 49.png'
import SearchIcon from "@mui/icons-material/Search";
import Accordion from 'react-bootstrap/Accordion';
const Faq =()=>{
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search Query:", searchQuery);

  };
  const cardData = [
    { title: "Getting Started", text: "Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla justo tellus amet." },
    { title: "Talents", text: "Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla justo tellus amet." },
    { title: "Events", text: "Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla justo tellus amet." },
    { title: "Categories", text: "Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla justo tellus amet." },
    { title: "Enrolment Payment", text: "Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla justo tellus amet." },
    { title: "Shortlisting", text: "Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla justo tellus amet." },
    { title: "Voting", text: "Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla justo tellus amet." },
    { title: "Price Winning", text: "Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla justo tellus amet." },
  ];
    const [email, setEmail] = useState('');
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleEmailSubmit = (e) => {
      e.preventDefault();
      console.log("Submitted Email:", email);
    };

  return (
    <>
    <div>
      <div className='faq-container'>
           <div className='faq-content'>
              <h1>How can we help you?</h1>
              <form className="search-form" onSubmit={handleSearch} style={{ position: "relative" }}>
                 <input
                    type="text"
                    className="search-input"
                    placeholder="Search for answers"
                    value={searchQuery}
                    onChange={handleInputChange}
                    style={{ paddingLeft: "40px" }} 
                  />
                 <SearchIcon
                   style={{
                    position: "absolute",
                    left: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#ccc",
                    }}
                  />
              </form>
            </div>
        </div> 
         <div className='card-1'>
           <div className='card-section'>
             {cardData.map ((item, index)=>(
              <div key={index} className='card-details'>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
             ))}
           </div>
         </div>
         <div className='question'>
           <h2>Frequently asked Questions</h2>
           <div className='centered-container'>
           <Accordion style={{ width: '75%' }} className='centered-accordion'>
             <Accordion.Item eventKey="0" style={{ marginBottom: '15px'}}>
                <Accordion.Header style={{ color:  'rgb(32, 100, 159)'}}>Do you Over Customer Support?</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
               </Accordion.Item>
             <Accordion.Item eventKey="1" style={{ marginBottom: '15px' }}>
                <Accordion.Header>Do you Over Customer Support?</Accordion.Header>
                   <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                   </Accordion.Body>
                 </Accordion.Item>
                 <Accordion.Item eventKey="2" style={{ marginBottom: '15px' }}>
                <Accordion.Header>Do you Over Customer Support?</Accordion.Header>
                   <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                   </Accordion.Body>
                 </Accordion.Item>
                 <Accordion.Item eventKey="3" style={{ marginBottom: '15px' }}>
                <Accordion.Header>Do you Over Customer Support?</Accordion.Header>
                   <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                   </Accordion.Body>
                 </Accordion.Item>
                 <Accordion.Item eventKey="4" style={{ marginBottom: '15px' }}>
                <Accordion.Header>Do you Over Customer Support?</Accordion.Header>
                   <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                   </Accordion.Body>
                 </Accordion.Item>
                 <Accordion.Item eventKey="5" style={{ marginBottom: '15px' }}>
                <Accordion.Header>Do you Over Customer Support?</Accordion.Header>
                   <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                   </Accordion.Body>
                 </Accordion.Item>
                 <Accordion.Item eventKey="6" style={{ marginBottom: '15px' }}>
                <Accordion.Header>Do you Over Customer Support?</Accordion.Header>
                   <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                   </Accordion.Body>
                 </Accordion.Item>
                 <Accordion.Item eventKey="7" style={{ marginBottom: '15px' }}>
                <Accordion.Header>Do you Over Customer Support?</Accordion.Header>
                   <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                   </Accordion.Body>
                 </Accordion.Item>
                 <Accordion.Item eventKey="8" style={{ marginBottom: '15px', backgroundColor: 'rgb(28, 108, 179)', }}>
                <Accordion.Header className='header-color'>Do you Over Customer Support?</Accordion.Header>
                   <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                   </Accordion.Body>
                 </Accordion.Item>
           </Accordion>
         </div>
         </div>
         <div className='looking-for'>
           <h1>Didn't find what you are looking for?</h1>
           <p>Our team is active to attend to your email</p>
            <img src={people_image} alt="people" />
         </div>
         <article className='faq-part6'>
         <h1>Subscribe to Our Newsletter</h1>
         <div className='form'>
         <form onSubmit={handleEmailSubmit} style={{ marginTop: '20px' }}>
         <div className='forms'>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <button type="submit" className='faq-home'>Subscribe</button>
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

export default Faq;