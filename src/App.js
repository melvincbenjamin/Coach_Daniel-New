import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbars from './components/Navbars';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../src/components/Footer';
import { HelmetProvider } from 'react-helmet-async';


// Import your pages
import Home from './pages/Home';
import About from './pages/About';
import Media from './pages/Media';
import Services from './pages/Services';
import Testimonial from './pages/Testimonial';
import Contact from './pages/Contact';
import LocationDetector from './components/LocationDetector';
import CoachDennisLiveMap from "./components/CoachDennisLiveMap";
import Login from "../src/components/Login";
import LocationViewer from './components/LocationViewers';



function App() {
  return (
    <Router>
      <Navbars />
      <HelmetProvider />
      <div style={{ position: 'relative', minHeight: '100vh', paddingTop: '56px' }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/location" element={<LocationViewer />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/media" element={<Media />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/location" element={<CoachDennisLiveMap />} />
        </Routes>
      </div>
      <LocationDetector />
      <Footer />  {/* Footer Added Here */}
    </Router>
  );
}

export default App;
