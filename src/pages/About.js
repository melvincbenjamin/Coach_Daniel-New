import React, { useEffect } from "react";
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Briefcase, People, Layers, Award } from "react-bootstrap-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import Coach_Daniel from "../assets/Coach_Daniel.jpg";
import DanielC from "../assets/DanielC.jpg";

function AboutSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleLetsTalk = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
    <Helmet>
  <title>Coach Dennis - Professional Tennis & Padel Coach in Abu Dhabi, United Arab Emirates</title>
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


    <section>
      {/* Full-Width Image */}
      <div data-aos="zoom-in-up">
        <img
          src={DanielC}
          alt="Dennis Tennis"
          className="img-fluid"
          style={{ width: "100%", height: "80vh", objectFit: "cover", paddingTop: "20px" }}
        />
      </div>

      <Container className="py-5">
        <Row className="align-items-center">
          {/* Left Section - Image */}
<Col xs={12} md={5} className="d-flex justify-content-center mb-4 mb-md-0 mt-md-n4 mt-lg-n5">
  <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
  <img
    src={Coach_Daniel}
    alt="Coach Dennis"
    className="img-fluid"
    style={{
      maxWidth: "90%",
      height: "auto",
      objectFit: "contain",
      borderRadius: "10px"
    }}
  />
</div>
</Col>
          {/* Right Section - Text & Cards */}
          <Col xs={12} md={7} data-aos="fade-up" style={{ paddingTop: 20 }}>
            <h6 className="text-uppercase text-secondary">Get to know</h6>
            <h2 className="fw-bold text-black fs-3">About Me</h2>

            {/* About Me Text */}
<p className="text-black mt-4 mt-md-5" data-aos="slide-right" style={{ fontFamily: 'Times New Roman' }}>
  <span className="text-primary">Coach Dennis, Founder of Dennis Tennis and Padel Academy (DTA).</span>  
  I am a Certified and Experienced Coach dedicated to helping players of all ages excel in both <strong>Tennis</strong> and <strong>Padel</strong>. At DTA, I provide tailored coaching programs, expert guidance, and hands-on support to ensure every athlete develops their skills, confidence, and love for the game. Whether you're a beginner or aiming to compete at a higher level.
</p>
            {/* Cards Section */}
            <Row className="mt-4 g-3">
              {[
                { icon: <Briefcase size={40} className="text-white mb-3" />, title: "Coaching Experience", text: "10+ Years of Coaching Experience" },
                { icon: <People size={40} className="text-white mb-3" />, title: "Students", text: "Worked with players of all ages and skill levels" },
                { icon: <Layers size={40} className="text-white mb-3" />, title: "Clinics", text: "Developed and implemented customized training programs" },
{
  icon: <Award size={40} className="text-white mb-3" />,
  title: "Certificates",
  text: (
    <>
      Certified Tennis Professional (CTP) <br />
      PTR Level 1 and 2 <br />
      Certified Professional Tennis Registry (PTR) Instructor – All Age Development <br />
      Certified International Tennis Federation (ITF) <br />
      Certified Professional Tennis Coaches Association of Nigeria (PTCAN)
    </>
  )
}
              ].map((card, index) => (
                <Col xs={12} sm={6} md={6} lg={4} key={index} data-aos="flip-left">
                  <Card className="custom-card h-100">
                    <Card.Body style={{ backgroundColor: "#000000", borderRadius: 10 }}>
                      {card.icon}
                      <Card.Title className="fw-bold text-white">{card.title}</Card.Title>
                      <Card.Text className="text-white">{card.text}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            {/* Coaching Philosophy */}
<h3 className="mt-5 fw-bold text-black" data-aos="slide-left">Coaching Philosophy</h3>
<p className="text-black" data-aos="fade-left" style={{ fontFamily: 'Times New Roman' }}>
  As a Certified Tennis and Padel Coach, my philosophy is rooted in building a positive, goal-driven environment where players feel motivated to improve and enjoy the process. I focus on developing solid technique, smart game strategy, and mental strength, all while nurturing each athlete’s passion and confidence on and off the court.</p>
            {/* Call-to-Action Button */}
            <div data-aos="zoom-in-up" className="mt-4">
              <Button variant="dark" onClick={handleLetsTalk} href="/contacts" className="animated-button">Let's Talk</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  );
}
export default AboutSection;