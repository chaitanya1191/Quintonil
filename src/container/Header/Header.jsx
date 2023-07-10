import React from 'react';
import { images } from '../../constants';
import {SubHeading} from '../../components';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id = "home">
    <div className="app__wrapper_info">
      <SubHeading title = "Chase the new flavour"></SubHeading>
      <h1 className = "app_header-h1"> The Key to fine Dining </h1>
      <p className = "p__opensans" style = {{margin : '2rem 0'}}> Welcome to Quintonil, where culinary artistry meets natural flavors. Indulge in our vibrant menu inspired by the rich Mexican heritage, crafted with locally sourced ingredients. Experience a symphony of taste and elegance in every dish, complemented by our warm and inviting ambiance.</p>
      <button type = "button" className='custom__button'>Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src = {images.welcome} alt = "header img"/>

    </div>
  </div>
);

export default Header;
