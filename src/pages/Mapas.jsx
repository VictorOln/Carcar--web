import { useState } from "react";
import { FiMapPin } from "react-icons/fi";
import { MapCanvas } from "../components/MapaFoco";
import { STATUS_CONFIG } from "../constants/status";

export default function PageMapas({ focos = [] }) {
  const [selected, setSelected] = useState(null);
  const ativos = focos.filter((f) => f.status !== "RESOLVIDO");

  return (
    <div className="px-8 py-10">
      <h2 className="text-white text-3xl font-bold mb-8 uppercase">
        Mapa de Focos
      </h2>
      <div className="flex gap-8">
        <div className="flex-1 bg-[#1E1E1E] rounded-3xl border border-white/5 overflow-hidden shadow-2xl">
          <MapCanvas height="h-[600px]" focos={focos} />
        </div>
        <div className="w-80 flex flex-col gap-3 h-[600px] overflow-y-auto pr-2">
          {focos.map((foco) => {
            const cfg = STATUS_CONFIG[foco.status] || STATUS_CONFIG.PENDENTE;
            return (
              <div
                key={foco.id}
                onClick={() => setSelected(foco.id)}
                className={`bg-[#1E1E1E] border rounded-2xl p-4 cursor-pointer transition-all ${selected === foco.id ? "border-orange-500" : "border-white/5"}`}
              >
                <div className="flex flex-col gap-1">
                  <span className="text-white text-sm font-bold">
                    {foco.local}
                  </span>
                  <span
                    className={`self-start px-2 py-0.5 rounded text-[9px] font-bold ${cfg.bg} ${cfg.text}`}
                  >
                    {cfg.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
