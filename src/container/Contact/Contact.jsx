import React from 'react';
import './Contact.css';
import contact from '../../assets/contact.png';

const Contact = () => {
  return (
    <div className="app__contact section__padding" id="contact">
      <h1 className="headtext__cormorant">Contact Us</h1>

      <div className="contact__content">
        <form className="contact__form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="tel" placeholder="Phone Number" />
          <textarea rows="4" placeholder="Your Message"></textarea>

          <button type="submit" className="custom__button">
            Send Message
          </button>
        </form>

        <div className="contact__image">
          <img src={contact} alt="contact" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
