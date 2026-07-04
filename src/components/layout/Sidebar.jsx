import {
  FaTachometerAlt,
  FaUserGraduate,
  FaClipboardCheck,
  FaChartLine,
  FaFileAlt,
  FaUser,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", path: "/dashboard", icon: <FaTachometerAlt /> },
  { name: "Students", path: "/students", icon: <FaUserGraduate /> },
  { name: "Attendance", path: "/attendance", icon: <FaClipboardCheck /> },
  { name: "Progress", path: "/progress", icon: <FaChartLine /> },
  { name: "Reports", path: "/reports", icon: <FaFileAlt /> },
  { name: "Profile", path: "/profile", icon: <FaUser /> },
];

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-blue-900 text-white shadow-lg z-50 transform transition-transform duration-300
        ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Logo */}
        <div className="border-b border-blue-700 p-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">SMS</h1>
            <p className="text-sm text-blue-200">Student Management</p>
          </div>

          {/* Close button (Mobile) */}
          <button
            className="lg:hidden text-xl"
            onClick={() => setSidebarOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        {/* Menu */}
        <nav className="mt-5 flex flex-col">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `mx-3 my-1 flex items-center gap-3 rounded-lg px-4 py-3 transition ${
                  isActive
                    ? "bg-white text-blue-900 font-semibold"
                    : "hover:bg-blue-800"
                }`
              }
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* Logout */}
        <div className="absolute bottom-0 w-full border-t border-blue-700 p-4">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-lg px-4 py-3 hover:bg-red-600 transition"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
