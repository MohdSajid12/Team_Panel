import React from "react";
import { Link } from 'react-router-dom'
import DataTable from 'react-data-table-component'
import { columns, DepartmentsButtons } from '../../utils/DepartmentHelpers'
import { useEffect, useState } from "react";
import axios from "axios";
import { AUTH_END_POINT } from "../../utils/api";

const DepartmentList = () => {

    const [departments, setDepartment] = useState([]);
    const [depLoading, setDepLoading] = useState(false);

    useEffect(() => {
        const fetchDepartments = async () => {
            setDepLoading(true);
            try {
                const response = await axios.get(`${AUTH_END_POINT}/api/department`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });

                if (response.data.success) {
                    let sno = 1;
                    const data = response.data.departments.map((dep) => {
                        return {
                            _id: dep._id,
                            sno: sno++,
                            dep_name: dep.dep_name,
                            action: (<DepartmentsButtons _id={dep._id} />)
                        };
                    });

                    setDepartment(data)
                }
            }
            catch (error) {
                if (error.response && !error.response.data.success) {
                    alert(error.response.data.message)
                }
            } finally {
                setDepLoading(false);
            }
        }
        fetchDepartments();
    }, [])

    return (
        <>
            {depLoading ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="text-gray-600 text-lg">Loading...</div>
                </div>
            ) : (
                <div className="p-6 bg-gray-100 min-h-screen rounded-md">
                    <div className="text-center mb-6">
                        <h3 className="text-3xl font-semibold text-gray-800">Manage Departments</h3>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 shadow-md rounded-md mb-4">
                        <input
                            type="text"
                            placeholder="Search by Department Name"
                            className="px-4 py-2 border border-gray-300 rounded-md w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                        <Link
                            to="/admin-dashboard/add-department"
                            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-md transition duration-200"
                        >
                            Add New Department
                        </Link>
                    </div>

                    <div className="bg-white p-4 shadow-md rounded-md">
                        <DataTable
                            columns={columns}
                            data={departments}
                            pagination
                            highlightOnHover
                            striped
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default DepartmentList;
