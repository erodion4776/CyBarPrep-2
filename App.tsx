import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Consultations from './pages/Consultations';
import Courses from './pages/Courses';
import Community from './pages/Community';
import Articles from './pages/Articles';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import MPTStrategy from './pages/MPTStrategy';
import MPTResource from './pages/MPTResource';
import FloatingLeadButton from './components/FloatingLeadButton';

const App: React.FC = () => {
  const location = useLocation();
  
  // Hide Navbar and Footer for the high-ticket sales funnel pages
  const isFunnelPage = ['/mpt-strategy', '/mpt-resource'].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {!isFunnelPage && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/consultations" element={<Consultations />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/community" element={<Community />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/mpt-strategy" element={<MPTStrategy />} />
          <Route path="/mpt-resource" element={<MPTResource />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      {!isFunnelPage && <Footer />}
      {!isFunnelPage && <FloatingLeadButton />}
    </div>
  );
};

export default App;