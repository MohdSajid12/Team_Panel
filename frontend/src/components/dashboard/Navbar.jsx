import React from "react";
import { useAuth } from "../../context/authContext";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <header className="bg-teal-500 h-14 flex items-center justify-between px-6 text-white shadow-md">
      <h2 className="text-lg font-semibold">Welcome, {user?.name}</h2>
      <button className="bg-teal-700 hover:bg-teal-800 px-4 py-1 rounded text-sm font-medium transition">
        Logout
      </button>
    </header>
  );
};

export default Navbar;
