import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import './skills.css';

import Domain from './domain';

class Skills extends Component {
  constructor() {
    super();

    this.state = {
      languages: [
        'Javascript (ES6+)',
        'TypeScript',
        'HTML',
        'CSS',
        'Sass',
        'Styled',
      ],
      frameworks: [
        'React',
        'GraphQL',
        'React Native',
        'Redux',
        'Node',
        'Angular 2+',
        'Rails',
        'Jest',
      ],
      tools: [
        'VS Code',
        'iTerm2',
        'Bitbucket',
        'Git',
        'Jira',
        'Chrome DevTools',
        'Postman',
      ],
      design: ['Figma', 'Sketch', 'Invision', 'Pen & Paper'],
    };
  }

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
