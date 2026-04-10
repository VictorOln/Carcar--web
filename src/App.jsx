import { useState } from "react";
import Topbar from "./components/Topbar";
import AlertCards from "./components/AlertCards";

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

        {/* Grid que organiza os cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AlertCards
            title="Total de Alertas"
            value={stats.total}
            icon="🚨"
            colorClass="bg-orange-500/10 text-orange-500"
          />

          <AlertCards
            title="Pendentes"
            value={stats.pendentes}
            icon="⏳"
            colorClass="bg-yellow-500/10 text-yellow-500"
          />

          <AlertCards
            title="Verificados"
            value={stats.verificados}
            icon="✔️"
            colorClass="bg-blue-500/10 text-blue-500"
          />

          <AlertCards
            title="Resolvidos"
            value={stats.resolvidos}
            icon="🌿"
            colorClass="bg-green-500/10 text-green-500"
          />
        </div>

        {/* Espaço para a Tabela e o Mapa que faremos depois */}
        <div className="mt-10 text-zinc-600 text-sm italic border-t border-white/5 pt-4">
          Próximos passos: Lista de Alertas Recentes e Mapa de Foco...
        </div>
      </main>
    </div>
  );
}

export default App;
