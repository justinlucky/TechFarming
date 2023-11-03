import React from 'react'
import { Link } from 'react-router-dom'
import LogOut from '../LogOut/LogOut'

const Header = () => {
  return (
    <div>
        <h1>Header</h1>
        <header>
          <nav>
            <ul>
              <li><Link to='/home'>Home</Link></li>
              <li><Link to='/about-us'>About</Link></li>
              <li><Link to='/contact-us'>Contact</Link></li>
              <li><Link to='/login'>Login</Link></li>
              <li><Link to='/api/signup/users'>Sign Up</Link></li>
            </ul>
          </nav>
          <LogOut/>
        </header>
    </div>
  )
}

export default Header