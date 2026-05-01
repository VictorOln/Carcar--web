import { useState } from "react";
import { FiArrowLeft, FiChevronDown, FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import CardRelato from "../components/CardRelato";
import { STATUS_CONFIG } from "../constants/status";
import MapaFoco from "../components/MapaFoco";

export default function DetalhesAlerta({ alertaId, onVoltar, onSalvarStatus, relatosAgrupados, onNavigate }) {
  const relatos = relatosAgrupados[alertaId] || [];
  const [relatoAtivo, setRelatoAtivo] = useState(relatos[0]);
  const [statusSelecionado, setStatusSelecionado] = useState("");
  const [showMaisDetalhes, setShowMaisDetalhes] = useState(false);

  const handleSalvar = () => {
    if (!statusSelecionado) {
      alert("Por favor, selecione um status antes de salvar.");
      return;
    }
    onSalvarStatus(statusSelecionado);
    alert("Status do foco atualizado com sucesso!");
    onVoltar();
  };

  const CLASSIFICACAO_CONFIG = {
    INCENDIO: { label: "Incêndio", icon: "🔥", color: "text-red-500" },
    FUMACA: { label: "Fumaça", icon: "🌫️", color: "text-zinc-400" },
  };

  const currentClassificacao = CLASSIFICACAO_CONFIG[relatoAtivo?.classificacao] || CLASSIFICACAO_CONFIG.INCENDIO;

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
        <div className="col-span-5 space-y-4 overflow-y-auto max-h-[85vh] pr-2 custom-scrollbar">
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
          <div className="bg-[#313131] rounded-[24px] border border-orange-500/20 overflow-hidden sticky top-10 shadow-2xl">
            <div className="p-8 space-y-6">
              <h2 className="text-white font-black text-2xl uppercase tracking-tighter italic">
                Reporte #{relatoAtivo?.id || "00"}
              </h2>

              {/* IMAGEM */}
              <div className="aspect-video bg-[#D9D9D9] rounded-2xl shadow-inner overflow-hidden border border-white/5 relative group">
                {relatoAtivo?.imagem ? (
                  <img 
                    src={relatoAtivo.imagem} 
                    alt={`Alerta ${relatoAtivo.id}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full font-black text-black/10 text-3xl uppercase">
                    Sem Imagem
                  </div>
                )}
              </div>

              {/* LOCALIZAÇÃO */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-white font-bold uppercase text-xs tracking-widest">Localização</h4>
                  <div className="bg-[#1A1A1A] p-5 rounded-2xl border border-orange-500/30 space-y-3">
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
                <div className="relative h-full bg-[#1A1A1A] rounded-2xl border border-white/5 overflow-hidden group min-h-[140px]">
                   <MapaFoco 
                    focos={[{ ...relatoAtivo, nome: `Reporte #${relatoAtivo.id}` }]} 
                    center={[relatoAtivo.lat, relatoAtivo.lon]} 
                    zoom={15} 
                    height="100%" 
                    interactive={false}
                   />
                   <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/0 transition-all pointer-events-none">
                      <button 
                        onClick={() => onNavigate("Mapas")}
                        className="bg-orange-600 text-white text-[10px] font-black uppercase px-4 py-2 rounded-lg shadow-lg z-10 hover:scale-105 transition-transform pointer-events-auto"
                      >
                        Ver no mapa
                      </button>
                   </div>
                </div>
              </div>

              {/* CLASSIFICAÇÃO E CONFIANÇA */}
              <div className="grid grid-cols-2 gap-6 items-end">
                <div className="space-y-4">
                  <h4 className="text-white font-bold uppercase text-xs tracking-widest">Classificação</h4>
                  <div className="bg-[#1A1A1A] border border-orange-500/20 rounded-xl px-4 py-3 flex items-center gap-3 w-fit">
                    <div className={currentClassificacao.color}>{currentClassificacao.icon}</div>
                    <span className="text-white font-bold text-xs uppercase tracking-widest">{currentClassificacao.label}</span>
                  </div>
                </div>
                <div className="space-y-3 pb-2">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase text-zinc-500">
                    <span>Baixa</span>
                    <span className="text-white font-black">87</span>
                    <span>Elevada</span>
                  </div>
                  <div className="h-2 bg-[#1A1A1A] rounded-full overflow-hidden relative border border-white/5">
                    <div className="absolute left-0 top-0 h-full bg-orange-600 w-[87%]" />
                  </div>
                </div>
              </div>

              {/* DESCRIÇÃO */}
              <div className="space-y-3">
                <h4 className="text-white font-bold uppercase text-xs tracking-widest">Descrição</h4>
                <div className="w-full bg-[#1A1A1A] border border-orange-500/30 rounded-xl p-4 text-zinc-400 text-sm italic">
                   "{relatoAtivo?.descricao || "Sem descrição informada para este reporte."}"
                </div>
                
                {/* MAIS DETALHES TOGGLE */}
                <button 
                  onClick={() => setShowMaisDetalhes(!showMaisDetalhes)}
                  className="flex items-center gap-2 text-[10px] font-black uppercase text-zinc-500 hover:text-orange-500 transition-colors"
                >
                  {showMaisDetalhes ? <FiMinusCircle className="text-orange-600" /> : <FiPlusCircle className="text-orange-600" />}
                  Mais detalhes
                </button>

                {showMaisDetalhes && (
                  <div className="grid grid-cols-3 gap-4 p-4 bg-[#1A1A1A]/50 border border-white/5 rounded-2xl animate-in fade-in slide-in-from-top-2 duration-300">
                    {[
                      { label: "Altitude", value: "850m" },
                      { label: "Clima", value: "Seco" },
                      { label: "Vegetação", value: "Mata Seca" },
                      { label: "Vel. Vento", value: "15 km/h" },
                      { label: "Dir. Vento", value: "Norte" },
                      { label: "Relevo", value: "Serrano" }
                    ].map((item) => (
                      <div key={item.label} className="space-y-1">
                        <p className="text-[9px] font-black uppercase text-zinc-600 tracking-widest">{item.label}</p>
                        <p className="text-white text-xs font-bold">{item.value}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* STATUS */}
              <div className="space-y-4 pt-4 border-t border-white/5">
                <h4 className="text-white font-bold uppercase text-xs tracking-widest">Status</h4>
                <div className="flex gap-4">
                  <div className="relative flex-1">
                    <select 
                      value={statusSelecionado}
                      onChange={(e) => setStatusSelecionado(e.target.value)}
                      className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl py-4 px-6 text-white text-xs font-bold uppercase appearance-none outline-none focus:border-orange-500/50 cursor-pointer"
                    >
                      <option value="" disabled>Selecione um status *</option>
                      {["CONFIRMADO", "EM_CURSO", "CONCLUIDO", "FALSO", "FOGO_CONTROLADO"].map((key) => (
                        <option key={key} value={key}>
                          {STATUS_CONFIG[key].label}
                        </option>
                      ))}
                    </select>
                    <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-orange-500 pointer-events-none" />
                  </div>
                  <button 
                    onClick={handleSalvar}
                    className="bg-[#66bb45] hover:bg-[#58a33a] text-white px-10 rounded-xl font-black text-xs uppercase tracking-[0.2em] transition-all shadow-lg shadow-green-900/10"
                  >
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
