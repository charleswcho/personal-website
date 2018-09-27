import React from 'react';
import './switch.css';

const Switch = ({ darkTheme, handleToggle }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={darkTheme} onChange={handleToggle}/>
      <span className="slider"></span>
    </label>
  );
}

export default Switch;
