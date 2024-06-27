import React from 'react'
import './Footer.css'
import f_logo from './Sardarji1.png'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className='main__footer'>
        <div className='footer__name'>
            <div className='footer__logo'>
                <img src={f_logo} alt='something went wrong'></img>
            </div>
            <h1>Aman Sidhu</h1>
        </div>
        <div className='links'>
            <div className='main__links'>
                <li><h3>Company</h3></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Contact</a></li>
                <li><a href='#'>List with Us</a></li>
                <li><a href='#'>Site Map</a></li>
                <li><a href='#'>Support Center</a></li>
                <li><a href='#'>Terms Conditions</a></li>
                <li><a href='#'>Privacy Policy</a></li>

            </div>
            <div className='social__links'>
                <h3>Social Links</h3>
                <div className='combine'>
                <div className='social__icons'>
                    <div className='icon'><FaFacebookF /></div>
                    <div className='icon'><FaTwitter /></div>
                    <div className='icon'><FaInstagram /></div>
                    <div className='icon'><FaWhatsapp /></div>
                    <div className='icon'><IoLogoYoutube /></div>
                </div>
                <div className='list'>
                <li><a href='https://www.facebook.com/'>Facebook</a></li>
                <li><a href='https://x.com/'>Twitter</a></li>
                <li><a href='https://www.instagram.com/'>Instagram</a></li>
                <li><a href='https://www.whatsapp.com/'>WhatsApp</a></li>
                <li><a href='https://www.youtube.com/'>YouTube</a></li>
                </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer;
