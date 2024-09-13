import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContentPage = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <div className="contentpage" ref={contentRef}>
      {/* Glass Box on the left */}
      <div className="glass-box">
        <h1 className="main-title">
          <b>IRON</b> <i>Garbage Collection</i>
        </h1>
        <h2>Efficient Scrap & Metal Recycling Services</h2>
        <p>
          We specialize in eco-friendly scrap and metal collection, ensuring that your waste is processed responsibly and efficiently.
          Join us in protecting the environment through sustainable waste management practices.
        </p>
        <Link to="/companyInfo" className="start-button">
          Explore Services
        </Link>
      </div>

      {/* Additional content on the right */}
      <div className="additional-content">
        <div className="about">
          <h2>About Us</h2>
          <p>
            Iron Garbage Collection is dedicated to providing exceptional metal recycling services while keeping our planet clean.
            With years of experience in the waste management industry, we ensure safe and efficient handling of scrap materials.
          </p>
        </div>

        <div className="why-choose">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Industry Expertise</li>
            <li>Eco-Friendly Practices</li>
            <li>Competitive Pricing</li>
            <li>Nationwide Collection Service</li>
          </ul>
        </div>

        <div className="contact">
          <h2>Contact Us</h2>
          <p>
            Have a large batch of scrap metal to recycle? Get in touch with us today to schedule a pickup.
          </p>
          <Link to="/Contact" className="contact-button">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
