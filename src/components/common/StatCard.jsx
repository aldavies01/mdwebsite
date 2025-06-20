function StatCard({ number, label, subtitle, colorClass = "secondary-coral" }) {
  return (
    <div
      className={`text-center bg-gradient-to-br from-${colorClass}/10 to-${colorClass}/5 rounded-xl p-4`}
    >
      <div className={`text-3xl font-bold text-${colorClass} mb-1`}>
        {number}
      </div>
      <div className="text-sm text-gray-600">{label}</div>
      {subtitle && <div className="text-xs text-gray-500 mt-1">{subtitle}</div>}
    </div>
  );
}

export default StatCard;
