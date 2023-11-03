import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import './OurTeam.css';

const OurTeam = () => {
    const OurTeams = [
        {
            image: '',
            name: 'Siripaka Rakesh',
            job: 'Chief Financial Officer(CFO)',
            description: 'Great Personality',
            socialLinks: {
                linkedin: '',
                twitter: '',
                facebook: '',
            },
        },
        {
            image: '',
            name: 'Lungchuingam Riammei',
            job: 'Dust Bin Collector',
            description: 'Idiot',
            socialLinks: {
                linkedin: '',
                twitter: '',
                facebook: '',
            },
        },
        {
            image: '',
            name: 'Macha Uday Sagar',
            job: 'Chief Management Officer(CMO)',
            description: 'Nice Employee',
            socialLinks: {
                linkedin: '',
                twitter: '',
                facebook: '',
            },
        },
        {
            image: '',
            name: 'Siripaka Rakesh',
            job: 'Chief Financial Officer(CFO)',
            description: 'Great Personality',
            socialLinks: {
                linkedin: '',
                twitter: '',
                facebook: '',
            },
        },
        {
            image: '',
            name: 'Lungchuingam Riammei',
            job: 'Dust Bin Collector',
            description: 'Idiot',
            socialLinks: {
                linkedin: '',
                twitter: '',
                facebook: '',
            },
        },
        {
            image: '',
            name: 'Macha Uday Sagar',
            job: 'Chief Management Officer(CMO)',
            description: 'Nice Employee',
            socialLinks: {
                linkedin: '',
                twitter: '',
                facebook: '',
            },
        },
    ];
    return (
        <div className='home-container-content-team'>
            <div className="home-container-content-team-top">
                <h2>Our Team</h2>
                <p>

                    Welcome to the dynamic and innovative team behind "TechFarming," the e-commerce website at the forefront of revolutionizing agriculture. TechFarming is not just a platform; it's a vision to empower farmers and agricultural enthusiasts with cutting-edge technologies. Our dedicated team combines the expertise of agriculture and technology, working hand in hand to bring a new era of efficiency and sustainability to farming. With a deep understanding of the challenges faced by modern agriculture and a passion for innovation, we are committed to providing a seamless experience for farmers, connecting them with advanced tools, knowledge, and e-commerce solutions. At TechFarming, we are driven by the mission to transform agriculture into a smarter, data-driven, and accessible field, all while supporting the hardworking individuals who feed our world. Join us on this exciting journey toward a brighter, more connected future for farming.</p>
            </div>
            <div className="home-container-content-team-center">
                <ul className='team-list'>
                    {OurTeams.map((team, index) => (
                        <li key={index} className='list'>
                            <img src={team.image} alt="" />
                            <h4>{team.name}</h4>
                            <p>{team.job}</p>
                            <p>{team.description}</p>
                            <ul>
                                <li>
                                    <Link to={team.socialLinks.linkedin}><FaLinkedin /></Link>
                                    <Link to={team.socialLinks.twitter}><FaTwitter /></Link>
                                    <Link to={team.socialLinks.facebook}><FaFacebook /></Link>
                                </li>
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="home-container-content-team-bottom">
                <h3>We're hiring!</h3>
                <p>
                    Join us in shaping the future and be a part of a team that's dedicated to making a positive impact. Explore our open positions and embark on a rewarding career with us. Your next adventure awaits!
                </p>
                <Link to='/#hiring'>Open Positions</Link>
            </div>
        </div>
    )
}

export default OurTeam