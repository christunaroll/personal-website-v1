import './App.css';
import Home from './components/Home.js';
import Footer from './components/Footer.js';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

//Routes = Switch
function App() {
  return (
    <div className="App">
        <Router>
        {/* Middle Home Page Routes*/}
        <Navbar/>
          <Routes>
            <Route path = "/" element={<Home/>}/>
            <Route path = "/about" element={<About/>}/>
            <Route path = "/works" element={<Projects/>}/>
          </Routes>
        {/* End Middle Home Page Routes*/}
        <Footer />
        </Router>
    </div>
  );
}

export default App;
