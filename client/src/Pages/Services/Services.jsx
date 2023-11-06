import React from 'react';
import Header from '../../Components/Header/Header';
import Footer1 from '../../Components/Footer/Footer1';
import ServicesData from './ServicesData/ServicesData';
import '../../Styles/Services.css'

const Services = () => {
  return (
    <div id='services'>
      <Header />
      <div className="services-contents">
        <div className="services-content">
          ji
        </div>
        <div className="services-content">
        </div>
        <div className="services-content">
        <ServicesData/>
        </div>
        <div className="services-content">
          ka
        </div>
        <div className="services-content">
          he
        </div>
      </div>
      <Footer1 />
    </div>
  );
}

export default Services;
