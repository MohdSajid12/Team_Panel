import React from "react";
import { useAuth } from "../context/authContext";
import AdminSidebar from "../components/dashboard/AdminSidebar";
import Navbar from "../components/dashboard/Navbar";
import AdminSummary from "../components/dashboard/AdminSummary";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  const { user, loading } = useAuth();

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      <AdminSidebar />

      <div className="flex-1 ml-64 p-6 overflow-auto">
        <Navbar />

        <main className="mt-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
