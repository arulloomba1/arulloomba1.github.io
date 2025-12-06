import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Terminal from './components/Terminal';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Robotics from './components/Robotics';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/terminal" element={<Terminal />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/robotics" element={<Robotics />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
