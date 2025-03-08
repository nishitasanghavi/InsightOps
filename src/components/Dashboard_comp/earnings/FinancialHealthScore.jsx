import React, { useState } from 'react';
import { FaDollarSign, FaPiggyBank, FaRegCalendarAlt, FaRegMoneyBillAlt, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import { BsFillBrightnessHighFill, BsFillBrightnessLowFill } from 'react-icons/bs';
import { motion } from 'framer-motion'; // Import framer-motion

const FinancialHealthScore = () => {
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [totalSavings, setTotalSavings] = useState(0);
  const [monthlyExpenses, setMonthlyExpenses] = useState(0);
  const [taxesPaidOnTime, setTaxesPaidOnTime] = useState(false);
  const [incomeStability, setIncomeStability] = useState('irregular');
  const [platformEarnings, setPlatformEarnings] = useState([
    { platform: '', earnings: 0 }
  ]);

  // Add earnings input fields for platforms
  const handlePlatformEarningsChange = (index, field, value) => {
    const updatedEarnings = [...platformEarnings];
    updatedEarnings[index][field] = value;
    setPlatformEarnings(updatedEarnings);
  };

  const handleAddPlatformEarnings = () => {
    setPlatformEarnings([...platformEarnings, { platform: '', earnings: 0 }]);
  };

  const handleRemovePlatformEarnings = (index) => {
    const updatedEarnings = platformEarnings.filter((_, i) => i !== index);
    setPlatformEarnings(updatedEarnings);
  };

  // Calculate financial health scores
  const calculateFinancialHealth = () => {
    const savingsPercentage = (totalSavings / monthlyIncome) * 100;
    const expensesPercentage = (monthlyExpenses / monthlyIncome) * 100;
    const taxScore = taxesPaidOnTime ? 100 : 0;
    const incomeStabilityScore = incomeStability === 'regular' ? 100 : 50;

    // Calculate total earnings from platforms
    const totalPlatformEarnings = platformEarnings.reduce((total, platform) => total + parseFloat(platform.earnings), 0);
    const totalEarnings = monthlyIncome + totalPlatformEarnings;

    // Overall financial health score formula
    const overallScore = (savingsPercentage * 0.30) +
      (expensesPercentage * 0.25) +
      (taxScore * 0.20) +
      (incomeStabilityScore * 0.25);

    return {
      savingsPercentage,
      expensesPercentage,
      taxScore,
      incomeStabilityScore,
      overallScore,
      totalEarnings,
      totalPlatformEarnings
    };
  };

  const {
    savingsPercentage,
    expensesPercentage,
    taxScore,
    incomeStabilityScore,
    overallScore,
    totalEarnings,
    totalPlatformEarnings
  } = calculateFinancialHealth();

  return (
    <div className="max-w-full mx-auto bg-white rounded-lg shadow-lg p-6">
      <h1 className="text-3xl font-bold text-center text-[#000000] mb-6">
        Financial Health Score
      </h1>

      {/* Input Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div>
          <label className="block text-sm font-medium text-[#000000]">Monthly Income</label>
          <div className="flex items-center border border-[#CCCCCC] rounded-md p-2">
            <FaDollarSign className="text-[#E2511A] mr-2" />
            <input
              type="number"
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(parseFloat(e.target.value))}
              className="w-full p-2 border-none"
              placeholder="Enter monthly income"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-[#000000]">Total Savings</label>
          <div className="flex items-center border border-[#CCCCCC] rounded-md p-2">
            <FaPiggyBank className="text-[#40AB7A] mr-2" />
            <input
              type="number"
              value={totalSavings}
              onChange={(e) => setTotalSavings(parseFloat(e.target.value))}
              className="w-full p-2 border-none"
              placeholder="Enter total savings"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-[#000000]">Monthly Expenses</label>
          <div className="flex items-center border border-[#CCCCCC] rounded-md p-2">
            <FaRegMoneyBillAlt className="text-[#E2511A] mr-2" />
            <input
              type="number"
              value={monthlyExpenses}
              onChange={(e) => setMonthlyExpenses(parseFloat(e.target.value))}
              className="w-full p-2 border-none"
              placeholder="Enter monthly expenses"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <label className="block text-sm font-medium text-[#000000]">Taxes Paid on Time?</label>
          <input
            type="checkbox"
            checked={taxesPaidOnTime}
            onChange={(e) => setTaxesPaidOnTime(e.target.checked)}
            className="h-5 w-5 text-[#E2511A] border-[#CCCCCC] rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#000000]">Income Stability</label>
          <div className="flex items-center border border-[#CCCCCC] rounded-md p-2">
            <FaRegCalendarAlt className="text-[#40AB7A] mr-2" />
            <select
              value={incomeStability}
              onChange={(e) => setIncomeStability(e.target.value)}
              className="w-full p-2 border-none"
            >
              <option value="regular">Regular</option>
              <option value="irregular">Irregular</option>
            </select>
          </div>
        </div>
      </div>

      {/* Earnings from Other Platforms Section */}

      {/* Display Financial Health Score */}
      <motion.div
        className="bg-[#CCCCCC] p-6 rounded-lg mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-bold text-[#000000] mb-4">
          Your Financial Health Score: {overallScore.toFixed(1)}/100
        </h2>
        <div className="w-full h-2 mb-6 bg-gray-200 rounded-full">
          <div
            style={{ width: `${overallScore}%` }}
            className="h-2 bg-[#40AB7A] rounded-full"
          />
        </div>
        <p className="text-[#000000]">
          Total Earnings (Including Platforms): ${totalEarnings.toFixed(2)}
        </p>
        <p className="text-[#000000]">
          Total Earnings from Platforms: ${totalPlatformEarnings.toFixed(2)}
        </p>
      </motion.div>

      {/* Tips Section */}
      <div className="bg-[#E2511A] p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-white mb-4">Tips to Improve Your Financial Health</h2>
        <ul className="list-disc list-inside text-white">
          <li>Save at least 20-30% of your monthly income.</li>
          <li>Reduce unnecessary expenses to keep them below 50% of your income.</li>
          <li>Always pay taxes on time to avoid penalties.</li>
          <li>Look for stable income sources if your income is irregular.</li>
        </ul>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#000000] mt-7 mb-4">Earnings from Other Platforms</h2>
        {platformEarnings.map((platform, index) => (
          <motion.div
            key={index}
            className="flex gap-4 mb-4 bg-[#f9f9f9] p-4 rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full">
              <label className="block text-sm font-medium text-[#000000]">Platform Name</label>
              <input
                type="text"
                value={platform.platform}
                onChange={(e) => handlePlatformEarningsChange(index, 'platform', e.target.value)}
                className="w-full p-2 border border-[#CCCCCC] rounded-md"
                placeholder="Enter platform name"
              />
            </div>
            <div className="w-full">
              <label className="block text-sm font-medium text-[#000000]">Earnings</label>
              <input
                type="number"
                value={platform.earnings}
                onChange={(e) => handlePlatformEarningsChange(index, 'earnings', e.target.value)}
                className="w-full p-2 border border-[#CCCCCC] rounded-md"
                placeholder="Enter earnings from this platform"
              />
            </div>
            <button
              onClick={() => handleRemovePlatformEarnings(index)}
              className="text-red-500 p-2 mt-7"
            >
              Remove
            </button>
          </motion.div>
        ))}
        <button
          onClick={handleAddPlatformEarnings}
          className="bg-[#E2511A] text-white p-2 rounded-lg"
        >
          Add More Platform Earnings
        </button>
      </div>
    </div>
  );
};

export default FinancialHealthScore;
