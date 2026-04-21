const STATUS_INFO = [
  { status: "CONFIRMADO",        desc: "report verdadeiro", color: "text-red-400" },
  { status: "FALSO",             desc: "report falso",      color: "text-zinc-400" },
  { status: "EM CURSO",          desc: "Equipe enviada",    color: "text-orange-400" },
  { status: "RESOLVIDO",         desc: "Fogo apagado",      color: "text-green-400" },
  { status: "QUEIMA CONTROLADA", desc: "Queima autorizada", color: "text-blue-400" },
];

export default function Anotacoes() {
  return (
    <div className="bg-orange-500 rounded-2xl p-5 h-fit">
      <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Anotações</h3>
      <p className="text-orange-100 text-[11px] font-bold uppercase tracking-wide mb-3">Status:</p>
      {STATUS_INFO.map((item) => (
        <div key={item.status} className="flex items-start gap-2 mb-1">
          <span className="text-white font-bold text-[11px] whitespace-nowrap">{item.status}</span>
          <span className="text-orange-200 text-[11px]">=</span>
          <span className="text-orange-100 text-[11px]">{item.desc}</span>
        </div>
      ))}
    </div>
  );
}
