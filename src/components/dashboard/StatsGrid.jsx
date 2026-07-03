import StatsCard from "./StatsCard";

function StatsGrid() {
  const stats = [
    {
      title: "Total Students",
      value: 250,
      color: "#2563EB",
    },
    {
      title: "Active Students",
      value: 220,
      color: "#16A34A",
    },
    {
      title: "Inactive Students",
      value: 30,
      color: "#DC2626",
    },
    {
      title: "Departments",
      value: 6,
      color: "#F59E0B",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((item) => (
        <StatsCard
          key={item.title}
          title={item.title}
          value={item.value}
          color={item.color}
        />
      ))}
    </div>
  );
}

export default StatsGrid;
