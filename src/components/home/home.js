import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import './home.css';

import Switch from './switch';

class Home extends Component {
  state = {
    currGreeting: 'Hello',
    currIdx: 0,
    greetings: ['Hola', '今日は', 'Bonjour', 'Ciao',  '안녕하세요'],
  }

  componentDidMount() {
    this.cycleThroughGreetings();
  }

  /**
   * Event handler methods
   */

  cycleThroughGreetings = () => {
    const interval = setInterval(() => {
      if (this.state.currIdx < this.state.greetings.length) {
        this.setState((prevState) => {
          return {
            currGreeting: prevState.greetings[prevState.currIdx],
            currIdx: prevState.currIdx + 1
          }
        });
      } else {
        clearInterval(interval);
        this.setState({ currGreeting: "I'm Charles" });
      }
    }, 1000);
  }

  render() {
    return (
      <Fade>
        <div className="home">
          <Switch {...this.props}/>
          <h1>{this.state.currGreeting}</h1>
        </div>
      </Fade>
    );
  }
}

export default Home;
