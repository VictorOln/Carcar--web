export default function CardMapaFoco({ foco, isActive, onClick }) {
  return (
    <div 
      onClick={onClick}
      className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex gap-4 items-center bg-[#313131] ${
        isActive ? 'border-orange-500 shadow-lg' : 'border-orange-500/10 hover:border-orange-500/30'
      }`}
    >
      <div className="w-16 h-16 bg-[#D9D9D9] rounded-lg shrink-0" />
      <div className="space-y-1">
        <h4 className="text-white font-black text-sm uppercase italic">{foco.nome}</h4>
        <p className="text-zinc-500 text-[9px] font-bold uppercase">Incêndio reportado</p>
        <div className="flex items-center gap-2 text-zinc-400 text-[9px] font-bold">
           <span>👤 {foco.relatos} relatos</span>
        </div>
        <span className="inline-block bg-[#FFD700] text-black text-[8px] font-black px-3 py-0.5 rounded-full uppercase">
          {foco.status}
        </span>
      </div>
    </div>
  );
}