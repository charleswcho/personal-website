import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import './about.css';

class About extends Component {
  render() {
    return (
      <Fade>
        <div className="about">
          <div>Front end engineer</div>
          <div>I like building things</div>
          <div>Legos &rarr; Carpentry, Construction &rarr; iOS &rarr; Web</div>
        </div>
      </Fade>
    );
  }
}

export default About;
