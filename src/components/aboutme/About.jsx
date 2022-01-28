import "./about.scss";
import img from '../../assets/img/personal.png';

export default function About() {
  return (
    <div className="about">
      <div className="flex-column">
        <h1>Hi, I'm Boris Zambrano</h1>
        <h2>Full Stack Developer</h2>
        <p>
        Through constant learning and practice, I develop my projects with high standards.
        </p>
      </div>
      <div className="flex-column div2">
        <img src={img}/>
      </div>
      <div className="flex-column div3">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/boris-david-104b4121a/" target="_blank">
              <i class="uil uil-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/borisdavid77" target="_blank">
              <i class="uil uil-github-alt"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/boris.zb98/" target="_blank">
              <i class="uil uil-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
