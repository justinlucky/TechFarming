import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const WithoutLogin = ({ onLoginStatusChange }) => {
    const [userSignup] = useState(false);
    const navigate = useNavigate();

    const handleSignUp = (userType) => {
        onLoginStatusChange(true, userType);
        if (userType === 'buyer') {
            navigate('/api/signup/users');
        } else if (userType === 'seller') {
            navigate('/api/signup/sellers');
        }
    };
    return (
        <div className='dashboard-without-login'>
            <h1>Welcome to the Dashboard, Dear Guest!</h1>
            <p>Please log in or sign up to access more features.</p>
            <div className="dashboard-without-login-buttons">
                <button onClick={() => handleSignUp('buyer')}>Sign Up as Basic User</button>
                <button onClick={() => handleSignUp('seller')}>Sign Up as Seller</button>
            </div>

            {userSignup && (
                <p>
                    Already a seller? <Link to="/api/login/sellers">Log in as Seller</Link>
                </p>
            )}
        </div>
    )
}

export default WithoutLogin