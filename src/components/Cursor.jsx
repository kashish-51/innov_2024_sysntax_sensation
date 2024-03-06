import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Cursor = () => {
  useEffect(() => {
    gsap.set('.redball', { xPercent: -50, yPercent: -50 });
    let targets = gsap.utils.toArray('.redball');
    window.addEventListener('mouseleave', () => {
      gsap.to(targets, {
        duration: 0.5,
        scale: 0,
        ease: 'power1.out',
        overwrite: 'auto',
        stagger: 0.02,
      });
    });
    window.addEventListener('mouseenter', () => {
      gsap.to(targets, {
        duration: 0.5,
        scale: 1,
        ease: 'power1.out',
        overwrite: 'auto',
        stagger: 0.02,
      });
    });
    window.addEventListener('mousemove', (e) => {
      gsap.to(targets, {
        duration: 0.5,
        x: e.clientX,
        y: e.clientY,
        ease: 'power1.out',
        overwrite: 'auto',
        stagger: 0.02,
      });
    });
  }, []);

  return (
    <div className="z-0 fixed top-0 left-0 pointer-events-none">
      <div className="redball z-40 w-52 h-52 rounded-full opacity-60 shadow-sm" style={{ background: 'linear-gradient(to bottom right, #FFFBF5,  #C3ACD0, #674188)' }}></div>
    </div>
  );
};

export default Cursor;
