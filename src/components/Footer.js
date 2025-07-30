import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import Logo from "../assets/Logo.jpg";

function Footer() {
  return (
    <div>
    <footer className="text-white py-4 mt-5" style={{ backgroundColor: '#000000'}}>
      <Container>
        <Row className="align-items-center">
          {/* Logo Section */}
<Col xs={12} md={4} className="text-md-start mb-3 mb-md-0">
  <div className="d-flex align-items-center justify-content-md-start">
    <img 
      src={Logo}  // Replace with the actual path to your logo
      alt="Daniel Tennis Academy Logo" 
      className="me-2" 
      style={{ width: "50px", height: "50px" }} 
    />
  </div>
</Col>

          {/* Navigation Links */}
<Col xs={12} md={4} className="text-start">
  <ul className="list-unstyled d-flex flex-column gap-2">
    <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
    <li><Link to="/media" className="text-white text-decoration-none">Media</Link></li>
    <li><Link to="/about" className="text-white text-decoration-none">About</Link></li>
    <li><Link to="/contact" className="text-white text-decoration-none">Contact</Link></li>
    <li><Link to="/testimonial" className="text-white text-decoration-none">Testimonials</Link></li>
  </ul>
</Col>


          {/* Social Media Icons */}
          <Col xs={12} md={4} className="text-md-end text-center">
            <a href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer" className="text-white me-3">
              <FaWhatsapp size={24} />
            </a>
            <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer" className="text-white me-3">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.instagram.com/your-instagram-page" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaInstagram size={24} />
            </a>
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