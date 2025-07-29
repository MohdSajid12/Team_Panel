import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { AUTH_END_POINT } from "../../utils/api";

const EditDepartment  = () =>{
    
    const {id} = useParams()
    const [department, setDepartment] = useState([]);
    const [loading , setLoading] = useState(true);
    const navigate = useNavigate();

      const handleChange = (e) =>{
         const {name , value} = e.target;
         setDepartment({...department , [name] :value})
    }

     useEffect(() => {
        const editDepartments = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${AUTH_END_POINT}/api/department/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                if (response.data.success) {
                    setDepartment(response.data.department)
                }
            }
            catch (error) {
                if (error.response && !error.response.data.success) {
                    alert(error.response.data.message)
                }
            } finally{
                setLoading(false);
            }
        }
        editDepartments();
    }, [])

    const handeSubmit = async (e) =>{
        e.preventDefault()
        try {
            const response = await axios.put(`${AUTH_END_POINT}/api/department/${id}`,department ,{
                headers : {
                    "Authorization" : `Bearer ${localStorage.getItem("token")}`
                }
            })
            if(response.data.success){
                  navigate("/admin-dashboard/departments")
            }
        }
        catch(error){
            if(error.response && !error.response.data.success){
                alert(error.response.data.message)
            }
        }
    }



    return (
        <>{loading ? <div>Loading..</div> : 
         <div className="flex justify-center items-start mt-10 px-4">
            <div className="bg-white shadow-lg rounded-xl w-full max-w-xl p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
                Edit Department
                </h2>

                <form onSubmit={handeSubmit}>
                <div className="mb-4">
                    <label
                    htmlFor="dep_name"
                    className="block text-gray-700 font-medium mb-1"
                    >
                    Department Name
                    </label>
                    <input
                    type="text"
                    id="dep_name"
                    name="dep_name"
                    onChange={handleChange}
                    value = {department.dep_name}
                    placeholder="Enter department name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                </div>

                <div className="mb-5">
                    <label
                    htmlFor="description"
                    className="block text-gray-700 font-medium mb-1"
                    >
                    Description
                    </label>
                    <textarea
                    id="description"
                    name = "description"
                    placeholder="Write a short description..."
                    rows={3}
                    onChange={handleChange}
                    value = {department.description}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2.5 rounded-md transition">
                    Edit Department
                </button>
                </form>
            </div>
        </div>
        }</>
    )
}


export default EditDepartment;