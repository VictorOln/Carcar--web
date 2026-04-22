import { FiMaximize2 } from "react-icons/fi";

const DOT_COLOR = {
  CONFIRMADO: "bg-red-600 shadow-[0_0_10px_#dc2626]",
  PENDENTE: "bg-yellow-500 shadow-[0_0_10px_#eab308]",
  RESOLVIDO: "bg-green-600 shadow-[0_0_10px_#16a34a]",
  EM_CURSO: "bg-orange-500 shadow-[0_0_10px_#f97316]",
  FALSO: "bg-zinc-500",
};

export function MapCanvas({ height = "h-64", focos = [] }) {
  return (
    <div className={`relative ${height} bg-[#161b22] overflow-hidden`}>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#ffffff 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px",
        }}
      />
      {focos.map((f) => (
        <div
          key={f.id}
          style={{ left: `${f.x}%`, top: `${f.y}%` }}
          className="absolute -translate-x-1/2 -translate-y-1/2 group"
        >
          <span
            className={`h-3 w-3 rounded-full ${DOT_COLOR[f.status] || "bg-white"} border border-white/40 block cursor-pointer hover:scale-150 transition-transform`}
          />
        </div>
      ))}
    </div>
  );
}

export default function MapaFoco({ onExpandir, focos }) {
  return (
    <div className="bg-[#1E1E1E] rounded-3xl border border-white/5 overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
        <h3 className="text-white text-xs font-bold uppercase tracking-widest">
          Monitoramento Geográfico
        </h3>
        <button
          onClick={onExpandir}
          className="text-orange-500 text-xs font-bold"
        >
          EXPANDIR
        </button>
      </div>
      <MapCanvas height="h-80" focos={focos} />
    </div>
  );
}
