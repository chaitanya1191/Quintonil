import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id = "about">
    <div className="app__aboutus-overlay flex__center">
      <img src = {images.G} alt = "g letter" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src = {images.spoon} alt = "about_spoon" className="spoon__img" />
          <p className="p__opensans"> Step inside our elegantly designed dining space, where the warm ambiance and welcoming atmosphere create the perfect setting for a memorable culinary experience. Whether you're joining us for a romantic dinner, a family celebration, or a business gathering, our attentive staff is here to ensure your every need is met.</p>
          <button type="button" className="custom__button">Know More</button>
      </div>
      <div className="app__aboutus-content_knife flex__center">
          <img src = {images.knife} alt = "about_knife"></img>
      </div>
      <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src = {images.spoon} alt = "about_spoon" className="spoon__img" />
          <p className="p__opensans"> Quintonil, established in 1978, has a rich history that reflects the evolution of Mexican cuisine. It was founded by Chef Kevin Luo, whose culinary prowess and passion for Mexican flavors propelled the restaurant to great heights. From its humble beginnings as a small eatery, Quintonil quickly gained recognition for its innovative approach to traditional dishes. Throughout the years, it has become a beacon of culinary excellence, drawing both locals and international visitors seeking an authentic Mexican dining experience.</p>
          <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
