import StatusBadge from "./StatusBadge";

export default function CardMapaFoco({ foco, isActive, onClick }) {
  return (
    <div 
      onClick={onClick}
      className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex gap-4 items-center bg-[#313131] ${
        isActive ? 'border-orange-500 shadow-lg' : 'border-orange-500/10 hover:border-orange-500/30'
      }`}
    >
      <div className="w-16 h-16 bg-[#D9D9D9] rounded-lg shrink-0 overflow-hidden border border-white/5 shadow-inner">
        {foco.imagem ? (
          <img src={foco.imagem} alt={foco.titulo} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-black/10 font-black text-[8px] uppercase">Sem Foto</div>
        )}
      </div>
      <div className="flex-1 space-y-1">
        <h4 className="text-white font-black text-sm uppercase italic">{foco.titulo}</h4>
        <p className="text-zinc-500 text-[9px] font-bold uppercase">Incêndio reportado</p>
        <div className="flex items-center gap-2 text-zinc-400 text-[9px] font-bold pb-1">
           <span>👤 {foco.relatos} relatos</span>
        </div>
        <StatusBadge status={foco.status} />
      </div>
    </div>
  );
}