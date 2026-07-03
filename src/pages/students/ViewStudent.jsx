import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import { getStudent } from "../../services/api";

function ViewStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState(null);

  useEffect(() => {
    loadStudent();
  }, []);

  const loadStudent = async () => {
    try {
      const response = await getStudent(id);
      setStudent(response.data);
    } catch (error) {
      console.error("Error loading student:", error);
    }
  };

  if (!student) {
    return (
      <MainLayout>
        <p className="p-6">Loading...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-6">Student Details</h1>

        <div className="space-y-3">
          <p>
            <b>ID:</b> {student.studentId}
          </p>
          <p>
            <b>Name:</b> {student.name}
          </p>
          <p>
            <b>Email:</b> {student.email}
          </p>
          <p>
            <b>Phone:</b> {student.phone}
          </p>
          <p>
            <b>Department:</b> {student.department}
          </p>
          <p>
            <b>Year:</b> {student.year}
          </p>
          <p>
            <b>Status:</b> {student.status}
          </p>
        </div>

        <div className="mt-6 flex gap-4">
          <button
            onClick={() => navigate("/students")}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Back
          </button>

          <button
            onClick={() => navigate(`/students/edit/${student.id}`)}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Edit
          </button>
        </div>
      </div>
    </MainLayout>
  );
}

export default ViewStudent;
