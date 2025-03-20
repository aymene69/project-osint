import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tools from './pages/Tools';
import Investigation from './pages/Investigation';
import Security from './pages/Security';
import Ethic from './pages/Ethic';

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-900 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/investigation" element={<Investigation />} />
          <Route path="/security" element={<Security />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/ethic" element={<Ethic />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
