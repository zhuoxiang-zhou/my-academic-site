import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Research from './pages/Research';
import Teaching from './pages/Teaching';
import Photography from './pages/Photography';
// import Notes from './pages/Notes';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-stone-50 text-slate-800">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/teaching" element={<Teaching />} />
            <Route path="/photography" element={<Photography />} />
            {/* <Route path="/notes" element={<Notes />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;