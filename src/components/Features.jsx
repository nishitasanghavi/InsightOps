import React from 'react';
import { FaBolt, FaUsers, FaShieldAlt, FaProjectDiagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <FaBolt className="text-[#FFC107] text-5xl" />,
    title: 'Fast & Efficient',
    description: 'Seamless experience with real-time updates.',
  },
  {
    icon: <FaUsers className="text-[#FFC107] text-5xl" />,
    title: 'Top Talent Network',
    description: 'Connect with the best freelancers & professionals.',
  },
  {
    icon: <FaShieldAlt className="text-[#FFC107] text-5xl" />,
    title: 'Secure & Reliable',
    description: 'Your data is protected with top security measures.',
  },
  {
    icon: <FaProjectDiagram className="text-[#FFC107] text-5xl" />,
    title: 'Manage Projects Easily',
    description: 'Track progress & collaborate effortlessly.',
  },
];

function Features() {
  return (
    <div className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold text-black">
        Why Choose <span className="text-[#FFC107]">Us?</span>
      </h2>
      <p className="text-lg text-gray-700 mt-3">
        Unlock endless opportunities with our powerful platform.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 px-6 sm:px-12 lg:px-24">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-lg shadow-lg bg-black text-white flex flex-col items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
            <p className="text-gray-300 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Features;
