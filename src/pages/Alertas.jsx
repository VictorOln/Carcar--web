// ==========================================
// PÁGINA de ALERTAS - CENTRAL DE COMANDO
// ==========================================
// Onde a gente filtra o que é real e o que é erro.
// Lógica de filtragem monstra pra não perder tempo! Cuida!
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiUsers } from "react-icons/fi";
import { filtrosAlertas } from "../mocks/data";
import StatusBadge from "../components/StatusBadge";

export default function Alertas({ onSelecionarAlerta, alertas }) {
  const [filtroAtivo, setFiltroAtivo] = useState("Todos");
  const [busca, setBusca] = useState("");

  // Mapeamento de Labels para Status Reais
  const labelParaStatus = {
    "Todos": "TODOS",
    "Confirmados": "CONFIRMADO",
    "Em curso": "EM_CURSO",
    "Concluídos": "CONCLUIDO",
    "Alarme Falso": "FALSO",
    "Fogo Controlado": "FOGO_CONTROLADO",
    "Aguardando Revisão": "AGUARDANDO_CONFIRMACAO"
  };

  // LÓGICA DE FILTRAGEM
  const alertasFiltrados = alertas.filter((alerta) => {
    const statusDesejado = labelParaStatus[filtroAtivo];
    
    const bateFiltro =
      statusDesejado === "TODOS" || 
      alerta.status === statusDesejado;

    const bateBusca = alerta.titulo.toLowerCase().includes(busca.toLowerCase());

    return bateFiltro && bateBusca;
  });

  return (
    <div className="px-10 py-12 max-w-[1600px] mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-black text-white tracking-tight uppercase">
          Alertas Recebidos
        </h1>
        <p className="text-zinc-500 font-medium">
          Gerencie e verifique os alertas enviados pelos observadores
        </p>
      </header>

      {/* INPUT DE BUSCA */}
      <div className="relative group">
        <FiSearch
          className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-orange-500 transition-colors"
          size={20}
        />
        <input
          type="text"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Realize a busca do foco pelo nome..."
          className="w-full bg-[#313131] border border-white/5 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-zinc-600 outline-none focus:border-orange-500/40 transition-all"
        />
      </div>

      {/* FILTROS (PILLS) */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {filtrosAlertas.map((filtro) => (
          <button
            key={filtro}
            onClick={() => setFiltroAtivo(filtro)}
            className={`px-6 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap border ${
              filtroAtivo === filtro
                ? "bg-orange-500 text-white border-orange-500"
                : "bg-[#313131] text-zinc-500 border-white/5 hover:text-white"
            }`}
          >
            {filtro}
          </button>
        ))}
      </div>

      {/* LISTA DE CARDS COM ANIMAÇÃO AO FILTRAR */}
      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {alertasFiltrados.length > 0 ? (
            alertasFiltrados.map((alerta) => (
              <motion.div
                layout // Faz os cards deslizarem suavemente quando um sai da lista
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                key={alerta.id}
                onClick={() => onSelecionarAlerta(alerta.id)}
                className="bg-[#313131] border border-orange-500/10 rounded-2xl p-5 flex items-center gap-6 hover:border-orange-500/40 transition-all cursor-pointer group"
              >
                <div className="w-24 h-24 bg-[#D9D9D9] rounded-xl shrink-0 overflow-hidden border border-white/5 shadow-inner">
                  {alerta.imagem ? (
                    <img src={alerta.imagem} alt={alerta.titulo} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-black/10 font-black text-[8px] uppercase">Sem Foto</div>
                  )}
                </div>
                <div className="flex flex-col justify-between h-24 py-1 flex-1">
                  <div className="space-y-1">
                    <h3 className="text-white font-black text-lg group-hover:text-orange-500 transition-colors uppercase italic">
                      {alerta.titulo}
                    </h3>
                    <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
                      {alerta.confiabilidade}
                    </p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-bold uppercase">
                      <FiUsers size={14} className="text-orange-500" />
                      {alerta.relatos} relatos
                    </div>
                    <StatusBadge status={alerta.status} />
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="py-20 text-center">
              <p className="text-zinc-600 font-black text-xl uppercase italic">
                Nenhum alerta encontrado para este filtro.
              </p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
