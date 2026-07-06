import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import AttendanceToolbar from "../../components/attendance/AttendanceToolbar";
import AttendanceTable from "../../components/attendance/AttendanceTable";
import Pagination from "../../components/common/Pagination";
import { getAttendance, deleteAttendance } from "../../services/api";

function Attendance() {
  const [attendance, setAttendance] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  useEffect(() => {
    loadAttendance();
  }, []);

  const loadAttendance = async () => {
    try {
      const res = await getAttendance();
      setAttendance(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this attendance record?",
    );

    if (!confirmDelete) return;

    try {
      await deleteAttendance(id);
      loadAttendance();
    } catch (error) {
      console.error(error);
      alert("Failed to delete attendance.");
    }
  };

  // Search + Filter
  const filteredAttendance = attendance.filter((item) => {
    const matchSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.studentId.toLowerCase().includes(searchTerm.toLowerCase());

    const matchStatus = status ? item.status === status : true;

    return matchSearch && matchStatus;
  });

  // Pagination Logic
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const currentAttendance = filteredAttendance.slice(
    indexOfFirstRecord,
    indexOfLastRecord,
  );

  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Attendance Management
          </h1>

          <p className="text-gray-500 mt-2">
            Manage student attendance records.
          </p>
        </div>

        <AttendanceToolbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          status={status}
          setStatus={setStatus}
        />

        <AttendanceTable
          attendance={currentAttendance}
          onDelete={handleDelete}
        />

        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalItems={filteredAttendance.length}
          itemsPerPage={recordsPerPage}
        />
      </div>
    </MainLayout>
  );
}

export default Attendance;
