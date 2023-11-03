import React from 'react'
import './Articles.css';
import { Link } from 'react-router-dom';
import {FaCaretRight} from 'react-icons/fa'

const Articles = () => {
    const articles = [
        {
            image:'',
            category:'Agriculture',
            time:'5',
            title:'Boost Your Crop Yield with Advanced Techniques',
            description:'Learn how to optimize your farming practices for maximum productivity.',
            link:'',
            linkText:'Read more',
            imageAlt:'Agriculture',
        },
        {
            image:'',
            category:'Technology',
            time:'5',
            title:'The Future of Smart Farming: IoT and Automation',
            description:'Discover how technology is revolutionizing the agricultural industry.',
            link:'',
            linkText:'Read more',
            imageAlt:'Agriculture Technologies',
        },
        {
            image:'',
            category:'Hilly Region Farming',
            time:'10',
            title:'Implementing Eco-Friendly Practices on farm which are located at hilly regions',
            description:'Explore sustainable farming methods to reduces environmental impact mostly in the hilly region.',
            link:'',
            linkText:'Read more',
            imageAlt:'Agriculture in Hilly Region',
        },
    ];
  return (
    <div className='about-main-content-articles'>
        <div className="about-main-content-articles-top">
            <h2>Discover the Latest Insights</h2>
            <p>Stay informed with our informative blog posts.</p>
        </div>
        <div className="about-main-content-articles-center">
            <ul>
                {articles.map((article, index) =>(
                    <li key={index}>
                        <Link to={article.link}>
                            <img src={article.image} alt={article.imageAlt} />
                        </Link>
                        <div className="notice">
                            <p>{article.category}</p>
                            <p>{article.time} min red</p>
                        </div>
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>
                        <Link to={article.link}>{article.linkText}<FaCaretRight/></Link>
                    </li>
                ))}
            </ul>
        </div>
        <div className="about-main-content-articles-bottom">
            <Link to='/#'>View all</Link>
        </div>
    </div>
  )
}

export default Articles