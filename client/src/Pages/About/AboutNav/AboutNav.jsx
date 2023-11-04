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
                            <p className='slogan'>
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
                            <p className='slogan'>
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
                            <h3>Nurturing a Sustainable Tomorrow</h3>
                            <p>
                                At TechFarming, we believe that agriculture holds the key to a more sustainable and prosperous future. Our "Sustainability" page is a testament to our unwavering commitment to eco-friendly and responsible farming practices that benefit both the environment and the agricultural community.
                            </p>
                            <h3>Sustainable Farming Principles</h3>
                            <p>
                                Our sustainability journey begins with embracing sustainable farming principles. TechFarming is dedicated to practices that reduce waste, conserve resources, and promote the responsible use of land and water. We recognize the importance of ensuring the long-term viability of our planet.
                            </p>
                            <h3>Organic Farming</h3>
                            <p>
                                We champion organic farming methods that eschew synthetic pesticides and chemicals. TechFarming supports farmers in transitioning to organic agriculture, fostering soil health and producing chemical-free, nutritious crops.
                            </p>
                            <h3>Water Conservation</h3>
                            <p>
                                Water is a precious resource, and we're committed to its responsible use. Our platform offers tools and advice to help farmers implement efficient irrigation systems, reducing water wastage and ensuring optimal crop hydration.
                            </p>
                            <h3>Renewable Energy</h3>
                            <p>
                                TechFarming promotes the use of renewable energy sources in agriculture. We support the adoption of solar and wind power, reducing the carbon footprint of farming operations and contributing to a cleaner environment.
                            </p>
                            <h3>Reduced Carbon Emissions</h3>
                            <p>
                                We're conscious of the environmental impact of agriculture. Our tools and resources encourage farmers to minimize carbon emissions through sustainable transportation, reduced fuel usage, and optimized supply chain management.
                            </p>
                            <h3>Biodiversity Conservation</h3>
                            <p>
                                Biodiversity is essential for a healthy ecosystem. TechFarming advocates for the preservation of biodiversity on farms, supporting practices that protect and nurture native flora and fauna.
                            </p>
                            <h3>Eco-Friendly Products</h3>
                            <p>
                                Our e-commerce platform offers a selection of eco-friendly agricultural products. From biodegradable packaging materials to organic fertilizers and pest control solutions, TechFarming helps farmers make sustainable choices.
                            </p>
                            <h3>Community Engagement</h3>
                            <p>
                                Sustainability extends beyond individual actions. TechFarming actively engages with local agricultural communities, supporting initiatives that promote sustainable farming practices and eco-conscious living.
                            </p>
                            <h3>Join the Sustainability Movement</h3>
                            <p>
                                TechFarming invites you to join the sustainability movement in agriculture. Whether you're a farmer, a consumer, or simply someone who cares about the future of our planet, we encourage you to explore our range of sustainable solutions, support eco-friendly practices, and become a part of a greener tomorrow.
                            </p>
                            <p>
                                Together, we can foster a sustainable agricultural ecosystem that not only nourishes us today but also ensures a thriving and resilient planet for generations to come.
                            </p>
                            <p className='slogan'>
                                TechFarming — Where Sustainability Cultivates Prosperity.
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
                            <h3>Welcome to TechFarming's Learning Hub</h3>
                            <p>
                                TechFarming is not just a place to shop for innovative agricultural solutions; it's a platform dedicated to empowering you with knowledge and resources. Our "Learning Hub" is your gateway to a world of agricultural insights, expert guidance, and continuous learning. Here, you'll discover a wealth of information to help you thrive in the ever-evolving world of modern agriculture.
                            </p>
                            <h3>What You'll Find in Our Learning Hub</h3>
                            <ol>
                                <li>
                                    <h3>Expert Articles</h3>
                                    <p>
                                        Dive into a rich repository of articles written by our team of agricultural specialists and technology experts. Explore topics ranging from crop management and pest control to the latest advancements in precision agriculture.
                                    </p>
                                </li>
                                <li>
                                    <h3>How-To Guides</h3>
                                    <p>
                                        Whether you're a seasoned farmer or new to agriculture, our how-to guides are your trusted companions. Learn about best practices, step-by-step instructions, and handy tips to enhance your farming skills.
                                    </p>
                                </li>
                                <li>
                                    <h3>Webinars and Workshops</h3>
                                    <p>
                                        Join our webinars and workshops conducted by industry experts and thought leaders. These interactive sessions cover a wide array of topics, from sustainable farming practices to harnessing the power of technology in agriculture.
                                    </p>
                                </li>
                                <li>
                                    <h3>Interactive Forums</h3>
                                    <p>
                                        Connect with fellow farmers and agricultural enthusiasts in our vibrant community forums. Share your experiences, ask questions, and engage in discussions on the latest trends in agriculture.
                                    </p>
                                </li>
                                <li>
                                    <h3>Case Studies</h3>
                                    <p>
                                        Real-world success stories from farmers who have benefited from TechFarming's solutions. Discover how others have overcome challenges, increased yields, and improved their livelihoods.
                                    </p>
                                </li>
                            </ol>
                            <h3>Our Commitment to Your Growth</h3>
                            <p>
                                At TechFarming, we are deeply committed to your growth and success. Our Learning Hub is a reflection of this commitment. We believe that informed, knowledgeable farmers are the backbone of a sustainable and thriving agricultural ecosystem.
                            </p>
                            <h3>Join the Learning Hub</h3>
                            <p>
                                Whether you're a seasoned farmer, a hobbyist, or simply curious about the world of agriculture, our Learning Hub is open to all. The journey to becoming a more skilled and informed farmer begins here.
                            </p>
                            <p>
                                Explore, learn, and let TechFarming be your guide on your path to agricultural excellence.
                            </p>
                            <p className="slogan">
                                TechFarming — Where Knowledge Cultivates Prosperity.
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
                            <h3>Explore TechFarming's Cutting-Edge Laboratory</h3>
                            <p>
                                Welcome to the heart of innovation at TechFarming! Our state-of-the-art laboratory is where groundbreaking ideas take root, cutting-edge technologies are born, and the future of agriculture is shaped. We're excited to offer you a glimpse into our dynamic laboratory and the incredible work happening behind the scenes.
                            </p>
                            <h3>Our Commitment to Research and Development</h3>
                            <p>
                                At TechFarming, we believe that innovation is the key to a sustainable and prosperous agricultural industry. That's why we've invested heavily in our research and development efforts. Our laboratory serves as the epicenter of these initiatives, where our team of scientists, engineers, and agricultural experts collaborate to find solutions to some of the most pressing challenges in farming.
                            </p>
                            <h3>What Happens in Our Laboratory</h3>
                            <ol>
                                <li>
                                    <h3>Technology Prototyping</h3>
                                    <p>
                                        Our dedicated space for prototyping and testing is where we bring ideas to life. From drones for precision agriculture to smart sensors for soil health monitoring, this is where innovation begins.
                                    </p>
                                </li>
                                <li>
                                    <h3>Data Analysis</h3>
                                    <p>
                                        Our data scientists crunch numbers to provide you with insights that can help boost your farm's productivity. We analyze crop data, weather patterns, and more to make informed decisions.
                                    </p>
                                </li>
                                <li>
                                    <h3>Environmental Sustainability</h3>
                                    <p>
                                        Our team is deeply committed to sustainability. In our lab, we work on eco-friendly solutions, organic farming practices, and reducing the carbon footprint of agriculture.
                                    </p>
                                </li>
                                <li>
                                    <h3>Crop Research</h3>
                                    <p>
                                        From hybrid seeds to disease-resistant plant varieties, we're always striving to improve crop yields. Our laboratory is where we conduct extensive research to bring you the best seeds and farming practices.
                                    </p>
                                </li>
                                <li>
                                    <h3>Collaborative Research</h3>
                                    <p>
                                        We collaborate with universities, agricultural institutions, and farmers to ensure that our research is aligned with real-world needs and challenges.
                                    </p>
                                </li>
                                <li>
                                    <h3>Innovation Showcase</h3>
                                    <p>
                                        Our laboratory also serves as a showcase for the latest technologies in agriculture. From AI-driven farm management tools to automated irrigation systems, we're always at the forefront of innovation.
                                    </p>
                                </li>
                            </ol>
                            <h3>Join Us on the Journey</h3>
                            <p>
                                We invite you to stay connected with TechFarming as we share our latest discoveries and breakthroughs from our laboratory. Together, we can build a more resilient and prosperous future for agriculture.
                            </p>
                            <p>
                                Explore our laboratory and discover the innovative spirit that drives TechFarming forward.
                            </p>
                            <p className='slogan'>
                                TechFarming — Where Innovation Meets Agriculture.
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
                            <h3>Cultivating a Better World through Social Responsibility</h3>
                            <p>
                                At TechFarming, our mission goes beyond revolutionizing agriculture with cutting-edge technologies. We are deeply committed to making a positive impact on the world around us. Through our social responsibility initiatives, we aim to cultivate a better world for all.
                            </p>
                            <h3>Our Core Values</h3>
                            <ul>
                                <li>
                                    <h3>Sustainability</h3>
                                    <p>
                                        We believe in fostering sustainable practices not only in farming but also in the communities we touch. Sustainable agriculture, environmental responsibility, and ethical business practices are at the core of what we do.
                                    </p>
                                </li>
                                <li>
                                    <h3> Community</h3>
                                    <p>
                                        We understand the importance of vibrant and thriving communities. Our social work programs aim to uplift local communities and improve the lives of the people we serve.
                                    </p>
                                </li>
                                <li>
                                    <h3>Education</h3>
                                    <p>
                                        Knowledge is power. We're dedicated to educating farmers, students, and enthusiasts about the latest advancements in agriculture, helping them adapt to modern farming techniques and improve their livelihoods.
                                    </p>
                                </li>
                                <li>
                                    <h3>Inclusively</h3>
                                    <p>
                                        We're committed to inclusively, ensuring that everyone has access to the benefits of technology and modern agriculture, regardless of their background or resources.
                                    </p>
                                </li>
                            </ul>
                            <ol>
                                <li>
                                    <h3>Empowering Farmers</h3>
                                    <p>
                                    We're passionate about empowering farmers with the knowledge and tools they need to succeed. Our training programs, workshops, and knowledge-sharing events are designed to help farmers adapt to modern farming practices, boost their yields, and secure a better future.
                                    </p>
                                </li>
                                <li>
                                    <h3>
                                    Environmental Conservation
                                    </h3>
                                    <p>
                                    Preserving the environment is a top priority for us. We actively engage in tree planting, sustainable farming practices, and waste reduction initiatives. Our goal is to leave a smaller ecological footprint and inspire others to do the same.
                                    </p>
                                </li>
                                <li>
                                    <h3>Community Development</h3>
                                    <p>
                                    TechFarming believes in giving back to the communities that support us. We invest in infrastructure development, healthcare, and education in the areas where we operate, making a tangible difference in the lives of those who need it most.
                                    </p>
                                </li>
                                <li>
                                    <h3>Education and Research</h3>
                                    <p>
                                    We sponsor educational programs and research initiatives to drive innovation in agriculture. Scholarships, research grants, and partnerships with educational institutions are just a few ways we contribute to advancing agricultural knowledge.
                                    </p>
                                </li>
                                <li>
                                    <h3>Volunteer Engagement</h3>
                                    <p>
                                    Our employees are encouraged to volunteer their time and expertise in support of social projects. Whether it's mentoring local farmers, organizing clean-up campaigns, or teaching in local schools, our team is actively involved in giving back to the community.
                                    </p>
                                </li>
                            </ol>
                            <h3>Join Us in Making a Difference</h3>
                            <p>
                            We invite you to be a part of our journey to cultivate a better world. Whether you're a farmer, a student, an enthusiast, or someone who shares our passion for responsible agriculture, there are numerous ways you can get involved and make a difference.
                            </p>
                            <p>
                            At TechFarming, we're not just shaping the future of farming; we're cultivating a better world for generations to come. Join us in making a positive impact, one step at a time.
                            </p>
                            <p className='slogan'>
                            TechFarming — Where Social Responsibility Meets Innovation.
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
