import { FiMaximize2 } from "react-icons/fi";

// Exportação nomeada para evitar o erro de SyntaxError
export function MapCanvas({ height = "h-64", focos = [] }) {
  return (
    <div className={`relative ${height} bg-[#1A1A1A] overflow-hidden rounded-xl border border-white/5`}>
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />
      {focos.map((f) => (
        <div key={f.id} style={{ left: `${f.x}%`, top: `${f.y}%` }} className="absolute -translate-x-1/2 -translate-y-1/2">
          <span className="h-4 w-4 bg-orange-500 rounded-full border border-white/20 block shadow-[0_0_15px_#f97316]" />
        </div>
      ))}
    </div>
  );
}

export default function MapaFoco({ onExpandir, focos }) {
  return (
    <div className="bg-[#313131] rounded-2xl border border-white/5 overflow-hidden shadow-xl">
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
        <h3 className="text-white text-xs font-bold uppercase tracking-widest opacity-70">Monitoramento Geográfico</h3>
        <button onClick={onExpandir} className="text-orange-500 text-xs font-bold hover:brightness-125 transition-all uppercase">
          EXPANDIR MAPA &gt;
        </button>
      </div>
      <div className="p-4">
        <MapCanvas height="h-[400px]" focos={focos} />
      </div>
    </div>
  );
}