import { useEffect } from "react";
import With_Kids from '../assets/With_Kids.jpg';
import tennis3 from '../assets/tennis3.jpg';
import padelVideo from '../assets/padelVideo.mp4'
import DanielVideo1 from '../assets/DanielVideo1.mp4';
import DanielVideo2 from '../assets/DanielVideo2.mp4';
import racketvspadel from '../assets/racketvspadel.webp';
import Coach_Daniel from '../assets/Coach_Daniel.jpg';
import WithKids2 from '../assets/WithKids2.mp4';
import { Container, Row, Col, Carousel, Card } from "react-bootstrap";
import { PlayCircle, CameraVideo } from "react-bootstrap-icons";
import "aos/dist/aos.css";
import AOS from "aos";

function ServicesComponent() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="services" className="py-5" style={{ backgroundColor: "#ffffff" }}>
      <Container>
        <h6 className="text-center text-muted">Coach Dennis Offers</h6>
        <h2 className="text-center fw-bold mb-5" style={{ color: "#000" }}>Tennis & Padel Coaching</h2>
        <Row className="gy-4">
          {/* Tennis Coaching */}
          <Col xs={12} md={4} data-aos="fade-up">
            <Card className="text-center border-0 shadow-sm service-card h-100 bg-black">
              <div className="icon-title-section">
                <PlayCircle size={30} className="text-white" />
                <Card.Title className="fw-bold fs-6 text-white mb-0">Tennis Coaching</Card.Title>
              </div>
              <Card.Body>
                <Card.Text className="text-white">
                  Improve your strokes, footwork, strategy, and mental game with tailored sessions.
                </Card.Text>
                <video
                  className="img-fluid rounded mb-2"
                  controls
                  src={DanielVideo2}
                />
                <img
                  src={With_Kids}
                  alt="Tennis session"
                  className="img-fluid rounded"
                />
              </Card.Body>
            </Card>
          </Col>

          {/* Padel Coaching */}
          <Col xs={12} md={4} data-aos="fade-up">
            <Card className="text-center border-0 shadow-sm service-card h-100 bg-black">
              <div className="icon-title-section">
                <PlayCircle size={30} className="text-white" />
                <Card.Title className="fw-bold fs-6 text-white mb-0">Padel Coaching</Card.Title>
              </div>
              <Card.Body>
                <Card.Text className="text-white">
                  Master the unique techniques and court strategies of Padel with expert guidance.
                </Card.Text>
                <video
                  className="img-fluid rounded mb-2"
                  controls
                  src={DanielVideo1}
                />
                <img
                  src={tennis3}
                  alt="Padel training"
                  className="img-fluid rounded"
                />
              </Card.Body>
            </Card>
          </Col>

<Col xs={12} md={4} data-aos="fade-up">
  <Card className="text-center border-0 shadow-lg service-card h-100 bg-black">
    {/* Title Section */}
    <div className="icon-title-section">
      <CameraVideo size={30} className="text-white" />
      <Card.Title className="fw-bold fs-6 text-white mb-0">Videos & Pictures</Card.Title>
    </div>

    {/* Card Body */}
    <Card.Body>
      <Card.Text className="text-white">
        Catch glimpses of live training, match highlights, and client progress stories.
      </Card.Text>

      {/* ✅ Videos (Stacked) */}
      <div className="mb-3">
        <video className="d-block w-100 mb-2 rounded" controls src={padelVideo} />
        <video className="d-block w-100 rounded" controls src={WithKids2} />
      </div>

      {/* ✅ Image Carousel */}
      <Carousel fade indicators={true} controls={true} interval={5000} className="rounded overflow-hidden">
        <Carousel.Item>
          <img src={racketvspadel} className="d-block w-100" alt="Racket vs Padel" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Coach_Daniel} className="d-block w-100" alt="Coach Daniel" />
        </Carousel.Item>
      </Carousel>
    </Card.Body>
  </Card>

  {/* Styling */}
  <style>{`
    video {
      max-height: 250px;
      object-fit: cover;
    }

    img {
      max-height: 250px;
      object-fit: cover;
    }

    .carousel-item {
      background-color: #000;
    }

    .icon-title-section {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 10px;
      background-color: #000;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      flex-wrap: wrap;
    }
  `}</style>
</Col>
        </Row>

        <style>{`
          .icon-title-section {
            padding: 10px;
            border-bottom: 1px solid #eee;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
          }

          .service-card {
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
            height: 100%;
          }

          .service-card:hover {
            transform: scale(1.03);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          }

          video, img {
            max-height: 200px;
            object-fit: cover;
          }
        `}</style>
      </Container>
    </section>
  );
}

export default ServicesComponent;
