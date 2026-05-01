
// tudo conectado com a logística dos alertas.
import { useState } from "react";
import CardMapaFoco from "../components/CardMapaFoco";
import MapaFoco from "../components/MapaFoco";

export default function Mapas({ focos, onSelecionarAlerta }) {
  const [focoAtivo, setFocoAtivo] = useState(focos[0] || {});

  return (
    <div className="px-10 py-12 max-w-[1600px] mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-black text-white tracking-tight uppercase italic font-sans">
          Mapa de Monitoramento Completo
        </h1>
        <p className="text-zinc-500 font-medium">
          Visualização detalhada de todos os focos ativos no território
        </p>
      </header>

      <div className="grid grid-cols-12 gap-8 h-[700px]">
        {/* LADO ESQUERDO: MAPA REUTILIZADO */}
        <div className="col-span-8">
          <MapaFoco 
            focos={focos} 
            center={[focoAtivo.lat, focoAtivo.lon]} 
            zoom={14}
            height="100%"
            interactive={true}
            onSelecionarAlerta={onSelecionarAlerta}
          />
        </div>

        {/* LADO DIREITO: LISTA LATERAL */}
        <div className="col-span-4 space-y-4 flex flex-col h-full">
          <h3 className="text-white font-black text-xs uppercase tracking-[0.3em] px-2 text-zinc-600">
            Focos Ativos
          </h3>

          <div className="flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar">
            {focos.map((foco) => (
              <CardMapaFoco
                key={foco.id}
                foco={foco}
                isActive={focoAtivo?.id === foco.id}
                onClick={() => onSelecionarAlerta(foco.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
