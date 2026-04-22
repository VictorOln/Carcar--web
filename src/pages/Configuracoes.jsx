import { useState } from "react";
import { FiAlertTriangle, FiChevronDown } from "react-icons/fi";

function SelectField({ label, desc, options, value, onChange, icon }) {
  return (
    <div className="bg-[#1E1E1E] border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-colors">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          {icon && <div className="text-orange-500 mb-2">{icon}</div>}
          <p className="text-white font-bold text-sm">{label}</p>
          <p className="text-zinc-500 text-[11px] mt-1 leading-relaxed">
            {desc}
          </p>
        </div>
        <div className="relative shrink-0 mt-1">
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="appearance-none bg-[#2A2A2A] border border-white/10 text-zinc-200 text-sm font-bold rounded-xl pl-4 pr-9 py-2 focus:outline-none focus:border-orange-500/50 cursor-pointer min-w-[120px]"
          >
            {options.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
          <FiChevronDown
            size={13}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
}

export default function PageConfiguracoes() {
  const [raio, setRaio] = useState("3 km");
  const [margem, setMargem] = useState("500 m");
  const [angulo, setAngulo] = useState("15°");
  const [circulo, setCirculo] = useState("Médio");

  return (
    <div className="max-w-[800px] mx-auto px-8 py-10">
      <h2 className="text-white text-3xl font-bold uppercase tracking-tight">
        Configurações
      </h2>
      <p className="text-zinc-500 text-sm mt-1 mb-10">
        Ajuste os parâmetros de triangulação e visualização do Carcará
      </p>

      <div className="space-y-8">
        <section>
          <h3 className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest mb-4">
            Agrupamento e Triangulação
          </h3>
          <div className="grid grid-cols-1 gap-4">
            <SelectField
              label="Raio de Agrupamento"
              desc="Distância máxima para considerar múltiplos reportes como um único foco."
              options={["1 km", "2 km", "3 km", "5 km", "10 km"]}
              value={raio}
              onChange={setRaio}
            />
            <div className="grid grid-cols-2 gap-4">
              <SelectField
                label="Margem de Erro"
                desc="Resíduo máximo para nível de alta confiança."
                options={["100 m", "250 m", "500 m", "1 km"]}
                value={margem}
                onChange={setMargem}
                icon={<FiAlertTriangle size={18} />}
              />
              <SelectField
                label="Ângulo de Visada"
                desc="Ângulo mínimo para nível de confiança médio."
                options={["5°", "10°", "15°", "20°", "30°"]}
                value={angulo}
                onChange={setAngulo}
                icon={<FiAlertTriangle size={18} />}
              />
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest mb-4">
            Preferências do Mapa
          </h3>
          <div className="bg-[#1E1E1E] border border-white/5 rounded-2xl p-6">
            <p className="text-white font-bold text-sm mb-1">
              Tamanho dos Círculos de Precisão
            </p>
            <p className="text-zinc-500 text-[11px] mb-6">
              Ajuste visual da área de incerteza dos focos detectados.
            </p>
            <div className="flex gap-3">
              {["Pequeno", "Médio", "Grande"].map((opt) => (
                <button
                  key={opt}
                  onClick={() => setCirculo(opt)}
                  className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all border ${
                    circulo === opt
                      ? "bg-orange-500 text-white border-orange-500 shadow-lg shadow-orange-500/20"
                      : "bg-[#2A2A2A] text-zinc-500 border-white/5 hover:text-white"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
