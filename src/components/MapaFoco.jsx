import { FiMaximize2 } from "react-icons/fi";

export const FOCOS = [
  { id: 1, x: 42, y: 35, status: "CONFIRMADO",  local: "Foco G2", zona: "Alto Alagoas" },
  { id: 2, x: 55, y: 50, status: "EM_CURSO",    local: "Foco G3", zona: "Serra da Ibiapaba" },
  { id: 3, x: 30, y: 60, status: "RESOLVIDO",   local: "Foco G4", zona: "Baixo Parnaíba" },
  { id: 4, x: 70, y: 40, status: "PENDENTE",    local: "Foco G5", zona: "Chapada do Araripe" },
  { id: 5, x: 60, y: 70, status: "FALSO",       local: "Foco G6", zona: "Chapada do Araripe" },
  { id: 6, x: 48, y: 65, status: "QUEIMA_CTRL", local: "Foco G7", zona: "Cariri Ocidental" },
  { id: 7, x: 25, y: 30, status: "CONFIRMADO",  local: "Foco G8", zona: "Litoral Norte" },
  { id: 8, x: 80, y: 60, status: "PENDENTE",    local: "Foco G9", zona: "Sertão Central" },
];

export const DOT_COLOR = {
  CONFIRMADO:  "bg-red-500",
  EM_CURSO:    "bg-orange-500",
  RESOLVIDO:   "bg-green-500",
  PENDENTE:    "bg-yellow-400",
  FALSO:       "bg-zinc-400",
  QUEIMA_CTRL: "bg-blue-500",
};

const LEGEND = [
  { label: "Confirmado",        color: "bg-red-500" },
  { label: "Em Curso",          color: "bg-orange-500" },
  { label: "Pendente",          color: "bg-yellow-400" },
  { label: "Resolvido",         color: "bg-green-500" },
  { label: "Queima Controlada", color: "bg-blue-500" },
  { label: "Falso",             color: "bg-zinc-400" },
];

export function MapCanvas({ height = "h-64" }) {
  return (
    <div className={`relative ${height} bg-[#161b22] overflow-hidden`}>
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#888" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg">
        <polygon points="80,30 320,30 370,100 350,230 100,230 40,140" fill="none" stroke="#f97316" strokeWidth="1.5" strokeDasharray="6 3"/>
        <text x="185" y="130" fill="#666" fontSize="11" textAnchor="middle" fontFamily="monospace">CEARÁ – CE</text>
      </svg>
      {FOCOS.map((foco) => (
        <div key={foco.id} className="absolute group" style={{ left: `${foco.x}%`, top: `${foco.y}%`, transform: "translate(-50%, -50%)" }}>
          {(foco.status === "CONFIRMADO" || foco.status === "EM_CURSO") && (
            <span className={`absolute inline-flex h-4 w-4 rounded-full ${DOT_COLOR[foco.status]} opacity-40 animate-ping`} />
          )}
          <span className={`relative inline-flex h-3 w-3 rounded-full ${DOT_COLOR[foco.status]} border border-white/20 cursor-pointer`} />
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-[#313131] text-white text-[10px] font-bold px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10 z-10">
            {foco.local} · {foco.zona}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function MapaFoco({ onExpandir }) {
  return (
    <div className="bg-[#1e1e1e] rounded-2xl border border-white/5 overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
        <h3 className="text-white text-xs font-bold uppercase tracking-widest">Mapa de Foco</h3>
        <button onClick={onExpandir} className="text-orange-500 text-xs font-semibold flex items-center gap-1 hover:text-orange-400 transition-colors">
          Expandir mapa <FiMaximize2 size={13} />
        </button>
      </div>
      <MapCanvas height="h-64" />
      <div className="flex flex-wrap gap-x-5 gap-y-2 px-6 py-3 border-t border-white/5">
        {LEGEND.map((item) => (
          <div key={item.label} className="flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${item.color}`} />
            <span className="text-zinc-500 text-[11px]">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
