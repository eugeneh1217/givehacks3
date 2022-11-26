import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Unauthenticated/Home';
import Navbar from './components/Bars/Navbar/Navbar';
import Footer from './components/Bars/Footer';
import React from "react"
import { Box } from '@chakra-ui/react';
import Login from './pages/Unauthenticated/Login';
import Register from './pages/Unauthenticated/Register'
import About from "./pages/About"

function App() {
  return (
    <div className="App">
      <Navbar />
        <Box py="100px">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Box>
      <Footer />
    </div>
  );
}

export default App;
