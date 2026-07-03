import MainLayout from "../../layouts/MainLayout";
import StatsGrid from "../../components/dashboard/StatsGrid";

function Dashboard() {
  return (
    <MainLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

          <p className="text-gray-500 mt-2">
            Welcome to the Student Management System Dashboard.
          </p>
        </div>

        <StatsGrid />
      </div>
    </MainLayout>
  );
}

export default Dashboard;
