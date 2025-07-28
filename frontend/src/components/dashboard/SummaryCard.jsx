import React from "react";

const SummaryCard = ({ icon, text, number, color }) => {
  return (
    <div className="flex items-center bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-all duration-300">
      <div className={`w-14 h-14 flex items-center justify-center rounded-full ${color} text-white text-2xl`}>
        {icon}
      </div>
      <div className="ml-4">
        <p className="text-gray-600 text-sm font-medium">{text}</p>
        <p className="text-gray-900 text-xl font-bold">{number}</p>
      </div>
    </div>
  );
};

export default SummaryCard;
