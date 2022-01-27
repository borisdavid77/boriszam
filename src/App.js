import './App.css';
import '../src/js/index.js';

function App() {
  return (
    <div className="App">
      <header class="header" id="header">
        <nav class="nav container">
          <a href="" class="nav_logo">Boris Zambrano</a>
          <div class="nav_menu" id="nav-menu">
            <ul class="nav_list grid">
              <li class="nav_item">
                <a class="nav_link">
                  <i class="uil uil-user nav_icon"></i>About me
                </a>
              </li>
              <li class="nav_item">
                <a class="nav_link">
                  <i class="uil uil-file-plus-alt nav_icon"></i>Works
                </a>
              </li>
              <li class="nav_item">
                <a class="nav_link">
                  <i class="uil uil-message nav_icon"></i>Contact
                </a>
              </li>
            </ul>
            <i class="uil uil-times nav_close" id="nav-close"></i>
          </div>

          <div class="nav_btns">


            <i class="uil uil-moon change-theme nav_toggle" id="theme-button"></i>

            <div class="nav_toggle" id="nav-toggle">
              <i class="uil uil-apps"></i>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default App;