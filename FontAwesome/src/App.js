import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light')

  let myDarkModeFunction = () => {
    console.log("I am runnig onclick")
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
    else {
      setMode('dark')
      document.body.style.backgroundColor = '#1e1e1e9c'
    }
  }

  return (
    <div>
      <Router>
        <Navbar mode={mode} myDarkModeFunction={myDarkModeFunction} />
        <Routes>
          <Route exact path="/" element={<Home heading="Enter text" mode={mode} />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
