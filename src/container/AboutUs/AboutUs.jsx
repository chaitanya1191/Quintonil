import React from 'react';

import { images } from '../../constants/';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id = "about">
    <div className="app__aboutus-overlay flex__center">
      <image src = {images.chef} alt = "g letter" ></image>
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant"> About Us</h1>
          <image src = {images.spoon} alt = "spoon" className="spoon__img"></image>
          <p className="p__opensans"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores magnam corrupti porro itaque? Quae ullam, tenetur enim ipsum quasi doloribus temporibus exercitationem. Ad aspernatur magni dolore aperiam numquam necessitatibus eligendi.</p>
          <button type = "button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;