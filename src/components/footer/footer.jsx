import React from 'react';
import Fade from 'react-reveal/Fade';
import './footer.css';

import resume from '../../assets/resume.pdf';

const Footer = () => (
  <Fade>
    <div className="footer">
      <div className="credits">
        <div className="top">Designed and developed by</div>
        <div className="bottom">
          <strong>© 2020 Charles Cho </strong>
          in SF
        </div>
      </div>

      <div className="links">
        <a
          className="link"
          href="https://www.linkedin.com/in/charles-cho"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
        <a
          className="link"
          href="https://github.com/charleswcho"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          className="link"
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </div>
  </Fade>
);

export default Footer;
