import React from 'react'
import { FaCaretRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Innovative.css';
import CropAnalysis from '../../../Assets/Images/CropAnalysis.jpg';
import PestManagement from '../../../Assets/Images/PestManagement.jpg';
import SoilParameters from '../../../Assets/Images/SoilParameters.jpg';
import Hydroponics from '../../../Assets/Images/Hydroponics.jpg';
import Aquaponics from '../../../Assets/Images/Aquaponics.jpg';
import WeedControl from '../../../Assets/Images/WeedControl.jpg';
import Irrigation from '../../../Assets/Images/Irrigation.jpg';
import ECommerce from '../../../Assets/Images/ECommerce.jpg';
import Forum from '../../../Assets/Images/Forum.jpg';

const Innovative = () => {
    const Innovations = [
        {
            image: CropAnalysis,
            imageAlt: '',
            title: 'Crop Analysis Services',
            description: 'Our crop analysis services utilize advanced technology to assess the health and growth of crops, enabling farmers to identify potential issues and take proactive measures. Our data-driven approach helps you identify problems early, optimize nutrient management, and enhance overall crop performance.',
            link1: '',
            link1Text: 'Learn More',
            link2: '',
            link2Text: 'Book Service',
        },
        {
            image: PestManagement,
            imageAlt: '',
            title: 'Pest Management Solutions',
            description: 'We take a proactive approach to identify and manage pests, minimizing damage and ensuring bountiful yields. We offer personalized pest management solutions that leverage data-driven insights to effectively control pests and minimize crop damage.',
            link1: '',
            link1Text: 'Learn More',
            link2: '',
            link2Text: 'Book Service',
        },
        {
            image: SoilParameters,
            imageAlt: '',
            title: 'Soil Parameters Management Services',
            description: "Say goodbye to guesswork and hello to informed decisions that lead to healthier, more bountiful crops. Whether you're a seasoned farmer or just starting, our services help you achieve sustainable and thriving agriculture by tailoring your approach to your land's unique needs.",
            link1: '',
            link1Text: 'Learn More',
            link2: '',
            link2Text: 'Book Service',
        },
        {
            image: Hydroponics,
            imageAlt: '',
            title: 'Hydroponics Farming Solutions',
            description: 'Experience faster growth, higher yields, and the joy of pesticide-free produce. Dive into the world of soil-less farming with us, and watch your agricultural dreams take root and flourish like never before.',
            link1: '',
            link1Text: 'Learn More',
            link2: '',
            link2Text: 'Book Service',
        },
        {
            image: Aquaponics,
            imageAlt: '',
            title: 'Aquaponics Farming Solutions',
            description: 'We offer a harmonious blend of aquaculture and hydroponics, creating a closed-loop system where fish and plants thrive together. This environmentally-friendly method conserves water, reduces waste, and produces fresh, nutrient-rich produce.',
            link1: '',
            link1Text: 'Learn More',
            link2: '',
            link2Text: 'Book Service',
        },
        {
            image: WeedControl,
            imageAlt: '',
            title: 'Weeds Controlling Services',
            description: 'We harness the power of cutting-edge laser technology to efficiently and eco-friendly manage weeds in your fields. Say goodbye to labor-intensive weeding and harmful chemicals. Embrace a smarter and cleaner approach to weed control, ensuring healthier crops and higher yields.',
            link1: '',
            link1Text: 'Learn More',
            link2: '',
            link2Text: 'Book Service',
        },
        {
            image: Irrigation,
            imageAlt: '',
            title: 'Irrigation Management Solutions',
            description: 'We use cutting-edge technology and data-driven insights to maximize crop yields while minimizing water waste. Our precision scheduling, automated control, and real-time monitoring enable you to nurture your crops with efficiency.',
            link1: '',
            link1Text: 'Learn More',
            link2: '',
            link2Text: 'Book Service',
        },
        {
            image: ECommerce,
            imageAlt: '',
            title: 'Data Driven E-Commerce Services',
            description: 'Discover the future of agriculture with us, where data transforms into informed decisions, and innovation sprouts from every corner of your farm. Join us in redefining agriculture in the digital era, where your success is driven by data.',
            link1: '',
            link1Text: 'Learn More',
            link2: '',
            link2Text: 'Sign Up',
        },
        {
            image: Forum,
            imageAlt: '',
            title: 'Community Support and Forum',
            description: 'Join our Community and forum to connect with fellow farmers, share experiences, and access expert advice on crop diseases, pests, weed control, and soil management. Our platform fosters a sense of togetherness, where you can seek advice, discuss best practices, and find solutions to challenges. ',
            link1: '',
            link1Text: 'Learn More',
            link2: '',
            link2Text: 'Sign Up',
        },
    ];
    return (
        <div className='home-container-content-innovation'>
            <div className="home-container-content-innovation-top">
                <div className="home-container-content-innovation-left">
                    <h2>Transforming Agriculture and the way of Marketing Digitally (E-Commerce) with Advanced Solutions and Data-driven Decision</h2>
                </div>
                <div className="home-container-content-innovation-right">
                    <p>
                        At TechFarming we offer a comprehensive range of services to help farmers optimize their crop yield and manage pests, crops disease, weeds and soil parameters effectively. Our team of experts utilizes a cutting-edge technology, artificial intelligence(AI) and Machine Learning(ML) algorithms to provides accurate crops analysis and personalized pest management strategies. With our services and solutions, farmers can make prediction and early intervention, increase productivity and ensure the health of their crops.
                    </p>
                </div>
            </div>
            <div className="home-container-content-innovation-bottom">
                <ul className="innovation-list">
                    {Innovations.map((innovation, index) => (
                        <li key={index}>
                            <div className="innovation-image">
                                <img src={innovation.image} alt={innovation.imageAlt} />
                            </div>
                            <h3>{innovation.title}</h3>
                            <p>{innovation.description}</p>
                            <div className="innovation-links">
                                <Link to={innovation.link1}>{innovation.link1Text}</Link>
                                <Link to={innovation.link2}>{innovation.link2Text}<FaCaretRight/></Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Innovative