import './App.css';
import './js/index.js';
import Topbar from './components/topbar/Topbar';
import About from './components/aboutme/About';
import Contact from './components/contact/Contact';
import Works from './components/works/Works';


function App() {
  return (
    <div className="App">
      <Topbar/>
      <div>
        <About/>
        <Contact/>
        <Works/>
      </div>
    </div>
  );
}

export default App;