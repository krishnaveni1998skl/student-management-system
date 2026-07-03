import { FaPlus, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function StudentToolbar({
  searchTerm,
  setSearchTerm,
  department,
  setDepartment,
  year,
  setYear,
  status,
  setStatus,
}) {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-5 rounded-xl shadow flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div className="relative w-full md:w-80">
        <FaSearch className="absolute left-3 top-4 text-gray-400" />

        <input
          type="text"
          placeholder="Search students..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-wrap gap-3 mt-3">
        {/* Department */}
        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="border rounded-lg p-2"
        >
          <option value="">All Department</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Information Technology">Information Technology</option>
          <option value="Mechanical">Mechanical</option>
        </select>

        {/* Year */}
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="border rounded-lg p-2"
        >
          <option value="">All Year</option>
          <option value="I Year">I Year</option>
          <option value="II Year">II Year</option>
          <option value="III Year">III Year</option>
          <option value="IV Year">IV Year</option>
        </select>

        {/* Status */}
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border rounded-lg p-2"
        >
          <option value="">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>
      <button
        onClick={() => navigate("/students/add")}
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg flex items-center gap-2"
      >
        <FaPlus />
        Add Student
      </button>
    </div>
  );
}

export default StudentToolbar;
