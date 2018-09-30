import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

import './home.css';

import darkSun from '../../assets/dark-sun.png';
import darkMoon from '../../assets/dark-moon.png';
import sun from '../../assets/sun.png';
import moon from '../../assets/moon.png';

import Switch from './switch';

class Home extends Component {
  state = {
    currGreeting: 'Hello',
    currIdx: 0,
    greetings: ['Hola', '今日は', 'Bonjour', 'Ciao', '안녕하세요'],
  };

  componentDidMount() {
    this.cycleThroughGreetings();
  }

  /**
   * Event handler methods
   */

  cycleThroughGreetings() {
    const interval = setInterval(() => {
      const { currIdx, greetings } = this.state;

      if (currIdx < greetings.length) {
        this.setState(prevState => ({
          currGreeting: prevState.greetings[prevState.currIdx],
          currIdx: prevState.currIdx + 1,
        }));
      } else {
        clearInterval(interval);
        this.setState({ currGreeting: "I'm Charles" });
      }
    }, 1000);
  }

  render() {
    const { currGreeting } = this.state;
    const { darkTheme } = this.props;

    return (
      <Fade>
        <div className="home">
          <div className="switch-container">
            <img className="icon" src={darkTheme ? sun : darkSun} alt="sun" />
            <Switch {...this.props} />
            <img
              className="icon"
              src={darkTheme ? moon : darkMoon}
              alt="moon"
            />
          </div>

          <h1 className="intro">{currGreeting}</h1>
        </div>
      </Fade>
    );
  }
}

Home.propTypes = {
  darkTheme: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default Home;
