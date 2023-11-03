import React from 'react'
import { Link } from 'react-router-dom'
import '../../Styles/Index.css';
import Sidebar from '../../Components/Sidebar/Sidebar';

const Index = () => {
  return (
    <div>
        <Sidebar></Sidebar>
        <Link to='/home'>Home</Link>
    </div>
  )
}

export default Index