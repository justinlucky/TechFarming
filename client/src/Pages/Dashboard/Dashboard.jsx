import React, { useState } from 'react';
import WithLogin from './WithLogin';
import WithoutLogin from './WithoutLogin';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const [isUserSignUp, setIsUserSignUp] = useState(false);
  const navigate = useNavigate();

  const handleLoginStatusChange = (status) => {
    setIsUserSignUp(status);
    navigate(status ? '/dashboard/without-login' : '/dashboard/with-login');
  };

  return (
    <div>
      {
        isUserSignUp ? (
          <WithLogin onLoginStatusChange={handleLoginStatusChange} />
        ) : (
          <WithoutLogin onLoginStatusChange={handleLoginStatusChange} />
        )
      }
    </div>
  );
};

export default Dashboard;
