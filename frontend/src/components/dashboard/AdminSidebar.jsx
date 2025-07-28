import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaBuilding,
  FaCalendarAlt,
  FaMoneyBill,
  FaCogs,
} from "react-icons/fa";

const AdminSidebar = () => {
  const navItems = [
    { path: "/admin-dashboard", icon: <FaTachometerAlt />, label: "Dashboard" },
    { path: "/admin-employees", icon: <FaUsers />, label: "Employee" },
    {
      path: "/admin-dashboard/departments",
      icon: <FaBuilding />,
      label: "Department",
    },
    { path: "/admin-leaves", icon: <FaCalendarAlt />, label: "Leave" },
    { path: "/admin-salary", icon: <FaMoneyBill />, label: "Salary" },
    { path: "/admin-settings", icon: <FaCogs />, label: "Settings" },
  ];

  return (
    <div className="bg-white text-gray-800 shadow-xl h-screen fixed w-64 top-0 left-0 flex flex-col border-r border-gray-200">
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 h-16 flex items-center justify-center shadow-sm">
        <h3 className="text-xl font-semibold text-white">Team Panel</h3>
      </div>

      <nav className="flex-1 py-6 space-y-2 px-2">
        {navItems.map((item, idx) => (
          <NavLink
            key={idx}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 text-sm rounded-lg transition-all duration-300 ${
                isActive
                  ? "bg-teal-500 text-white shadow-md"
                  : "hover:bg-gray-100 text-gray-700"
              }`
            }
            end
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default AdminSidebar;
