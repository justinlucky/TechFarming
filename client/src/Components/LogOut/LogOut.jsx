import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LogOut.css';

const LogOut = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const handleLogOut = () => {
        setShowModal(true);
    };

    const handleConfirmLogout = () => {
        alert('Hope you have a good time! For now we are helping you, Logging out...');
        setShowModal(false);
        navigate('/');
    };

    const handleCancelLogout = () => {
        setShowModal(false);
    };

    return (
        <div id='logout-sad'>
            <button className='logout' onClick={handleLogOut}>Log Out</button>

            {showModal && (
                <div className="logout-modal">
                    <div className="logout-modal-content">
                        <p>Are you sure you want to log out?</p>
                        <div className="modal-buttons">
                            <button onClick={handleConfirmLogout}>Log Out</button>
                            <button onClick={handleCancelLogout}>Stay</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LogOut;
