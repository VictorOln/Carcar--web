import { FiClock, FiEye } from "react-icons/fi";

export default function CardRelato({ relato, isActive, onClick }) {
  return (
    <div 
      onClick={onClick}
      className={`relative bg-[#313131] p-5 rounded-[20px] border-2 transition-all cursor-pointer flex gap-5 items-center ${
        isActive ? 'border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.2)]' : 'border-orange-500/10 hover:border-orange-500/30'
      }`}
    >
      {/* Thumbnail Cinza */}
      <div className="w-24 h-24 bg-[#D9D9D9] rounded-xl shrink-0" />

      {/* Conteúdo */}
      <div className="flex-1 space-y-1">
        <div className="flex justify-between items-start">
          <h3 className="text-white text-xl font-medium tracking-tight">
            {relato.titulo || `Reporte #${relato.id}`}
          </h3>
          
          {/* Data e Hora no canto superior direito */}
          <div className="flex items-center gap-2 text-zinc-500 text-xs font-bold">
            <FiClock size={14} />
            <span>20/10/2025 - 10:40</span>
          </div>
        </div>

        {/* Descrição */}
        <p className="text-zinc-400 text-xs leading-relaxed max-w-[400px]">
          Incêndio de grandes proporções na área de mata seca. Fauna em risco.
        </p>

        {/* Usuário/Autor */}
        <div className="flex items-center gap-1 text-zinc-500 text-[10px] font-bold uppercase tracking-widest py-1">
          <FiEye size={12} />
          <span>Victor Oliveira</span>
        </div>

        {/* Badge de Status (Estilo Pílula Colorida) */}
        <div className="pt-1">
          <span className={`px-8 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
            relato.status === 'PENDENTE' ? 'bg-[#FFD700] text-black' : 
            relato.status === 'VERIFICADO' ? 'bg-[#FF0000] text-white' : 'bg-green-600 text-white'
          }`}>
            {relato.status}
          </span>
        </div>
      </div>
    </div>
  );
}