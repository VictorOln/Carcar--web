import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// IMPORTANDO OS MOCKS SEPARADOS
import { MOCK_FOCOS_DETALHADOS } from "../mocks/data";
import CardMapaFoco from "../components/CardMapaFoco";

// Ícone personalizado (Estilo Carcará)
const fireIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/785/785116.png",
  iconSize: [35, 35],
  iconAnchor: [17, 35],
});

// Função interna para mover o mapa suavemente
function RecenterMap({ coords }) {
  const map = useMap();
  map.setView(coords, map.getZoom(), { animate: true });
  return null;
}

export default function Mapas() {
  const [focoAtivo, setFocoAtivo] = useState(MOCK_FOCOS_DETALHADOS[0]);

  return (
    <div className="px-10 py-12 max-w-[1600px] mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-black text-white tracking-tight uppercase italic font-sans">
          Mapa de Focos
        </h1>
        <p className="text-zinc-500 font-medium">
          Visualização em tempo real das ocorrências no território
        </p>
      </header>

      <div className="grid grid-cols-12 gap-8 h-[650px]">
        {/* LADO ESQUERDO: MAPA REAL (LEAFLET) */}
        <div className="col-span-8 bg-[#313131] rounded-[24px] border border-orange-500/20 overflow-hidden relative shadow-2xl z-0">
          <div className="absolute top-6 left-6 z-[1000] bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full pointer-events-none">
            <span className="text-white font-black text-[10px] uppercase tracking-widest">
              🔥 {MOCK_FOCOS_DETALHADOS.length} Ocorrências Ativas
            </span>
          </div>

          <MapContainer
            center={[focoAtivo.lat, focoAtivo.lon]}
            zoom={13}
            zoomControl={false}
            style={{ height: "100%", width: "100%", background: "#1A1A1A" }}
          >
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              attribution="&copy; CARCARÁ"
            />

            {MOCK_FOCOS_DETALHADOS.map((foco) => (
              <Marker
                key={foco.id}
                position={[foco.lat, foco.lon]}
                icon={fireIcon}
                eventHandlers={{ click: () => setFocoAtivo(foco) }}
              >
                <Popup>
                  <div className="text-center font-sans">
                    <p className="font-black uppercase text-orange-600 text-xs">
                      {foco.nome}
                    </p>
                    <p className="text-[10px] text-zinc-500 font-bold">
                      {foco.relatos} relatos confirmados
                    </p>
                  </div>
                </Popup>
              </Marker>
            ))}

            <RecenterMap coords={[focoAtivo.lat, focoAtivo.lon]} />
          </MapContainer>
        </div>

        {/* LADO DIREITO: LISTA LATERAL */}
        <div className="col-span-4 space-y-4 flex flex-col h-full">
          <h3 className="text-white font-black text-xs uppercase tracking-[0.3em] px-2 text-zinc-600">
            Focos Ativos
          </h3>

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
