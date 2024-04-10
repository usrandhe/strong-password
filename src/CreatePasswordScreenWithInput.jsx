import React, { useState } from 'react';
import './CreatePasswordScreen.css'; // Import CSS file for styling

const PasswordInput = ({ value, onChange }) => {
  return (
    <input
      type="password"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Enter your password"
      className="password-input"
    />
  );
};

const PasswordCriteria = ({ password }) => {
  const criteria = [
    { label: 'At least 8 characters', isValid: password.length >= 8 },
    { label: 'Contains uppercase letters', isValid: /[A-Z]/.test(password) },
    { label: 'Contains lowercase letters', isValid: /[a-z]/.test(password) },
    { label: 'Contains numbers', isValid: /[0-9]/.test(password) },
    {
      label: 'Contains special characters',
      isValid: /[^A-Za-z0-9]/.test(password),
    },
  ];

  return (
    <div>
      <h3>Password Criteria:</h3>
      <ul className="criteria-list">
        {criteria.map((criterion, index) => (
          <li key={index} className={criterion.isValid ? 'valid' : 'invalid'}>
            {criterion.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

const CreatePasswordScreenWithInput = () => {
  const [password, setPassword] = useState('');

  return (
    <div className="container">
      <h1>Create a Strong Password</h1>
      <PasswordInput value={password} onChange={setPassword} />
      <PasswordCriteria password={password} />
    </div>
  );
};

export default CreatePasswordScreenWithInput;
