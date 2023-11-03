import React, { useState } from 'react'
import './ImmediateStyles.css';
import 'animate.css';

const AddSocialAccount = ({ onSocialAccountAdded }) => {

    const [socialMediaAccounts, setSocialMediaAccounts] = useState([
        { platform: '', accountURL: '' },
      ]);

    const handleAddSocialAccount = () => {
        onSocialAccountAdded(socialMediaAccounts);
    };

    const addSocialMediaAccount = () => {
        setSocialMediaAccounts([...socialMediaAccounts, 
        { 
            platform: '', 
            accountURL: '' 
        }
    ]);
    };

    const handlePlatformChange = (index, value) => {
        const updatedAccounts = [...socialMediaAccounts];
        updatedAccounts[index].platform = value;
        setSocialMediaAccounts(updatedAccounts);
    };

    const handleURLChange = (index, value) => {
        const updatedAccounts = [...socialMediaAccounts];
        updatedAccounts[index].accountURL = value;
        setSocialMediaAccounts(updatedAccounts);
    };

    const submitSocialMediaAccounts = () => {
        // Assuming you have a function to send data to your server here
        // You can iterate through socialMediaAccounts and send each account to your server
        socialMediaAccounts.forEach(async (account) => {
          try {
            const response = await fetch('/api/digital-accounts', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(account),
            });
    
            if (response.ok) {
              // Account added successfully
            } else {
              // Handle errors
              console.error('Failed to add social account.');
            }
          } catch (error) {
            console.error('Error:', error);
          }
        });
    
        // Notify the parent component that social accounts have been added
        onSocialAccountAdded(socialMediaAccounts);
      };

    return (
        <div id='add-social-account'>
            <div className="social-account-container">
                {socialMediaAccounts.map((account, index) => (
                    <div key={index} className='child-form-item'>
                        <select
                            value={account.platform}
                            onChange={(e) => handlePlatformChange(index, e.target.value)}
                        >
                            <option value="">Select Platform</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Instagram">Instagram</option>
                            <option value="Twitter">Twitter</option>
                            <option value="LinkedIn">LinkedIn</option>
                            <option value="YouTube">YouTube</option>
                            <option value="add-more">Others</option>
                        </select>
                        <input
                            type="text"
                            value={account.accountURL}
                            onChange={(e) => handleURLChange(index, e.target.value)}
                            placeholder="Account URL or Username"
                            autoComplete='on'
                            title='enter the account URL or username'
                            name="accountURL"
                            id="accountURL"
                        />
                    </div>
                ))}
                <div className="button">
                    <button onClick={addSocialMediaAccount} className='animate__shakeX'>Add More</button>
                    <button onClick={submitSocialMediaAccounts} className='animate__shakeX'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default AddSocialAccount