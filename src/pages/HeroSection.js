import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import tennis1 from '../assets/tennis1.jpg';
import tennis2 from '../assets/tennis2.jpg';
import tennis3 from '../assets/tennis3.jpg';
import tennis4 from '../assets/tennis4.jpg';
import tennis5 from '../assets/tennis5.jpg';
import tennis6 from '../assets/tennis6.jpg';
import Daniel from '../assets/Daniel.jpg';

function HeroSection() {
  const tennisSlides = [
    {
      image: Daniel,
      text: 'Empowering Nigerian tennis players through exposure and opportunity.'
    },
    {
      image: tennis1,
      text: 'Uniting communities to support young talents in every corner of Nigeria.'
    },
    {
      image: tennis2,
      text: 'Creating platforms for aspiring pros to showcase their skills.'
    },
    {
      image: tennis3,
      text: 'Fueling the next generation of champions through local tournaments.'
    },
    {
      image: tennis4,
      text: 'Partnering with coaches and clubs to build a stronger tennis ecosystem.'
    },
    {
      image: tennis5,
      text: 'Encouraging grassroots development and school programs.'
    },
    {
      image: tennis6,
      text: 'Bringing visibility to Nigeria’s tennis talent on a global stage.'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="position-relative">
      {/* Slideshow Background */}
      <Carousel
        activeIndex={activeIndex}
        onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
        controls={false}
        indicators={false}
        fade
        pause={false}
        className="bg-carousel"
      >
        {tennisSlides.map((slide, idx) => (
          <Carousel.Item key={idx} interval={3000}>
            <div className="position-relative">
              <img
                className="d-block w-100"
                src={slide.image}
                alt={`Slide ${idx}`}
                style={{
                  objectFit: 'cover',
                  height: '100vh'
                }}
              />
              {/* Left dark overlay for md and up */}
              <div
                className="position-absolute top-0 start-0 h-100 d-none d-md-block"
                style={{
                  width: '50%',
                  background: 'rgba(0, 0, 0, 0.6)'
                }}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Full dark overlay for mobile */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 d-block d-md-none"
        style={{
          background: 'rgba(0, 0, 0, 0.7)',
          zIndex: 1
        }}
      />
    </div>
  );
}

export default HeroSection;
