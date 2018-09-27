import React from 'react';
import PropTypes from 'prop-types';

import './project.css';

const Project = ({ name, techs }) => (
  <div className="project">
    <h1>{name}</h1>
    {techs.map(tech => (
      <span className="tech" key={tech}>
        {tech}
      </span>
    ))}
  </div>
);

Project.propTypes = {
  name: PropTypes.string.isRequired,
  techs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Project;
