import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Unauthenticated/Home';
import Navbar from './components/Bars/Navbar';
import Footer from './components/Bars/Footer';

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
