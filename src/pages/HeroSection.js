import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Container, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

import DanielLittleKid from "../assets/DanielLittleGirl.mp4";
import HeroImage from "../assets/With_Kids.jpg";

import DanielVideo1 from '../assets/DanielVideo1.mp4';
import DanielVideo2 from '../assets/DanielVideo2.mp4';
//import DanielVideo3 from '../assets/DanielVideo3.mp4';
import DanielVideo4 from '../assets/DanielVideo4.mp4';

function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 4000); // 4 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* === HERO FULLSCREEN SECTION === */}
      <section style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        {/* Background image */}
        <img
          src={HeroImage}
          alt="Intro Slide"
          className={`w-100 position-absolute transition-opacity`}
          style={{
            objectFit: 'cover',
            height: '100vh',
            width: '100%',
            top: 0,
            left: 0,
            zIndex: showVideo ? 0 : 2,
            opacity: showVideo ? 0 : 1,
            transition: 'opacity 1s ease-in-out'
          }}
        />

        {/* Background video */}
        {showVideo && (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-100 position-absolute"
            style={{
              objectFit: 'cover',
              height: '100vh',
              width: '100%',
              top: 0,
              left: 0,
              zIndex: 1
            }}
          >
            <source src={DanielLittleKid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </section>

      <div
  className="text-black d-flex align-items-center justify-content-center"
  style={{ height: '50vh', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
>
  <Container>
    <div className="text-start text-md-center">
      <p className="fs-3 fw-semibold">Hello, I’m Coach Dennis.</p>
      <p className="fs-5">
        Founder of <span className="fw-bold">Dennis Tennis Academy (DTA)</span> where Tennis and Padel are for everyone.
      </p>
      <p className="fs-5">Ready to Play?</p>
      <p className="fs-6">Book your first lesson today and let’s hit the court!</p>
      <div className="d-grid d-md-flex justify-content-md-center">
        <Button
          variant="dark"
          size="lg" // default on mobile
          className="fs-3 fs-md-5 fs-lg-5"
          href="/contacts"
        >
          Book a Session
        </Button>
      </div>
    </div>
  </Container>
</div>



      {/* === VIDEO GALLERY SECTION BELOW HERO === */}
      <Container style={{ paddingTop: 10 }}>
        <motion.h3
          className="text-black text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Watch Coach Dennis in Action
        </motion.h3>

        <Row className="g-4">
          {[DanielVideo1, DanielVideo2, DanielVideo4].map((video, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-dark text-white">
                  <Card.Body>
                    <video controls className="w-100 rounded">
                      <source src={video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default HeroSection;
