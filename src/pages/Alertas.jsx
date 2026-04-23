import { motion } from "framer-motion";
import { FiSearch, FiUsers } from "react-icons/fi";
import { alertasRecebidos, filtrosAlertas } from "../mocks/data";

export default function Alertas({ onSelecionarAlerta }) {
  return (
    <div className="px-10 py-12 max-w-[1600px] mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-black text-white tracking-tight uppercase">Alertas Recebidos</h1>
        <p className="text-zinc-500 font-medium">Gerencie e verifique os alertas enviados pelos observadores</p>
      </header>

      <div className="relative">
        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={20} />
        <input 
          type="text" 
          placeholder="Realize a busca do foco..." 
          className="w-full bg-[#313131] border border-white/5 rounded-xl py-4 pl-12 pr-4 text-white outline-none focus:border-orange-500/40 transition-all"
        />
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2">
        {filtrosAlertas.map((filtro, i) => (
          <button 
            key={filtro} 
            className={`px-6 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
              i === 0 ? "bg-orange-500 text-white" : "bg-[#313131] text-zinc-500 border border-white/5 hover:text-white"
            }`}
          >
            {filtro}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {alertasRecebidos.map((alerta) => (
          <motion.div 
            key={alerta.id}
            whileHover={{ scale: 1.005 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => onSelecionarAlerta(alerta.id)}
            className="bg-[#313131] border border-orange-500/10 rounded-2xl p-5 flex items-center gap-6 hover:border-orange-500/40 transition-all cursor-pointer group"
          >
            <div className="w-24 h-24 bg-[#D9D9D9] rounded-xl shrink-0 shadow-inner" />
            <div className="flex flex-col justify-between h-24 py-1 flex-1">
              <div className="space-y-1">
                <h3 className="text-white font-black text-lg group-hover:text-orange-500 transition-colors uppercase tracking-tight italic">
                  {alerta.titulo}
                </h3>
                <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">{alerta.confiabilidade}</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-bold uppercase">
                  <FiUsers size={14} className="text-orange-500" />
                  {alerta.relatos} relatos
                </div>
                <span className={`px-4 py-1 rounded text-[10px] font-black tracking-tighter ${alerta.statusClass}`}>
                  {alerta.status}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}