import React, { useState } from 'react';
import './AboutNav.css';
import './Intermediate.css';
import { Link } from 'react-router-dom'

const AboutNav = () => {
    const contentComponents = [
        {
            title: "Ethics and Policies",
            content: (
                <div className='about-main-content-nav-main-content-aside-topic'>
                    <div className="about-main-content-nav-main-content-aside-topic-top">
                        <img src="" alt="TechFarming" />
                    </div>
                    <div className="about-main-content-nav-main-content-aside-topic-center">
                        <div className="about-main-content-nav-main-content-aside-topic-center-left">
                            <h3>Overview</h3>
                            <p>
                                At TechFarming, we believe that trust is the cornerstone of any successful relationship. Our commitment to ethical conduct, transparency, and the protection of your rights is at the core of everything we do. This "Ethics and Policies" page is designed to provide you with a comprehensive understanding of the values and guidelines that guide our business operations.
                            </p>
                            <h3>Our Commitment to Ethics</h3>
                            <p>
                                We hold ourselves to the highest ethical standards. This commitment encompasses not only how we conduct our business but also how we engage with our customers, partners, and stakeholders. Our ethical principles are centered on honesty, fairness, and respect, ensuring that you can confidently shop with us, knowing that your rights are protected.
                            </p>
                            <h3>Privacy Matters</h3>
                            <p>
                                Your privacy is of paramount importance to us. Our Privacy Policy outlines how we collect, use, and safeguard your personal information. We are dedicated to securing your data and maintaining the confidentiality and security of your information when you interact with our services.
                            </p>
                            <p>
                                As part of our commitment to transparency, we have provided a video overview and image gallery to give you insights into our business, processes, and the quality of our products. Explore these visual resources to learn more about us. <Link to='/#'>here</Link>
                            </p>
                            <p>
                                Thank you for visiting our "Ethics and Policies" page. If you have any questions, concerns, or require further assistance, please don't hesitate to <Link to='/contact-us'>Contact Us</Link>. Your trust in us is deeply valued, and we are here to ensure your experience with <Link to='/home'>TechFarming</Link> is a positive one.
                            </p>
                        </div>
                        <div className="about-main-content-nav-main-content-aside-topic-center-right">
                            <div className="about-main-content-nav-main-content-aside-topic-center-right-images">
                                <img src="" alt="TechFarming Images" />
                            </div>
                        </div>
                    </div>
                    <div className="about-main-content-nav-main-content-aside-topic-bottom"></div>
                </div>
            ),
        },
        {
            title: "Culture",
            content: (
                <div className='about-main-content-nav-main-content-aside-topic'>
                    <div className="about-main-content-nav-main-content-aside-topic-top">
                        <img src="" alt="TechFarming" />
                    </div>
                    <div className="about-main-content-nav-main-content-aside-topic-center">
                        <div className="about-main-content-nav-main-content-aside-topic-center-left">
                            <h3>Our Agricultural Innovation Culture</h3>
                            <p>
                                At TechFarming, we are not just an e-commerce platform; we are a community of pioneers, innovators, and agricultural enthusiasts on a mission to revolutionize modern farming. Our "Culture" page is a glimpse into the heart of our company, where tradition meets technology, and sustainability is the driving force.
                            </p>
                            <h3>A Commitment to Innovation</h3>
                            <p>
                                We are more than just an e-commerce platform; we are the architects of an agricultural revolution. TechFarming is dedicated to pushing the boundaries of what's possible in farming, leveraging state-of-the-art tools, data analytics, and digital frameworks to empower farmers with the tools of tomorrow.
                            </p>
                            <h3>Empowering Farmers</h3>
                            <p>
                                For us, it's not just about technology; it's about the farmers. Our success is measured by the successes of those who till the soil. We've seen farmers experience increased yields, reduced costs, and improved livelihoods through our innovative solutions.
                            </p>
                            <h3>Collaborations with Experts</h3>
                            <p>
                                We believe in the power of collaboration. TechFarming works closely with agricultural experts, agronomists, and research institutions. These partnerships drive the development and validation of our agricultural solutions, ensuring that they meet the highest standards.
                            </p>
                            <h3>Customer-Centric Approach</h3>
                            <p>
                                TechFarming is driven by a customer-centric approach. We recognize that each farmer and each field is unique. Our solutions are tailored to address the specific needs and challenges faced by our customers. Your success is our success.
                            </p>
                            <h3>Trust and Transparency</h3>
                            <p>
                                Trust and transparency are our guiding principles. We pride ourselves on our honesty, open communication, and ethical business practices. When you partner with TechFarming, you can trust that you're working with a company that values integrity above all else.
                            </p>
                            <h3>Building a Community</h3>
                            <p>
                                TechFarming isn't just a brand; it's a community. We host events, webinars, and forums where farmers, experts, and enthusiasts come together to share knowledge, network, and build a vibrant agricultural community.
                            </p>
                            <h3>Pioneering the Future</h3>
                            <p>
                                We're not content with the status quo. Our vision extends far into the future, where agriculture is smarter, more sustainable, and efficient. TechFarming is committed to staying ahead, researching, and innovating to lead the way in a dynamic industry.
                            </p>
                            <p>
                                Join the TechFarming Movement! Whether you're a farmer, an enthusiast, or simply curious about the future of agriculture, we invite you to explore our range of agricultural technology products and services, join our webinars, and subscribe to our updates. Together, we're shaping the future of farming.
                            </p>
                            <p>
                                TechFarming — Where Tradition Meets Technology, and Sustainability Thrives.
                            </p>
                        </div>
                        <div className="about-main-content-nav-main-content-aside-topic-center-right">
                            <div className="about-main-content-nav-main-content-aside-topic-center-right-images">
                                <img src="" alt="TechFarming Images" />
                            </div>
                        </div>
                    </div>
                    <div className="about-main-content-nav-main-content-aside-topic-bottom"></div>
                </div>
            ),
        },
        {
            title: "Technology",
            content: (
                <div className='about-main-content-nav-main-content-aside-topic'>
                    <div className="about-main-content-nav-main-content-aside-topic-top">
                        <img src="" alt="TechFarming" />
                    </div>
                    <div className="about-main-content-nav-main-content-aside-topic-center">
                        <div className="about-main-content-nav-main-content-aside-topic-center-left">
                            <h3>Innovations for Modern Agriculture</h3>
                            <p>
                                Welcome to the "Technology" page of TechFarming, where we delve into the innovative solutions and advanced tools that are transforming agriculture as we know it. We're committed to bringing the latest technologies to the fingertips of farmers and agricultural enthusiasts, enhancing productivity, sustainability, and efficiency.
                            </p>
                            <h3>Farming Meets Technology</h3>
                            <p>
                                Our journey began with a deep-rooted passion for agriculture, where generations of our founders were raised on the principles of hard work and a love for the land. Today, we're channeling that heritage into a new era of farming, where technology plays a pivotal role.
                            </p>
                            <h3>Precision Agriculture</h3>
                            <p>
                                Precision agriculture is at the heart of our technological journey. TechFarming leverages cutting-edge technologies such as GPS, drones, and sensors to create smart farming solutions. These technologies allow farmers to optimize field management, reduce resource wastage, and increase crop yields.
                            </p>
                            <h3>Data-Driven Decision Making</h3>
                            <p>
                                In the digital age, data is the new currency of farming. Our platform provides farmers with tools for data collection and analysis, enabling them to make informed decisions. Through real-time data on weather, soil conditions, and crop health, farmers gain insights to maximize their harvests.
                            </p>
                            <h3>Farm Management Software</h3>
                            <p>
                                Our user-friendly farm management software simplifies the complex tasks of planning, monitoring, and managing agricultural operations. Farmers can efficiently organize planting schedules, track resources, and monitor progress, all from a single, intuitive platform.
                            </p>
                            <h3>Agricultural Apps</h3>
                            <p>
                                TechFarming offers a range of mobile applications designed to address specific agricultural needs. From crop monitoring apps to pest and disease identification, these apps empower farmers with valuable information right at their fingertips.
                            </p>
                            <h3>Eco-Friendly Farming</h3>
                            <p>
                                Sustainability is a cornerstone of our technological approach. We champion eco-friendly farming practices, including the use of renewable energy, water-efficient irrigation systems, and organic farming methods. These innovations promote responsible farming and environmental conservation.
                            </p>
                            <h3>Access to Cutting-Edge Tools</h3>
                            <p>
                                TechFarming provides farmers with access to the latest agricultural tools and machinery. From precision planters to automated harvesters, our e-commerce platform connects farmers with technology that streamlines labor-intensive tasks and boosts efficiency.
                            </p>
                            <h3>Expert Guidance</h3>
                            <p>
                                We understand that technology can be daunting for some farmers. That's why TechFarming offers expert guidance and training. Our team of agricultural specialists and technology experts are here to provide support and ensure that farmers can harness the full potential of our tools.
                            </p>
                            <h3>Staying Ahead</h3>
                            <p>
                                In the ever-evolving landscape of agricultural technology, TechFarming remains at the forefront. We continuously research and integrate the latest advancements into our platform. This commitment to staying ahead ensures that our users always have access to the most cutting-edge solutions.
                            </p>
                            <h3>Join the TechFarming Technological Revolution</h3>
                            <p>
                                TechFarming is more than an e-commerce platform; it's a movement towards a future of smarter, sustainable, and more efficient agriculture. We invite you to explore our range of technological solutions, whether you're an experienced farmer or a tech-savvy enthusiast.
                            </p>
                            <p>
                                Discover how technology is changing the face of farming and embark on a journey with us to create a brighter and more innovative agricultural landscape.
                            </p>
                            <p>
                                TechFarming — Where Innovation Meets Agriculture for a Sustainable Tomorrow.
                            </p>

                        </div>
                        <div className="about-main-content-nav-main-content-aside-topic-center-right">
                            <div className="about-main-content-nav-main-content-aside-topic-center-right-images">
                                <img src="" alt="TechFarming Images" />
                            </div>
                        </div>
                    </div>
                    <div className="about-main-content-nav-main-content-aside-topic-bottom"></div>
                </div>
            ),
        },
        {
            title: "Sustainability",
            content: (
                <div className='about-main-content-nav-main-content-aside-topic'>
                    <div className="about-main-content-nav-main-content-aside-topic-top">
                        <img src="" alt="TechFarming" />
                    </div>
                    <div className="about-main-content-nav-main-content-aside-topic-center">
                        <div className="about-main-content-nav-main-content-aside-topic-center-left">
                            <h3>Overview</h3>
                            <p>
                                At TechFarming, we believe that trust is the cornerstone of any successful relationship. Our commitment to ethical conduct, transparency, and the protection of your rights is at the core of everything we do. This "Ethics and Policies" page is designed to provide you with a comprehensive understanding of the values and guidelines that guide our business operations.
                            </p>
                            <h3>Sustainable Agriculture</h3>
                            <p>
                                Our commitment to sustainability is unwavering. We understand the critical role agriculture plays in our ecosystem, and we're committed to making it more environmentally friendly. We champion eco-friendly farming practices, resource conservation, and reducing the environmental footprint of agriculture.
                            </p>
                            <h3>Our Commitment to Ethics</h3>
                            <p>
                                We hold ourselves to the highest ethical standards. This commitment encompasses not only how we conduct our business but also how we engage with our customers, partners, and stakeholders. Our ethical principles are centered on honesty, fairness, and respect, ensuring that you can confidently shop with us, knowing that your rights are protected.
                            </p>
                            <h3>Privacy Matters</h3>
                            <p>
                                Your privacy is of paramount importance to us. Our Privacy Policy outlines how we collect, use, and safeguard your personal information. We are dedicated to securing your data and maintaining the confidentiality and security of your information when you interact with our services.
                            </p>
                            <p>
                                As part of our commitment to transparency, we have provided a video overview and image gallery to give you insights into our business, processes, and the quality of our products. Explore these visual resources to learn more about us. <Link to='/#'>here</Link>
                            </p>
                            <p>
                                Thank you for visiting our "Ethics and Policies" page. If you have any questions, concerns, or require further assistance, please don't hesitate to <Link to='/contact-us'>Contact Us</Link>. Your trust in us is deeply valued, and we are here to ensure your experience with <Link to='/home'>TechFarming</Link> is a positive one.
                            </p>
                        </div>
                        <div className="about-main-content-nav-main-content-aside-topic-center-right">
                            <div className="about-main-content-nav-main-content-aside-topic-center-right-images">
                                <img src="" alt="TechFarming Images" />
                            </div>
                        </div>
                    </div>
                    <div className="about-main-content-nav-main-content-aside-topic-bottom"></div>
                </div>
            ),
        },
        {
            title: "Stories",
            content: (
                <div className='about-main-content-nav-main-content-aside-topic'>
                    <div className="about-main-content-nav-main-content-aside-topic-top">
                        <img src="" alt="TechFarming" />
                    </div>
                    <div className="about-main-content-nav-main-content-aside-topic-center">
                        <div className="about-main-content-nav-main-content-aside-topic-center-left">
                            <h3>Overview</h3>
                            <p>
                                At TechFarming, we believe that trust is the cornerstone of any successful relationship. Our commitment to ethical conduct, transparency, and the protection of your rights is at the core of everything we do. This "Ethics and Policies" page is designed to provide you with a comprehensive understanding of the values and guidelines that guide our business operations.
                            </p>
                            <h3>Our Commitment to Ethics</h3>
                            <p>
                                We hold ourselves to the highest ethical standards. This commitment encompasses not only how we conduct our business but also how we engage with our customers, partners, and stakeholders. Our ethical principles are centered on honesty, fairness, and respect, ensuring that you can confidently shop with us, knowing that your rights are protected.
                            </p>
                            <h3>Privacy Matters</h3>
                            <p>
                                Your privacy is of paramount importance to us. Our Privacy Policy outlines how we collect, use, and safeguard your personal information. We are dedicated to securing your data and maintaining the confidentiality and security of your information when you interact with our services.
                            </p>
                            <p>
                                As part of our commitment to transparency, we have provided a video overview and image gallery to give you insights into our business, processes, and the quality of our products. Explore these visual resources to learn more about us. <Link to='/#'>here</Link>
                            </p>
                            <p>
                                Thank you for visiting our "Ethics and Policies" page. If you have any questions, concerns, or require further assistance, please don't hesitate to <Link to='/contact-us'>Contact Us</Link>. Your trust in us is deeply valued, and we are here to ensure your experience with <Link to='/home'>TechFarming</Link> is a positive one.
                            </p>
                        </div>
                        <div className="about-main-content-nav-main-content-aside-topic-center-right">
                            <div className="about-main-content-nav-main-content-aside-topic-center-right-images">
                                <img src="" alt="TechFarming Images" />
                            </div>
                        </div>
                    </div>
                    <div className="about-main-content-nav-main-content-aside-topic-bottom"></div>
                </div>
            ),
        },
        {
            title: "Learning Hub",
            content: (
                <div className='about-main-content-nav-main-content-aside-topic'>
                    <div className="about-main-content-nav-main-content-aside-topic-top">
                        <img src="" alt="TechFarming" />
                    </div>
                    <div className="about-main-content-nav-main-content-aside-topic-center">
                        <div className="about-main-content-nav-main-content-aside-topic-center-left">
                            <h3>Overview</h3>
                            <p>
                                At TechFarming, we believe that trust is the cornerstone of any successful relationship. Our commitment to ethical conduct, transparency, and the protection of your rights is at the core of everything we do. This "Ethics and Policies" page is designed to provide you with a comprehensive understanding of the values and guidelines that guide our business operations.
                            </p>
                            <h3>Our Commitment to Ethics</h3>
                            <p>
                                We hold ourselves to the highest ethical standards. This commitment encompasses not only how we conduct our business but also how we engage with our customers, partners, and stakeholders. Our ethical principles are centered on honesty, fairness, and respect, ensuring that you can confidently shop with us, knowing that your rights are protected.
                            </p>
                            <h3>Privacy Matters</h3>
                            <p>
                                Your privacy is of paramount importance to us. Our Privacy Policy outlines how we collect, use, and safeguard your personal information. We are dedicated to securing your data and maintaining the confidentiality and security of your information when you interact with our services.
                            </p>
                            <p>
                                As part of our commitment to transparency, we have provided a video overview and image gallery to give you insights into our business, processes, and the quality of our products. Explore these visual resources to learn more about us. <Link to='/#'>here</Link>
                            </p>
                            <p>
                                Thank you for visiting our "Ethics and Policies" page. If you have any questions, concerns, or require further assistance, please don't hesitate to <Link to='/contact-us'>Contact Us</Link>. Your trust in us is deeply valued, and we are here to ensure your experience with <Link to='/home'>TechFarming</Link> is a positive one.
                            </p>
                        </div>
                        <div className="about-main-content-nav-main-content-aside-topic-center-right">
                            <div className="about-main-content-nav-main-content-aside-topic-center-right-images">
                                <img src="" alt="TechFarming Images" />
                            </div>
                        </div>
                    </div>
                    <div className="about-main-content-nav-main-content-aside-topic-bottom"></div>
                </div>
            ),
        },
        {
            title: "Our Laboratory",
            content: (
                <div className='about-main-content-nav-main-content-aside-topic'>
                    <div className="about-main-content-nav-main-content-aside-topic-top">
                        <img src="" alt="TechFarming" />
                    </div>
                    <div className="about-main-content-nav-main-content-aside-topic-center">
                        <div className="about-main-content-nav-main-content-aside-topic-center-left">
                            <h3>Overview</h3>
                            <p>
                                At TechFarming, we believe that trust is the cornerstone of any successful relationship. Our commitment to ethical conduct, transparency, and the protection of your rights is at the core of everything we do. This "Ethics and Policies" page is designed to provide you with a comprehensive understanding of the values and guidelines that guide our business operations.
                            </p>
                            <h3>Our Commitment to Ethics</h3>
                            <p>
                                We hold ourselves to the highest ethical standards. This commitment encompasses not only how we conduct our business but also how we engage with our customers, partners, and stakeholders. Our ethical principles are centered on honesty, fairness, and respect, ensuring that you can confidently shop with us, knowing that your rights are protected.
                            </p>
                            <h3>Privacy Matters</h3>
                            <p>
                                Your privacy is of paramount importance to us. Our Privacy Policy outlines how we collect, use, and safeguard your personal information. We are dedicated to securing your data and maintaining the confidentiality and security of your information when you interact with our services.
                            </p>
                            <p>
                                As part of our commitment to transparency, we have provided a video overview and image gallery to give you insights into our business, processes, and the quality of our products. Explore these visual resources to learn more about us. <Link to='/#'>here</Link>
                            </p>
                            <p>
                                Thank you for visiting our "Ethics and Policies" page. If you have any questions, concerns, or require further assistance, please don't hesitate to <Link to='/contact-us'>Contact Us</Link>. Your trust in us is deeply valued, and we are here to ensure your experience with <Link to='/home'>TechFarming</Link> is a positive one.
                            </p>
                        </div>
                        <div className="about-main-content-nav-main-content-aside-topic-center-right">
                            <div className="about-main-content-nav-main-content-aside-topic-center-right-images">
                                <img src="" alt="TechFarming Images" />
                            </div>
                        </div>
                    </div>
                    <div className="about-main-content-nav-main-content-aside-topic-bottom"></div>
                </div>
            ),
        },
        {
            title: "Our Social works",
            content: (
                <div className='about-main-content-nav-main-content-aside-topic'>
                    <div className="about-main-content-nav-main-content-aside-topic-top">
                        <img src="" alt="TechFarming" />
                    </div>
                    <div className="about-main-content-nav-main-content-aside-topic-center">
                        <div className="about-main-content-nav-main-content-aside-topic-center-left">
                            <h3>Overview</h3>
                            <p>
                                At TechFarming, we believe that trust is the cornerstone of any successful relationship. Our commitment to ethical conduct, transparency, and the protection of your rights is at the core of everything we do. This "Ethics and Policies" page is designed to provide you with a comprehensive understanding of the values and guidelines that guide our business operations.
                            </p>
                            <h3>Our Commitment to Ethics</h3>
                            <p>
                                We hold ourselves to the highest ethical standards. This commitment encompasses not only how we conduct our business but also how we engage with our customers, partners, and stakeholders. Our ethical principles are centered on honesty, fairness, and respect, ensuring that you can confidently shop with us, knowing that your rights are protected.
                            </p>
                            <h3>Privacy Matters</h3>
                            <p>
                                Your privacy is of paramount importance to us. Our Privacy Policy outlines how we collect, use, and safeguard your personal information. We are dedicated to securing your data and maintaining the confidentiality and security of your information when you interact with our services.
                            </p>
                            <p>
                                As part of our commitment to transparency, we have provided a video overview and image gallery to give you insights into our business, processes, and the quality of our products. Explore these visual resources to learn more about us. <Link to='/#'>here</Link>
                            </p>
                            <p>
                                Thank you for visiting our "Ethics and Policies" page. If you have any questions, concerns, or require further assistance, please don't hesitate to <Link to='/contact-us'>Contact Us</Link>. Your trust in us is deeply valued, and we are here to ensure your experience with <Link to='/home'>TechFarming</Link> is a positive one.
                            </p>
                        </div>
                        <div className="about-main-content-nav-main-content-aside-topic-center-right">
                            <div className="about-main-content-nav-main-content-aside-topic-center-right-images">
                                <img src="" alt="TechFarming Images" />
                            </div>
                        </div>
                    </div>
                    <div className="about-main-content-nav-main-content-aside-topic-bottom">
                    </div>
                </div>
            ),
        },
    ];

    const [activeLink, setActiveLink] = useState(0); // Default to the first link

    const handleLinkClick = (index) => {
        setActiveLink(index);
    };

    return (
        <div className="about-main-content-nav">
            <div className="about-main-content-nav-top">
                <h2>More About Us</h2>
            </div>
            <div className="about-main-content-nav-bottom">
                <div className="about-main-content-nav-list">
                    <ul>
                        {contentComponents.map((item, index) => (
                            <li key={index}>
                                <button onClick={() => handleLinkClick(index)} className={index === activeLink ? 'active' : ''}>{item.title}</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="about-main-content-nav-main-content">
                    <div className="about-main-content-nav-main-content-aside">
                        {contentComponents[activeLink].content}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutNav;
