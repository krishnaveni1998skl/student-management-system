import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import ReportStats from "../../components/reports/ReportStats";
import AttendanceChart from "../../components/reports/AttendanceChart";
import ExportButtons from "../../components/reports/ExportButtons";
import { getStudents, getAttendance } from "../../services/api";
import DepartmentChart from "../../components/reports/DepartmentChart";
function Reports() {
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const studentRes = await getStudents();
      const attendanceRes = await getAttendance();

      setStudents(studentRes.data);
      setAttendance(attendanceRes.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MainLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Reports</h1>
          <p className="text-gray-500 mt-2">Student and Attendance Reports</p>
        </div>

        {/* Stats Cards */}
        <ReportStats students={students} attendance={attendance} />

        {/* Pie Chart */}
        <AttendanceChart attendance={attendance} />
        <DepartmentChart students={students} />
        {/* Export Buttons */}
        <ExportButtons />
      </div>
    </MainLayout>
  );
}

export default Reports;
