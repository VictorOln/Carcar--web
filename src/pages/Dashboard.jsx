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
    <div className="px-8 py-10 space-y-10">
      <h1 className=" text-2xl text-white font-bold">PAINEL DE CONTROLE</h1>
      {/* Grid de Cards com a lógica: Branco no texto, Cor no detalhe */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <AlertCards
          title="TOTAL"
          value={stats.total}
          icon={<FiZap />}
          colorClass="text-orange-500"
          borderClass="border-b-orange-500"
        />
        <AlertCards
          title="PENDENTES"
          value={stats.pendentes}
          icon={<FiClock />}
          colorClass="text-yellow-400"
          borderClass="border-b-yellow-400"
        />
        <AlertCards
          title="VERIFICADOS"
          value={stats.verificados}
          icon={<FiAlertTriangle />}
          colorClass="text-red-600"
          borderClass="border-b-red-600"
        />
        <AlertCards
          title="RESOLVIDOS"
          value={stats.resolvidos}
          icon={<FiCheckCircle />}
          colorClass="text-green-500"
          borderClass="border-b-green-500"
        />
      </div>

      {/* Seção Inferior (Mapa e Lista) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <MapaFoco focos={focos} onExpandir={() => onNavigate("Mapas")} />
        </div>
        <div className="flex flex-col">
          <AlertasRecentes
            alertas={alertasRecentes}
            onVerTodos={() => onNavigate("Alertas")}
          />
        </div>
      </div>
    </div>
  );
}
