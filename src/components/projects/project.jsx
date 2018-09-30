import React from 'react';
import PropTypes from 'prop-types';

import './project.css';
import githubIcon from '../../assets/github.png';

const Project = ({ name, live, github, summary, techs }) => (
  <div className="project">
    <div className="header">
      <h2>
        <a href={live} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </h2>

      <a href={github} target="_blank" rel="noopener noreferrer">
        <img src={githubIcon} alt="github" />
      </a>
    </div>

    <p>{summary}</p>

    <ul className="techs">
      {techs.map(tech => (
        <li className="tech" key={tech}>
          {tech}
        </li>
      ))}
    </ul>
  </div>
);

Project.propTypes = {
  name: PropTypes.string.isRequired,
  live: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  techs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Project;
