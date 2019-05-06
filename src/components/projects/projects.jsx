import React, { Component } from 'react';

import Fade from 'react-reveal/Fade';
import './projects.css';

import Project from './project';

class Projects extends Component {
  state = {
    projects: [
      {
        name: 'Readit v2',
        live: 'https://charleswcho.github.io/readit-v2/',
        github: 'https://github.com/charleswcho/readit-v2',
        summary: 'Readit built with the new React Hooks API',
        techs: ['React', 'React Hooks', 'Material UI', 'ES6+', 'Sass'],
      },
      {
        name: 'Readit',
        live: 'https://charleswcho.github.io/readit/',
        github: 'https://github.com/charleswcho/readit',
        summary: 'Simple Reddit clone with tag filtering.',
        techs: ['React', 'Redux', 'Material UI', 'ES6+', 'Sass', 'Jest'],
      },
      {
        name: 'Realloc',
        live: 'https://charleswcho.github.io/Realloc/',
        github: 'https://github.com/charleswcho/realloc',
        summary: `Finacial tool that helps you modify your portfolio based on your risk
          profile. iOS version created using React Native.`,
        techs: [
          'React',
          'React Native',
          'React router',
          'Flux',
          'Material UI',
          'ES6+',
          'Sass',
          'Jest',
          'Enzyme',
        ],
      },
      {
        name: 'Google Yelp',
        live: 'https://charleswcho.github.io/google-yelp/',
        github: 'https://github.com/charleswcho/google-yelp',
        summary: `Inpiration from Yelp but powered by Google's Maps Platform
          specifically its Geocoder, PlacesService, and Autocomplete
          functionality.`,
        techs: ['React', 'React Hooks', 'ES6+', 'Google Maps Platform'],
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
