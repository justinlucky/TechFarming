import React from 'react'
import Header from '../../Components/Header/Header'
import '../../Styles/Home.css';
import SocialMediaAside from '../../Components/SocialMediaAside/SocialMediaAsside';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Chatbot from '../../Components/Chat/ChatBot';
import Footer1 from '../../Components/Footer/Footer1';
import Connect from './Connect/Connect';
import Innovative from './Innovation/Innovative';
import AdsandDiscount from './AdsandDiscount/AdsandDiscount';
import PricingPlan from './PricingPlan/PricingPlan';
import Revolutionize from './Revolutionize/Revolutionize';
import JoinCommunity from './JoinCommunity/JoinCommunity';
import OurTeam from './OurTeam/OurTeam';
import HomeContact from './HomeContact/HomeContact';
import HomeFaq from './HomeFAQ/HomeFaq';
import JobOpening from './Job/JobOpening';
import Empowerment from './Empowerment/Empowerment';
import UsedBy from './UsedBy/UsedBy';

const Home = () => {
  return (
    <div id='home'>
      <Sidebar></Sidebar>
      <Header></Header>
      <div className="home-container">
        <div className="home-container-content">
          <AdsandDiscount />
        </div>
        <div className="home-container-content">
          <h2>Offer and Discount</h2>
        </div>
        <div className="home-container-content">
          <h2>Recommendations</h2>
        </div>
        <div className="home-container-content">
          <Innovative />
        </div>
        <div className="home-container-content">
          <OurTeam />
        </div>
        <div className="home-container-content">
          <JobOpening/>
        </div>
        <div className="home-container-content">
          <Connect />
        </div>
        <div className="home-container-content">
          <JoinCommunity />
        </div>
        <div className="home-container-content">
          <Revolutionize />
        </div>
        <div className="home-container-content">
          <Empowerment/>
        </div>
        <div className="home-container-content">
          <PricingPlan />
        </div>
        <div className="home-container-content">
          <h2>Testimonial and Feedback </h2>
        </div>
        <div className="home-container-content">
          <HomeFaq/>
        </div>
        <div className="home-container-content">
          <UsedBy/>
        </div>
        <div className="home-container-content">
          <HomeContact />
        </div>
      </div>
      <SocialMediaAside></SocialMediaAside>
      <Chatbot></Chatbot>
      <Footer1></Footer1>
    </div>
  )
}

export default Home