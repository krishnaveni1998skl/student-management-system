import { FaBell, FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <header className="h-16 bg-white shadow-sm border-b flex items-center justify-between px-8 ml-64">
      {/* Left */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800">
          Student Management System
        </h2>
        <p className="text-sm text-gray-500">Welcome back, Admin</p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">
        <button className="relative text-2xl text-gray-600 hover:text-blue-600">
          <FaBell />
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            3
          </span>
        </button>

        <div className="flex items-center gap-3">
          <FaUserCircle className="text-4xl text-blue-700" />
          <div>
            <h3 className="font-semibold text-gray-800">Administrator</h3>
            <p className="text-sm text-gray-500">Admin Panel</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
