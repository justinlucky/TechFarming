import React from 'react'
import { Link } from 'react-router-dom'
import './HomeContact.css'
import { FaCaretRight, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const HomeContact = () => {
    const ContactDetails = [
        {
            icon:<FaEnvelope/>,
            title:'Email',
            description:'Contact us on this mail',
            link:'',
            linkText:'lungchuingamriammei@gamil.com',
        },
        {
            icon:<FaPhoneAlt/>,
            title:'Phone',
            description:'Contact us on this phone.no',
            link:'',
            linkText:'+91-9676350660',
        },
        {
            icon:<FaMapMarkerAlt/>,
            title:'Location',
            description:'H.no:7-6/2, CGC, Ganesh Nagar, Uppal, Hyderabad.',
            link:'https://maps.app.goo.gl/FiKYvhimVwbVLJMU7',
            linkText:'Get Location',
        },
    ];
    return (
        <div className='home-container-content-contact'>
            <div className="home-container-content-contact-top">
                <h2>Contact TechFarming</h2>
                <p>Have a question or <Link to='/#'>assistance</Link>? Get in touch with us!</p>
            </div>
            <div className="home-container-content-contact-bottom">
                <div className="home-container-content-contact-bottom-left">
                    <ul>
                        {ContactDetails.map((contactDetail, index) => (
                            <li key={index}>
                                {contactDetail.icon}
                                <h4>{contactDetail.title}</h4>
                                <p>{contactDetail.description}</p>
                                <Link to={contactDetail.link}>{contactDetail.linkText}<FaCaretRight/></Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="home-container-content-contact-bottom-right">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.2702454972837!2d78.59668987593373!3d17.3988137834903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9eeec0000001%3A0xf5cd338a58e28f7a!2sChild%20Guidance%20Centre-Special%20School%20for%20Intellectual%20disability!5e0!3m2!1sen!2sin!4v1698670936931!5m2!1sen!2sin" title='TechFarming Location'></iframe>
                </div>
            </div>
        </div>
    )
}

export default HomeContact