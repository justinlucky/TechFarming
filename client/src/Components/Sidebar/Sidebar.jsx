import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { FaCaretDown, FaCaretRight, FaCog, FaHamburger, FaMoon, FaSun } from 'react-icons/fa';

const Sidebar = () => {
    const [isProductsSubmenuOpen, setIsProductsSubmenuOpen] = useState(false);
    const [isServicesSubmenuOpen, setIsServicesSubmenuOpen] = useState(false);
    const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);
    const [isSettingMenu, setIsSettingMenu] = useState(false);
    const [isShowMoreOpen, setIsShowMoreOpen] = useState(false);
    const [isUserSignedIn, setIsUserSignedIn] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);

    const products = [
        {
            text: 'Organic Vegetables',
            path: '/products/organic-products'
        },
        {
            text: 'Crops',
            path: '/products/crops',
        },
        {
            text: 'Advanced Machines',
            path: '/products/advanced-machines',
        },
        {
            text: 'Harvesting Robots',
            path: '/products/harvesting-robots',
        },
        {
            text: 'Organics Manure',
            path: '/products/organics-manure',
        },
        {
            text: 'Organics Seeds',
            path: '/products/organics-seeds',
        },
        {
            text: 'Natural Resources',
            path: '/products/natural-resources',
        },
        {
            text: 'Hydroponic Resources',
            path: '/products/hydroponic-resources',
        },
        {
            text: 'Irrigation Resources',
            path: '/products/irrigation-resources',
        },
    ];

    const services = [
        {
            text: 'Pest Scanning',
            path: 'services/pest-scanning',
        },
        {
            text: 'Weed Control',
            path: 'services/weed-control',
        },
        {
            text: 'Hydroponics',
            path: 'services/hydroponics',
        },
        {
            text: 'Aquaponics',
            path: 'services/aquaponics',
        },
        {
            text: 'Soil Parameters Testing',
            path: 'services/soil-parameters-testing',
        },
        {
            text:'Green House Farming',
            path: 'services/green-house-farming',
        },
        {
            text:'AI and ML Services',
            path: 'services/ai-and-ml-services',
        },
    ];

    const Languages = [
        'English',
        'Hindi',
        'Manipuri',
        'Rongmei',
        'Telugu',
    ]

    const toggleSignUP = () => {
        setIsSignUp(!isSignUp);
    }

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const toggleShowMore = () => {
        setIsShowMoreOpen(!isShowMoreOpen);
    };

    const toggleSettingMenu = () => {
        setIsSettingMenu(!isSettingMenu);
    }

    const toggleProductsSubmenu = () => {
        setIsProductsSubmenuOpen(!isProductsSubmenuOpen);
        setIsServicesSubmenuOpen(false); // Close other submenus
    };

    const toggleServicesSubmenu = () => {
        setIsServicesSubmenuOpen(!isServicesSubmenuOpen);
        setIsProductsSubmenuOpen(false); // Close other submenus
    };

    const toggleMainMenu = () => {
        setIsMainMenuOpen(!isMainMenuOpen);
    };

    return (
        <div id="sidebar">
            <button className="menu-toggle" onClick={toggleMainMenu}>
                <FaHamburger />All
            </button>
            {isMainMenuOpen && (
                <ul className="main-menu">
                    <div className="logo">
                        <Link to='/home'>
                            <h2>Tech<span>Farming</span></h2>
                        </Link>
                    </div>
                    <li><Link to='/home'>Home <FaCaretRight /></Link></li>
                    <li><Link to='about-us'>About <FaCaretRight /></Link></li>
                    <li>
                        <div className="button-line">   <button className="products-toggle-button" onClick={toggleProductsSubmenu}>
                            Products
                            <FaCaretDown /></button>
                        </div>
                        {isProductsSubmenuOpen && (
                            <ul className="sub-menu">
                                {isShowMoreOpen ? (
                                    products.map((product, index) => (
                                        <li key={index}>
                                            <Link to={product.path}>{product.text}<FaCaretRight /></Link>
                                        </li>
                                    ))
                                ) : (
                                    products.slice(0, 4).map((product, index) => (
                                        <li key={index}>
                                            <Link to={product.path}>{product.text}<FaCaretRight /></Link>
                                        </li>
                                    ))
                                )}
                            </ul>
                        )}
                        <div className="show-more">
                            {isProductsSubmenuOpen && (
                                <button onClick={toggleShowMore} className='show-more-less'>
                                    {isShowMoreOpen ? `Show Less` : 'Show More'}
                                </button>
                            )}
                        </div>
                    </li>
                    <li>
                        <div className="button-line">
                            <button className="service-toggle-button" onClick={toggleServicesSubmenu}>
                                Services
                                <FaCaretDown />
                            </button>
                        </div>
                        {isServicesSubmenuOpen && (
                            <ul className="sub-menu">
                                {isShowMoreOpen ? (
                                    services.map((service, index) => (
                                        <li key={index}><Link to={service.path}>{service.text}<FaCaretRight /></Link></li>
                                    ))
                                ) : (
                                    services.slice(0, 4).map((service, index) => (
                                        <li key={index}>
                                            <Link to={service.path}>{service.text}<FaCaretRight /></Link>
                                        </li>
                                    ))
                                )}
                            </ul>
                        )}
                        <div className="show-more">
                            {isServicesSubmenuOpen && (
                                <button onClick={toggleShowMore} className='show-more-less'>
                                    {isShowMoreOpen ? `Show Less` : 'Show More'}
                                </button>
                            )}
                        </div>
                    </li>
                    <li>
                        <Link to='/notification'>Notification
                            <FaCaretRight />
                        </Link>
                    </li>
                    <li>
                        <Link to='/chat'>Chat
                            <FaCaretRight />
                        </Link>
                    </li>
                    <li>
                        <Link to='/membership'>Membership
                            <FaCaretRight />
                        </Link>
                    </li>
                    <li>
                        <Link to='/FAQ'>FAQ's
                            <FaCaretRight />
                        </Link>
                    </li>
                    <li>
                        <button className='setting-menu-button' onClick={toggleSettingMenu}> Help & Settings <FaCog /></button>
                        {isSettingMenu && (
                            <ul className="setting-menu">
                                <li><Link to='/user/account'>Your Account <FaCaretRight /></Link></li>
                                <li><Link to='customers-services'>Customer Services <FaCaretRight /></Link></li>
                                <li>
                                    {isUserSignedIn ? (
                                        <li><Link to='/dashboard'>Dashboard <FaCaretRight /></Link></li>
                                    ) : (
                                        <li>
                                            <Link to='/login'>Log in<FaCaretRight /></Link>
                                            <button onClick={toggleSignUP} className='button-signup'>Sign Up <FaCaretDown/></button>
                                            {isSignUp && (
                                                <ul>
                                                    <li>
                                                        <Link to='/user/signup'>Sign Up as User<FaCaretRight /></Link>
                                                    </li>
                                                    <li>
                                                        <Link to='/seller/signup'>Sign Up as Seller<FaCaretRight /></Link>
                                                    </li>
                                                </ul>
                                            )}
                                        </li>
                                    )}
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <select name="" id="">
                            {Languages.map((language, index) => (
                                <option value={language}>{language}</option>
                            ))};
                        </select>
                    </li>
                    <li>
                        <button onClick={toggleDarkMode} className='dark-light-mode'>
                            {isDarkMode ? <FaSun /> : <FaMoon />}
                        </button>
                    </li>
                    <li>
                        <div className="account"></div>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Sidebar;