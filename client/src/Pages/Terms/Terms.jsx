import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  const [formData, setFormData] = useState({
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.agreeToTerms) {
      console.log('User agreed to terms and conditions.');
    } else {
      console.error('User must agree to terms and conditions.');
    }
  };
  const TermsandCondition = [
    {
      termTitle: 'Acceptance of Terms',
      termLists: [
        {
          content: 'By accessing or using the TechFarming website, you agree to comply with and be bound by the following terms and conditions. If you do not agree with any part of these terms, you may not use our services.',
        },
      ],
    },
    {
      termTitle: 'User Accounts',
      termLists: [
        {
          list: [
            'To access certain features of the website, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information.',
            'You agree to provide accurate and complete information when creating an account. TechFarming reserves the right to suspend or terminate accounts with inaccurate information.'
          ],
        },
      ],
    },
    {
      termTitle: 'Content and Intellectual Property',
      termLists: [
        {
          list: [
            'All content on the TechFarming website, including text, images, graphics, and logos, is the property of TechFarming and is protected by intellectual property laws.',
            'Users may not reproduce, distribute, modify, or republish any content from the TechFarming website without explicit permission.',
          ],
        }
      ],
    },
    {
      termTitle: 'Privacy Policy',
      termLists: [
        {
          content: `Your use of the TechFarming website is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices.`,
        },
      ],
    },
    {
      termTitle: 'Prohibited Activities',
      termLists: [
        {
          content: 'You agree not to engage in any of the following activities:',
        },
        {
          list: [
            'Violating laws or regulations.',
            'Impersonating others or providing false information.',
            "Uploading malicious code or interfering with the website's functionality.",
          ]
        },
      ],
    },
    {
      termTitle: 'Termination',
      termLists: [
        {
          content: 'TechFarming reserves the right to suspend or terminate your account at any time for violating these terms or for any other reason at our discretion.',
        },
      ],
    },
    {
      termTitle: 'Disclaimers',
      termLists: [
        {
          list: [
            'TechFarming provides the website and its services "as is" and makes no warranties regarding the accuracy, completeness, or reliability of the content.',
            'TechFarming is not liable for any direct, indirect, incidental, consequential, or punitive damages resulting from your use of the website.'
          ],
        },
      ],
    },
    {
      termTitle: 'Changes to Terms',
      termLists: [
        {
          content: 'TechFarming reserves the right to update or modify these terms at any time without notice. Continued use of the website after such changes constitutes acceptance of the modified terms.',
        },
      ],
    },
    {
      termTitle: 'Contact Information',
      termLists: [
        {
          content: 'If you have any questions or concerns about these terms, please contact us at contact@techfarming.com.',
        },
      ],
    },
  ];

  return (
    <div id='terms-and-conditions'>
      <div className="terms-container">
        <h1>Terms and Conditions</h1>
        <ol>
          {TermsandCondition.map((term, index) => (
            <li key={index}>
              <h2>{term.termTitle}</h2>
              {term.termLists.map((item, itemIndex) => (
                <React.Fragment key={itemIndex}>
                  {item.content && <p>{item.content}</p>}
                  {item.list && (
                    <ul>
                      {item.list.map((listItem, listItemIndex) => (
                        <li key={listItemIndex}>{listItem}</li>
                      ))}
                    </ul>
                  )}
                </React.Fragment>
              ))}
            </li>
          ))}
        </ol>
        <div>
          <input
            type="checkbox"
            id="agreeToTerms"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
          <label htmlFor="agreeToTerms">
            I have read and agree to the <Link to="/terms-and-conditions">Terms and Conditions</Link>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Terms;
