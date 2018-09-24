import React, { Component } from 'react';
import './projects.css';

import Project from './project';

class Projects extends Component {
  state = {
    projects: [
      { name: 'Readit', techs: ['React', 'Redux', 'ES6', 'Jest', 'SASS'] },
      { name: 'Realloc', techs: ['React', 'Flux', 'React Native', 'ES6', 'SASS'] },
      { name: 'Google-Yelp', techs: ['React', 'Flux', 'ES6'] }
    ],
  }

  render() {
    return (
      <div className="projects">
        {
          this.state.projects.map((project, idx) => {
            return <Project key={idx} name={project.name} techs={project.techs}/>
          })
        }
      </div>
    );
  }
}

export default Projects;
