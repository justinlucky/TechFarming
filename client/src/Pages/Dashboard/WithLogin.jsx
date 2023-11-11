import React from 'react'
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const WithLogin = ({ onLoginStatusChange }) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        onLoginStatusChange(false);
        navigate('/home');
    };
    const { user } = useAuth();
    return (
        <div>
            <h1>Welcome to the Dashboard,!</h1>
            <button onClick={handleLogout}>Logout</button>
            <p>Your Farm Overview</p>
            <div className="dashboard-content">
                <div className="dashboard-content-section">
                    <h3>Farm Statistics</h3>
                </div>

                <div className="dashboard-content-section">
                    <h3>Order History</h3>
                </div>

                <div className="dashboard-content-section">
                    <h3>Recommended Products</h3>
                </div>

                <div className="dashboard-content-section">
                    <h3>Weather Forecast</h3>
                </div>
                <div className="dashboard-content-section">
                    <h3>Services and Data</h3>
                </div>
                <div className="dashboard-content-section">
                    <h3>WishList</h3>
                </div>
            </div>
        </div>
    )
}

export default WithLogin;