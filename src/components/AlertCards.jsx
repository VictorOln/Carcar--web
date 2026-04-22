export default function AlertCards({
  title,
  value,
  icon,
  colorClass,
  borderClass,
}) {
  return (
    <div
      className={`bg-[#313131] p-6 rounded-2xl flex flex-col justify-between h-44 border border-white/5 border-b-4 ${borderClass} transition-all`}
    >
      {/* Header: Título sempre BRANCO e Ícone COLORIDO */}
      <div className="flex items-center justify-between">
        <p className="text-white text-[11px] font-bold uppercase tracking-widest leading-none">
          {title}
        </p>
        <div className={`${colorClass} text-xl`}>{icon}</div>
      </div>

      {/* Valor Gigante sempre BRANCO */}
      <h3 className="text-white text-5xl font-black tracking-tighter leading-none">
        {value}
      </h3>

      {/* Subtítulo COLORIDO  */}
      <div
        className={`flex items-center gap-2 ${colorClass} text-[10px] font-bold uppercase tracking-wider`}
      >
        Monitoramento em tempo real
      </div>
    </div>
  );
}
