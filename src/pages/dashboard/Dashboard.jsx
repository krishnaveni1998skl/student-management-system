import MainLayout from "../../layouts/MainLayout";
import StatsGrid from "../../components/dashboard/StatsGrid";
import StudentChart from "../../components/dashboard/StudentChart";
import CalendarCard from "../../components/dashboard/CalendarCard";

function Dashboard() {
  return (
    <MainLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

          <p className="mt-2 text-gray-500">
            Welcome to the Student Management System Dashboard.
          </p>
        </div>

        <StatsGrid />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <StudentChart />
          </div>

          <CalendarCard />
        </div>
      </div>
    </MainLayout>
  );
}

export default Dashboard;
