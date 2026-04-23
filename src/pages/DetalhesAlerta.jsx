import { useState } from "react";
import { FiArrowLeft, FiMapPin, FiClock, FiChevronDown, FiAlertCircle } from "react-icons/fi";
import CardRelato from "../components/CardRelato";
import { relatosPorFoco } from "../mocks/data";

export default function DetalhesAlerta({ alertaId, onVoltar }) {
  const relatos = relatosPorFoco[alertaId] || [];
  const [relatoAtivo, setRelatoAtivo] = useState(relatos[0]);

  return (
    <div className="px-10 py-10 max-w-[1600px] mx-auto space-y-8">
      <button 
        onClick={onVoltar}
        className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors font-bold text-sm uppercase tracking-[0.2em]"
      >
        <FiArrowLeft size={18} /> Voltar aos focos
      </button>

      <header>
        <h1 className="text-3xl font-black text-white uppercase tracking-tight italic">
          Ocorrências do Foco {alertaId}
        </h1>
        <p className="text-zinc-500 font-medium mt-1">{relatos.length} reportes integrados</p>
      </header>

      <div className="grid grid-cols-12 gap-8">
        {/* LISTA ESQUERDA */}
        <div className="col-span-5 space-y-4 overflow-y-auto max-h-[75vh] pr-2 custom-scrollbar">
          {relatos.map((relato) => (
            <CardRelato 
              key={relato.id} 
              relato={relato} 
              isActive={relatoAtivo?.id === relato.id}
              onClick={() => setRelatoAtivo(relato)}
            />
          ))}
        </div>

        {/* PAINEL DIREITA */}
        <div className="col-span-7">
          <div className="bg-[#313131] rounded-[24px] border border-orange-500/20 overflow-hidden sticky top-24 shadow-2xl">
            <div className="p-8 space-y-8">
              <h2 className="text-white font-black text-2xl uppercase tracking-tighter italic">
                Reporte #{relatoAtivo?.id || "00"}
              </h2>

              <div className="aspect-video bg-[#D9D9D9] rounded-2xl shadow-inner flex items-center justify-center font-black text-black/10 text-3xl uppercase">
                Imagem do Alerta
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-white font-bold uppercase text-xs tracking-widest">Localização</h4>
                  <div className="bg-[#1A1A1A] p-5 rounded-2xl border border-white/5 space-y-3">
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-zinc-500 font-black text-[10px] uppercase">LAT:</span>
                      <span className="text-white font-mono font-bold tracking-widest">{relatoAtivo?.lat || "-3.73291"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500 font-black text-[10px] uppercase">LONG:</span>
                      <span className="text-white font-mono font-bold tracking-widest">{relatoAtivo?.lon || "-41.01214"}</span>
                    </div>
                  </div>
                </div>
                <div className="h-full bg-[#1A1A1A] rounded-2xl border border-white/5 overflow-hidden flex items-center justify-center">
                   <span className="text-zinc-700 font-black text-[10px] uppercase">Mapa Estático</span>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-white font-bold uppercase text-xs tracking-widest">Descrição</h4>
                <div className="w-full bg-[#1A1A1A] border border-orange-500/20 rounded-xl p-4 text-zinc-400 text-sm italic">
                   "Incêndio de grandes proporções na área de mata seca. Fauna em risco."
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/5">
                <h4 className="text-white font-bold uppercase text-xs tracking-widest">Status</h4>
                <div className="flex gap-4">
                  <div className="relative flex-1">
                    <select className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl py-4 px-6 text-white text-xs font-bold uppercase appearance-none outline-none focus:border-orange-500/50">
                      <option>Selecione um status *</option>
                      <option>PENDENTE</option>
                      <option>VERIFICADO</option>
                      <option>FALSO POSITIVO</option>
                    </select>
                    <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500" />
                  </div>
                  {/* BOTÃO CORRIGIDO AQUI */}
                  <button className="bg-[#5ECC35] hover:bg-[#4eb329] text-white px-10 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-lg shadow-green-900/20">
                    Salvar alterações
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}