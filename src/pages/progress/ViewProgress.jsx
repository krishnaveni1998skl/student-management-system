import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import { getProgressById } from "../../services/api";

function ViewProgress() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [progress, setProgress] = useState(null);

  useEffect(() => {
    loadProgress();
  }, []);

  const loadProgress = async () => {
    try {
      const res = await getProgressById(id);
      setProgress(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!progress) {
    return (
      <MainLayout>
        <p className="text-center mt-10">Loading...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto bg-white shadow rounded-xl p-8">
        <h1 className="text-3xl font-bold mb-6">View Progress</h1>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-gray-500">Student ID</p>
            <h3 className="font-semibold">{progress.studentId}</h3>
          </div>

          <div>
            <p className="text-gray-500">Student Name</p>
            <h3 className="font-semibold">{progress.name}</h3>
          </div>

          <div>
            <p className="text-gray-500">Subject</p>
            <h3 className="font-semibold">{progress.subject}</h3>
          </div>

          <div>
            <p className="text-gray-500">Semester</p>
            <h3 className="font-semibold">{progress.semester}</h3>
          </div>

          <div>
            <p className="text-gray-500">Marks</p>
            <h3 className="font-semibold">{progress.marks}</h3>
          </div>

          <div>
            <p className="text-gray-500">Grade</p>
            <h3 className="font-semibold">{progress.grade}</h3>
          </div>
        </div>

        <button
          onClick={() => navigate("/progress")}
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          Back
        </button>
      </div>
    </MainLayout>
  );
}

export default ViewProgress;
