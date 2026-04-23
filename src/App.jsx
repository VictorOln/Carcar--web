import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Topbar from "./components/Topbar";
import Dashboard from "./pages/Dashboard";
import Alertas from "./pages/Alertas";
import DetalhesAlerta from "./pages/DetalhesAlerta";
import Mapas from "./pages/Mapas"; // IMPORTANTE: Importar a nova página
import PageTransition from "./components/PageTransition";

import { MOCK_STATS as stats, alertasRecebidos, MOCK_FOCOS } from "./mocks/data";

export default function App() {
  const [activePage, setActivePage] = useState("Painel");
  const [alertaSelecionado, setAlertaSelecionado] = useState(null);

  const navegar = (page) => {
    setActivePage(page);
    setAlertaSelecionado(null);
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white selection:bg-orange-500/30">
      <Topbar activePage={activePage} onNavigate={navegar} />

      <main>
        <AnimatePresence mode="wait">
          {/* DASHBOARD */}
          {activePage === "Painel" && (
            <PageTransition key="painel">
              <Dashboard 
                stats={stats} 
                focos={MOCK_FOCOS} 
                alertasRecentes={alertasRecebidos} 
                onNavigate={navegar} 
              />
            </PageTransition>
          )}

          {/* LISTAGEM DE ALERTAS */}
          {activePage === "Alertas" && !alertaSelecionado && (
            <PageTransition key="lista">
              <Alertas onSelecionarAlerta={(id) => setAlertaSelecionado(id)} />
            </PageTransition>
          )}

          {/* DETALHES DO FOCO */}
          {alertaSelecionado && (
            <PageTransition key="detalhes">
              <DetalhesAlerta 
                alertaId={alertaSelecionado} 
                onVoltar={() => setAlertaSelecionado(null)} 
              />
            </PageTransition>
          )}

          {/* PÁGINA DE MAPAS (ADICIONE ESSE BLOCO AQUI) */}
          {activePage === "Mapas" && (
            <PageTransition key="mapas">
              <Mapas />
            </PageTransition>
          )}

          {/* PÁGINA DE CONFIGURAÇÕES (Placeholder por enquanto) */}
          {activePage === "Configurações" && (
            <PageTransition key="configs">
              <div className="flex items-center justify-center h-[80vh]">
                 <h1 className="text-zinc-600 font-black text-4xl uppercase italic">Em construção...</h1>
              </div>
            </PageTransition>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}