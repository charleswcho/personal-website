import React, { Component } from 'react';
import './skills.css';

import Domain from './domain';

class Skills extends Component {
  state = {
    languages: ['Javascript', 'TypeScript', 'HTML', 'CSS', 'SASS', 'Bash'],
    frameworks: ['React', 'Redux', 'Angular 5', 'Bootstrap'],
    tools: ['Git', 'Bitbucket', 'Chrome DevTools', 'Postman', 'Atom'],
    hobbies: ['Snowboarding', 'Bouldering']
  }

  render() {
    return (
      <div className="skills">
        <Domain name="Languages" items={this.state.languages}></Domain>
        <Domain name="Frameworks" items={this.state.frameworks}></Domain>
        <Domain name="Tools" items={this.state.tools}></Domain>
        <Domain name="Hobbies" items={this.state.hobbies}></Domain>
      </div>
    );
  }
}

export default Skills;
