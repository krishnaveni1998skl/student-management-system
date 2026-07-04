import { FaPlus, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function AttendanceToolbar({ searchTerm, setSearchTerm, status, setStatus }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-5 rounded-xl shadow flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div className="relative w-full md:w-80">
        <FaSearch className="absolute left-3 top-4 text-gray-400" />

        <input
          type="text"
          placeholder="Search student..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border rounded-lg px-4 py-3"
      >
        <option value="">All Status</option>
        <option value="Present">Present</option>
        <option value="Absent">Absent</option>
      </select>

      <button
        onClick={() => navigate("/attendance/add")}
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg flex items-center gap-2"
      >
        <FaPlus />
        Mark Attendance
      </button>
    </div>
  );
}

export default AttendanceToolbar;
