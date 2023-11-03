import React from 'react'
import '../../Styles/About.css';
import Footer1 from '../../Components/Footer/Footer1';
import AboutContent1 from './AboutContent1/AboutContent1';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import { FaCaretRight } from 'react-icons/fa';
import Articles from './Articles/Articles';
import Header from '../../Components/Header/Header';

const About = () => {
  return (
    <div id='about'>
      <Header/>
      <div className="about-main">
        <div className="about-header">
          <div className="about-header-overlay">
            <h1>
              <Typewriter options={{
                strings: [
                  'Revolutionizing Agriculture with TechFarming Solutions',
                  'Robotics embedded with Artificial Intelligence, Machine Learning, Internet of Things and many more'
                ],
                autoStart: true,
                loop: true,
              }}
              />
            </h1>
            <p>
              TechFarming offers cutting-edge technology and services to optimizes agriculture practices. Our innovation solutions empower farmers to increases productivity, reduces costs, and achieve sustainable growth.
            </p>
            <div className="links">
              <Link to='/#'>Discover</Link>
              <Link to='/#'>Sign Up <FaCaretRight/></Link>
            </div>
          </div>
        </div>
        <div className="about-contents">
          <div className="about-main-content">
            <AboutContent1 />
          </div>
          <div className="about-main-content">can</div>
          <div className="about-main-content">do</div>
          <div className="about-main-content">it</div>
          <div className="about-main-content">
            <Articles/>
          </div>
          <div className="about-main-content">can we?</div>
        </div>
      </div>
      <Footer1 />
    </div>
  )
}

export default About