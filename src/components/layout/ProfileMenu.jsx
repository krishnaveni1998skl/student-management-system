import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";

function ProfileMenu() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <FaUserCircle className="text-3xl text-gray-600" />
        <div>
          <p className="font-semibold">Admin</p>
          <p className="text-xs text-gray-500">admin@student.com</p>
        </div>
      </div>

      <button
        onClick={handleLogout}
        className="flex items-center gap-2 bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition"
      >
        <FaSignOutAlt />
        Logout
      </button>
    </div>
  );
}

export default ProfileMenu;
