import React from 'react'
import './SocialMediaAside.css'
import {FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SocialMediaAside = () => {
  return (
    <div id='social-account-aside'>
        <ul>
          <li>
            <Link to=''><FaWhatsapp/></Link>
          </li>
          <li>
            <Link to=''><FaInstagram/></Link>
          </li>
          <li>
            <Link to=''><FaLinkedin/></Link>
          </li>
          <li>
            <Link to=''><FaYoutube/></Link>
          </li>
        </ul>
    </div>
  )
}

export default SocialMediaAside