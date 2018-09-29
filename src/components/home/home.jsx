import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import './home.css';

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

    return (
      <Fade>
        <div className="home">
          <Switch {...this.props} />
          <h1>{currGreeting}</h1>
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
