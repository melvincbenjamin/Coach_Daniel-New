import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbars from './components/Navbars';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../src/components/Footer';
import { HelmetProvider } from 'react-helmet-async';


// Import your pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Testimonial from './pages/Testimonial';
import Contact from './pages/Contact';
import Login from "../src/components/Login";
import Map from './pages/Map';


function App() {
  return (
    <Router>
      <Navbars />
      <HelmetProvider />
      <div style={{ position: 'relative', minHeight: '100vh', paddingTop: '56px' }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>
      </div>
      <div style={{
        marginTop: '20px'
      }}>
      <Map />
      </div>
      <Footer />  {/* Footer Added Here */}
    </Router>
  );
}

export default App;
