import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Container, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import vision from "../assets/hand-holding-tennis-racket-balls.jpg";
import mission from "../assets/backgroundImage.jpg";
import DanielLittleKid from "../assets/DanielLittleGirl.mp4";
import HeroImage from "../assets/With_Kids.jpg";
import DanielVideo2 from '../assets/DanielVideo2.mp4';
import DanielVideo4 from '../assets/DanielVideo4.mp4';
import backgroundImage from '../assets/backgroundImage.jpg'; // adjust path as needed
import NewDennistennis from "../assets/NewDennistennis.mp4";
import updateDanielTennis from "../assets/updateDanielTennis2.mp4";
import updateDanielTennis3 from "../assets/updateDanielTennis3.mp4";

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
       <Helmet>
  <title>Coach Dennis, Professional Tennis & Padel Coach in Abu Dhabi, United Arab Emirates</title>
  <meta
    name="description"
    content="Train with Coach Dennis at Dennis Tennis Academy. Top-rated tennis & padel coaching in Abu Dhabi, UAE, for beginners and pros."
  />

  {/* ✅ Open Graph Tags */}
  <meta property="og:title" content="Coach Dennis Tennis Academy" />
  <meta property="og:description" content="Train with Coach Dennis at Dennis Tennis Academy. Top-rated tennis & padel coaching in Abu Dhabi, UAE, for beginners and pros." />
  <meta property="og:image" content="https://yourdomain.com/assets/With_Kids.jpg" />
  <meta property="og:url" content="https://coachdennisacademy.com" />
  <meta property="og:type" content="website" />

  {/* ✅ Twitter Card (optional) */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Coach Dennis Tennis Academy" />
  <meta name="twitter:description" content="Train with Coach Dennis at Dennis Tennis Academy. Top-rated tennis & padel coaching in Abu Dhabi, UAE, for beginners and pros." />
  <meta name="twitter:image" content="https://yourdomain.com/assets/With_Kids.jpg" />

  {/* ✅ SEO Keywords and Author */}
  <meta
    name="keywords"
    content="Coach Dennis, Tennis Coach Abu Dhabi, Padel Coach UAE, Tennis lessons Abu Dhabi, Kids Tennis Coaching, Tennis Academy UAE"
  />
  <meta name="author" content="Coach Dennis Tennis Academy" />
  <link rel="canonical" href="https://coachdennisacademy.com/" />

  {/* ✅ Structured Data (Schema Markup for Google) */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Coach Dennis",
        "jobTitle": "Tennis and Padel Coach",
        "url": "https://coachdennisacademy.com",
        "sameAs": ["https://www.instagram.com/denistennis_/"],
        "worksFor": {
          "@type": "SportsOrganization",
          "name": "Dennis Tennis Academy"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Abu Dhabi",
          "addressRegion": "Abu Dhabi",
          "addressCountry": "United Arab Emirates"
        }
      })
    }}
  />
</Helmet>


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
      className="hero-section d-flex align-items-center justify-content-center text-white"
      style={{
        height: '80vh',
        marginTop: '30px',
    background: `url(${backgroundImage}) center/cover no-repeat`,

      }}
    >
      <div className="slide-in">
        <Container>
          <div className="text-center text-md-center" style={{
            marginBottom: "100px"
          }}>
            <p className="fs-2 mt-5 fw-bold">Hello,</p>
            <p className="fs-2 fst-italic fw-semibold mb-3">I’m Coach Dennis.</p>
            <p className="fs-5 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Founder of <span className="fw-bold">Dennis Tennis Academy, (DTA)</span> Where Tennis and Padel are for everyone.
            </p>
            <p className="fs-5 mb-2">Ready to Play?</p>
            <p className="fs-5 mb-4">Book your first lesson today and let’s hit the court!</p>
            <div className="d-grid d-md-flex justify-content-md-center">
              <Button
                variant="dark"
                size="lg"
                className="px-5 py-3 fs-5" 
                href="/contacts"
              >
                Book a Session
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>

<div className="container py-4">
  <div className="row align-items-center mb-5">
    {/* Mission Text */}
    <div className="col-md-6 mb-4 mb-md-0" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <h2 className="fw-bold text-black text-center text-md-start">Mission</h2>
      <p className="text-black mt-3 text-center text-md-start">
        To empower individuals of all ages and skill levels through high-quality Tennis and Padel coaching, fostering discipline, confidence, and excellence both on and off the court. At Dennis Tennis Academy, my goal is to nurture talent, inspire growth, and build a strong community of passionate athletes.
      </p>
    </div>

    {/* Mission Image */}
    <div className="col-md-6 text-center">
      <img src={mission} alt="Mission" className="img-fluid rounded" />
    </div>
  </div>

  <div className="row align-items-center">

    {/* Vision Text */}
    <div className="col-md-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <h2 className="fw-bold text-black text-center text-md-start">Vision</h2>
      <p className="text-black mt-3 text-center text-md-start">
        To become a globally recognized Tennis and Padel coaching leader, originating from Nigeria, Based in Abu Dhabi, in the United Arab Emirates. And expanding across the world, especially the United States by building a network of elite athletes, passionate learners, and inclusive sports communities united by excellence, mentorship, and love for the game.
      </p>
    </div>
    {/* Vision Image */}
    <div className="col-md-6 text-center order-md-2 mb-4 mb-md-0">
      <img src={vision} alt="Vision" className="img-fluid rounded" />
    </div>
  </div>
</div>


      {/* === VIDEO GALLERY SECTION BELOW HERO === */}
      <Container style={{ paddingTop: 20 }}>
        <motion.h3
          className="text-black text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Watch Coach Dennis in Action
        </motion.h3>

        <Row className="g-4">
          {[NewDennistennis, DanielVideo2, DanielVideo4, updateDanielTennis, updateDanielTennis3].map((video, index) => (
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
