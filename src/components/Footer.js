import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import Logo from "../assets/Logo.jpg";

function Footer() {
  return (
    <div>
    <footer className="text-white py-4 mt-5" style={{ backgroundColor: '#000000'}}>
      <Container>
        <Row className="align-items-center flex-column flex-md-row justify-content-between text-center text-md-start">
  {/* Logo Section */}
  <Col md={4} className="mb-3 mb-md-0">
    <div className="d-flex align-items-center justify-content-center justify-content-md-start">
      <img 
        src={Logo}
        alt="Daniel Tennis Academy Logo"
        className="me-2"
        style={{ width: "50px", height: "50px" }}
      />
    </div>
  </Col>

  {/* Navigation Links */}
  <Col md={4} className="mb-3 mb-md-0">
    <ul className="list-unstyled d-flex flex-column flex-md-row gap-2 justify-content-center mb-0">
      <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
      <li><Link to="/about" className="text-white text-decoration-none">About Me</Link></li>
      <li><Link to="/services" className="text-white text-decoration-none">Services</Link></li>
      <li><Link to="/testimonials" className="text-white text-decoration-none">Testimonials</Link></li>
      <li><Link to="/contacts" className="text-white text-decoration-none">Contacts</Link></li>
    </ul>
  </Col>

  {/* Social Media Icons */}
  <Col md={4}>
    <div className="d-flex justify-content-center justify-content-md-end">
      <a href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer" className="text-white me-3">
        <FaWhatsapp size={24} />
      </a>

      <a href="https://www.instagram.com/your-instagram-page" target="_blank" rel="noopener noreferrer" className="text-white">
        <FaInstagram size={24} />
      </a>
    </div>
  </Col>
</Row>


        {/* Horizontal Line */}
        <hr className="border-secondary my-3" />

        {/* Copyright Section */}
        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} Adeleke Tennis Academy. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
    </div>
  );
}

export default Footer;