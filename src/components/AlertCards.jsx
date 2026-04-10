export default function AlertCards({ title, value, icon, colorClass }) {
  return (
    <div className="bg-[#1A1A1A] border border-white/5 p-6 rounded-2xl flex items-center justify-between">
      <div>
        <p className="text-zinc-500 text-sm font-medium mb-1">{title}</p>
        <h3 className="text-white text-3xl font-bold">{value}</h3>
      </div>

      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${colorClass}`}
      >
        {icon}
      </div>
    </div>
  );
}
