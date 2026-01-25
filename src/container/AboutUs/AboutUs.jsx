import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
   

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Delight Swagata celebrates pure vegetarian Indian cuisine, rooted in tradition
and crafted with devotion. Every dish is prepared without onion & garlic,
preserving authentic satvik flavours passed down through generations.</p>
        
      </div>

<div className="about-divider"></div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Explore Our Legacy</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Founded in 1998, Delight Swagata has been serving 100% pure vegetarian,
satvik meals made with hand-picked spices, love, and respect for Indian tradition.</p>
       
      </div>
    </div>
  </div>
);

export default AboutUs;
