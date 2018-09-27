import React from 'react';
import PropTypes from 'prop-types';
import './domain.css';

const Domain = ({ name, items }) => (
  <div className="domain">
    <h3>{name}</h3>

    <ul>
      {items.map(item => (
        <li className="domain-item" key={item}>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

Domain.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Domain;
