function StatsCard({ title, value, color }) {
  return (
    <div
      className="bg-white rounded-xl shadow-md p-6 border-l-4"
      style={{ borderColor: color }}
    >
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>

      <h2 className="text-3xl font-bold mt-2 text-gray-800">{value}</h2>
    </div>
  );
}

export default StatsCard;
