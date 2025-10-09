import React from 'react'
import './Footer.css';
import { assets } from '../assets-3/assets';
const Footer = () => {
  return (
    <div>
<footer class="footer">
  <div class="footer-left">
    <img src={assets.logo} alt="logo" class="footer-logo" />
    <p class="footer-desc">
      QuickShow is a leading platform providing the latest movies and entertainment content. Stay connected with us through our apps available on Google Play and App Store.
    </p>
    <div class="footer-apps">
      <img src={assets.googlePlay} alt="Google Play" />
      <img src={assets.appStore} alt="App Store" />
    </div>
  </div>

  <div class="footer-right">
    <div class="footer-company">
      <h4>Company</h4>
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>
        <li>Privacy policy</li>
      </ul>
    </div>
    <div class="footer-contact">
      <h4>Get in touch</h4>
      <p>9821000000</p>
      <p>QuickShow@gmail.com</p>
    </div>
  
  </div>
    <div class="footer-bottom">
    <p>Copyright 2025 © QuickShow. All Right Reserved.</p>
  </div>
</footer>


    </div>
  )
}

export default Footer
