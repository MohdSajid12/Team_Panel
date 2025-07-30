// utils/DepartmentHelpers.js
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AUTH_END_POINT } from "./api";

export const getDepartmentColumns = (onDepartmentDelete) => [
  {
    name: "S No",
    selector: (row) => row.sno,
    sortable: true
  },
  {
    name: "Department Name",
    selector: (row) => row.dep_name,
    sortable: true
  },
  {
    name: "Action",
    cell: (row) => (
      <DepartmentsButtons _id={row._id} onDepartmentDelete={onDepartmentDelete} />
    )
  }
];

export const DepartmentsButtons = ({ _id, onDepartmentDelete }) => {
  const handleDelete = async (id) => {
    const confirm = window.confirm("Do you want to delete?");
    if (confirm) {
      try {
        const response = await axios.delete(`${AUTH_END_POINT}/api/department/${id}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        if (response.data.success) {
          onDepartmentDelete(id);
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.message);
        }
      }
    }
  };

  const navigate = useNavigate();
  return (
    <div className="flex space-x-3">
      <button
        className="px-3 py-1 bg-teal-600 text-white"
        onClick={() => navigate(`/admin-dashboard/department/${_id}`)}
      >
        Edit
      </button>
      <button
        className="px-3 py-1 bg-red-600 text-white"
        onClick={() => handleDelete(_id)}
      >
        Delete
      </button>
    </div>
  );
};
