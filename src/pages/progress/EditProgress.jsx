import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import ProgressForm from "../../components/progress/ProgressForm";
import { getProgressById, updateProgress } from "../../services/api";

function EditProgress() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    studentId: "",
    name: "",
    subject: "",
    semester: "",
    marks: "",
    grade: "",
  });

  useEffect(() => {
    loadProgress();
  }, []);

  const loadProgress = async () => {
    try {
      const res = await getProgressById(id);
      setFormData(res.data);
    } catch (error) {
      console.error(error);
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
      await updateProgress(id, formData);
      alert("Progress updated successfully!");
      navigate("/progress");
    } catch (error) {
      console.error(error);
      alert("Failed to update progress.");
    }
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Edit Progress</h1>

          <p className="text-gray-500 mt-2">Update student progress record.</p>
        </div>

        <ProgressForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          buttonText="Update Progress"
        />
      </div>
    </MainLayout>
  );
}

export default EditProgress;
