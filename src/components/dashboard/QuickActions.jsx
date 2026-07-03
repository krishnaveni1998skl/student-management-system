import {
  FaUserPlus,
  FaClipboardCheck,
  FaChartBar,
  FaFileAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function QuickActions() {
  const navigate = useNavigate();

  const actions = [
    {
      title: "Add Student",
      icon: <FaUserPlus />,
      color: "bg-blue-500",
      path: "/students/add",
    },
    {
      title: "Attendance",
      icon: <FaClipboardCheck />,
      color: "bg-green-500",
      path: "/attendance",
    },
    {
      title: "Progress",
      icon: <FaChartBar />,
      color: "bg-purple-500",
      path: "/progress",
    },
    {
      title: "Reports",
      icon: <FaFileAlt />,
      color: "bg-orange-500",
      path: "/reports",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-5">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => (
          <button
            key={action.title}
            onClick={() => navigate(action.path)}
            className={`${action.color} text-white rounded-xl p-5 flex flex-col items-center justify-center gap-3 hover:scale-105 transition`}
          >
            <div className="text-3xl">{action.icon}</div>
            <span className="font-medium">{action.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuickActions;
