import AlertCards from "../components/AlertCards";
import MapaFoco from "../components/MapaFoco";
import AlertasRecentes from "../components/AlertasRecentes";
import { FiZap, FiClock, FiAlertTriangle, FiCheckCircle } from "react-icons/fi";

export default function Dashboard({
  stats,
  focos,
  alertasRecentes,
  onNavigate,
}) {
  return (
    <div className="px-8 py-10 space-y-8">
      {/* 1. Grid de Cards Superiores (Borda inferior colorida) */}
      <h1 className="text-3xl font-black text-white tracking-tight">
        Painel de controle
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <AlertCards
          title="TOTAL"
          value={stats.total}
          icon={<FiZap />}
          borderColor="border-b-orange-500"
          colorClass="text-orange-500"
        />
        <AlertCards
          title="PENDENTES"
          value={stats.pendentes}
          icon={<FiClock />}
          borderColor="border-b-yellow-400"
          colorClass="text-yellow-400"
        />
        <AlertCards
          title="VERIFICADOS"
          value={stats.verificados}
          icon={<FiAlertTriangle />}
          borderColor="border-b-red-600"
          colorClass="text-red-600"
        />
        <AlertCards
          title="RESOLVIDOS"
          value={stats.resolvidos}
          icon={<FiCheckCircle />}
          borderColor="border-b-green-500"
          colorClass="text-green-500"
        />
      </div>

      {/* 2. Seção de Alertas Recentes (Agora como bloco principal/horizontal) */}
      <div className="w-full">
        <AlertasRecentes
          alertas={alertasRecentes}
          onVerTodos={() => onNavigate("Alertas")}
        />
      </div>

      {/* 3. Seção do Mapa (Abaixo dos alertas, também horizontal) */}
      <div className="w-full">
        <MapaFoco focos={focos} onExpandir={() => onNavigate("Mapas")} />
      </div>
    </div>
  );
}
