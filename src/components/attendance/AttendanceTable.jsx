import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function AttendanceTable({ attendance, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left">Student ID</th>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Department</th>
            <th className="p-4 text-left">Date</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {attendance.length > 0 ? (
            attendance.map((item) => (
              <tr key={item.id} className="border-t hover:bg-gray-50">
                <td className="p-4">{item.studentId}</td>

                <td className="p-4">{item.name}</td>

                <td className="p-4">{item.department}</td>

                <td className="p-4">{item.date}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      item.status === "Present"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="p-4">
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() => navigate(`/attendance/view/${item.id}`)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FaEye />
                    </button>

                    <button
                      onClick={() => navigate(`/attendance/edit/${item.id}`)}
                      className="text-green-600 hover:text-green-800"
                    >
                      <FaEdit />
                    </button>

                    <button
  onClick={() => onDelete(item.id)}
  className="text-red-600 hover:text-red-800"
>
  <FaTrash />
</button>
                    
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center py-8 text-gray-500">
                No attendance records found.
              </td>
            </tr>
          )}
        </tbody>
        
      </table>
    </div>
  );
}

export default AttendanceTable;
