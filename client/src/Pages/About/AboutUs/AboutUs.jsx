import React from 'react'
import './AboutUs.css';
import { Link } from 'react-router-dom';
import { FaCaretRight } from 'react-icons/fa';

const AboutUs = () => {
    const images = [
        {
            image: '',
            imageAlt: '',
        },
        {
            image: '',
            imageAlt: '',
        },
        {
            image: '',
            imageAlt: '',
        },
        {
            image: '',
            imageAlt: '',
        },
        {
            image: '',
            imageAlt: '',
        },
        {
            image: '',
            imageAlt: '',
        },
    ];

    return (
        <div className='about-main-content-top'>
            <div className="about-main-content-top-left">
                <div className="images">
                    {images.map((image, i) => (
                        <img src={image.image} alt={image.imageAlt} key={i} />
                    ))}
                </div>
            </div>
            <div className="about-main-content-top-right">
                <h4>About Us</h4>
                <h2>Revolutionizing Agriculture with Technology</h2>
                <p>
                    TechFarming is a platform that brings together farmers and sellers to revolutionize agriculture through technology. Our e-commerce website provides a forum for expert farmers and our ML-based servers to discuss experiences and share information based on real-time field data. As a result, we offer the latest technology like AI, ML, laser weed removal, and soil parameter measurement, to name a few.
                </p>
                <Link to='/#'>Know More <FaCaretRight/></Link>
            </div>
        </div>
    )
};

export default AboutUs