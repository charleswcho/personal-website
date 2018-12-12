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
  };

  componentDidMount() {
    this.setState({
      darkTheme: this.defaultDark(),
    });
  }

  defaultDark = () => {
    const date = new Date();
    const hours = date.getHours();
    // Darkmode default from 5pm to 6am
    return hours >= 17 || hours <= 6;
  };

  /**
   * Event handler methods
   */

  handleToggle = event => {
    this.setState({ darkTheme: event.target.checked });
  };

  render() {
    const { darkTheme } = this.state;
    let className = 'App';

    if (darkTheme) {
      className += ' dark';
    }

    return (
      <div className={className}>
        <Home darkTheme={darkTheme} handleToggle={this.handleToggle} />
        <div className="section">
          <About />
        </div>

        <div className="section">
          <Skills />
        </div>

        <div className="section">
          <Projects />
        </div>

        <div className="section">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
