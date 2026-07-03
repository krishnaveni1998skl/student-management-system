import {
  FaTachometerAlt,
  FaUserGraduate,
  FaClipboardCheck,
  FaChartLine,
  FaFileAlt,
  FaUser,
  FaSignOutAlt,
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

function Sidebar() {
    const navigate = useNavigate();

const handleLogout = () => {
  localStorage.removeItem("isLoggedIn");
  navigate("/");
};
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-blue-900 text-white shadow-lg">
      {/* Logo */}
      <div className="border-b border-blue-700 p-6">
        <h1 className="text-2xl font-bold">SMS</h1>
        <p className="text-sm text-blue-200">Student Management</p>
      </div>

      {/* Menu */}
      <nav className="mt-5 flex flex-col">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
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
  );
}

export default Sidebar;
