import MainLayout from "../../layouts/MainLayout";
import StatsGrid from "../../components/dashboard/StatsGrid";
import StudentChart from "../../components/dashboard/StudentChart";
import CalendarCard from "../../components/dashboard/CalendarCard";
import RecentStudents from "../../components/dashboard/RecentStudents";
import QuickActions from "../../components/dashboard/QuickActions";
import { useEffect, useState } from "react";
import { getStudents } from "../../services/api";
function Dashboard() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
      loadStudents();
    }, []);

    const loadStudents = async () => {
  try {
    const res = await getStudents();

    console.log("Dashboard Students:", res.data);

    setStudents(res.data);
  } catch (error) {
    console.error(error);
  }
};

  return (
    <MainLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <p className="mt-2 text-gray-500">
            Welcome to the Student Management System Dashboard.
          </p>
        </div>
        <p className="text-red-600 font-bold">
          Students Count: {students.length}
        </p>
        {/* ✅ FIX HERE */}
        <StatsGrid students={students} />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <StudentChart students={students} />
          </div>

          <CalendarCard />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <RecentStudents students={students} />
          </div>

          <QuickActions />
        </div>
      </div>
    </MainLayout>
  );
}

export default Dashboard;
