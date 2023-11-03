import React from 'react'
import './UsedBy.css';
import { Link } from 'react-router-dom';

const UsedBy = () => {
    const Partners = [
        {
            logo:'',
            link:'',
            title:'',
        },
        {
            logo:'',
            link:'',
            title:'',
        },
        {
            logo:'',
            link:'',
            title:'',
        },
        {
            logo:'',
            link:'',
            title:'',
        },
        {
            logo:'',
            link:'',
            title:'',
        },
        {
            logo:'',
            link:'',
            title:'',
        },
        {
            logo:'',
            link:'',
            title:'',
        },
    ];
  return (
    <div className='home-container-content-user'>
        <div className="home-container-content-user-left">
            <h2>TechFarming in Partner and Co-Sponsor by</h2>
            <p></p>
        </div>
        <div className="home-container-content-user-right">
            <ul>
                {Partners.map((partner, index) => (
                    <li key={index}>
                        <Link to={partner.link}>
                            <img src={partner.logo} alt="" />
                            <p>{partner.title}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default UsedBy