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
        techs: ['React', 'Redux', 'ES6', 'Jest', 'Sass'],
      },
      {
        name: 'Realloc',
        live: 'https://realloc.herokuapp.com',
        github: 'https://github.com/charleswcho/realloc',
        summary: `Finacial tool that helps you modify your portfolio based on your risk
          profile. iOS version created using React Native.`,
        techs: [
          'React',
          'React Native',
          'React router',
          'Flux',
          'ES6',
          'Sass',
          'Jest',
          'Enzyme',
          'Heroku',
        ],
      },
      {
        name: 'Google-Yelp',
        live: 'https://charleswcho.github.io/Google-Yelp/',
        github: 'https://github.com/charleswcho/Google-Yelp',
        summary: `Inpiration from Yelp but powered by Google's Maps Platform
          specifically its Geocoder, PlacesService, and Autocomplete
          functionality.`,
        techs: ['React', 'Flux', 'ES6', 'Google Maps Platform'],
      },
    ],
  };

  render() {
    const { projects } = this.state;

    return (
      <Fade>
        <div className="projects">
          <h1>Projects</h1>

          <ul className="content">
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
          </ul>
        </div>
      </Fade>
    );
  }
}

export default Projects;
