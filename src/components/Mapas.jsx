import { useState } from "react";
import { FiUsers } from "react-icons/fi";
import { MapCanvas, FOCOS, DOT_COLOR } from "./MapaFoco";
import { STATUS_CONFIG } from "./AlertasRecentes";

export default function PageMapas() {
  const [selected, setSelected] = useState(null);
  const ativos = FOCOS.filter(f => f.status !== "RESOLVIDO" && f.status !== "FALSO");

  return (
    <div className="max-w-[1400px] mx-auto px-8 py-10 flex gap-8">
      <div className="flex-1 min-w-0">
        <h2 className="text-white text-2xl font-bold mb-1">Mapa de Focos</h2>
        <p className="text-zinc-500 text-sm mb-6">Visualização dos alertas ativos</p>

        <div className="flex gap-5">
          <div className="flex-1 bg-[#1e1e1e] rounded-2xl border border-white/5 overflow-hidden">
            <div className="px-5 py-3 border-b border-white/5">
              <span className="bg-orange-500/20 text-orange-400 text-xs font-bold px-3 py-1 rounded-full">
                {ativos.length} Focos ativos
              </span>
            </div>
            <MapCanvas height="h-[420px]" />
          </div>

          <div className="w-72 shrink-0">
            <p className="text-white text-xs font-bold uppercase tracking-widest mb-4">Focos Ativos</p>
            <div className="flex flex-col gap-3">
              {FOCOS.map(foco => {
                const cfg = STATUS_CONFIG[foco.status];
                return (
                  <div key={foco.id} onClick={() => setSelected(selected === foco.id ? null : foco.id)}
                    className={`bg-[#1e1e1e] border rounded-xl p-4 cursor-pointer transition-all flex gap-3 items-center ${selected === foco.id ? "border-orange-500" : "border-white/5 hover:border-white/20"}`}>
                    <div className="w-14 h-12 bg-zinc-800 rounded-lg shrink-0 border border-white/5" />
                    <div className="flex flex-col gap-1 min-w-0">
                      <span className="text-white text-sm font-bold truncate">{foco.local}</span>
                      <span className="text-zinc-500 text-[11px] truncate">{foco.zona}</span>
                      <div className="flex items-center gap-1 text-zinc-600 text-[10px]"><FiUsers size={10} /> 1 relato</div>
                      <span className={`self-start px-2 py-0.5 rounded text-[10px] font-bold ${cfg.bg} ${cfg.text}`}>{cfg.label}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
