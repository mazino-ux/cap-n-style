/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './../navbar/navbar.css'

function VideoAnimation() {
  const videoContainerRef = useRef(null);

  useEffect(() => {
    // GSAP animation for the video container
    gsap.fromTo(
      videoContainerRef.current,
      {
        opacity: 0,
        rotationY: -90,
        scale: 0.5,
        x: '-100%',
      },
      {
        opacity: 1,
        rotationY: 0,
        scale: 1,
        x: '0%',
        duration: 1.5,
        ease: 'power4.out',
      }
    );

    // Animation on hover effect
    gsap.to(videoContainerRef.current, {
      rotationY: 360,
      duration: 5,
      repeat: -1,
      ease: 'none',
      paused: true,
    });
  }, []);

  return (
    <div className="video-container" ref={videoContainerRef}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/taUASIYlrJU?si=WcPHV7zGB5D0bc1E"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoAnimation;
