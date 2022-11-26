import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Unauthenticated/Home';
import Navbar from './components/Bars/Navbar';
import Footer from './components/Bars/Footer';
import React from "react"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
