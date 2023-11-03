import './Empowerment.css'
import { useState, useEffect } from 'react'
import React, { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import Empower1 from '../../../Assets/Images/Empower1.jpg';
import Empower2 from '../../../Assets/Images/Empower2.jpg';
import Empower3 from '../../../Assets/Images/Empower3.jpg';
import Empower4 from '../../../Assets/Images/Empower4.jpg';
import Empower5 from '../../../Assets/Images/Empower5.jpg';
import Empower6 from '../../../Assets/Images/Empower6.jpg';
import Empower7 from '../../../Assets/Images/Empower7.jpg';
import Empower9 from '../../../Assets/Images/Empower9.jpg';
import Empower10 from '../../../Assets/Images/Empower10.jpg';
import Empower11 from '../../../Assets/Images/Empower11.jpg';
import Empower12 from '../../../Assets/Images/Empower12.jpg';
import { Link } from 'react-router-dom';
const Empowerment = () => {
    const [images] = useState([
        Empower1,
        Empower2,
        Empower3,
        Empower4,
        Empower5,
        Empower6,
        Empower7,
        Empower9,
        Empower10,
        Empower11,
        Empower12,
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
    const Improvements = [
        {
            percentage: '70',
            description: 'More in agriculture tech than the other then others e-commerce products',
        },
        {
            percentage: '50',
            description: 'Advanced Agriculture technological products and services',
        },
        {
            percentage: '80',
            description: 'More organic productions and usage of organic manure and organic way of treating pests, weed and, plant diseases',
        },
        {
            percentage: '20',
            description: 'Newly stated aquaponics and hydroponics garden with better cultivation and quality',
        },
    ];
    const [currentPercentages, setCurrentPercentages] = useState(Improvements.map(() => 0));
    const finalPercentages = Improvements.map((improvement) => parseInt(improvement.percentage, 10));
    useEffect(() => {
        const duration = 2000;
        const interval = 100;
        const steps = duration / interval;

        const incrementValues = () => {
            setCurrentPercentages((prevPercentages) => {
                return prevPercentages.map((prev, index) => {
                    const step = (finalPercentages[index] - prev) / steps;
                    return prev + step;
                });
            });
        };

        const timer = setInterval(incrementValues, interval);

        return () => {
            clearInterval(timer);
        };
    },);


    return (
        <div className='home-container-content-empowerment'>
            <div className="home-container-content-empowerment-left">
                <h2>Transforming Farming with TechFarming Solutions</h2>
                <p>
                    TechFarming offers a wide range of innovative solutions designed to revolutionize farming practices. With our ML based server and community forum, farmers and users can access expert advice, share data, and optimize crop management.
                </p>
                <ul>
                    {Improvements.map((improvement, index) => (
                        <li key={index}>
                            <p>{currentPercentages[index].toFixed(2)}%</p>
                            <p>{improvement.description}</p>
                        </li>
                    ))}
                </ul>
                <div className="home-container-content-empowerment-left-buttons">
                    <Link to='/#'>Discover more Solution<FaCaretRight /></Link>
                    <Link to='/#'>Book Services</Link>
                </div>
            </div>
            <div className="home-container-content-empowerment-right">
                <div className="image-slider">
                    <img src={images[currentImageIndex]} alt="Services in TechFarming" />
                    <div className="button-container">
                        <button onClick={prevSlide}><FaCaretLeft /></button>
                        <button onClick={nextSlide}><FaCaretRight /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Empowerment