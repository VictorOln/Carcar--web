import { useState } from "react";
import Topbar from "./components/Topbar";
import Dashboard from "./pages/Dashboard";
import PageMapas from "./pages/Mapas";
import PageAlertas from "./pages/Alertas";
import PageConfig from "./pages/Configuracoes";
import { MOCK_STATS, MOCK_FOCOS, MOCK_ALERTAS_RECENTES } from "./mocks/data";

export default function App() {
  const [activePage, setActivePage] = useState("Painel");

  return (
    <div className="min-h-screen bg-[#121212] text-zinc-300">
      <Topbar activePage={activePage} onNavigate={setActivePage} />

      <main className="max-w-[1440px] mx-auto">
        {activePage === "Painel" && (
          <Dashboard
            stats={MOCK_STATS}
            focos={MOCK_FOCOS}
            alertasRecentes={MOCK_ALERTAS_RECENTES}
            onNavigate={setActivePage}
          />
        )}
        {activePage === "Mapas" && <PageMapas focos={MOCK_FOCOS} />}
        {activePage === "Alertas" && <PageAlertas focos={MOCK_FOCOS} />}
        {activePage === "Configurações" && <PageConfig />}
      </main>
    </div>
  );
}
