import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import StudentForm from "../../components/students/StudentForm";
import { addStudent } from "../../services/api";

function AddStudent() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    studentId: "",
    name: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    department: "",
    year: "",
    address: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addStudent(formData);
      alert("Student Added Successfully");
      navigate("/students");
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Add Student</h1>

          <p className="text-gray-500 mt-2">Register a new student.</p>
        </div>

        <StudentForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </MainLayout>
  );
}

export default AddStudent;
