'use client';
import React, { useState, useEffect } from 'react';
import styles from './style.module.scss';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    setIsVisible(scrollTop > 400);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`${styles.scrolltotopbutton} ${isVisible ? styles.visible : ''}`}
      onClick={scrollToTop}
    >
      &#8593;
    </button>
  );
};

export default ScrollToTopButton;
