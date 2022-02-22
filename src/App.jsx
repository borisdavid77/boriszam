import './App.css';
import './js/index.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from './components/topbar/Topbar';
import About from './components/aboutme/About';
import Works from './components/works/Works';

function App() {
    return (
        <Router>
            <Topbar></Topbar>
            <About></About>
            <Routes>
                <Route path="/about" element={<About />}></Route>
                <Route path="/works" element={<Works />}></Route>
            </Routes>
        </Router>
    );
}

export default App;