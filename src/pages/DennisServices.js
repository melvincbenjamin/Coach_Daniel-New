import { useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import { Container, Row, Col, Card } from "react-bootstrap";
import "aos/dist/aos.css";
import AOS from "aos";

function DennisServices() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

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
  <meta property="og:image" content="https://denisstennis.com/assets/With_Kids.jpg" />
  <meta property="og:url" content="https://coachdennisacademy.com" />
  <meta property="og:type" content="website" />

  {/* ✅ Twitter Card (optional) */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Coach Dennis Tennis Academy" />
  <meta name="twitter:description" content="Train with Coach Dennis at Dennis Tennis Academy. Top-rated tennis & padel coaching in Abu Dhabi, UAE, for beginners and pros." />
  <meta name="twitter:image" content="https://denisstennis.com/assets/With_Kids.jpg" />

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
    </>
  );
}

export default DennisServices;
