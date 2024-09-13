import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ContentPage from '../Header/ContentPage';

const Content = () => {
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      headerRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power4.out' }
    )
    .fromTo(
      titleRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power4.out' },
      '-=1'
    )
    .fromTo(
      subtitleRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power4.out' },
      '-=0.8'
    )
    .fromTo(
      descriptionRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power4.out' },
      '-=0.8'
    )
    .fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, ease: 'elastic.out(1, 0.5)' },
      '-=0.8'
    );
  }, []);

  return (
    <>
    <header className="header" ref={headerRef}>
      <div className="header-content">
        <h1 className="title" ref={titleRef}>Welcome to KABAD WALA</h1>
        <p className="subtitle" ref={subtitleRef}>Your trusted recycling partner</p>
        <p className="description" ref={descriptionRef}>
          We help you recycle your scrap in an environmentally friendly way. Join us in creating a greener future!
        </p>
        <button className="cta-button" ref={buttonRef}>Learn More</button>
      </div>
    </header>
    <ContentPage />
    </>
  );
};

export default Content;
