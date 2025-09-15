import { useEffect } from "react";
import { Helmet } from "react-helmet";
import With_Kids from "../assets/With_Kids.jpg";
import NewWithKids from "../assets/NewWith_Kids.jpg";
import NeewCoachDaniel from "../assets/NewCoachDaniel.mp4";
import DanielVideo1 from "../assets/DanielVideo1.mp4";
import DanielVideo2 from "../assets/updateDanielTennis5.mp4";
import racketvspadel from "../assets/racketvspadel.webp";
import Coach_Daniel from "../assets/Coach_Daniel.jpg";
import WithKids2 from "../assets/WithKids2.mp4";
import { Container, Row, Col, Carousel, Card } from "react-bootstrap";
import { GiTennisBall } from "react-icons/gi";
import "aos/dist/aos.css";
import AOS from "aos";
import DennisServices from "../pages/DennisServices";
import updatePicture from "../assets/updatepicture.jpg";
import updatePicture4 from "../assets/updatepicture4.jpg";

function ServicesComponent() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <Helmet>
        <title>
          Coach Dennis - Professional Tennis & Padel Coach in Abu Dhabi, United
          Arab Emirates
        </title>
        <meta
          name="description"
          content="Train with Coach Dennis at Dennis Tennis Academy. Top-rated tennis & padel coaching in Abu Dhabi, UAE, for beginners and pros."
        />

        {/* ✅ Open Graph Tags */}
        <meta property="og:title" content="Coach Dennis Tennis Academy" />
        <meta
          property="og:description"
          content="Train with Coach Dennis at Dennis Tennis Academy. Top-rated tennis & padel coaching in Abu Dhabi, UAE, for beginners and pros."
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/assets/With_Kids.jpg"
        />
        <meta property="og:url" content="https://coachdennisacademy.com" />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter Card (optional) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Coach Dennis Tennis Academy" />
        <meta
          name="twitter:description"
          content="Train with Coach Dennis at Dennis Tennis Academy. Top-rated tennis & padel coaching in Abu Dhabi, UAE, for beginners and pros."
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/assets/With_Kids.jpg"
        />

        {/* ✅ SEO Keywords and Author */}
        <meta
          name="keywords"
          content="Coach Dennis, Tennis Coach Abu Dhabi, Padel Coach UAE, Tennis lessons Abu Dhabi, Kids Tennis Coaching, Tennis Academy UAE"
        />
        <meta name="author" content="Coach Dennis Tennis Academy" />
        <link rel="canonical" href="https://coachdennisacademy.com/" />

        {/* ✅ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Coach Dennis",
              jobTitle: "Tennis and Padel Coach",
              url: "https://coachdennisacademy.com",
              sameAs: ["https://www.instagram.com/denistennis_/"],
              worksFor: {
                "@type": "SportsOrganization",
                name: "Dennis Tennis Academy",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Abu Dhabi",
                addressRegion: "Abu Dhabi",
                addressCountry: "United Arab Emirates",
              },
            }),
          }}
        />
      </Helmet>

      <div>
        <DennisServices />
      </div>

      <section
        id="services"
        className="py-5"
        style={{ backgroundColor: "#ffffff" }}
      >
        <Container>
          <h6 className="text-center text-muted">My Services</h6>
          <h2
            className="text-center fw-bold mb-5"
            style={{ color: "#000" }}
          >
            Tennis & Padel Coaching
          </h2>

          <Row className="gy-4">
            {/* Tennis Coaching */}
            <Col xs={12} md={4} data-aos="fade-up">
              <Card className="text-center border-0 shadow-sm service-card h-100 bg-black">
                <div className="icon-title-section">
                  <GiTennisBall size={30} color="#32CD32" />
                  <Card.Title className="fw-bold fs-6 text-white mb-0">
                    Tennis Coaching
                  </Card.Title>
                </div>
                <Card.Body>
                  <Card.Text className="text-white">
                    Improve your strokes, footwork, strategy, and mental game
                    with tailored sessions.
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
                     style={{ width: "100%" }}
                  />
                  <img
                    src={updatePicture}
                    alt="Tennis session"
                    className="img-fluid rounded mt-4"
                    style={{ width: "100%" }}
                  />
                </Card.Body>
              </Card>
            </Col>

            {/* Padel Coaching */}
            <Col xs={12} md={4} data-aos="fade-up">
              <Card className="text-center border-0 shadow-sm service-card h-100 bg-black">
                <div className="icon-title-section">
                  <GiTennisBall size={30} color="#32CD32" />
                  <Card.Title className="fw-bold fs-6 text-white mb-0">
                    Padel Coaching
                  </Card.Title>
                </div>
                <Card.Body>
                  <Card.Text className="text-white">
                    Master the unique techniques and court strategies of Padel
                    with expert guidance.
                  </Card.Text>
                  <video
                    className="img-fluid rounded mb-2"
                    controls
                    src={DanielVideo1}
                  />
                  <img
                    src={NewWithKids}
                    alt="Padel training"
                    className="img-fluid rounded"
                  />
                  <img
                    src={updatePicture4}
                    alt="Padel session"
                    className="img-fluid rounded mt-5"
                    style={{ width: "100%", height: "250px" }}
                  />
                </Card.Body>
              </Card>
            </Col>

            {/* Videos & Pictures */}
            <Col xs={12} md={4} data-aos="fade-up">
              <Card className="text-center border-0 shadow-lg service-card h-100 bg-black">
                <div className="icon-title-section">
                  <GiTennisBall size={30} color="#32CD32" />
                  <Card.Title className="fw-bold fs-6 text-white mb-0">
                    Videos & Pictures
                  </Card.Title>
                </div>
                <Card.Body>
                  <Card.Text className="text-white">
                    Catch glimpses of live training, match highlights, and
                    client progress stories.
                  </Card.Text>

                  <div className="mb-3">
                    <video
                      className="d-block w-100 mb-2 rounded"
                      controls
                      src={NeewCoachDaniel}
                    />
                    <video
                      className="d-block w-100 rounded"
                      controls
                      src={WithKids2}
                    />
                  </div>

                  <Carousel
                    fade
                    indicators={true}
                    controls={true}
                    interval={5000}
                    className="rounded overflow-hidden"
                  >
                    <Carousel.Item>
                      <img
                        src={racketvspadel}
                        className="d-block w-100"
                        alt="Racket vs Padel"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        src={Coach_Daniel}
                        className="d-block w-100"
                        alt="Coach Daniel"
                      />
                    </Carousel.Item>
                  </Carousel>
                </Card.Body>
              </Card>

              {/* Inline Styling */}
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
    </div>
  );
}

export default ServicesComponent;
