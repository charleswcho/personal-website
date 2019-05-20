import React from 'react';
import Fade from 'react-reveal/Fade';

import './about.css';
import resume from '../../assets/resume.pdf';
import arrow from '../../assets/right-arrow.png';

const About = () => (
  <Fade>
    <div className="about">
      <h1>About</h1>

      <h3>I like building things</h3>

      <p>Legos &rarr; Construction &rarr; iOS &rarr; Web Apps</p>

      <p>
        I&#39;ve always enjoyed building things. From playing with legos in my
        childhood, to carpentry &amp; construction in high school, to iOS and
        finally
        <strong> web app development </strong>
        now, creating things is my passion.
      </p>

      <p>
        I&#39;m currently a Software Engineer at
        <strong> Leantaas </strong>
        building tools to help cancer patients get the care they need.
      </p>

      <a
        className="resume"
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
        <img src={arrow} alt="right arrow" />
      </a>
    </div>
  </Fade>
);

export default About;
