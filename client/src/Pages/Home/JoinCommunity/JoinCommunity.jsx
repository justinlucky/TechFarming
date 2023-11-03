import React from 'react'
import { Link } from 'react-router-dom'
import './JoinCommunity.css';

const JoinCommunity = () => {
  return (
    <div className='home-container-content-join'>
        <h2>Join the TechFarming Community</h2>
        <p>Discover the latest farming techniques and connect with fellow farmers</p>
        <div className="joining-links">
            <Link to='/#'>Sign Up</Link>
            <Link to='/#'>Discover</Link>
        </div>
    </div>
  )
}

export default JoinCommunity