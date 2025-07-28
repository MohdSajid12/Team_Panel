import React, { useState } from "react";
import axios from 'axios';
import { AUTH_END_POINT } from "../utils/api";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [error , setError] = useState(null);
    const {login} = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
       e.preventDefault();
        try{
             const response = await axios.post(`${AUTH_END_POINT}/api/auth/login` ,{
                email , password
             } ,{ headers: {
                    "Content-Type": "application/json" 
                },
                withCredentials :true,})
             if(response.data.success){
                 login(response.data.user)
                 localStorage.setItem("token" ,response.data.token);
                 if(response.data.user.role == 'admin'){
                    navigate ('/admin-dashboard')
                 } else {
                     navigate('/employee-dashboard')
                 }
             }
        }catch(error){
            // alert(error.response.data.error)
            if(error.response && !error.response.data.success){
               setError(error.response.data.message)
            } 
        }

    }

  return (
    <div className="flex flex-col items-center h-screen justify-center bg-gradient-to-b from-teal-600 from-50% to-gray-100 to-50% space-y-6">
      <h2 className="font-sevillana text-3xl text-white">🔓 Unlock Your Workspace – TeamPanel Login</h2>

      <div className="border border-gray-200 shadow-md p-6 w-80 bg-white rounded-lg">
        <h2 className="text-2xl font-bold mb-5">Login</h2>
        {error &&  <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-teal-300"
              onChange={(e)=> setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-teal-300"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox text-teal-600" />
              <span className="ml-2 text-gray-700">Remember Me</span>
            </label>
            <a href="#" className="text-teal-600 text-sm hover:underline">Forget Password?</a>
          </div>
          <div className="mb-4">
            <button type="submit" className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
