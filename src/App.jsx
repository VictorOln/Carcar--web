import { useState } from "react";
import Topbar from "./components/Topbar";
import AlertCards from "./components/AlertCards";
import AlertasRecentes from "./components/AlertasRecentes";
import MapaFoco from "./components/MapaFoco";
import Alertas from "./components/Alertas";
import Mapas from "./components/Mapas";
import Configuracoes from "./components/Configuracoes";
import { FiZap, FiClock, FiAlertTriangle, FiCheckCircle } from "react-icons/fi";

const stats = { total: 124, pendentes: 12, verificados: 80, resolvidos: 32 };

export default function App() {
  const [activePage, setActivePage] = useState("Painel");

  function renderPage() {
    switch (activePage) {
      case "Alertas":       return <Alertas />;
      case "Mapas":         return <Mapas />;
      case "Configurações": return <Configuracoes />;
      default:              return <Painel navigate={setActivePage} />;
    }
  }

  return (
    <div className="min-h-screen bg-[#121212]">
      <Topbar activePage={activePage} onNavigate={setActivePage} />
      {renderPage()}
    </div>
  );
}

function Painel({ navigate }) {
  return (
    <div className="max-w-[1400px] mx-auto px-8 py-10 flex gap-8">
      <main className="flex-1 min-w-0">
        <h2 className="text-white text-3xl font-bold tracking-tight mb-8">Painel de controle</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AlertCards title="TOTAL ALERTAS" value={stats.total}       icon={<FiZap className="text-orange-500" />}       subtitle="Total de alertas"        subtitleColor="text-orange-500" borderColor="border-orange-500/50 shadow-orange-500/10" />
          <AlertCards title="PENDENTES"     value={stats.pendentes}   icon={<FiClock className="text-yellow-500" />}     subtitle="Aguardando verificação"  subtitleColor="text-yellow-500" borderColor="border-yellow-500/50 shadow-yellow-500/10" />
          <AlertCards title="VERIFICADOS"   value={stats.verificados} icon={<FiAlertTriangle className="text-red-500" />} subtitle="Focos confirmados"       subtitleColor="text-red-500"    borderColor="border-red-500/50 shadow-red-500/10" />
          <AlertCards title="RESOLVIDOS"    value={stats.resolvidos}  icon={<FiCheckCircle className="text-green-500" />} subtitle="Controlados com sucesso" subtitleColor="text-green-500"  borderColor="border-green-500/50 shadow-green-500/10" />
        </div>
        <div className="mt-8 flex flex-col gap-6">
          <AlertasRecentes onVerTodos={() => navigate("Alertas")} />
          <MapaFoco onExpandir={() => navigate("Mapas")} />
        </div>
      </main>
    </div>
  );
}
