import { useState } from "react";
import Topbar from "./components/Topbar";
import AlertCards from "./components/AlertCards";
import { FiZap, FiClock, FiAlertTriangle, FiCheckCircle } from "react-icons/fi";

function App() {
  const [stats, setStats] = useState({
    total: 124,
    pendentes: 12,
    verificados: 80,
    resolvidos: 32,
  });

  return (
    <div className="min-h-screen bg-[#121212]">
      <Topbar />

      <main className="max-w-7xl mx-auto px-8 py-10">
        <h2 className="text-white text-3xl font-bold tracking-tight mb-8">
          Painel de controle
        </h2>

        {/* Grid que organiza os cards - Removi o texto que estava quebrando o layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AlertCards
            title="TOTAL ALERTAS"
            value={stats.total}
            icon={<FiZap className="text-orange-500" />}
            subtitle="Total de alertas"
            subtitleColor="text-orange-500"
            borderColor="border-orange-500/50 shadow-orange-500/10"
          />

          <AlertCards
            title="PENDENTES"
            value={stats.pendentes}
            icon={<FiClock className="text-yellow-500" />}
            subtitle="Aguardando verificação"
            subtitleColor="text-yellow-500"
            borderColor="border-yellow-500/50 shadow-yellow-500/10"
          />

          <AlertCards
            title="VERIFICADOS"
            value={stats.verificados}
            icon={<FiAlertTriangle className="text-red-500" />}
            subtitle="Focos confirmados"
            subtitleColor="text-red-500"
            borderColor="border-red-500/50 shadow-red-500/10"
          />

          <AlertCards
            title="RESOLVIDOS"
            value={stats.resolvidos}
            icon={<FiCheckCircle className="text-green-500" />}
            subtitle="Controlados com sucesso"
            subtitleColor="text-green-500"
            borderColor="border-green-500/50 shadow-green-500/10"
          />
        </div>

        {/* Espaço para a Tabela e o Mapa */}
        <div className="mt-10 text-zinc-600 text-sm italic border-t border-white/5 pt-4">
          
        </div>
      </main>
    </div>
  );
}

export default App;