import { FaBell, FaBars } from "react-icons/fa";
import ProfileMenu from "./ProfileMenu";

function Navbar({ sidebarOpen, setSidebarOpen }) {
  return (
    <header className="h-16 bg-white shadow-sm border-b flex items-center justify-between px-4 md:px-8">
      {/* Left */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl text-gray-700"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <FaBars />
        </button>

        <div>
          <h2 className="text-lg md:text-2xl font-bold text-gray-800">
            Student Management System
          </h2>

          <p className="hidden md:block text-sm text-gray-500">
            Welcome back, Admin
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">
        <button className="relative text-2xl text-gray-600 hover:text-blue-600">
          <FaBell />

          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            3
          </span>
        </button>

        <ProfileMenu />
      </div>
    </header>
  );
}

export default Navbar;
