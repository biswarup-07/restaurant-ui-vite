import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <div className="footer__headtext">
  <h1 className="headtext__cormorant">Contact Us</h1>
</div>

        <p className="p__opensans">12 MG Road, Kolkata, West Bengal 700001</p>
        <p className="p__opensans">+91 98765 43210</p>
        <p className="p__opensans">support@delightswagata.com</p>
      </div>

      <div className="app__footer-links_logo">
         <img src={images.logo} alt="Delight Swagata logo" />
        <p className="p__opensans">&quot;Taste the real India&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        
        <h1 className="headtext__cormorant">Working Hours</h1>
        <p className="p__opensans">Mon - Fri: 11:00 am - 11:00 pm</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 12:00 am</p>

        <a
          href="https://www.google.com/maps?q=12+MG+Road+Kolkata+West+Bengal+700001"
          target="_blank"
          rel="noopener noreferrer"
          className="visitus__btn-wrapper"
          >
          <button className="custom__button">Visit Us</button>
        </a>
      </div>
       
  


    </div>

    <div className="footer__copyright">
      <p className="p__opensans">© 2026 Delight Swagata. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
