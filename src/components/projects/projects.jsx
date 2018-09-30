import React, { Component } from 'react';

import Fade from 'react-reveal/Fade';
import './projects.css';

import Project from './project';

class Projects extends Component {
  state = {
    projects: [
      {
        name: 'Readit',
        live: 'https://charleswcho.github.io/readit/',
        github: 'https://github.com/charleswcho/readit',
        summary: 'Simple Reddit clone with tag filtering.',
        techs: ['React', 'Redux', 'ES6', 'Jest', 'SASS'],
      },
      {
        name: 'Realloc',
        live: 'https://realloc.herokuapp.com',
        github: 'https://github.com/charleswcho/realloc',
        summary: `Finacial tool helping to modify your portfolio base on risk
          profile.  Responsive design, and also a React Native iOS version`,
        techs: ['React', 'Flux', 'React Native', 'ES6', 'SASS'],
      },
      {
        name: 'Google-Yelp',
        live: 'https://charleswcho.github.io/Google-Yelp/',
        github: 'https://github.com/charleswcho/Google-Yelp',
        summary: `Inpiration from Yelp but powered by Google Map's API
          specifically its Geocoder, PlacesService, and Autocomplete
          functionality.`,
        techs: ['React', 'Flux', 'ES6'],
      },
    ],
  };

  render() {
    const { projects } = this.state;

    return (
      <Fade>
        <div className="projects">
          <h1>Projects</h1>

          {projects.map(project => (
            <Project
              key={project.name}
              name={project.name}
              live={project.live}
              github={project.github}
              summary={project.summary}
              techs={project.techs}
            />
          ))}
        </div>
      </Fade>
    );
  }
}

export default Projects;
