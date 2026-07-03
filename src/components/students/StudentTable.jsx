import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { deleteStudent } from "../../services/api";

function StudentTable({ students }) {const navigate = useNavigate();
    const handleDelete = async (id) => {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this student?",
      );

      if (confirmDelete) {
        try {
          await deleteStudent(id);
          window.location.reload(); // refresh table
        } catch (error) {
          console.error("Error deleting student:", error);
        }
      }
    };
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left">Student ID</th>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-left">Department</th>
            <th className="p-4 text-left">Year</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="border-t hover:bg-gray-50">
              <td className="p-4">{student.studentId}</td>
              <td className="p-4">{student.name}</td>
              <td className="p-4">{student.email}</td>
              <td className="p-4">{student.department}</td>
              <td className="p-4">{student.year}</td>

              <td className="p-4">
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

              <td className="p-4">
                <div className="flex justify-center gap-3">
                  <button
                    onClick={() => navigate(`/students/view/${student.id}`)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaEye />
                  </button>

                  <button
                    onClick={() => navigate(`/students/edit/${student.id}`)}
                    className="text-green-600 hover:text-green-800"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(student.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrash />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
