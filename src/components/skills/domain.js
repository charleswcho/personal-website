import React, { Component } from 'react';
import './domain.css';

class Domain extends Component {
  render() {
    return (
      <div className="domain">
        <h1>{this.props.name}</h1>
        {
          this.props.items.map((item, idx) => {
            return (<div className="domain-item" key={idx}>{item}</div>)
          })
        }
      </div>
    );
  }
}

export default Domain;
