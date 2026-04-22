import { FiChevronRight, FiMapPin } from "react-icons/fi";
import { STATUS_CONFIG } from "../constants/status";

export default function AlertasRecentes({ onVerTodos, alertas = [] }) {
  // Agora ele usa a prop 'alertas' que vem de fora
  return (
    <div className="bg-[#1e1e1e] rounded-2xl border border-white/5 overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
        <h3 className="text-white text-xs font-bold uppercase tracking-widest">
          Alertas Recentes
        </h3>
        <button
          onClick={onVerTodos}
          className="text-orange-500 text-xs font-bold flex items-center gap-1"
        >
          VER TODOS <FiChevronRight size={14} />
        </button>
      </div>

      <div className="flex flex-col">
        {alertas.map((alerta) => {
          const cfg = STATUS_CONFIG[alerta.status];
          return (
            <div
              key={alerta.id}
              className="p-4 border-b border-white/5 flex justify-between items-center"
            >
              <div className="flex flex-col">
                <span className="text-zinc-300 text-sm font-bold">
                  {alerta.local}
                </span>
                <span className="text-zinc-500 text-[10px]">{alerta.zona}</span>
              </div>
              <span
                className={`px-2 py-0.5 rounded text-[9px] font-bold ${cfg.bg} ${cfg.text}`}
              >
                {cfg.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
