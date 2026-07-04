import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import { getAttendanceById } from "../../services/api";

function ViewAttendance() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [attendance, setAttendance] = useState({});

  useEffect(() => {
    loadAttendance();
  }, []);

  const loadAttendance = async () => {
    try {
      const res = await getAttendanceById(id);
      setAttendance(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-8">
        <h2 className="text-2xl font-bold mb-6">View Attendance</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-gray-500">Student ID</label>
            <p className="font-semibold">{attendance.studentId}</p>
          </div>

          <div>
            <label className="text-gray-500">Student Name</label>
            <p className="font-semibold">{attendance.name}</p>
          </div>

          <div>
            <label className="text-gray-500">Department</label>
            <p className="font-semibold">{attendance.department}</p>
          </div>

          <div>
            <label className="text-gray-500">Date</label>
            <p className="font-semibold">{attendance.date}</p>
          </div>

          <div>
            <label className="text-gray-500">Status</label>
            <p className="font-semibold">{attendance.status}</p>
          </div>
        </div>

        <div className="mt-8">
          <button
            onClick={() => navigate("/attendance")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
          >
            Back
          </button>
        </div>
      </div>
    </MainLayout>
  );
}

export default ViewAttendance;
