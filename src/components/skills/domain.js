import React from 'react';
import './domain.css';

const Domain = ({ name, items }) => {
  return (
    <div className="domain">
      <h3>{name}</h3>

      <ul>
        {
          items.map((item, idx) => {
            return (<li className="domain-item" key={idx}>{item}</li>)
          })
        }
      </ul>
    </div>
  );
}

export default Domain;
