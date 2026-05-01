import { FiClock, FiEye } from "react-icons/fi";
import StatusBadge from "./StatusBadge";

export default function CardRelato({ relato, isActive, onClick }) {
  return (
    <div 
      onClick={onClick}
      className={`relative bg-[#313131] p-5 rounded-[20px] border-2 transition-all cursor-pointer flex gap-5 items-center ${
        isActive ? 'border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.2)]' : 'border-orange-500/10 hover:border-orange-500/30'
      }`}
    >
      {/* Thumbnail da Imagem */}
      <div className="w-24 h-24 bg-[#D9D9D9] rounded-xl shrink-0 overflow-hidden border border-white/5 shadow-inner">
        {relato.imagem ? (
          <img src={relato.imagem} alt={`Reporte ${relato.id}`} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-black/10 font-black text-[8px] uppercase">Sem Foto</div>
        )}
      </div>

      {/* Conteúdo */}
      <div className="flex-1 space-y-1">
        <div className="flex justify-between items-start">
          <h3 className="text-white text-xl font-medium tracking-tight">
            {relato.titulo || `Reporte #${relato.id}`}
          </h3>
          
          {/* Data e Hora no canto superior direito */}
          <div className="flex items-center gap-2 text-zinc-500 text-xs font-bold">
            <FiClock size={14} />
            <span>{relato.data} - {relato.hora}</span>
          </div>
        </div>

        {/* Descrição */}
        <p className="text-zinc-400 text-xs leading-relaxed max-w-[400px]">
          {relato.descricao || "Sem descrição informada."}
        </p>

        {/* Usuário/Autor */}
        <div className="flex items-center gap-1 text-zinc-500 text-[10px] font-bold uppercase tracking-widest py-1">
          <FiEye size={12} />
          <span>{relato.usuario || "Anônimo"}</span>
        </div>

        {/* Badge de Status (Componente Unificado) */}
        <div className="pt-1">
          <StatusBadge status={relato.status} />
        </div>
      </div>
    </div>
  );
}