import React from "react"
import "./about.scss";
import img from '../../assets/img/personal.png';
import Icons from '../icons/Icons';

function About() {
  return (
    <div className="about2">
      <div className="about">
        <div className="flex-column">
          <h1>Hi, I'm Boris Zambrano</h1>
          <h2>Full Stack Developer</h2>
          <p>
            Through constant learning and practice, I develop my projects with high standards.
          </p>
        </div>
        <div className="flex-column div2">
          <img src={img} />
        </div>
        <Icons />
      </div>
    </div>
  );
}
export default About;