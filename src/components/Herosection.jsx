import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../Context/ThemeContext';

function Herosection() {
  const { theme } = useTheme();
  const sectionRef = useRef(null);
  const [freelancers, setFreelancers] = useState(0);
  const [jobs, setJobs] = useState(0);
  const [projects, setProjects] = useState(0);
  const [animated, setAnimated] = useState(false); // Ensures animation runs only once

  const animateNumber = (target, setter) => {
    let start = 0;
    const increment = Math.ceil(target / 100); // Smooth animation
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(interval);
        setter(target);
      } else {
        setter(start);
      }
    }, 10);
  };

  // Trigger animation when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          animateNumber(3000, setFreelancers);
          animateNumber(10000, setJobs);
          animateNumber(5000, setProjects);
          setAnimated(true); // Prevents re-triggering
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
      className={`relative h-screen w-full ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}
    >
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="/videos/herosection.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-6 sm:px-12">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight">
          Empowering Creativity,
        </h1>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight">
          One Connection at a
        </h1>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight">Time</h1>
        <p className="text-lg sm:text-xl mt-4">Find top talent or your next big project with ease</p>

        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 mt-8">
          <StatBox count={freelancers} label="Freelancers" color="text-[#45b280]" />
          <StatBox count={jobs} label="Jobs" color="text-[#FFA500]" />
          <StatBox count={projects} label="Projects" color="text-[#45b280]" />
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-0"></div>
    </div>
  );
}

// Reusable component for stats
const StatBox = ({ count, label, color }) => (
  <div className="flex flex-col items-center">
    <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold ${color}`}>
      {count.toLocaleString()}+
    </h2>
    <p className="text-lg sm:text-xl">{label}</p>
  </div>
);

export default Herosection;
