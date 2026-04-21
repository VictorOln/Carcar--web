import { useState } from "react";
import { FiSearch, FiUsers, FiArrowLeft } from "react-icons/fi";

const STATUS_CONFIG = {
  CONCLUIDO:  { label: "CONCLUÍDO",  bg: "bg-green-600",  text: "text-white" },
  PENDENTE:   { label: "PENDENTE",   bg: "bg-yellow-500", text: "text-black" },
  FALSO:      { label: "FALSO",      bg: "bg-red-600",    text: "text-white" },
  EM_CURSO:   { label: "EM CURSO",   bg: "bg-orange-500", text: "text-white" },
  VERIFICADO: { label: "VERIFICADO", bg: "bg-red-700",    text: "text-white" },
};

const FOCOS = [
  {
    id: 1, nome: "FOCO 10/04/2026 [TIANGUÁ]", confiabilidade: "Alta confiabilidade", relatos: 5, status: "CONCLUIDO",
    reportes: [
      { id: "01", coords: "-3.73291, -41.01214", desc: "Incêndio de grandes proporções na área de mata seca. Fauna em risco.", status: "PENDENTE",   data: "30/03/2025 - 12:32" },
      { id: "02", coords: "-3.73291, -41.01214", desc: "Incêndio de grandes proporções na área de mata seca. Fauna em risco.", status: "PENDENTE",   data: "30/03/2025 - 13:44" },
      { id: "03", coords: "-3.73291, -41.01214", desc: "Incêndio de grandes proporções na área de mata seca. Fauna em risco.", status: "VERIFICADO", data: "30/03/2025 - 13:48" },
      { id: "04", coords: "-3.73291, -41.01214", desc: "Incêndio de grandes proporções na área de mata seca. Fauna em risco.", status: "VERIFICADO", data: "30/03/2025 - 13:50" },
      { id: "05", coords: "-3.73291, -41.01214", desc: "Incêndio de grandes proporções na área de mata seca. Fauna em risco.", status: "VERIFICADO", data: "30/03/2025 - 14:02" },
    ],
  },
  {
    id: 2, nome: "FOCO 2", confiabilidade: "Baixa confiabilidade", relatos: 2, status: "PENDENTE",
    reportes: [
      { id: "01", coords: "-3.73291, -41.01214", desc: "Fumaça avistada próxima à área rural.", status: "PENDENTE", data: "10/04/2026 - 08:10" },
      { id: "02", coords: "-3.73291, -41.01214", desc: "Fumaça avistada próxima à área rural.", status: "PENDENTE", data: "10/04/2026 - 08:45" },
    ],
  },
  {
    id: 3, nome: "FOCO 3", confiabilidade: "Baixa confiabilidade", relatos: 3, status: "FALSO",
    reportes: [
      { id: "01", coords: "-4.12044, -40.58831", desc: "Avistamento de fumaça descartado. Queima de lixo autorizada.", status: "FALSO", data: "09/04/2026 - 14:00" },
    ],
  },
  {
    id: 4, nome: "FOCO 4", confiabilidade: "Alta confiabilidade", relatos: 3, status: "EM_CURSO",
    reportes: [
      { id: "01", coords: "-3.98711, -40.34920", desc: "Equipe enviada ao local. Fogo ainda ativo.", status: "EM_CURSO", data: "10/04/2026 - 10:15" },
      { id: "02", coords: "-3.98711, -40.34920", desc: "Equipe enviada ao local. Fogo ainda ativo.", status: "EM_CURSO", data: "10/04/2026 - 11:00" },
      { id: "03", coords: "-3.98711, -40.34920", desc: "Equipe enviada ao local. Fogo ainda ativo.", status: "EM_CURSO", data: "10/04/2026 - 11:30" },
    ],
  },
];

const FILTROS = [
  { key: "Todos",     label: "Todos" },
  { key: "PENDENTE",  label: "Pendentes" },
  { key: "EM_CURSO",  label: "Em curso" },
  { key: "CONCLUIDO", label: "Concluídos" },
  { key: "FALSO",     label: "Falso" },
];

export default function PageAlertas() {
  const [filtro, setFiltro]        = useState("Todos");
  const [busca, setBusca]          = useState("");
  const [focoId, setFocoId]        = useState(null);
  const [reporteSel, setReporte]   = useState(null);
  const [statusEdit, setStatusEdit]= useState("");

  if (focoId !== null) {
    const foco   = FOCOS.find(f => f.id === focoId);
    const rep    = reporteSel ?? foco.reportes[0];
    const cfgRep = STATUS_CONFIG[rep.status];

    return (
      <div className="max-w-[1400px] mx-auto px-8 py-8">
        <button onClick={() => { setFocoId(null); setReporte(null); setStatusEdit(""); }}
          className="flex items-center gap-2 text-zinc-400 hover:text-white text-sm mb-6 transition-colors">
          <FiArrowLeft size={14} /> Voltar aos focos
        </button>
        <h2 className="text-white text-2xl font-bold mb-1">Ocorrências do {foco.nome}</h2>
        <p className="text-zinc-500 text-sm mb-6">{foco.reportes.length} reportes</p>

        <div className="flex gap-5">
          {/* Lista reportes */}
          <div className="w-72 shrink-0 flex flex-col gap-3">
            {foco.reportes.map((r) => {
              const cfg = STATUS_CONFIG[r.status];
              return (
                <div key={r.id} onClick={() => { setReporte(r); setStatusEdit(""); }}
                  className={`bg-[#2a2a2a] rounded-xl p-4 cursor-pointer border transition-all ${rep.id === r.id ? "border-orange-500" : "border-white/5 hover:border-white/20"}`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white text-sm font-bold">Reporte #{r.id}</span>
                    <span className="text-zinc-500 text-[10px]">{r.data}</span>
                  </div>
                  <p className="text-zinc-500 text-[11px] line-clamp-2 mb-2">{r.desc}</p>
                  <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${cfg.bg} ${cfg.text}`}>{cfg.label}</span>
                </div>
              );
            })}
          </div>

          {/* Detalhe */}
          <div className="flex-1 bg-[#2a2a2a] rounded-2xl border border-white/5 p-6">
            <h3 className="text-white font-bold text-base mb-4">Reporte #{rep.id}</h3>
            <div className="w-full h-36 bg-zinc-800 rounded-xl mb-5 border border-white/5" />

            <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-3">Localização</p>
            <div className="flex gap-3 mb-5">
              <div className="bg-[#1e1e1e] rounded-xl p-4 flex-1 border border-white/5">
                <p className="text-zinc-500 text-[11px]">LAT: <span className="text-white font-mono">{rep.coords.split(",")[0]}</span></p>
                <p className="text-zinc-500 text-[11px] mt-1">LONG: <span className="text-white font-mono">{rep.coords.split(",")[1]}</span></p>
              </div>
              <div className="bg-[#1e1e1e] rounded-xl flex-1 border border-white/5 overflow-hidden relative flex items-center justify-center min-h-[80px]">
                <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white z-10" />
                <button className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full">
                  ▲ Ver no mapa
                </button>
              </div>
            </div>

            <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-2">Classificação</p>
            <div className="flex items-center gap-3 mb-5">
              <span className="bg-red-600 text-white text-[11px] font-bold px-3 py-1 rounded-full">🔴 Incêndio</span>
              <div className="flex-1 h-1.5 bg-zinc-700 rounded-full overflow-hidden">
                <div className="h-full bg-orange-500 rounded-full" style={{ width: "47%" }} />
              </div>
              <span className="text-zinc-500 text-[10px]">47</span>
            </div>

            <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-2">Descrição</p>
            <div className="bg-[#1e1e1e] border border-white/5 rounded-xl px-4 py-3 text-zinc-300 text-sm mb-5">{rep.desc}</div>

            <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-2">Status</p>
            <select value={statusEdit} onChange={e => setStatusEdit(e.target.value)}
              className="w-full bg-[#1e1e1e] border border-white/10 text-zinc-300 text-sm rounded-xl px-4 py-2.5 mb-5 focus:outline-none focus:border-orange-500/50">
              <option value="">Selecione um status *</option>
              <option value="CONFIRMADO">Confirmado</option>
              <option value="EM_CURSO">Em curso</option>
              <option value="CONCLUIDO">Resolvido</option>
              <option value="FALSO">Falso</option>
            </select>

            <button className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-xl transition-colors">
              Salvar alterações
            </button>
          </div>
        </div>
      </div>
    );
  }

  const focosFiltrados = FOCOS.filter(f => {
    const matchFiltro = filtro === "Todos" || f.status === filtro;
    const matchBusca  = f.nome.toLowerCase().includes(busca.toLowerCase());
    return matchFiltro && matchBusca;
  });

  return (
    <div className="max-w-[860px] mx-auto px-8 py-10">
      <h2 className="text-white text-3xl font-bold tracking-tight">Alertas Recebidos</h2>
      <p className="text-zinc-500 text-sm mt-1 mb-8">Gerencie e verifique os alertas enviados pelos observadores</p>

      <div className="relative mb-5">
        <FiSearch size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
        <input value={busca} onChange={e => setBusca(e.target.value)} placeholder="Realize a busca do foco..."
          className="w-full bg-[#1e1e1e] border border-orange-500/60 rounded-full pl-11 pr-5 py-3 text-zinc-300 text-sm focus:outline-none focus:border-orange-500 transition-colors" />
      </div>

      <div className="flex gap-2 mb-8 flex-wrap">
        {FILTROS.map(f => (
          <button key={f.key} onClick={() => setFiltro(f.key)}
            className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all border ${
              filtro === f.key ? "bg-orange-500 text-white border-orange-500" : "bg-transparent text-zinc-400 border-zinc-700 hover:border-zinc-500 hover:text-white"
            }`}>
            {f.label}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {focosFiltrados.map(foco => {
          const cfg = STATUS_CONFIG[foco.status];
          return (
            <div key={foco.id} onClick={() => setFocoId(foco.id)}
              className="flex items-center gap-4 bg-[#1e1e1e] border border-orange-500/30 rounded-2xl p-5 cursor-pointer hover:border-orange-500/70 transition-all">
              <div className="w-20 h-16 bg-zinc-800 rounded-xl shrink-0 border border-white/5" />
              <div className="flex flex-col gap-1">
                <span className="text-white font-bold text-sm">{foco.nome}</span>
                <span className="text-zinc-500 text-[12px]">{foco.confiabilidade}</span>
                <div className="flex items-center gap-1 text-zinc-600 text-[11px]">
                  <FiUsers size={11} /> {foco.relatos} relatos
                </div>
                <span className={`mt-1 self-start px-2.5 py-0.5 rounded text-[10px] font-bold ${cfg.bg} ${cfg.text}`}>{cfg.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
