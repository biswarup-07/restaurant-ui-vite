import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Starters</p>
        <div className="app__specialMenu_menu_items">
          {data.starters.map((starter, index) => (
            <MenuItem key={starter.title + index} title={starter.title} price={starter.price} tags={starter.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Main Course</p>
        <div className="app__specialMenu_menu_items">
          {data.mainCourses.map((mainCourse, index) => (
            <MenuItem key={mainCourse.title + index} title={mainCourse.title} price={mainCourse.price} tags={mainCourse.tags} />
          ))}
        </div>
      </div>
    </div>
  <a href="#menu">
    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">View More</button>
    </div>
  </a>
  </div>
);

export default SpecialMenu;
