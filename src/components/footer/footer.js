import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <Fade>
        <div className="footer">
          <div>Made with love in SF</div>

          <div>
            <span>Github</span>
            <span>Linkedin</span>
            <span>Resume</span>
          </div>

          <div>Copyright Charles W. Cho 2018</div>
        </div>
      </Fade>
    );
  }
}

export default Footer;
