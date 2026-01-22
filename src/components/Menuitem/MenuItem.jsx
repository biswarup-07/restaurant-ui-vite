import React from 'react';

import './MenuItem.css';
import { data } from '../../constants';

const MenuItem = ({ title, price, tags, img }) => (

<div className="app__menuitem">

  <div className="app__menuitem-img">
    <img src={img} alt={title} />
  </div>
  
   <div className="app__menuitem-content">
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      </div>

      <div className="app__menuitem-dash" />
      <div className="app__menuitem-price">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>

    <div className="app__menuitem-sub">
      <p className="p__opensans" style={{ color: '#AAAAAA' }}>{tags}</p>
    </div>
  </div>
</div>
);

export default MenuItem;
