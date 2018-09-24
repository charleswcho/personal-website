import React, { Component } from 'react';
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
   * @param {string} title - The title of the book.
   * @return {void}
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
      <div className="home">
        <h1>{this.state.currGreeting}</h1>
      </div>
    );
  }
}

export default Home;
