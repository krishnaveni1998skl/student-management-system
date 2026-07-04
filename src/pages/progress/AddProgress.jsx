import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import ProgressForm from "../../components/progress/ProgressForm";
import { addProgress } from "../../services/api";

function AddProgress() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    studentId: "",
    name: "",
    subject: "",
    semester: "",
    marks: "",
    grade: "",
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
      await addProgress(formData);
      alert("Progress added successfully!");
      navigate("/progress");
    } catch (error) {
      console.error(error);
      alert("Failed to add progress.");
    }
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Add Progress</h1>

          <p className="text-gray-500 mt-2">
            Add a new student progress record.
          </p>
        </div>

        <ProgressForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          buttonText="Save Progress"
        />
      </div>
    </MainLayout>
  );
}

export default AddProgress;
