// 1. Estatísticas do Dashboard
export const MOCK_STATS = {
  total: 3334,
  pendentes: 12,
  verificados: 80,
  resolvidos: 32,
};

// 3. Alertas para a Sidebar do Dashboard (Simplificado)
export const MOCK_ALERTAS_RECENTES = [
  { id: 1, local: "Foco G2", zona: "Alto Alagoas", status: "CONFIRMADO" },
  { id: 2, local: "Zona Rural", zona: "Tianguá", status: "PENDENTE" },
];

// 4. Filtros da Página de Alertas
export const filtrosAlertas = ["Todos", "Confirmados", "Em curso", "Concluídos", "Alarme Falso", "Fogo Controlado"];

// 5. AGRUPAMENTOS: O coração do mapa e da lista de alertas. 

export const alertasRecebidos = [
  { 
    id: 1, 
    titulo: "FOCO 10/04/2026 [TIANGUÁ]", 
    confiabilidade: "Alta confiabilidade", 
    relatos: 5, 
    status: "CONCLUIDO",
    lat: -3.7324, 
    lon: -41.0125,
    imagem: ""
  },
  { 
    id: 2, 
    titulo: "FOCO ZONA RURAL", 
    confiabilidade: "Baixa confiabilidade", 
    relatos: 2, 
    status: "PENDENTE",
    lat: -3.7350, 
    lon: -41.0150,
    imagem: ""
  },
  { 
    id: 3, 
    titulo: "FOCO SERRA DA IBIAPABA", 
    confiabilidade: "Baixa confiabilidade", 
    relatos: 5, 
    status: "FALSO",
    lat: -3.7400, 
    lon: -41.0200,
    imagem: ""
  },
  { 
    id: 4, 
    titulo: "FOCO DISTRITO INDUSTRIAL", 
    confiabilidade: "Alta confiabilidade", 
    relatos: 8, 
    status: "EM_CURSO",
    lat: -3.7250, 
    lon: -41.0050,
    imagem: ""
  },
];


// Cada ID aqui bate com o ID do agrupamento lá de cima.
export const relatosPorFoco = {
  1: [
    { id: 101, usuario: "João Silva", distancia: "120m", data: "20/10/2025", hora: "14:20", status: "CONFIRMADO", lat: -3.7324, lon: -41.0125, classificacao: "INCENDIO", descricao: "Fogo alto se espalhando pela mata seca perto da estrada.", imagem: "" },
    { id: 102, usuario: "Maria Souza", distancia: "350m", data: "20/10/2025", hora: "14:22", status: "PENDENTE", lat: -3.7330, lon: -41.0130, classificacao: "FUMACA", descricao: "Muita fumaça branca saindo do vale, cheiro forte de queimado.", imagem: "" },
    { id: 103, usuario: "Carlos Lima", distancia: "500m", data: "20/10/2025", hora: "14:25", status: "CONFIRMADO", lat: -3.7315, lon: -41.0110, classificacao: "INCENDIO", descricao: "Foco de incêndio detectado em área de difícil acesso.", imagem: "" },
  ]
};

