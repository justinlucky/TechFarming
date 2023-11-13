import React, { useState } from 'react'
import './OurGrowth.css'
import { FaCube, FaFacebook, FaLinkedinIn, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const OurGrowth = () => {

    const toggleDescription = (index) => {
        const newShowDescriptions = [...showDescription];
        newShowDescriptions[index] = !newShowDescriptions[index];
        setShowDescription(newShowDescriptions);
    }

    const achievements = [
        {
            year: '22-Dec-2024',
            title: 'Beginning the mark of TechFarming',
            description: 'At TechFarming, we envision a future where agriculture seamlessly integrates with technology, empowering farmers and transforming the landscape of sustainable farming.',
        },
        {
            year: 'Dec-2024',
            title: 'Added ML-Server',
            description: 'Where are you?',
        },
        {
            year: 'Dec-2024',
            title: 'Added ML-Server',
            description: 'Where are you?',
        },
        {
            year: 'Dec-2024',
            title: 'Added ML-Server',
            description: 'Where are you?',
        },
        {
            year: 'Dec-2024',
            title: 'Added ML-Server',
            description: 'Where are you?',
        }
    ];

    const [showDescription, setShowDescription] = useState(Array(achievements.length).fill(false));
    return (
        <div className='about-main-content-growth'>
            <div className="about-main-content-growth-left">
                <h2>Our Journey: A Rich History of Innovation</h2>
                <p>
                    TechFarming's story is one of innovation, determination, and a deep-rooted passion for transforming agriculture. Since our inception, we've been committed to pioneering modern farming techniques, harnessing technology, and cultivating change in the world of agriculture.
                </p>
                <div className="join-social-accounts">
                    <Link to='/#'><FaYoutube/></Link>
                    <Link to='/#'><FaLinkedinIn/></Link>
                    <Link to='/#'><FaFacebook/></Link>
                    <Link to='/#'><FaWhatsapp/></Link>
                </div>
            </div>
            <div className="about-main-content-growth-right">
                <ul>
                    {achievements.map((achievement, index) => (
                        <li key={index}>
                            <div className="about-main-content-growth-right-icon">
                                <div className="about-main-content-growth-right-icon-round">
                                    <button onClick={ () => toggleDescription(index)}><FaCube /></button>
                                </div>
                                <div className="about-main-content-growth-right-icon-line"></div>
                            </div>
                            <div className="about-main-content-growth-right-content">
                                <p>{achievement.year}</p>
                                <h3>{achievement.title}</h3>
                                {showDescription[index] && (
                                    <p>{achievement.description}</p>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default OurGrowth