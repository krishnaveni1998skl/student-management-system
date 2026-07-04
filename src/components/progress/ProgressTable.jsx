import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ProgressTable({ progress, onDelete}) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left">Student ID</th>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Subject</th>
            <th className="p-4 text-left">Semester</th>
            <th className="p-4 text-left">Marks</th>
            <th className="p-4 text-left">Grade</th>
            <th className="p-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {progress.length > 0 ? (
            progress.map((item) => (
              <tr key={item.id} className="border-t hover:bg-gray-50">
                <td className="p-4">{item.studentId}</td>
                <td className="p-4">{item.name}</td>
                <td className="p-4">{item.subject}</td>
                <td className="p-4">{item.semester}</td>
                <td className="p-4">{item.marks}</td>

                <td className="p-4">
                  <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm">
                    {item.grade}
                  </span>
                </td>

                <td className="p-4">
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() => navigate(`/progress/view/${item.id}`)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FaEye />
                    </button>

                    <button
                      onClick={() => navigate(`/progress/edit/${item.id}`)}
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
              <td colSpan="7" className="text-center py-8 text-gray-500">
                No progress records found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      
    </div>
  );
}

export default ProgressTable;
