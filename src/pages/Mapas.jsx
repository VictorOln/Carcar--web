import { useState } from "react";
import { MOCK_FOCOS_DETALHADOS } from "../mocks/data";
import CardMapaFoco from "../components/CardMapaFoco";

export default function Mapas() {
  const [focoAtivo, setFocoAtivo] = useState(MOCK_FOCOS_DETALHADOS[0]);

  return (
    <div className="px-10 py-12 max-w-[1600px] mx-auto space-y-8">
      {/* Header */}
      <header className="space-y-2">
        <h1 className="text-3xl font-black text-white tracking-tight uppercase italic">Mapa de Focos</h1>
        <p className="text-zinc-500 font-medium">Visualização dos alertas ativos no território</p>
      </header>

      <div className="grid grid-cols-12 gap-8 h-[650px]">
        
        {/* LADO ESQUERDO: O MAPA (OCUPA 8 COLUNAS) */}
        <div className="col-span-8 bg-[#313131] rounded-[24px] border border-orange-500/20 overflow-hidden relative shadow-2xl">
          
          {/* Badge de contagem (Top Left do Mapa) */}
          <div className="absolute top-6 left-6 z-10 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
            <span className="text-white font-black text-xs uppercase tracking-widest">
              🔥 {MOCK_FOCOS_DETALHADOS.length} Focos ativos
            </span>
          </div>

          {/* Área do Mapa (Simulada com CSS igual ao print) */}
          <div className="w-full h-full bg-[#1A1A1A] relative">
             <img 
              src="https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/-41.01214,-3.73291,12,0/1200x800?access_token=SEU_TOKEN" 
              className="w-full h-full object-cover opacity-40 grayscale"
              alt="Background Map"
             />
             
             {/* PONTOS PULSANTES NO MAPA */}
             {MOCK_FOCOS_DETALHADOS.map((foco) => (
                <div 
                  key={foco.id}
                  className="absolute cursor-pointer group"
                  style={{ left: `${20 + (foco.id * 15)}%`, top: `${30 + (foco.id * 10)}%` }} // Simulação de posição
                  onClick={() => setFocoAtivo(foco)}
                >
                  <div className={`w-4 h-4 rounded-full animate-ping opacity-75 ${foco.id === focoAtivo?.id ? 'bg-orange-500' : 'bg-red-600'}`} />
                  <div className={`w-3 h-3 rounded-full absolute top-0.5 left-0.5 border-2 border-white shadow-[0_0_15px_rgba(255,0,0,0.8)] ${foco.id === focoAtivo?.id ? 'bg-orange-500' : 'bg-red-600'}`} />
                  
                  {/* Tooltip ao passar o mouse */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black px-2 py-1 rounded text-[8px] font-black text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap uppercase">
                    {foco.nome}
                  </div>
                </div>
             ))}
          </div>
        </div>

        {/* LADO DIREITO: LISTA DE FOCOS ATIVOS (OCUPA 4 COLUNAS) */}
        <div className="col-span-4 space-y-4 flex flex-col h-full">
          <h3 className="text-white font-black text-sm uppercase tracking-widest px-2">Focos Ativos</h3>
          
          <div className="flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar">
            {MOCK_FOCOS_DETALHADOS.map((foco) => (
              <CardMapaFoco 
                key={foco.id} 
                foco={foco} 
                isActive={focoAtivo?.id === foco.id}
                onClick={() => setFocoAtivo(foco)}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}