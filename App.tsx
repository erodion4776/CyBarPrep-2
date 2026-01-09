
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Consultations from './pages/Consultations';
import Courses from './pages/Courses';
import Community from './pages/Community';
import Articles from './pages/Articles';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/consultations" element={<Consultations />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/community" element={<Community />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;