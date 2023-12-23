import React, { useState } from 'react';
import './input.styles.css';

const MainInput = ({ label, placeholder }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}
      <input
        type="text"
        className="input-field"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default MainInput;
