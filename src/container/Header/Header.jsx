import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <p className="p__cormorant">Taste The Real India</p>
      <h1 className="header__title">Delight Swagata</h1>
      <h2 className="header__subtitle">Authentic Indian Flavours</h2>
      <p className="header__note">( No Onion No Garlic )</p>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>
        Traditional recipes, aromatic spices and homely cooking — crafted by our master chefs.
      </p>
      <button type="button"
      className="custom__button"
      onClick={() =>
       document
        .getElementById("menu")
        .scrollIntoView({ behavior: "smooth" })
      }
      >Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="Indian Thali" className="hero-image"/>
    </div>
  </div>
);

export default Header;
