import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from '../assets/Logo.jpg';

function Navbars() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar 
      style={{ backgroundColor: '#ffffff' }} 
      variant="white" 
      expand="lg" 
      expanded={expanded} 
      className="fixed-top"
    >
      <Container fluid className="px-lg-4">
        {/* Logo */}
        <Navbar.Brand as={Link} to="/">
          <img
            src={Logo}
            alt="Logo"
            className="rounded"
            style={{ height: "40px", width: "auto" }}
          />
        </Navbar.Brand>

        {/* Hamburger */}
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(!expanded)} 
        />

        {/* Nav Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav 
            className="flex-column flex-lg-row text-start text-lg-end ms-0 ms-lg-auto gap-lg-4 fs-5 fs-lg-4 py-lg-2"
            onClick={() => setExpanded(false)}
          >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Me</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/testimonials">Testimonials</Nav.Link>
            <Nav.Link as={Link} to="/contacts">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;