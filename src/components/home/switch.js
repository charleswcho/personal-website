import React, { Component } from 'react';
import './switch.css';

class Switch extends Component {
  render() {
    return (
      <label className="switch">
        <input type="checkbox" onChange={this.props.handleToggle}/>
        <span className="slider"></span>
      </label>
    );
  }
}

export default Switch;
