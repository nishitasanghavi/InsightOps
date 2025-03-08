import React, { useState } from "react";
import { motion } from "framer-motion";

const steps = [
  "Profile Setup",
  "Financial Information",
  "Client Management",
  "Project Tracker Setup",
];

const StepForm = ({ step, onSubmit }) => {
  const renderFormFields = () => {
    switch (step) {
      case "Profile Setup":
        return (
          <>
            <motion.input type="text" placeholder="Name" className="w-full p-3 border rounded-lg mb-3 focus:ring-2 focus:ring-orange-500" />
            <motion.input type="tel" placeholder="Phone Number" className="w-full p-3 border rounded-lg mb-3 focus:ring-2 focus:ring-orange-500" />
            <motion.input type="email" placeholder="Email" className="w-full p-3 border rounded-lg mb-3 focus:ring-2 focus:ring-orange-500" />
            <motion.select className="w-full p-3 border rounded-lg mb-3 focus:ring-2 focus:ring-orange-500">
              <option>Designer</option>
              <option>Writer</option>
              <option>Driver</option>
              <option>Delivery Partner</option>
            </motion.select>
            <motion.input type="file" className="w-full p-3 border rounded-lg mb-3" />
          </>
        );
      case "Financial Information":
        return (
          <>
            <motion.input type="text" placeholder="Bank Name" className="w-full p-3 border rounded-lg mb-3 focus:ring-2 focus:ring-orange-500" />
            <motion.input type="number" placeholder="Account Number" className="w-full p-3 border rounded-lg mb-3 focus:ring-2 focus:ring-orange-500" />
            <motion.input type="text" placeholder="IFSC Code" className="w-full p-3 border rounded-lg mb-3 focus:ring-2 focus:ring-orange-500" />
          </>
        );
      case "Client Management":
        return (
          <>
            <motion.input type="text" placeholder="Client Name" className="w-full p-3 border rounded-lg mb-3 focus:ring-2 focus:ring-orange-500" />
            <motion.input type="email" placeholder="Client Email" className="w-full p-3 border rounded-lg mb-3 focus:ring-2 focus:ring-orange-500" />
            <motion.input type="tel" placeholder="Client Contact Number" className="w-full p-3 border rounded-lg mb-3 focus:ring-2 focus:ring-orange-500" />
          </>
        );
      case "Project Tracker Setup":
        return (
          <>
            <motion.input type="text" placeholder="Project Name" className="w-full p-3 border rounded-lg mb-3 focus:ring-2 focus:ring-orange-500" />
            <motion.textarea placeholder="Project Description" className="w-full p-3 border rounded-lg mb-3 focus:ring-2 focus:ring-orange-500" />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex bg-white shadow-xl rounded-3xl overflow-hidden w-full max-w-4xl"
    >
      {/* Left Side */}
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-1/2 bg-black text-white p-8 flex flex-col justify-center"
      >
        <h2 className="text-3xl font-bold">What Our Jobkeepers Say</h2>
        <p className="mt-5 italic text-lg leading-relaxed">
          "Identifying and managing business operations efficiently has never been easier."
        </p>
        <p className="mt-3 font-semibold text-lg">- Nishita Sanghavi</p>
        <p className="text-sm italic">Business Operations Manager at Google</p>
      </motion.div>

      {/* Right Side - Form */}
      <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-1/2 p-8"
      >
        <motion.h2 className="text-3xl font-semibold text-gray-800 mb-5">
          {step}
        </motion.h2>
        {renderFormFields()}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onSubmit}
          className="bg-orange-500 text-white w-full py-3 rounded-lg mt-5 font-semibold hover:bg-orange-600 transition"
        >
          Next Step
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);

  const handleSubmit = () => {
    if (currentStep < steps.length - 1) {
      setCompletedSteps([...completedSteps, steps[currentStep]]);
      setCurrentStep(currentStep + 1);
    } else {
      alert("Form Submitted Successfully!");
      window.location.href = "/dashboard";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
      <motion.div className="flex items-center mb-8">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center">
            <motion.div
              className={`w-14 h-14 flex items-center justify-center text-lg font-semibold rounded-full border-4 ${
                completedSteps.includes(step) ? "bg-green-500 text-white border-green-500" : "bg-gray-300 border-gray-400"
              }`}
            >
              {completedSteps.includes(step) ? "✔" : index + 1}
            </motion.div>
            {index < steps.length - 1 && <div className="w-20 h-2 bg-gray-400 mx-2 rounded-full" />}
          </div>
        ))}
      </motion.div>
      {currentStep < steps.length && <StepForm step={steps[currentStep]} onSubmit={handleSubmit} />}
    </div>
  );
};

export default MultiStepForm;





