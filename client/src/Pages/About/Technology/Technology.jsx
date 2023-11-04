import React from 'react'
import './Technology.css';

const Technology = () => {
    const technologies = [
        {
            index:'01',
            title:'Precision Farming',
            description:'Revolutionary agricultural technology often involves precision farming techniques, which utilize data-driven tools like GPS, sensors, and drones to optimize the use of resources such as water, fertilizers, and pesticides. This precision allows for more efficient and environmentally friendly farming practices.',
        },
        {
            index:'02',
            title:'Smart Farming',
            description:'The integration of the Internet of Things (IoT) devices and sensors in agriculture enables real-time data collection and analysis. Farmers can monitor crop conditions, soil health, and livestock well-being remotely, making data-driven decisions and adjustments.',
        },
        {
            index:'03',
            title:'Biotechnology',
            description:' Innovations in biotechnology have led to the development of genetically modified crops with improved resistance to pests and diseases. This technology also enables the creation of crops with enhanced nutritional value and reduced environmental impact.',
        },
        {
            index:'04',
            title:'Vertical Farming',
            description:'Vertical farming techniques, such as hydroponics and aeroponics, allow crops to be grown in controlled environments, including indoor facilities and urban settings. These methods maximize space, reduce water usage, and enable year-round crop production.',
        },
        {
            index:'05',
            title:'Robotics and Automation',
            description:'Agricultural robots are used for various tasks, from planting and harvesting to weeding and monitoring. These machines can work around the clock, increasing productivity and reducing labor costs.',
        },
        {
            index:'06',
            title:'Artificial Intelligence (AI)',
            description:'AI is utilized for crop management, pest control, and predictive analysis. Machine learning algorithms can process vast amounts of data to predict crop yields, optimize irrigation, and identify diseases or nutrient deficiencies.',
        },
        {
            index:'07',
            title:'Blockchain Technology',
            description:'Blockchain is used for supply chain transparency in agriculture. It helps in tracking the journey of food products from farm to table, ensuring food safety and authenticity.',
        },
        {
            index:'08',
            title:'Biological Pest Control(Laser-Based)',
            description:'Innovative biological solutions involve using natural predators, parasites, and beneficial microorganisms to control pests and reduce the reliance on chemical pesticides.',
        },
        {
            index:'09',
            title:'Advanced Machinery',
            description:' Modern agricultural machinery and equipment are equipped with advanced technology, including GPS guidance, autonomous features, and cloud-based data management.',
        },
        {
            index:'10',
            title:'Renewable Energy Integration',
            description:'Farms are incorporating renewable energy sources, such as solar panels and wind turbines, to reduce energy costs and minimize the environmental impact of farming operations.',
        },
    ];
    return (
        <div className='about-main-content-technology'>
            <div className="about-main-content-technology-top">
                <h2>Revolutionary Agricultural Technology</h2>
                <p>
                    At TechFarming, we provide top-of-the-line technology like soil parameter measuring rovers, spraying drones, and irrigation monitoring systems to help optimize crop production. This technology seeks to address critical challenges and improve the efficiency, sustainability, and productivity of agricultural processes.
                </p>
            </div>
            <div className="about-main-content-technology-bottom">
                <ul>
                    {technologies.map((technology, index) => (
                        <li key={index}>
                            <p>{technology.index}.</p>
                            <h3>{technology.title}</h3>
                            <p>{technology.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Technology