import React, { Component } from 'react';
import './project.css';

class Project extends Component {
  render() {
    return (
      <div className="project">
        <h1>{this.props.name}</h1>
        {
          this.props.techs.map((tech, idx) => {
            return <span className="tech" key={idx}>{tech}</span>
          })
        }
      </div>
    );
  }
}

export default Project;
