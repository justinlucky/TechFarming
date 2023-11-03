import React, { useState } from 'react';

const AboutIntro = () => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="about-intro">
            <h2>Our Story</h2>
            <p>
                Established in 2025 in the picturesque state of Manipur, TechFarming was born out of a passion for revolutionizing agriculture. Our founder, Lungchuingam Riammei, has a remarkable journey. He was born in the naturally beautiful land of Manipur and brought up in an orphanage home called Child Guidance Centre, where he received the best education.
            </p>
            <p>
                <div className="founder-container">
                    <img src="" alt="Founder,Lungchuingam Riammei" />
                </div>
                Lungchuingam completed a diploma in Electronics and Communication and continued to pursue a Bachelor's degree in Electronics and Communication Engineering. It was during his educational journey that he realized the importance of embedding technology into modern agriculture.
            </p>
            <p>
                With a vision to transform the agricultural landscape, Lungchuingam, along with some friends, took the bold step of founding TechFarming. Their mission was to revolutionize agriculture through sustainable farming practices, data-driven marketing, and cutting-edge technology.
            </p>
            <p>
                <div className="team-container">
                    <img src="" alt="TechFarming Team" />
                </div>
                Our team of dedicated co-employees has been instrumental in making TechFarming a success. Their passion, hard work, and commitment have driven the company forward, resulting in innovative solutions for agriculture and technology.
            </p>
            {showMore && (
                <div>
                    <p>
                        In addition to the core mission of TechFarming, Lungchuingam also envisions extending a helping hand to students who come from a similar background as he did. He believes in providing educational opportunities to those who need it most, just as he was given a chance to excel in life.
                    </p>
                </div>
            )}
            <button className="show-more-button" onClick={toggleShowMore}>
                {showMore ? 'Read Less' : 'Read More'}
            </button>
        </div>
    );
};

export default AboutIntro;
