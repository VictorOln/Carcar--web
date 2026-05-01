import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Topbar from "./components/Topbar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Alertas from "./pages/Alertas";
import DetalhesAlerta from "./pages/DetalhesAlerta";
import Mapas from "./pages/Mapas"; // IMPORTANTE: Importar a nova página
import Configuracoes from "./pages/Configuracoes";
import PageTransition from "./components/PageTransition";

import { MOCK_STATS, alertasRecebidos as initialAlertas, relatosPorFoco as initialRelatos } from "./mocks/data";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activePage, setActivePage] = useState("Painel");
  const [alertaSelecionado, setAlertaSelecionado] = useState(null);
  
  // 1. ESTADOS GLOBAIS 
  const [alertas, setAlertas] = useState(initialAlertas);
  const [focos, setFocos] = useState(initialAlertas); // Os focos do mapa são os mesmos alertas, cuida!
  const [stats, setStats] = useState(MOCK_STATS);
  const [relatosIndividuais, setRelatosIndividuais] = useState(initialRelatos);

  // Atualiza status em todo canto de uma vez só!
  const atualizarStatusFoco = (focoId, novoStatus) => {
    // Pega o status antigo pra não bagunçar os contadores do topo
    const alertaAntigo = alertas.find(a => a.id === focoId);
    const statusAntigo = alertaAntigo?.status;

    if (statusAntigo === novoStatus) return; // Se for igual, nem mexe pra não gastar processamento

    // Atualiza a lista geral de alertas
    setAlertas(prev => prev.map(alerta => 
      alerta.id === focoId ? { ...alerta, status: novoStatus } : alerta
    ));

    // Sincroniza o mapa na hora! Se mudou na lista, muda no mapa tbm. Show!
    setFocos(prev => prev.map(foco => 
      foco.id === focoId ? { ...foco, status: novoStatus } : foco
    ));

    // Atualiza os relatos individuais lá dentro do quadradão
    setRelatosIndividuais(prev => {
      const novosRelatos = { ...prev };
      if (novosRelatos[focoId]) {
        novosRelatos[focoId] = novosRelatos[focoId].map(relato => ({ ...relato, status: novoStatus }));
      }
      return novosRelatos;
    });

    // LÓGICA DOS CONTADORES
    setStats(prev => {
      let newStats = { ...prev };

      // Tira do que era antes...
      if (statusAntigo === "PENDENTE" || statusAntigo === "EM_CURSO") newStats.pendentes--;
      if (statusAntigo === "CONFIRMADO") newStats.verificados--;
      if (statusAntigo === "CONCLUIDO" || statusAntigo === "FALSO" || statusAntigo === "FOGO_CONTROLADO") newStats.resolvidos--;

      // ...e bota no que é agora. Cuida!
      if (novoStatus === "PENDENTE" || novoStatus === "EM_CURSO") newStats.pendentes++;
      if (novoStatus === "CONFIRMADO") newStats.verificados++;
      if (novoStatus === "CONCLUIDO" || novoStatus === "FALSO" || novoStatus === "FOGO_CONTROLADO") newStats.resolvidos++;

      return newStats;
    });
  };

  const navegar = (page) => {
    setActivePage(page);
    setAlertaSelecionado(null);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#1A1A1A] text-white">
        <Login onLogin={() => setIsAuthenticated(true)} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white selection:bg-orange-500/30">
      <Topbar activePage={activePage} onNavigate={navegar} />

      <main>
        <AnimatePresence mode="wait">
          {/* DASHBOARD */}
          {activePage === "Painel" && !alertaSelecionado && (
            <PageTransition key="painel">
              <Dashboard 
                stats={stats} 
                focos={focos} 
                alertasRecentes={alertas} 
                onNavigate={navegar}
                onSelecionarAlerta={(id) => setAlertaSelecionado(id)}
              />
            </PageTransition>
          )}

          {/* LISTAGEM DE ALERTAS */}
          {activePage === "Alertas" && !alertaSelecionado && (
            <PageTransition key="lista">
              <Alertas 
                alertas={alertas}
                onSelecionarAlerta={(id) => setAlertaSelecionado(id)} 
              />
            </PageTransition>
          )}

          {/* DETALHES DO FOCO */}
          {alertaSelecionado && (
            <PageTransition key="detalhes">
              <DetalhesAlerta 
                alertaId={alertaSelecionado} 
                relatosAgrupados={relatosIndividuais}
                onVoltar={() => setAlertaSelecionado(null)}
                onSalvarStatus={(status) => atualizarStatusFoco(alertaSelecionado, status)}
                onNavigate={navegar}
              />
            </PageTransition>
          )}

          {/* PÁGINA DE MAPAS */}
          {activePage === "Mapas" && (
            <PageTransition key="mapas">
              <Mapas 
                focos={focos} 
                onSelecionarAlerta={(id) => setAlertaSelecionado(id)}
              />
            </PageTransition>
          )}

          {/* PÁGINA DE CONFIGURAÇÕES */}
          {activePage === "Configurações" && (
            <PageTransition key="configs">
              <Configuracoes />
            </PageTransition>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
