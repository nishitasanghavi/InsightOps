import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../Context/ThemeContext';

function Herosection() {
  const { theme } = useTheme();
  const sectionRef = useRef(null);
  const [users, setUsers] = useState(0);
  const [tools, setTools] = useState(0);
  const [projects, setProjects] = useState(0);
  const [animated, setAnimated] = useState(false);

  const animateNumber = (target, setter) => {
    let start = 0;
    const increment = Math.ceil(target / 100);
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(interval);
        setter(target);
      } else {
        setter(start);
      }
    }, 15);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          animateNumber(5000, setUsers);
          animateNumber(200, setTools);
          animateNumber(8000, setProjects);
          setAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animated]);

  return (
    <div
      ref={sectionRef}
      className="relative h-screen w-full bg-white"
    >
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="/videos/hero_section.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Further reduced overlay opacity for better visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-75 z-0"></div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6 sm:px-12">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white drop-shadow-lg">
          Supporting Gig Workers,
        </h1>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white drop-shadow-lg">
          One Solution at a Time
        </h1>
        <p className="text-lg sm:text-xl mt-4 text-[#E2511A] drop-shadow-lg">
          A complete platform for financial stability, benefits, and growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 mt-8">
          <StatBox count={users} label="Active Users" color="text-[#E2511A]" />
          <StatBox count={tools} label="Available Tools" color="text-[#CCCCCC]" />
          <StatBox count={projects} label="Managed Projects" color="text-[#FFFFFF]" />
        </div>
      </div>
    </div>
  );
}

const StatBox = ({ count, label, color }) => (
  <div className="flex flex-col items-center">
    <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold ${color} drop-shadow-lg`}>
      {count.toLocaleString()}+
    </h2>
    <p className="text-lg sm:text-xl text-[#E2511A] drop-shadow-lg">{label}</p>
  </div>
);

export default Herosection;