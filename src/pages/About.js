import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Briefcase, People, Layers, Award } from "react-bootstrap-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import julius3 from "../assets/Coach_Daniel.jpg";
import julius_student from "../assets/DanielC.jpg";

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
    <section>
      {/* Full-Width Image */}
      <div data-aos="zoom-in-up">
        <img
          src={julius_student}
          alt="Julius S Adeleke"
          className="img-fluid"
          style={{ width: "100%", height: "100vh", objectFit: "cover", paddingTop: "20px" }}
        />
      </div>

      <Container className="py-5">
        <Row className="align-items-center">
          {/* Left Section - Image */}
<Col xs={12} md={5} className="d-flex justify-content-center mb-4 mb-md-0 mt-md-n4 mt-lg-n5">
  <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
  <img
    src={julius3}
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
  I am a Certified and Experienced Coach dedicated to helping players of all ages excel in both <strong>Tennis</strong> and <strong>Padel</strong>. At DTA, I provide tailored coaching programs, expert guidance, and hands-on support to ensure every athlete develops their skills, confidence, and love for the game — whether you're a beginner or aiming to compete at a higher level.
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
  );
}
export default AboutSection;