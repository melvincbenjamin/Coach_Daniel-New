import { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "aos/dist/aos.css";
import AOS from "aos";

function DennisServices() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-5" style={{ backgroundColor: "#fff" }}>
      <Container>
        <Row>
          <Col xs={12} data-aos="fade-up">
            <Card className="border-0 bg-white mb-4">
              <Card.Body>
        <h3 className="text-center text-md-center text-lg-center text-black" style={{ fontFamily: 'Poppins, sans-serif' }}>Coach Dennis Offers</h3>
  <p className="text-black mt-3 text-center text-md-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
    At <strong>Dennis Tennis Academy</strong>, I offer comprehensive Tennis and Padel coaching programs designed for all skill levels, from beginners to advanced players. My services include private one-on-one coaching, group training sessions, fitness conditioning for athletes, and junior development programs. I also organize seasonal camps, matchplay sessions, and skill-building clinics tailored to both kids and adults. Whether you're training for fun, fitness, or competition, My structured approach ensures measurable progress and personal growth on and off the court.
  </p>
</Card.Body>

            </Card>
          </Col>

          <Col xs={12} data-aos="fade-up">
            <Card className="border-0 bg-white text-black shadow-sm">
              <Card.Header className="d-flex align-items-center bg-white border-0">
                <h5 className="mb-0 fw-semibold text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>Types of Lessons Offered</h5>
              </Card.Header>
              <Card.Body>
                <ul className="ps-3 text-black" 
                style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <li> Private Tennis Coaching (1-on-1)</li>
                  <li> Group Tennis Classes (Kids, Teens, Adults)</li>
                  <li> Padel Court Training (All Levels)</li>
                  <li> Cardio Tennis</li>
                  <li> Match Strategy & Mental Conditioning</li>
                  <li> Tournament Preparation & Drills</li>
                  <li> Corporate Wellness Tennis Programs</li>
                  <li> Family & Parent-Child Tennis Sessions</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Custom Mobile-First Styling */}
        <style>{`
          @media (max-width: 576px) {
            h2 {
              font-size: 1.5rem;
            }
            ul li {
              font-size: 0.95rem;
              margin-bottom: 0.75rem;
            }
          }
        `}</style>
      </Container>
    </section>
  );
}

export default DennisServices;
