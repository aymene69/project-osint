import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tools from './pages/Tools';
import Investigation from './pages/Investigation';
import Security from './pages/Security';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/outils" element={<Tools />} />
          <Route path="/enquete" element={<Investigation />} />
          <Route path="/securite" element={<Security />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;