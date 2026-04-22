export const MOCK_STATS = {
  total: 3334,
  pendentes: 12,
  verificados: 80,
  resolvidos: 32,
};

export const MOCK_FOCOS = [
  {
    id: 1,
    x: 42,
    y: 35,
    status: "CONFIRMADO",
    local: "Foco G2",
    zona: "Alto Alagoas",
    nome: "FOCO 10/04 [TIANGUÁ]",
    relatos: 5,
    confiabilidade: "Alta",
  },
  {
    id: 2,
    x: 55,
    y: 50,
    status: "EM_CURSO",
    local: "Foco G3",
    zona: "Ibiapaba",
    nome: "FOCO 11/04 [UBAJARA]",
    relatos: 2,
    confiabilidade: "Média",
  },
  {
    id: 3,
    x: 30,
    y: 60,
    status: "RESOLVIDO",
    local: "Foco G4",
    zona: "Parnaíba",
    nome: "FOCO 12/04 [SOBRAL]",
    relatos: 8,
    confiabilidade: "Alta",
  },
  {
    id: 4,
    x: 70,
    y: 40,
    status: "PENDENTE",
    local: "Foco G5",
    zona: "Cariri",
    nome: "FOCO 13/04 [CRATO]",
    relatos: 1,
    confiabilidade: "Baixa",
  },
];

export const MOCK_ALERTAS_RECENTES = [
  { id: 1, local: "Foco G2", zona: "Alto Alagoas", status: "CONFIRMADO" },
  { id: 2, local: "Zona Rural", zona: "Tianguá", status: "PENDENTE" },
];
