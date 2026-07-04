import {
  FaUserGraduate,
  FaUserCheck,
  FaUserTimes,
  FaChartPie,
} from "react-icons/fa";

function ReportStats({ students, attendance }) {
  const totalStudents = students.length;

  const present = attendance.filter((item) => item.status === "Present").length;

  const absent = attendance.filter((item) => item.status === "Absent").length;

  const percentage =
    attendance.length > 0
      ? ((present / attendance.length) * 100).toFixed(1)
      : 0;

  const stats = [
    {
      title: "Total Students",
      value: totalStudents,
      icon: <FaUserGraduate />,
      color: "bg-blue-500",
    },
    {
      title: "Present",
      value: present,
      icon: <FaUserCheck />,
      color: "bg-green-500",
    },
    {
      title: "Absent",
      value: absent,
      icon: <FaUserTimes />,
      color: "bg-red-500",
    },
    {
      title: "Attendance %",
      value: `${percentage}%`,
      icon: <FaChartPie />,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow p-5 flex items-center gap-4"
        >
          <div className={`${item.color} text-white p-4 rounded-lg text-2xl`}>
            {item.icon}
          </div>

          <div>
            <p className="text-gray-500 text-sm">{item.title}</p>
            <h2 className="text-2xl font-bold">{item.value}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReportStats;
