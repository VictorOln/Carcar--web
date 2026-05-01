import { FiMapPin } from "react-icons/fi";
import StatusBadge from "./StatusBadge";

export default function AlertasRecentes({ onVerTodos, alertas, onSelecionarAlerta }) {
  return (
    <div className="bg-[#313131] rounded-2xl border border-white/5 overflow-hidden shadow-xl">
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
        <h3 className="text-white text-xs font-bold uppercase tracking-widest opacity-70">Alertas Recentes</h3>
        <button onClick={onVerTodos} className="text-orange-500 text-xs font-bold hover:underline uppercase">Ver todos &gt;</button>
      </div>

      <div className="p-4 space-y-3">
        {alertas.map((alerta) => (
          <div 
            key={alerta.id} 
            onClick={() => onSelecionarAlerta && onSelecionarAlerta(alerta.id)}
            className="bg-[#262626] p-4 rounded-xl border border-white/5 flex items-center justify-between group hover:border-orange-500/30 transition-all cursor-pointer"
          >
            <div className="flex flex-col gap-1">
              <span className="text-zinc-500 text-[10px] font-bold uppercase">{alerta.tempo || "Aguardando atualização"}</span>
              <div className="flex items-center gap-2 text-white">
                <FiMapPin size={14} className="text-orange-500" />
                <span className="font-bold text-sm">{alerta.local}</span>
              </div>
              <span className="text-zinc-500 text-[10px] font-medium">{alerta.usuario || "Victor Oliveira"}</span>
            </div>

            <StatusBadge status={alerta.status} />
          </div>
        ))}
      </div>
    </div>
  );
}