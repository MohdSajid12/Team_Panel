import React from "react";
import {Link} from 'react-router-dom'

const AddDepartment = () =>{
    return (
        <div>
            <div>
                <h3>Manage Departments</h3>
            </div>

            <div>
                <input type="text" placeholder="Search By Dep Name" />
                 <Link to="/admin-dashboard/add-new-department"></Link>
            </div>

        </div>
    )
}

export default AddDepartment;   