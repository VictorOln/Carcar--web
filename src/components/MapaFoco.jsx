import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import { STATUS_CONFIG } from "../constants/status";

// Função para centralizar o mapa programaticamente
function ChangeView({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
}

const getIcon = (status) => {
  const config = STATUS_CONFIG[status] || { bg: "bg-zinc-500" };
  return L.divIcon({
    className: "custom-marker",
    html: `<div class="w-6 h-6 rounded-full border-2 border-white shadow-lg flex items-center justify-center ${config.bg} animate-bounce-slow">
             <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
           </div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });
};

export default function MapaFoco({ 
  focos = [], 
  onExpandir, 
  onSelecionarAlerta,
  center = [-3.7329, -41.0121], 
  zoom = 12, 
  height = "500px",
  interactive = true 
}) {
  return (
    <div 
      className="bg-[#313131] rounded-[24px] border border-orange-500/20 overflow-hidden relative z-0 shadow-2xl"
      style={{ height }}
    >
      {/* Overlay do Título */}
      <div className="absolute top-6 left-6 z-[1000] bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 pointer-events-none">
        <p className="text-white font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
          <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
          Mapa de Monitoramento
        </p>
      </div>

      {onExpandir && (
        <button
          onClick={onExpandir}
          className="absolute bottom-6 right-6 z-[1000] bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all shadow-lg"
        >
          Expandir Mapa
        </button>
      )}

      <MapContainer
        center={center}
        zoom={zoom}
        zoomControl={interactive}
        scrollWheelZoom={interactive}
        dragging={interactive}
        style={{ height: "100%", width: "100%", background: "#1a1a1a" }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution="&copy; CARCARÁ"
        />

        <ChangeView center={center} zoom={zoom} />

        {focos.map((foco) => (
          foco.lat && foco.lon && (
            <Marker
              key={foco.id}
              position={[foco.lat, foco.lon]}
              icon={getIcon(foco.status)}
            >
              <Popup>
                <div className="text-center font-sans space-y-2">
                  <p className="font-bold text-orange-600 uppercase text-xs">{foco.titulo}</p>
                  <p className="text-[10px] text-zinc-500">{foco.relatos} relatos</p>
                  {onSelecionarAlerta && (
                    <button 
                      onClick={() => onSelecionarAlerta(foco.id)}
                      className="bg-orange-600 text-white text-[9px] font-black px-3 py-1.5 rounded-md uppercase hover:bg-orange-700 transition-colors w-full mt-2"
                    >
                      Ver Detalhes
                    </button>
                  )}
                </div>
              </Popup>
            </Marker>
          )
        ))}
      </MapContainer>
    </div>
  );
}

