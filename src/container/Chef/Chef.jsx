import React from 'react';
import {images} from '../../constants';
import {SubHeading} from '../../components';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src = {images.chef} alt = "chef"></img>  
    </div>
    <div className = "app__wrapper_info">
      <SubHeading title="Chef's Word"></SubHeading>
      <h1 className = "headtext__cormorant">What we believe in </h1>
      <div className="app__chef-content">
        <div className = "app__chef-content_quote">
          <img src = {images.quote} alt = "quote"/>
          <p className = "p__opensans">At Quintonil, we believe in the power of culinary storytelling, where each dish represents a chapter of Mexico's rich gastronomic heritage. We believe in honoring local traditions by sourcing fresh, sustainable ingredients from our dedicated network of farmers and artisans. Our belief in innovation drives us to push boundaries, combining traditional techniques with contemporary flavors to create unforgettable dining experiences.
          </p>
        </div>
      </div>
      <div className = "app__chef-sign">
        <p className = "p__opensans" >Kevin Luo</p>
        <p className = "p__opensans"> Chef and Founder </p>
        <img src = {images.sign} alt = "sign"></img>
      </div>
    </div>
  </div>
);

export default Chef;
