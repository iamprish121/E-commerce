import React from 'react'
import './Footer.css'
import f_logo from '../Assests/logo_big.png'
import i_icon from '../Assests/instagram_icon.png'
import p_icon from '../Assests/pintester_icon.png'
import w_icon from '../Assests/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className="footer">
       <div className="footer-logo">
        <img src={f_logo} alt="" />
        <p>SHOPPERS STOP</p>
        </div>
        <ul className="footer-links">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
          </ul> 
          <div className="social-icon">
            <div className="footer-icon-container">
              <img src={i_icon} alt="" />
            </div>

            <div className="footer-icon-container">
              <img src={p_icon} alt="" />
            </div>
            <div className="footer-icon-container">
              <img src={w_icon} alt="" />
            </div>
          </div>
          <div className="footer-copyright">
            <hr />
            <p>Copyright @2024-All Right Reserved</p>
          </div>
    </div>
  )
}

export default Footer
