import { STATUS_CONFIG } from "../constants/status";

export default function PageAlertas({ focos = [] }) {
  return (
    <div className="px-8 py-10">
      <h2 className="text-white text-3xl font-bold mb-8 uppercase">
        Central de Alertas
      </h2>
      <div className="grid gap-4">
        {focos.map((foco) => {
          const cfg = STATUS_CONFIG[foco.status] || STATUS_CONFIG.PENDENTE;
          return (
            <div
              key={foco.id}
              className="bg-[#1E1E1E] p-6 rounded-2xl border border-white/5 flex justify-between items-center hover:border-orange-500/50 transition-all"
            >
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg">
                  {foco.nome}
                </span>
                <span className="text-zinc-500 text-sm">
                  {foco.zona} • {foco.relatos} relatos
                </span>
              </div>
              <span
                className={`px-4 py-1 rounded-full text-[10px] font-bold ${cfg.bg} ${cfg.text}`}
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
