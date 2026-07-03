import {
  FaUsers,
  FaUserCheck,
  FaUserTimes,
  FaUniversity,
} from "react-icons/fa";

function StatsGrid({ students }) {
  const total = students.length;
  const active = students.filter((s) => s.status === "Active").length;
  const inactive = students.filter((s) => s.status === "Inactive").length;

  const departments = [...new Set(students.map((s) => s.department))].length;

  const stats = [
    {
      title: "Total Students",
      value: total,
      icon: <FaUsers />,
      color: "bg-blue-500",
    },
    {
      title: "Active Students",
      value: active,
      icon: <FaUserCheck />,
      color: "bg-green-500",
    },
    {
      title: "Inactive Students",
      value: inactive,
      icon: <FaUserTimes />,
      color: "bg-red-500",
    },
    {
      title: "Departments",
      value: departments,
      icon: <FaUniversity />,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white p-5 rounded-xl shadow flex items-center gap-4"
        >
          <div className={`text-white p-3 rounded-lg ${item.color}`}>
            {item.icon}
          </div>

          <div>
            <p className="text-gray-500 text-sm">{item.title}</p>
            <h2 className="text-xl font-bold">{item.value}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatsGrid;
