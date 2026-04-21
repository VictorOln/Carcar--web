import { FiChevronRight, FiMapPin, FiUsers } from "react-icons/fi";

export const STATUS_CONFIG = {
  CONFIRMADO:  { label: "CONFIRMADO",       bg: "bg-red-600",    text: "text-white" },
  PENDENTE:    { label: "PENDENTE",          bg: "bg-yellow-500", text: "text-black" },
  RESOLVIDO:   { label: "RESOLVIDO",         bg: "bg-green-600",  text: "text-white" },
  FALSO:       { label: "FALSO",             bg: "bg-zinc-500",   text: "text-white" },
  EM_CURSO:    { label: "EM CURSO",          bg: "bg-orange-500", text: "text-white" },
  QUEIMA_CTRL: { label: "QUEIMA CONTROLADA", bg: "bg-blue-600",   text: "text-white" },
  CONCLUIDO:   { label: "CONCLUÍDO",         bg: "bg-green-600",  text: "text-white" },
  VERIFICADO:  { label: "VERIFICADO",        bg: "bg-red-700",    text: "text-white" },
};

export const ALERTAS = [
  { id: 1, coords: "-3.73291, 41.01214", local: "Foco G2", zona: "Alto Alagoas",       tempo: "14 minutos atrás", status: "CONFIRMADO" },
  { id: 2, coords: "-3.73291, 41.01214", local: "Foco G3", zona: "Serra da Ibiapaba",  tempo: "34 minutos atrás", status: "EM_CURSO" },
  { id: 3, coords: "-3.73291, 41.01214", local: "Foco G4", zona: "Baixo Parnaíba",     tempo: "52 minutos atrás", status: "RESOLVIDO" },
  { id: 4, coords: "-4.12044, 40.58831", local: "Foco G5", zona: "Chapada do Araripe", tempo: "1 hora atrás",     status: "PENDENTE" },
  { id: 5, coords: "-4.12044, 40.58831", local: "Foco G6", zona: "Chapada do Araripe", tempo: "2 horas atrás",    status: "FALSO" },
  { id: 6, coords: "-3.98711, 40.34920", local: "Foco G7", zona: "Cariri Ocidental",   tempo: "3 horas atrás",    status: "QUEIMA_CTRL" },
  { id: 7, coords: "-4.56231, 39.98110", local: "Foco G8", zona: "Litoral Norte",      tempo: "4 horas atrás",    status: "CONFIRMADO" },
  { id: 8, coords: "-5.11200, 39.41500", local: "Foco G9", zona: "Sertão Central",     tempo: "5 horas atrás",    status: "PENDENTE" },
];

export function AlertaRow({ alerta }) {
  const cfg = STATUS_CONFIG[alerta.status];
  return (
    <div className="flex items-center justify-between px-6 py-4 hover:bg-white/[0.03] transition-colors cursor-pointer">
      <div className="flex flex-col gap-1">
        <span className="text-zinc-500 text-[11px] font-mono">{alerta.coords}</span>
        <div className="flex items-center gap-1.5 text-zinc-300 text-sm font-semibold">
          <FiMapPin size={12} className="text-orange-500" />
          {alerta.local}
        </div>
        <span className="text-zinc-600 text-[11px]">{alerta.zona}</span>
        <span className={`mt-1 inline-block self-start px-2.5 py-0.5 rounded text-[10px] font-bold tracking-wide ${cfg.bg} ${cfg.text}`}>
          {cfg.label}
        </span>
      </div>
      <span className="text-zinc-600 text-[11px] whitespace-nowrap ml-4">{alerta.tempo}</span>
    </div>
  );
}

export default function AlertasRecentes({ onVerTodos }) {
  const preview = ALERTAS.slice(0, 3);
  return (
    <div className="bg-[#1e1e1e] rounded-2xl border border-white/5 overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
        <h3 className="text-white text-xs font-bold uppercase tracking-widest">Alertas Recentes</h3>
        <button onClick={onVerTodos} className="text-orange-500 text-xs font-semibold flex items-center gap-1 hover:text-orange-400 transition-colors">
          Ver todos <FiChevronRight size={14} />
        </button>
      </div>
      <div className="divide-y divide-white/5">
        {preview.map((a) => <AlertaRow key={a.id} alerta={a} />)}
      </div>
    </div>
  );
}
