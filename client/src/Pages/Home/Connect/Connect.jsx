import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import './Connect.css';
import TechFarming from '../../../Assets/Images/TechFarming.png';
import ConnectFarmer from '../../../Assets/Images/ConnectFarmer.png';
import OptimizeFarming from '../../../Assets/Images/OptimizeFarming.png';
import E_commerce from '../../../Assets/Images/e_commerce.png';
import E_commerce1 from '../../../Assets/Images/e_commerce1.png';
import E_commerce2 from '../../../Assets/Images/e_commerce2.png';
import E_commerce3 from '../../../Assets/Images/e_commerce3.png';
import E_commerce4 from '../../../Assets/Images/e_commerce4.png';
import E_commerce5 from '../../../Assets/Images/e_commerce5.png';
import E_commerce6 from '../../../Assets/Images/e_commerce6.png';
import E_commerce7 from '../../../Assets/Images/e_commerce7.png';
import E_commerce8 from '../../../Assets/Images/e_commerce8.png';

const Connect = () => {
    const [images] = useState([
        E_commerce,
        E_commerce1,
        E_commerce2,
        E_commerce3,
        E_commerce4,
        E_commerce5,
        E_commerce6,
        E_commerce7,
        E_commerce8
    ]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const nextSlide = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 10000);
        return () => clearInterval(interval);
    },);
    const Connections = [
        {
            icon: TechFarming,
            title: 'Unlock the true potential & power of TechFarming',
            description: 'Experience the benefits of our ML-based Decision generating Server Hub, expert advice and data driven solutions.',
            link1: '',
            link1Text: 'Learn More',
            link2: '',
            link2Text: 'Sign Up',
        },
        {
            icon: ConnectFarmer,
            title: 'Connect with a Community of Farmers and Our Datasets',
            description: 'Join our Forum and share photos of infected crops, pests, and other soil data to get expert advice and and access to our datasets.',
            link1: '',
            link1Text: 'Join Now',
            link2: '',
            link2Text: 'Explore',
        },
        {
            icon: OptimizeFarming,
            title: 'Optimize Your Farming Practices with Data',
            description: 'Leverage our data-driven solutions to make informed decisions and maximize your farming productivity.',
            link1: '',
            link1Text: 'Discover',
            link2: '',
            link2Text: 'Get Started',
        },
    ];
    return (
        <div className="home-container-content-connect">
            <div className="home-container-content-connect-top">
                <div className="home-container-content-connect-left">
                    <h2>Join Our Community and Discuss Crop Issues</h2>
                    <p>TechFarming's community forum is the the perfect place for farmers and experts to come together and share their knowledge and experiences. Join us today and be a part of the conversation!</p>
                    <ul>
                        <li><Link to='share-crop-issues'>Share Crop Issues</Link></li>
                        <li><Link to='share-crop-issues'>Share Crop Issues</Link></li>
                        <li><Link to='share-crop-issues'>Share Crop Issues</Link></li>
                    </ul>
                    <div className="links-to-join">
                        <Link to='join-community'>Join</Link>
                        <Link to='join-community-learn-more'>Learn More <FaCaretRight /></Link>
                    </div>
                </div>
                <div className="home-container-content-connect-right">
                    <div className="image-slider">
                        <img src={images[currentImageIndex]} alt="e-commerce-pictures" />
                        <div className="button-container">
                            <button onClick={prevSlide}><FaCaretLeft/></button>
                            <button onClick={nextSlide}><FaCaretRight/></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="line"></div>
            <div className="home-container-content-connect-bottom">
                <ul className="community-links">
                    {Connections.map((connection, index) => (
                        <li key={index}>
                            <div className="icons">
                                <img src={connection.icon} alt="" />
                            </div>
                            <h3>{connection.title}</h3>
                            <div className="line"></div>
                            <p>{connection.description}</p>
                            <div className="joining-buttons">
                                <Link to={connection.link1}>{connection.link1Text}</Link>
                                <Link to={connection.link2}>{connection.link2Text}<FaCaretRight /></Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default Connect;