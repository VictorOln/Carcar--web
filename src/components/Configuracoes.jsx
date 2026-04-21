import { useState } from "react";
import { FiAlertTriangle, FiChevronDown } from "react-icons/fi";

function SelectField({ label, desc, options, value, onChange, icon }) {
  return (
    <div className="bg-[#2a2a2a] border border-white/5 rounded-2xl p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          {icon && <div className="text-orange-400 mb-2">{icon}</div>}
          <p className="text-white font-bold text-sm">{label}</p>
          <p className="text-zinc-500 text-[11px] mt-1 leading-relaxed">{desc}</p>
        </div>
        <div className="relative shrink-0 mt-1">
          <select value={value} onChange={e => onChange(e.target.value)}
            className="appearance-none bg-[#1e1e1e] border border-white/10 text-zinc-200 text-sm font-bold rounded-xl pl-4 pr-9 py-2 focus:outline-none focus:border-orange-500/50 cursor-pointer min-w-[100px]">
            {options.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
          <FiChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

export default function PageConfiguracoes() {
  const [raio,    setRaio]    = useState("3 km");
  const [margem,  setMargem]  = useState("500 m");
  const [angulo,  setAngulo]  = useState("15°");
  const [circulo, setCirculo] = useState("Médio");

  return (
    <div className="max-w-[1400px] mx-auto px-8 py-10 flex gap-8">
      <div className="flex-1">
        <h2 className="text-white text-3xl font-bold">Configurações</h2>
        <p className="text-zinc-500 text-sm mt-1 mb-8">Defina os parâmetros a seguir</p>

        <h3 className="text-white text-lg font-bold mb-4">Agrupamento</h3>
        <SelectField label="Raio" desc="Distância máxima para entrar em um grupo"
          options={["1 km","2 km","3 km","5 km","10 km"]} value={raio} onChange={setRaio} />

        <h3 className="text-white text-lg font-bold mb-4 mt-8">Triângulação</h3>
        <div className="grid grid-cols-2 gap-4">
          <SelectField label="Margem de Erro" desc="Resíduo máximo para o nível de alta confiança"
            options={["100 m","250 m","500 m","1 km"]} value={margem} onChange={setMargem}
            icon={<FiAlertTriangle size={18} />} />
          <SelectField label="Ângulo de Visada" desc="Ângulo mínimo para nível de confiança médio"
            options={["5°","10°","15°","20°","30°"]} value={angulo} onChange={setAngulo}
            icon={<FiAlertTriangle size={18} />} />
        </div>

        <h3 className="text-white text-lg font-bold mb-4 mt-8">Mapa</h3>
        <div className="bg-[#2a2a2a] border border-white/5 rounded-2xl p-5">
          <p className="text-white font-bold text-sm mb-1">Tamanho dos Círculos de Precisão</p>
          <p className="text-zinc-500 text-[11px] mb-5">Ajustes dos círculos para alto, médio e baixo no mapa</p>
          <div className="flex gap-3">
            {["Pequeno","Médio","Grande"].map(opt => (
              <button key={opt} onClick={() => setCirculo(opt)}
                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all border ${
                  circulo === opt ? "bg-orange-500 text-white border-orange-500" : "bg-[#1e1e1e] text-zinc-400 border-white/10 hover:text-white hover:border-white/30"
                }`}>
                {opt}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
