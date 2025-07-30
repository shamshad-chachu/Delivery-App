import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className='footer-content-left'>
          {/* <img src={assets.logo} alt="" /> */}
          <h1 className='footer-title'>Foodster.</h1>
          <p>At Foodster, we bring delicious meals from your favorite restaurents straight to your door. Whether you're craving something spicy, sweet, or healthy we've got you covered. Fast delivery, fresh ingredients, and flavour you'll love!</p>
            <div className="footer-social-icons">
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className='footer-content-center'>
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className='footer-content-right'>
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-222-333-4440</li>
            <li>Foodster@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright &copy; 2024 Foodster. All rights reserved.</p>
    </div>
  )
}

export default Footer