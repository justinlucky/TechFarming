import React, { useState } from 'react'
import './PricingPlan.css'
import { TiTick } from 'react-icons/ti';
import { FaRupeeSign } from 'react-icons/fa';

const PricingPlan = () => {
    const [selectedSubscription, setSelectedSubscription] = useState('Monthly');

    const handleSubscriptionChange = (subscriptionType) => {
        setSelectedSubscription(subscriptionType);
    };
    const Plans = [
        {
            title: 'Free Plan',
            description: 'Begin marketing your agricultural products with essential features at no cost.',
            prices:
            {
                Monthly: 'Free',
                Yearly: 'Free',
            },
            buttonText: 'Continue',
            advantages:
            {
                list: 'Cost-Efficiency',
                list1: 'Basic Features',
                list2: 'Visibility',
                list3: 'Community Access',
                list4: 'Upgradeability',
            },
            buttonText1: 'Learn More',
        },
        {
            title: 'Basic Plan',
            description: ' Elevate your marketing efforts with cost-effective access to additional tools.',
            prices: {
                Monthly: '99/month',
                Yearly: '499/annual',
            },
            buttonText: 'Get Started',
            advantages:
            {
                list: 'Enhanced Marketing',
                list1: 'Dedicated Support',
                list2: 'Analytics',
                list3: 'Listing Customization',
                list4: 'Marketing Resources',
            },
            buttonText1: 'Learn More',
        },
        {
            title: 'Premium Plan',
            description: 'Gain an edge in the agricultural market with advanced features and exclusive content.',
            prices: {
                Monthly: '499/month',
                Yearly: '1099/annual',
            },
            buttonText: 'Get Started',
            advantages:
            {
                list: 'Exclusive Features',
                list1: 'Market Insights',
                list2: 'Business Growth',
                list3: '24/7 Support',
                list4: 'Marketing Consultation',
            },
            buttonText1: 'Learn More',
        },
        {
            title: 'Ultra Premium Plan',
            description: 'Maximize your marketing potential with premium support and unlimited access to resources for a thriving agricultural business.',
            prices: {
                Monthly: '999/month',
                Yearly: '1999/annual',
            },
            buttonText: 'Get Started',
            advantages:
            {
                list: 'Unlimited Access',
                list1: 'Personalized Guidance',
                list2: 'Maximum Exposure',
                list3: 'Exclusive Content',
                list4: 'Business Success',
            },
            buttonText1: 'Learn More',
        },
    ];
    return (
        <div className='home-container-content-pricing'>
            <div className="home-container-content-pricing-top">
                <h2>Pricing Plan and Membership</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda odit at nihil cupiditate temporibus doloribus quisquam! Explicabo rem totam animi soluta alias, odio voluptate error aspernatur dignissimos unde quo temporibus.
                </p>
                <div className="pricing-plan">
                    <button onClick={() => handleSubscriptionChange('Monthly')}
                        className={selectedSubscription === 'Monthly' ? 'selected' : ''}>Monthly</button>
                    <button onClick={() => handleSubscriptionChange('Yearly')}
                        className={selectedSubscription === 'Yearly' ? 'selected' : ''}>Yearly</button>
                </div>
            </div>
            <div className="home-container-content-pricing-bottom">
                <ul className="pricing-plans-list">
                    {Plans.map((plan, index) => (
                        <li key={index}>
                            <h4>{plan.title}</h4>
                            <p className='describe'>{plan.description}</p>
                            <div className="line"></div>
                            <p className='price'><FaRupeeSign />{plan.prices[selectedSubscription]}</p>
                            <button className='get-going'>{plan.buttonText}</button>
                            <ul>
                                <li className='advance'><TiTick />{plan.advantages.list}</li>
                                <li className='advance'><TiTick />{plan.advantages.list1}</li>
                                <li className='advance'><TiTick />{plan.advantages.list2}</li>
                                <li className='advance'><TiTick />{plan.advantages.list3}</li>
                                <li className='advance'><TiTick />{plan.advantages.list4}</li>
                            </ul>
                            <button className="learn-more">{plan.buttonText1}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default PricingPlan