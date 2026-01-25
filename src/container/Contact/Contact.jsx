import React, { useState } from 'react';

import './Contact.css';
import contact from '../../assets/contact.png';

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="app__contact app__wrapper section__padding" id="contact">

        <div className="contact__content">
     <div className="contact__title">
  <div className="app__footer-links">
    <div className="app__footer-links_contact">
      <div className="footer__headtext">
        <h1 className="headtext__cormorant">Contact Us</h1>
      </div>
    </div>
  </div>
</div>

    <div className="contact__row">

        <form className="contact__form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="tel" placeholder="Phone Number" />
          <textarea placeholder="Your Message" rows="5"></textarea>

          <button
  type="button"
  className="custom__button"
  onClick={() => setShowPopup(true)}
>
  Send Message
</button>
        </form>
        
          <div className="contact__image">
      <img src={contact} alt="contact" />
    </div>
    </div>


      {/* EXTRA INFO BELOW CONTACT FORM */}
<div className="contact__links">
   <div className="contact__box">
    <h3>Quick Links</h3>
    <a href="#home">Home</a>
    <a href="#about">About Us</a>
    <a href="#menu">Menu</a>
    <a href="#gallery">Gallery</a>
    <a href="#contact">Contact Us</a>
  </div>


  <div className="contact__box">
    <h3>Locations</h3>
     <a
    href="https://www.google.com/maps?q=12+MG+Road+Kolkata+West+Bengal+700001"
    target="_blank"
    rel="noopener noreferrer"
  >
    Kolkata - 12 MG Road
  </a>

  <a
    href="https://www.google.com/maps/place/Connaught+Place,+New+Delhi"
    target="_blank"
    rel="noopener noreferrer"
  >
    Delhi - Connaught Place
  </a>

  <a
    href="https://www.google.com/maps/place/Bandra+West,+Mumbai"
    target="_blank"
    rel="noopener noreferrer"
  >
    Mumbai - Bandra West
  </a>

  <a
    href="https://www.google.com/maps/place/T.+Nagar,+Chennai"
    target="_blank"
    rel="noopener noreferrer"
  >
    Chennai - T.Nagar
  </a>

  <a
    href="https://www.google.com/maps/place/Bhubaneswar,+Odisha"
    target="_blank"
    rel="noopener noreferrer"
  >
    Odisha - Bhubaneswar
  </a>
</div>
 
  <div className="contact__box contact__hours">
  <h3>Working Hours</h3>
  <p className="p__opensans">Mon - Fri: 11:00 am - 11:00 pm</p>
  <p className="p__opensans">Sat - Sun: 10:00 am - 12:00 am</p>
</div>

  <div className="contact__box">
    <h3>Contact Info</h3>
    <a href="tel:9876543210">+91 9876543210</a>
    <a href="mailto:delightswagata@gmail.com">delightswagata@gmail.com</a>
    <a href="#">Insta – Delight Swagata</a>
    <a href="#">India</a>
  </div>

</div>

    
    </div>
      
      
       {/* 👇 YAHAN PASTE KARNA HAI */}
    {showPopup && (
      <div className="modal-overlay">
        <div className="modal-box">
          <h2 className="modal-title">Message Sent 🎉</h2>

          <p className="p__opensans" style={{ marginTop: "10px" }}>
            Thank you for contacting us.  
            We will get back to you shortly.
          </p>

          <button
            className="primary-btn modal-login-btn"
            style={{ marginTop: "20px" }}
            onClick={() => setShowPopup(false)}
          >
            OK
          </button>
        </div>
      </div>
    )}
    
    </div>


  );
};

export default Contact;
