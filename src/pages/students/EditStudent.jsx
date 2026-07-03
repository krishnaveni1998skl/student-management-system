import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import StudentForm from "../../components/students/StudentForm";
import { getStudent, updateStudent } from "../../services/api";

function EditStudent() {
  const { id } = useParams();
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

  useEffect(() => {
    loadStudent();
  }, []);

  const loadStudent = async () => {
    try {
      const response = await getStudent(id);
      setFormData(response.data);
    } catch (error) {
      console.error("Error loading student:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateStudent(id, formData);
      alert("Student Updated Successfully");
      navigate("/students");
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Edit Student</h1>

          <p className="text-gray-500 mt-2">Update student information.</p>
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

export default EditStudent;
