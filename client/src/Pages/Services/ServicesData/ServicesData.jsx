import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaRupeeSign } from 'react-icons/fa';
import './ServicesData.css';
import Nice from '../../../Assets/Images/Empower1.jpg';

const ServicesData = () => {
    const servicesData = [
        {
            "title": "Pest Scanning Service",
            "images": [
                {
                    image: Nice,
                    imageAlt: 'Pest Scanning',
                },
            ],
            "description": "Our Pest Scanning Service helps you identify and eliminate pests in your fields.",
            "cost": [
                {
                    min: 2000,
                    max: 5000,
                },
            ],
            "offer": "20% off this season!",
            "bookLink": "/book/pest-scanning",
            "learnMoreLink": "/learn-more/pest-scanning",
            "link1Text": "Book Now",
            "link2Text": "Learn More",
        },
        {
            "title": "Soil Parameter Monitoring and Management",
            "images": [
                {
                    image: Nice,
                    imageAlt: "Soil Parameter Monitoring and Management",
                },
            ],
            "description": "Optimize your crop yields with our Soil Parameter Monitoring and Management service.",
            "cost": [
                {
                    min: 2000,
                    max: 5000,
                },
            ],
            "offer": 'Most Popular',
            "bookLink": "/book/soil-management",
            "learnMoreLink": "/learn-more/soil-management",
            "link1Text": "Book Now",
            "link2Text": "Learn More",
        },
        {
            "title": "Laser-Based Weed Control System",
            "images": [
                {
                    image:Nice,
                    imageAlt: 'Weed Control System',
                },
            ],
            "description": "Say goodbye to weeds with our Laser-Based Weed Control System.",
            "cost": [
                {
                    min: 2000,
                    max: 5000,
                },
            ],
            "offer": "Book one, get one free!",
            "bookLink": "/book/weed-control",
            "learnMoreLink": "/learn-more/weed-control",
            "link1Text": "Book Now",
            "link2Text": "Learn More",
        },
        {
            "title": "Pest and Plant Disease Detection and Elimination",
            "images": [
                {
                    image: Nice,
                    imageAlt: 'Pest and Plant Disease Detection and Elimination',
                },
            ],
            "description": "Protect your crops from diseases and pests with our advanced detection and elimination service.",
            "cost": [
                {
                    min: 2000,
                    max: 5000,
                },
            ],
            "offer": null,
            "bookLink": "/book/pest-disease",
            "learnMoreLink": "/learn-more/pest-disease",
            "link1Text": "Book Now",
            "link2Text": "Learn More",
        },
        {
            "title": "Hydroponics and Aquaponics Vegetation Management",
            "images": [
                {
                    image: Nice,
                    imageAlt:'Hydroponic and aquaphonic Vegetation Management',
                },
            ],
            "description": "Manage your hydroponic and aquaphonic crops for optimal growth and yield.",
            "cost": [
                {
                    min: 2000,
                    max: 5000,
                },
            ],
            "offer": "10% off for new clients!",
            "bookLink": "/book/hydro-aquaponics",
            "learnMoreLink": "/learn-more/hydro-aquaponics",
            "link1Text": "Book Now",
            "link2Text": "Learn More",
        },
        {
            "title": "Irrigation Management System",
            "images": [
                {
                    image: Nice,
                    imageAlt: 'Irrigation Management System',
                },
            ],
            "description": "Efficiently manage your irrigation systems with our specialized service.",
            "cost": [
                {
                    min: 4000,
                    max: 10000,
                },
            ],
            "offer": "50% Free for new clients!",
            "bookLink": "/book/irrigation-management",
            "learnMoreLink": "/learn-more/irrigation-management",
            "link1Text": "Book Now",
            "link2Text": "Learn More",
        },
        {
            "title": "AI and Machine Services",
            "images": [
                {
                    image: Nice,
                    imageAlt: 'AI & ML Services',
                },
            ],
            "description": "Managing agricultural crops health and soil using computer vision and machine learning algorithms with sensors data.",
            "cost": [
                {
                    min: 5000,
                    max: 12000,
                },
            ],
            "offer": null,
            "bookLink": "/book/ai-ml-services",
            "learnMoreLink": "/learn-more/ai-ml-services",
            "link1Text": "Book Now",
            "link2Text": "Learn More",
        },
        {
            "title": "Student Internship and Learning Services",
            "images": [
                {
                    image: Nice,
                    imageAlt: 'AI & ML Services',
                },
            ],
            "description": "Student Internship and Learning Services are provide technologically and biologically",
            "cost": [
                {
                    min: 1000,
                    max: 5000,
                },
            ],
            "offer": "90% Scholarship",
            "bookLink": "/book/internship",
            "learnMoreLink": "/learn-more/internship",
            "link1Text": "Book Now",
            "link2Text": "Learn More",
        }
    ];
    const [searchKeyword, setSearchKeyword] = useState('');
    const filteredServices = servicesData.filter((service) =>
        service.title.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    return (
        <div className="services-content-list">
            <div className="services-content-list-top">
                <h2><span>Tech</span><span>Farming</span></h2>
                <input
                    type="text"
                    placeholder="Search for services"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                />
            </div>
            <div className="services-content-list-center">
                <ul>
                    {filteredServices.length > 0 ? (
                        filteredServices.map((service, index) => (
                            <li key={index}>
                                <img src={service.images[0].image} alt={service.images[0].imageAlt} />
                                <h3>{service.title}</h3>
                                <p className='desc'>{service.description}</p>
                                <p className='cost'>
                                    Cost: <FaRupeeSign />
                                    <span>{service.cost[0].min}</span> - <span><FaRupeeSign />{service.cost[0].max}</span>
                                </p>
                                {service.offer ? <p className='offer'> {service.offer}</p> : null}
                                <div className="links">
                                    <Link to={service.bookLink}>{service.link1Text}</Link>
                                    <Link to={service.learnMoreLink}>{service.link2Text}</Link>
                                </div>
                            </li>
                        ))
                    ) : (
                        <p>Sorry! No services found for the keyword: {searchKeyword}</p>
                    )}
                </ul>
            </div>
            <div className="services-content-list-bottom"></div>
        </div>
    )
}

export default ServicesData