// 1. Estatísticas do Dashboard
export const MOCK_STATS = {
  total: 3334,
  pendentes: 12,
  verificados: 80,
  resolvidos: 32,
};

// 2. Focos para o Mapa
export const MOCK_FOCOS = [
  { id: 1, x: 42, y: 35, status: "CONFIRMADO", local: "Foco G2", zona: "Alto Alagoas", nome: "FOCO 10/04 [TIANGUÁ]", relatos: 5, confiabilidade: "Alta" },
  { id: 2, x: 55, y: 50, status: "EM_CURSO", local: "Foco G3", zona: "Ibiapaba", nome: "FOCO 11/04 [UBAJARA]", relatos: 2, confiabilidade: "Média" },
];

// 3. Alertas para a Sidebar do Dashboard
export const MOCK_ALERTAS_RECENTES = [
  { id: 1, local: "Foco G2", zona: "Alto Alagoas", status: "CONFIRMADO" },
  { id: 2, local: "Zona Rural", zona: "Tianguá", status: "PENDENTE" },
];

// 4. Filtros da Página de Alertas
export const filtrosAlertas = ["Todos", "Pendentes", "Em curso", "Concluídos", "Falso"];

// 5. Agrupamentos (Cards da página principal de Alertas)
export const alertasRecebidos = [
  { 
    id: 1, 
    titulo: "FOCO 10/04/2026 [TIANGUÁ]", 
    confiabilidade: "Alta confiabilidade", 
    relatos: 5, 
    status: "CONCLUÍDO", 
    statusClass: "bg-green-600 text-white" 
  },
  { 
    id: 2, 
    titulo: "FOCO 2", 
    confiabilidade: "Baixa confiabilidade", 
    relatos: 2, 
    status: "PENDENTE", 
    statusClass: "bg-yellow-500 text-white" 
  },
  { 
    id: 3, 
    titulo: "FOCO 3", 
    confiabilidade: "Baixa confiabilidade", 
    relatos: 5, 
    status: "FALSO", 
    statusClass: "bg-red-600 text-white" 
  },
  { 
    id: 4, 
    titulo: "FOCO 4", 
    confiabilidade: "Alta confiabilidade", 
    relatos: 8, 
    status: "EM CURSO", 
    statusClass: "bg-orange-500 text-white" 
  },
];

// 6. Relatos Individuais (Para a página de detalhes que você desenhou)
export const relatosPorFoco = {
  1: [
    { id: 101, usuario: "João Silva", distancia: "120m", hora: "14:20", status: "VERIFICADO", lat: -3.7324, lon: -41.0125 },
    { id: 102, usuario: "Maria Souza", distancia: "350m", hora: "14:22", status: "PENDENTE", lat: -3.7330, lon: -41.0130 },
    { id: 103, usuario: "Carlos Lima", distancia: "500m", hora: "14:25", status: "VERIFICADO", lat: -3.7315, lon: -41.0110 },
  ]
};

// Adicione isso ao seu data.js se ainda não tiver
export const MOCK_FOCOS_DETALHADOS = [
  { id: 1, nome: "FOCO 1", status: "PENDENTE", relatos: 5, lat: -3.7329, lon: -41.0121, cor: "bg-red-600" },
  { id: 2, nome: "FOCO 2", status: "PENDENTE", relatos: 3, lat: -3.7400, lon: -41.0200, cor: "bg-yellow-500" },
  { id: 3, nome: "FOCO 3", status: "PENDENTE", relatos: 8, lat: -3.7250, lon: -41.0050, cor: "bg-red-600" },
  { id: 4, nome: "FOCO 4", status: "PENDENTE", relatos: 1, lat: -3.7500, lon: -41.0300, cor: "bg-red-600" },
];