import { useNavigate } from "react-router-dom";

function RecentStudents({ students }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold text-gray-800">Recent Students</h2>

        <button
          onClick={() => navigate("/students")}
          className="text-blue-600 hover:underline text-sm"
        >
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">Student ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Department</th>
              <th className="p-3">Year</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {students.slice(0, 5).map((student) => (
              <tr key={student.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{student.studentId}</td>
                <td className="p-3">{student.name}</td>
                <td className="p-3">{student.department}</td>
                <td className="p-3">{student.year}</td>

                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      student.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {student.status}
                  </span>
                </td>
              </tr>
            ))}

            {students.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  No students found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentStudents;
