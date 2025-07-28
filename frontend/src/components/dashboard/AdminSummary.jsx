import React from "react";
import SummaryCard from "./SummaryCard";
import {
  FaUsers,
  FaBuilding,
  FaMoneyBillWave,
  FaFileAlt,
  FaCheckCircle,
  FaHourglassHalf,
  FaTimesCircle,
} from "react-icons/fa";

const AdminSummary = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h3 className="text-3xl font-bold text-gray-800 mb-6">Dashboard Overview</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <SummaryCard icon={<FaUsers />} text="Total Employees" number={13} color="bg-blue-500" />
        <SummaryCard icon={<FaBuilding />} text="Total Departments" number={5} color="bg-indigo-500" />
        <SummaryCard icon={<FaMoneyBillWave />} text="Monthly Salary" number="$654" color="bg-green-500" />
      </div>

      <div className="mt-12">
        <h4 className="text-2xl font-semibold text-gray-700 text-center mb-6">Leave Details</h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <SummaryCard icon={<FaFileAlt />} text="Leave Applied" number={5} color="bg-purple-500" />
          <SummaryCard icon={<FaCheckCircle />} text="Leave Approved" number={2} color="bg-emerald-500" />
          <SummaryCard icon={<FaHourglassHalf />} text="Leave Pending" number={4} color="bg-yellow-500" />
          <SummaryCard icon={<FaTimesCircle />} text="Leave Rejected" number={1} color="bg-rose-500" />
        </div>
      </div>
    </div>
  );
};

export default AdminSummary;
