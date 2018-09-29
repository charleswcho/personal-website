import React from 'react';
import PropTypes from 'prop-types';

import './project.css';

const Project = ({ name, summary, techs }) => (
  <div className="project">
    <h2>{name}</h2>

    <p>{summary}</p>

    <div className="techs">
      {techs.map(tech => (
        <span className="tech" key={tech}>
          {tech}
        </span>
      ))}
    </div>
  </div>
);

Project.propTypes = {
  name: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  techs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Project;
