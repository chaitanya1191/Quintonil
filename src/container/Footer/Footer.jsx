import React from 'react';
import {FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import {FooterOverlay, Newsletter } from '../../components';
import {images} from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className = "app__footer section__padding">
    <FooterOverlay/>
    <Newsletter></Newsletter>
    <div className = "app__footer-links">
      <div className = "app__footer-links_contact">
        <h1 className = "app__footer-headtext">Contact</h1>
        <p className = "p__opensans"> 9 W 53rd St, Mexico City, Mexico</p>
        <p className = "p__opensans"> +1 212-344-1230</p>
        <p className = "p__opensans"> +1 212-344-1231</p>
      </div>
      <div className = "app__footer-links_logo">
        <img src = {images.gericht} alt = "quintonil"></img>
        <p className = "p__opensans">The best way to find yourself is to lose yourself in the service of others.</p>
        <img src = {images.spoon} alt = "spoon" className = "spoon__img" style = {{marginTop: 15}}></img>
        <div className = "app__footer-links_icons">
          <FiFacebook></FiFacebook>
          <FiTwitter></FiTwitter>
          <FiInstagram></FiInstagram>
        </div>
      </div>
      <div className = "app__footer-links_work">
        <h1 className = "app__footer-headtext">Working Hours</h1>
        <p className = "p__opensans"> Monday-Friday : </p>
        <p className = "p__opensans"> 8:00 AM - 8:00 PM</p>
        <p className = "p__opensans"> Saturday-Sunday : </p>
        <p className = "p__opensans"> 10:00 AM - 10:00 PM</p>
      </div>
      <div className="app__footer-links_work">

      </div>
    </div>
    <div className = "footer__copyright">
      <p className = "p__opensans">2023 Quintonil. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
