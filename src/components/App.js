import React, { Component } from 'react';
import './App.css';

import Home from './home/home';
import About from './about/about';
import Skills from './skills/skills';
import Projects from './projects/projects';
import Footer from './footer/footer';

class App extends Component {
  state = {
    darkTheme: false,
  }

  componentDidMount() {
    this.setState({ darkTheme: this.defaultDark() })
  }

  /**
   * View logic methods
   */

  defaultDark = () => {
    const date = new Date();
    const hours = date.getHours();
    // Darkmode default from 6pm to 6am
    return (hours >= 18 || hours <= 6);
  }

  /**
   * Event handler methods
   */

  handleToggle = (event) => {
    this.setState({ darkTheme: event.target.checked })
  }

  render() {
    let className = 'App';

    if (this.state.darkTheme) {
      className += ' dark';
    }

    return (
      <div className={className}>
        <Home handleToggle={this.handleToggle}/>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
