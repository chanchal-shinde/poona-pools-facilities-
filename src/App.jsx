import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

// Six Dedicated Pages
import Home from './pages/Home';
import Services from './pages/Services';
import SwimmingPools from './pages/SwimmingPools';
import GetAQuote from './pages/GetAQuote';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      {/* Scroll window to top on route change */}
      <ScrollToTop />

      <div className="d-flex flex-column min-vh-100">
        {/* Persistent Responsive Navigation Bar */}
        <Navbar />

        {/* Dynamic Route Content */}
        <main className="flex-grow-1" id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pools" element={<SwimmingPools />} />
            <Route path="/get-a-quote" element={<GetAQuote />} />
            <Route path="/quote" element={<Navigate to="/get-a-quote" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Catch-all redirect to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Persistent Corporate Footer */}
        <Footer />

        {/* Floating WhatsApp Quick-Contact Button (Visible across all 5 pages) */}
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}
