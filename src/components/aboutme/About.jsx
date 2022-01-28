import "./about.scss";
import img from '../../assets/img/personal.png';

export default function About() {
  return (
    <div className="about">
      <div id="div1">
        <h1>Hi, I'm Boris Zambrano</h1>
        <h2>Full Stack Developer</h2>
        <p>
        Through constant learning and practice, I develop my projects with high standards.
        </p>
      </div>
      <div id="div2">
        <img src={img}/>
      </div>
    </div>
  );
}
