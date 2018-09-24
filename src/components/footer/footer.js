import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div>Made with love in SF</div>

        <div>
          <span>Github</span>
          <span>Linkedin</span>
          <span>Resume</span>
        </div>

        <div>Copyright Charles W. Cho 2018</div>
      </div>
    );
  }
}

export default Footer;
