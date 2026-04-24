import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Configuração do ícone de fogo
const fireIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/785/785116.png",
  iconSize: [25, 25],
  iconAnchor: [12, 25],
  popupAnchor: [0, -25],
});

export default function MapaFoco({ focos = [], onExpandir }) {
  // Centro padrão em Tianguá
  const centerTiangua = [-3.7329, -41.0121];

  return (
    <div className="bg-[#313131] rounded-[24px] border border-orange-500/20 overflow-hidden h-[500px] relative z-0 shadow-2xl">
      {/* Overlay do Título */}
      <div className="absolute top-6 left-6 z-[1000] bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 pointer-events-none">
        <p className="text-white font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
          <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
          Mapa de Monitoramento
        </p>
      </div>

      {/* Botão de Expandir */}
      <button
        onClick={onExpandir}
        className="absolute bottom-6 right-6 z-[1000] bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all shadow-lg"
      >
        Expandir Mapa
      </button>

      <MapContainer
        center={centerTiangua}
        zoom={12}
        zoomControl={false}
        scrollWheelZoom={false}
        dragging={false}
        style={{ height: "100%", width: "100%", background: "#1A1A1A" }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution="&copy; CARCARÁ"
        />

        {/* FILTRO DE SEGURANÇA: Só desenha se existir latitude e longitude */}
        {focos &&
          focos.length > 0 &&
          focos.map((foco) => {
            if (foco && foco.lat && foco.lon) {
              return (
                <Marker
                  key={foco.id}
                  position={[foco.lat, foco.lon]}
                  icon={fireIcon}
                >
                  <Popup>
                    <div className="text-center">
                      <p className="font-bold text-orange-600 uppercase text-xs">
                        {foco.nome}
                      </p>
                      <p className="text-[10px] text-zinc-500">
                        {foco.relatos} relatos
                      </p>
                    </div>
                  </Popup>
                </Marker>
              );
            }
            return null; // Ignora focos inválidos e evita o erro "Invalid LatLng"
          })}
      </MapContainer>
    </div>
  );
}
