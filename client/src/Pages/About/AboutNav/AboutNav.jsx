import React, { useState } from 'react';
import './AboutNav.css';

const AboutNav = () => {
  const contentComponents = [
    {
      title: "Ethics and Policies",
      content: (
        <div>
          <h1>Content for Link 1</h1>
          <p>Additional content here</p>
          <img src="image-url-1" alt="Image 1" />
        </div>
      ),
    },
    {
      title: "Culture",
      content: (
        <div>
          <h1>Content for Link 2</h1>
          <p>Additional content here</p>
          <img src="image-url-2" alt="Image 2" />
        </div>
      ),
    },
    {
      title: "Technology",
      content: (
        <div>
          <h1>Content for Link 3</h1>
          <p>Additional content here</p>
          <img src="image-url-3" alt="Image 3" />
        </div>
      ),
    },
    {
        title: "Sustainability",
        content: (
          <div>
            <h1>Content for Link 3</h1>
            <p>Additional content here</p>
            <img src="image-url-3" alt="Image 3" />
          </div>
        ),
      },
      {
        title: "Stories",
        content: (
          <div>
            <h1>Content for Link 3</h1>
            <p>Additional content here</p>
            <img src="image-url-3" alt="Image 3" />
          </div>
        ),
      },
      {
        title: "Learning Hub",
        content: (
          <div>
            <h1>Content for Link 3</h1>
            <p>Additional content here</p>
            <img src="image-url-3" alt="Image 3" />
          </div>
        ),
      },
      {
        title: "Our Laboratory",
        content: (
          <div>
            <h1>Content for Link 3</h1>
            <p>Additional content here</p>
            <img src="image-url-3" alt="Image 3" />
          </div>
        ),
      },
      {
        title: "Our Social works",
        content: (
          <div>
            <h1>Content for Link 3</h1>
            <p>Additional content here</p>
            <img src="image-url-3" alt="Image 3" />
          </div>
        ),
      },
  ];

  const [activeLink, setActiveLink] = useState(0); // Default to the first link

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <div className="about-main-content-nav">
      <div className="about-main-content-nav-list">
        <ul>
          {contentComponents.map((item, index) => (
            <li key={index}>
              <button onClick={() => handleLinkClick(index)}>{item.title}</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="about-main-content-nav-main-content">
        <div className="about-main-content-nav-main-content-aside">
          {contentComponents[activeLink].content}
        </div>
      </div>
    </div>
  );
};

export default AboutNav;
