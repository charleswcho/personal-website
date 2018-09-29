import React from 'react';
import PropTypes from 'prop-types';
import './switch.css';

const Switch = ({ darkTheme, handleToggle }) => (
  <label className="switch">
    <input type="checkbox" checked={darkTheme} onChange={handleToggle} />
    <span className="slider" />
  </label>
);

Switch.propTypes = {
  darkTheme: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default Switch;
