export default function AlertCards({ title, value, icon, subtitle, subtitleColor, borderColor }) {
  return (
    <div className={`bg-[#313131] p-6 rounded-2xl flex flex-col justify-between h-40 border-b-2 transition-all shadow-lg ${borderColor}`}>
      <div className="flex items-center justify-between">
        <p className="text-zinc-400 text-[11px] font-bold uppercase tracking-widest">{title}</p>
        <div className="text-xl opacity-80">{icon}</div>
      </div>
      <h3 className="text-white text-5xl font-bold tracking-tight">{value}</h3>
      <div className={`flex items-center gap-2 text-[11px] font-medium ${subtitleColor}`}>
        {subtitle}
      </div>
    </div>
  );
}
