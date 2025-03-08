import React from 'react';
import { FaChartLine, FaClipboardList, FaCalculator, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <FaChartLine className="text-[#E2511A] text-5xl" />,
    title: 'Financial Management',
    description: 'Track income & expenses with automated insights.',
  },
  {
    icon: <FaClipboardList className="text-[#E2511A] text-5xl" />,
    title: 'Project Tracking',
    description: 'Stay on top of deadlines and progress efficiently.',
  },
  {
    icon: <FaCalculator className="text-[#E2511A] text-5xl" />,
    title: 'Rate Calculator',
    description: 'Determine fair pricing with industry benchmarks.',
  },
  {
    icon: <FaUsers className="text-[#E2511A] text-5xl" />,
    title: 'Client Management',
    description: 'Streamline contracts, invoices, and communication.',
  },
];

function Features() {
  return (
    <div className="py-20 bg-white text-center">
      <h2 className="text-5xl font-bold text-[#000000]">
        Key <span className="text-[#E2511A]">Features</span>
      </h2>
      <p className="text-lg text-[#2F4D6F] mt-3">
        Empower your gig career with essential tools.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 px-6 sm:px-12 lg:px-24">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-lg shadow-lg bg-[#000000] text-white flex flex-col items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
            <p className="text-[#CCCCCC] mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Features;
