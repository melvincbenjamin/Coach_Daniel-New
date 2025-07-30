import { React, useEffect } from "react";
import { Helmet } from 'react-helmet';

// ✅ Correct
import { SiGmail } from 'react-icons/si';
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { Instagram, Whatsapp } from "react-bootstrap-icons";
import "aos/dist/aos.css";
import AOS from "aos";

function Contact() {
  useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);

  return (
    <>
    <Helmet>
        <title>Coach Dennis - Professional Tennis & Padel Coach in Lagos</title>
        <meta
          name="description"
          content="Train with Coach Dennis at Dennis Tennis Academy. Top-rated tennis & padel coaching in Lagos, Nigeria for beginners and pros."
        />
        <meta
          name="keywords"
          content="Coach Dennis, Tennis Coach Lagos, Tennis Academy Nigeria, Padel Coach, Tennis training for kids, Best tennis coach in Nigeria"
        />
        <meta name="author" content="Coach Dennis Tennis Academy" />
        <link rel="canonical" href="https://yourdomain.com/" />
      </Helmet>

    <section id="contact" className="py-5 text-center text-md-left" style={{ backgroundColor: '#ffffff', width: '100vw' }}>
      <Container>
        <h6 className="text-uppercase text-secondary">Get In Touch</h6>
        <h2 className="fw-bold mb-4">Contact Me</h2>

        <Row className="g-4">
          {/* Social Media Links */}
          <Col xs={12} md={4} className="text-black text-start" data-aos="fade-up">
            <h5 className="fs-3">Let's Talk</h5>
            <p>
            <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=Danielokpe607@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="text-black flex items-center"
>
  <SiGmail className="me-1" size={20} />
  Gmail
</a>
</p>


            <p>
              <Whatsapp className="me-1 text-success" size={20} />
              <a href="https://wa.me/+971569478955" target="_blank" rel="noopener noreferrer" className="text-black">WhatsApp</a>
            </p>
            <p>
              <Instagram className="me-1 text-danger" size={20} />
              <a href="https://www.instagram.com/denistennis_?utm_source=qr&igsh=MWI0dHB2NjB0dXlyZg==" target="_blank" rel="noopener noreferrer" className="text-black">Instagram</a>
            </p>
          </Col>

          {/* Contact Form */}
          <Col xs={12} md={8} data-aos="fade-up">
            <Card className="p-4 shadow-sm border-0 rounded-lg" style={{ backgroundColor: "#000000", color: "#fff" }}>
              <Card.Body>
              <Form action="https://formsubmit.co/danielokpe607@gmail.com" method="POST">
  {/* Optional settings */}
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_template" value="table" />
  <input type="hidden" name="_subject" value="New Contact Message" />
  <input type="hidden" name="_autoresponse" value="Thanks for contacting me! I’ll get back to you soon." />

<Form.Group className="mb-3">
  <Form.Control
    type="text"
    name="name"
    placeholder="Name*"
    required
    className="text-white border-0"
    style={{ backgroundColor: '#ccc' }}
  />
</Form.Group>

<Form.Group className="mb-3">
  <Form.Control
    type="email"
    name="email"
    placeholder="Your Email*"
    required
    className="text-white border-0"
    style={{ backgroundColor: '#ccc' }}
  />
</Form.Group>

<Form.Group className="mb-3">
  <Form.Control
    type="text"
    name="subject"
    placeholder="Enter subject"
    required
    className="text-black border-0"
    style={{ backgroundColor: '#ccc' }}
  />
</Form.Group>

<Form.Group className="mb-3">
  <Form.Control
    as="textarea"
    rows={3}
    name="message"
    placeholder="Write your message"
    required
    className="text-black border-0"
    style={{ backgroundColor: '#ccc' }}
  />
</Form.Group>

<Button variant="primary" type="submit" className="w-100">
  Send Message
</Button>
</Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  );
}

export default Contact;