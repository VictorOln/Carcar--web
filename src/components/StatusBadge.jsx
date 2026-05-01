import { STATUS_CONFIG } from "../constants/status";

export default function StatusBadge({ status }) {
  // Busca a configuração do status. Se não encontrar, usa um padrão cinza.
  const config = STATUS_CONFIG[status] || {
    label: status,
    bg: "bg-zinc-600/20",
    text: "text-zinc-500",
    dot: "bg-zinc-600",
  };

  return (
    <div className={`px-5 py-1 rounded-lg flex items-center justify-center w-fit shadow-lg ${config.bg}`}>
      <span className={`text-[10px] font-black uppercase tracking-widest ${config.text}`}>
        {config.label}
      </span>
    </div>
  );
}
