import React from 'react';
import Navbars from './components/Navbars';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';

import tennis1 from './assets/tennis1.jpg';
import tennis2 from './assets/tennis2.jpg';
import tennis3 from './assets/tennis3.jpg';
import tennis4 from './assets/tennis4.jpg';
import tennis5 from './assets/tennis5.jpg';
import tennis6 from './assets/tennis6.jpg';

const tennisImages = [tennis1, tennis2, tennis3, tennis4, tennis5, tennis6];

function App() {
  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <Navbars />

      {/* Slideshow Background */}
      <Carousel controls={false} indicators={false} fade pause={false} className="bg-carousel">
        {tennisImages.map((img, idx) => (
          <Carousel.Item key={idx} interval={3000}>
            <img
              className="d-block w-100"
              src={img}
              alt={`Slide ${idx}`}
              style={{
                objectFit: 'cover',
                height: '100vh',
                filter: 'brightness(20%)'
              }}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Overlay Content */}
      <Container
        fluid
        className="position-absolute top-50 start-50 translate-middle text-white text-center px-3"
        style={{ zIndex: 2 }}
      >
        <Row className="justify-content-center">
          <Col md={8}>
            <h1 className="display-4 fw-bold">Find a Tennis Coach Near You</h1>
            <p className="lead mt-1">
              Whether you're just starting or want to level up your game, my platform helps you find
              experienced tennis coaches around your area. Anytime, anywhere.
            </p>
            <Button variant="light" size="lg" href="#find-coach">
              Locate Nearby Coaches
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
