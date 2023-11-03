import React from 'react'
import './AboutContent.css';
import { Link } from 'react-router-dom';
import { FaCaretRight} from 'react-icons/fa'
import TechFarming from '../../../Assets/Images/Empower12.jpg';

const AboutContent1 = () => {
    const AboutRevolts = [
        {
            image:TechFarming,
            imageAlt:'Farm Management',
            title:'Efficient Farm Management',
            description:'Our platforms provides you with comprehensive solutions for every aspect of your farm, from planting to harvesting.',
        },
        {
            image:TechFarming,
            imageAlt:'Seamless Integration',
            title:'Seamless Integration',
            description:'TechFarming seamlessly integrates with your existing farm management systems, allowing for a smooth transition and minimal disruption.',
        },
        {
            image:TechFarming,
            imageAlt:'Real-Time Data Insights',
            title:'Real-Time Data Insights',
            description:'Gain valuable insights into your farming performance with our advanced analytics, recommendation, early alerting and reporting features.',
        },
    ]
  return (
    <div className='about-main-content-revolt'>
        <div className="about-main-content--revolt-top">
            <div className="about-main-content--revolt-top-left">
                <h2>Streamline Your Farming Process with TechFarming</h2>
            </div>
            <div className="about-main-content--revolt-top-right">
                <p>
                    TechFarming is a cutting  edge agriculture e-commerce platform that simplifies and enhances the the way you mange your farm. with innovative tools and services, you can optimize your operations, increase productivity, and maximize your profits.
                </p>
            </div>
        </div>
        <div className="about-main-content--revolt-center">
            <ul>
                {AboutRevolts.map((aboutRevolt, index) => (
                    <li key={index}>
                        <img src={aboutRevolt.image} alt={aboutRevolt.imageAlt} />
                        <h3>{aboutRevolt.title}</h3>
                        <p>{aboutRevolt.description}</p>
                    </li>
                ))}
            </ul>
        </div>
        <div className="about-main-content--revolt-bottom">
            <Link to='/#'>Learn More</Link>
            <Link to='/#'>Book Services <FaCaretRight/></Link>
        </div>
    </div>
  )
}

export default AboutContent1