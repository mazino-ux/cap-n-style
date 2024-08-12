/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';



const HeroSection = () => {
  const words = ['Style!', 'Fashion!', 'Elegance!'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isBackspacing, setIsBackspacing] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const slideInElements = document.querySelectorAll('.slide-in');
    slideInElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('visible');
      }, index * 2000);
    });

    setTimeout(() => {
      setIsBackspacing(false);
      setCharIndex(0);
    }, 6000); // Delay before typing effect starts
  }, []);

  useEffect(() => {
    if (charIndex >= 0) {
      const typingInterval = setInterval(() => {
        if (!isBackspacing) {
          if (charIndex < words[currentWordIndex].length) {
            setDisplayedText(words[currentWordIndex].slice(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          } else {
            setTimeout(() => setIsBackspacing(true), 1000); // Pause before backspacing
          }
        } else {
          if (charIndex > 0) {
            setDisplayedText(words[currentWordIndex].slice(0, charIndex - 1));
            setCharIndex(charIndex - 1);
          } else {
            setIsBackspacing(false);
            setCurrentWordIndex((currentWordIndex + 1) % words.length);
          }
        }
      }, 100); // Typing speed

      return () => clearInterval(typingInterval);
    }
  }, [charIndex, isBackspacing, currentWordIndex, words]);

  return (
    <div className="hero-section relative">
      <img 
        className="lg:w-full lg:h-full object-cover bg-blue-500" 
        src="https://img.freepik.com/premium-photo/celebrate-st-patrick39s-day-with-magical-hat-clovers-surrounded-by-green-foilage_358001-55206.jpg?w=996" 
        alt="Hero" 
      />
      <div className="absolute top-1/2 left-5 transform -translate-y-1/2 text-white space-y-4 text-overlay">
        <h1 className="lg:text-4xl  font-bold slide-in">Welcome to Cap'n'style</h1>
        <p className="text-lg sm:text-base slide-in">We don't just sell caps, we embody 
          <span className='font-bold text-yellow-500 text-[1.25rem]'> {displayedText}</span>
          <span className="blinking-cursor">|</span></p>
        <Link to={'/allproducts'}>
          <button className="px-4 py-2 sm:px-2 sm:py-1 bg-green-600 rounded slide-in">
            SHOP NOW
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;



