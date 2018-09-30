import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import './skills.css';

import Domain from './domain';

class Skills extends Component {
  state = {
    languages: [
      'Javascript (ES6+)',
      'TypeScript',
      'HTML',
      'CSS',
      'Sass',
      'SQL',
    ],
    frameworks: [
      'React',
      'React Native',
      'Redux',
      'Angular 2+',
      'jQuery',
      'Jest',
    ],
    tools: ['Atom', 'iTerm2', 'Git', 'Bitbucket', 'Chrome DevTools', 'Postman'],
    design: ['Sketch', 'Invision', 'Pen & Paper'],
  };

  render() {
    const { languages, frameworks, tools, design } = this.state;

    return (
      <Fade>
        <div className="skills">
          <h1>Skills</h1>

          <div className="domains">
            <Domain name="Languages" items={languages} />
            <Domain name="Frameworks" items={frameworks} />
            <Domain name="Tools" items={tools} />
            <Domain name="Design" items={design} />
          </div>
        </div>
      </Fade>
    );
  }
}

export default Skills;
