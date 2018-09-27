import React, { Component } from 'react';

import Fade from 'react-reveal/Fade';
import './projects.css';

import Project from './project';

class Projects extends Component {
  state = {
    projects: [
      { name: 'Readit', techs: ['React', 'Redux', 'ES6', 'Jest', 'SASS'] },
      {
        name: 'Realloc',
        techs: ['React', 'Flux', 'React Native', 'ES6', 'SASS'],
      },
      { name: 'Google-Yelp', techs: ['React', 'Flux', 'ES6'] },
    ],
  };

  render() {
    const { projects } = this.state;

    return (
      <Fade>
        <div className="projects">
          {projects.map(project => (
            <Project
              key={project.name}
              name={project.name}
              techs={project.techs}
            />
          ))}
        </div>
      </Fade>
    );
  }
}

export default Projects;
