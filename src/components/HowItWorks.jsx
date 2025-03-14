import React from 'react';
import { FaUserCheck, FaSearch, FaHandshake, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: <FaUserCheck className="text-[#E2511A] text-5xl" />, // Updated to match theme
    title: 'Sign Up',
    description: 'Create your account in just a few clicks.',
  },
  {
    icon: <FaSearch className="text-[#E2511A] text-5xl" />,
    title: 'Find Opportunities',
    description: 'Explore jobs, projects & freelancers.',
  },
  {
    icon: <FaHandshake className="text-[#E2511A] text-5xl" />,
    title: 'Connect & Collaborate',
    description: 'Chat, negotiate, and finalize deals.',
  },
  {
    icon: <FaRocket className="text-[#E2511A] text-5xl" />,
    title: 'Get Started',
    description: 'Begin your journey towards success!',
  },
];

function HowItWorks() {
  return (
    <div className="py-5 bg-white text-center"> {/* White background for consistency */}
      <h2 className="text-5xl font-bold text-black">
        How <span className="text-[#E2511A]">It Works</span>
      </h2>
      <p className="text-lg text-gray-600 mt-3">
        Start in just a few simple steps.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 px-6 sm:px-12 lg:px-24">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-lg shadow-lg bg-[#CCCCCC] text-black flex flex-col items-center" // Updated to fit theme
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <p className="text-gray-800 mt-2">{step.description}</p>
            <div className="w-10 h-10 flex items-center justify-center bg-[#E2511A] text-white rounded-full font-bold mt-4">
              {index + 1}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default HowItWorks;
