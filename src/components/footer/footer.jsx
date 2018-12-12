import React from 'react';
import Fade from 'react-reveal/Fade';
import './footer.css';

const Footer = () => (
  <Fade>
    <div className="footer">
      <div className="credits">
        <span className="top">Designed and Developed by</span>
        <span className="bottom">
          <strong>Charles Cho </strong>
          in SF 2018
        </span>
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
          href={`${process.env.PUBLIC_URL}/resume.pdf`}
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
