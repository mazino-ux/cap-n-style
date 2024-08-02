/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img 
        className="w-full h-full object-cover bg-blue-500" 
        src="https://img.freepik.com/premium-photo/celebrate-st-patrick39s-day-with-magical-hat-clovers-surrounded-by-green-foilage_358001-55206.jpg?w=996" 
        alt="Hero" 
      />
      <div className="absolute top-1/2 left-5 transform -translate-y-1/2 text-white space-y-4 slider">
        <h1 className="text-4xl font-bold slide-in delay-0">Welcome to Cap'n'style</h1>
        <p className="text-lg slide-in delay-2000"> We don't just sell caps, we fashion cloth🥰</p>
        <button className="px-4 py-2 bg-green-600 rounded slide-in delay-4000">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
