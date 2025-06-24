// src/components/Navbars.js
import { useState } from 'react';
import { Container, Navbar, Button, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableTennisPaddleBall, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import LoginModal from "../components/Login";

function Navbars() {
  const [showLogin, setShowLogin] = useState(false);

  const handleShowLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);

  return (
    <>
      <Navbar
        bg="white"
        expand="lg"
        className="shadow-sm"
        style={{ minHeight: '100px', alignItems: 'center' }}
      >
        <Container>
          {/* Brand/Logo */}
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <FontAwesomeIcon icon={faTableTennisPaddleBall} style={{ color: 'green' }} />
            <span style={{ color: 'blue' }}>Tennis</span>
            <span style={{ color: 'green' }}>Lessons</span>
          </Navbar.Brand>

          {/* Toggler for mobile */}
          <Navbar.Toggle aria-controls="navbar-nav" />

          {/* Collapsible Content */}
          <Navbar.Collapse id="navbar-nav">
            <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center w-100 gap-3 mt-3 mt-lg-0">

              {/* Navigation Buttons + Phone in mobile view */}
              <Nav className="d-flex flex-column flex-lg-row gap-2 w-100">
                <div className="d-flex flex-column flex-sm-row gap-2 justify-content-between w-100">
                  <div className="d-flex gap-2">
                    <Button variant="light" size="md" href="#how-to-apply" className="border w-100 w-sm-auto">
                      How to Apply
                    </Button>
                    <Button variant="light" size="md" href="#apply-coach" className="border w-100 w-sm-auto">
                      Apply to Coach
                    </Button>
                  </div>
                  {/* Phone section (mobile only) */}
                  <div className="d-flex align-items-center d-lg-none mt-2 mt-sm-0">
                    <FontAwesomeIcon icon={faPhone} className="me-2 text-success" />
                    <span className="fw-bold text-dark">+234 812 345 6789</span>
                  </div>
                </div>
              </Nav>

              {/* Phone section (desktop only) */}
<div className="d-flex align-items-center">
  <FontAwesomeIcon icon={faPhone} className="me-2 text-success" />
  <a href="tel:+2348166927834" className="fw-bold text-dark text-decoration-none">
    +2348155933201
  </a>
</div>


              {/* Login Button */}
              <div>
                <Button variant="primary" size="md" onClick={handleShowLogin} className="border w-100 w-lg-auto">
                  <FontAwesomeIcon icon={faUser} className="me-2" />
                  Login
                </Button>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Login Modal */}
      <LoginModal show={showLogin} handleClose={handleCloseLogin} />
    </>
  );
}

export default Navbars;
