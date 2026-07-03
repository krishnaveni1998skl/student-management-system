import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

function MainLayout({ children }) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="ml-64">
        <Navbar />

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}

export default MainLayout;
