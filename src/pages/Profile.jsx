import React, { useState } from "react";

const steps = ["Profile Setup", "Financial Information", "Client Management", "Project Tracker Setup"];

const StepForm = ({ step, onNext }) => {
  const renderFormFields = () => {
    switch (step) {
      case "Profile Setup":
        return (
          <>
            <input type="text" placeholder="Name" className="w-full p-2 border rounded mb-2" />
            <input type="tel" placeholder="Phone Number" className="w-full p-2 border rounded mb-2" />
            <input type="email" placeholder="Email" className="w-full p-2 border rounded mb-2" />
            <select className="w-full p-2 border rounded mb-2">
              <option>Designer</option>
              <option>Writer</option>
              <option>Driver</option>
              <option>Delivery Partner</option>
            </select>
            <input type="file" className="w-full p-2 border rounded mb-2" />
          </>
        );
      case "Financial Information":
        return (
          <>
            <input type="text" placeholder="Income Source" className="w-full p-2 border rounded mb-2" />
            <input type="text" placeholder="Monthly Expense" className="w-full p-2 border rounded mb-2" />
            <input type="text" placeholder="PAN Card" className="w-full p-2 border rounded mb-2" />
            <input type="text" placeholder="GST Number" className="w-full p-2 border rounded mb-2" />
          </>
        );
      case "Client Management":
        return (
          <>
            <input type="file" placeholder="Upload Contract Documents" className="w-full p-2 border rounded mb-2" />
            <input type="text" placeholder="List of Clients" className="w-full p-2 border rounded mb-2" />
            <button className="w-full bg-gray-300 p-2 rounded mb-2">Create Sample Invoice</button>
          </>
        );
      case "Project Tracker Setup":
        return (
          <>
            <input type="text" placeholder="Add Sample Project" className="w-full p-2 border rounded mb-2" />
            <input type="text" placeholder="Setup Task and Deadline" className="w-full p-2 border rounded mb-2" />
            <input type="text" placeholder="Add Milestones" className="w-full p-2 border rounded mb-2" />
            <button className="w-full bg-gray-300 p-2 rounded mb-2">Track Progress</button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg w-1/2 text-center">
      <h2 className="text-2xl font-semibold mb-4">{step}</h2>
      {renderFormFields()}
      <button
        onClick={onNext}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </div>
  );
};

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);

  const handleNext = () => {
    setCompletedSteps([...completedSteps, steps[currentStep]]);
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Progress Bar */}
      <div className="flex items-center mb-6">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center">
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full border-2 ${
                completedSteps.includes(step) ? "bg-green-500 text-white" : "bg-gray-300"
              }`}
            >
              {completedSteps.includes(step) ? "✔" : index + 1}
            </div>
            {index < steps.length - 1 && <div className="w-16 h-1 bg-gray-400 mx-2" />}
          </div>
        ))}
      </div>

      {/* Form Section */}
      {currentStep < steps.length && <StepForm step={steps[currentStep]} onNext={handleNext} />}
    </div>
  );
};

export default MultiStepForm;
