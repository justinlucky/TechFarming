import React from 'react'
import './Logo.css'
import {Link} from 'react-router-dom'

const Logo = () => {
  return (
    <div id='logo'>
        <Link to='/home'>
          <h1>Tech<span>Farming</span></h1>
        </Link>
    </div>
  )
}

export default Logo