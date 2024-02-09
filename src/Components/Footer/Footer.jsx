import React from 'react'
import './Footer.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook } from "@fortawesome/free-solid-svg-icons";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
        <div className="catalog-footer">
        <div className="catalog-links-icons">
        <div className="Catalogs">
            <span className='footer-headings'>About Catalog-Z</span>
            <p className='catalog-para'>Catalog-Z is free <span className='bootstrap-5'>Bootstrap 5</span> Alpha 2 HTML Template for video and photo websites. You can freely use this TemplateMo layout for a front-end integration with any kind of CMS website.</p>
        </div>
        <div className="links-icons">
        <div className="links">
            <span className='links-title'>Our Links</span>
            <div className='footer-links'>
            <li>Advertise</li>
            <li>Support</li>
            <li>Our Company</li>
            <li>Contact</li>
            </div>
            
        </div>
        <div className="icons-privacy-policy">
            <div className="icons">
            <FaFacebook className='icons-content' />
            <FaTwitter className='icons-content' />
            <FaInstagramSquare className='icons-content' />
            <FaPinterest className='icons-content' />
            </div>
            <div className="privacy-policy">
                <span className='privacy' >Terms of Use</span>
                <span className='privacy' >Privacy Policy</span>
            </div>
        </div>
        </div>
         
        </div>
        
        <div className="footer-last-para">
            <span>Copyright 2020 Catalog-Z Company. All rights reserved.</span>
            <span>Designed by TemplateMo</span>
        </div>
        </div>
        
    </div>
  )
}

export default Footer