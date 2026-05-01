import { useState } from "react";
import { FiAlertTriangle } from "react-icons/fi";

function ValueInput({ value, onChange, suffix }) {
  return (
    <div className="bg-[#1A1A1A] border border-orange-500/30 rounded-lg overflow-hidden transition-all focus-within:border-orange-500 focus-within:shadow-[0_0_0_1px_rgba(249,115,22,0.3)] flex items-center px-4 py-2.5 min-w-[120px] justify-center gap-1">
      <input
        type="text"
        value={value}
        onChange={(e) => {
          // Permite apenas números
          const val = e.target.value.replace(/[^0-9]/g, "");
          onChange(val);
        }}
        className="bg-transparent w-full text-right text-zinc-200 text-sm font-medium outline-none placeholder:text-zinc-700"
      />
      <span className="text-zinc-500 text-sm font-medium select-none">{suffix}</span>
    </div>
  );
}

function ConfigCard({ children, className = "" }) {
  return (
    <div className={`bg-[#222222] border border-white/5 rounded-2xl p-6 transition-all hover:border-white/10 ${className}`}>
      {children}
    </div>
  );
}

export default function Configuracoes() {
  const [raio, setRaio] = useState("3");
  const [margem, setMargem] = useState("500");
  const [angulo, setAngulo] = useState("15");
  const [circulo, setCirculo] = useState("Médio");

  return (
    <div className="max-w-[1000px] mx-auto px-8 py-12">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-white text-3xl font-semibold tracking-tight">
          Configurações
        </h1>
        <p className="text-zinc-500 text-lg mt-1">
          Ajuste os parâmetros de processamento e visualização de dados
        </p>
      </header>

      {/* Agrupamento Section */}
      <section className="mb-12">
        <h2 className="text-white text-xl font-medium mb-6">Agrupamento</h2>
        
        <div className="space-y-6">
          {/* Raio Card */}
          <ConfigCard className="flex items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-white font-bold text-base mb-1">Raio</h3>
              <p className="text-zinc-500 text-xs leading-relaxed max-w-[400px]">
                Define a distância máxima entre dispositivos para que sejam considerados um grupo no mapa
              </p>
            </div>
            <div className="shrink-0">
              <ValueInput value={raio} onChange={setRaio} suffix="km" />
            </div>
          </ConfigCard>

          {/* Error and Angle Row */}
          <div className="grid grid-cols-2 gap-6">
            {/* Margem de erro */}
            <ConfigCard>
              <FiAlertTriangle className="text-orange-500 text-2xl mb-4" />
              <h3 className="text-white font-bold text-base mb-1">Margem de erro</h3>
              <p className="text-zinc-500 text-xs leading-relaxed mb-6">
                Resíduo máximo aceitável para cálculos de alta confiança em áreas densas.
              </p>
              <ValueInput value={margem} onChange={setMargem} suffix="m" />
            </ConfigCard>

            {/* Ângulo de visada */}
            <ConfigCard>
              <FiAlertTriangle className="text-orange-500 text-2xl mb-4" />
              <h3 className="text-white font-bold text-base mb-1">Ângulo de visada</h3>
              <p className="text-zinc-500 text-xs leading-relaxed mb-6">
                Ângulo de abertura mínimo necessário para validação cruzada dos dados.
              </p>
              <ValueInput value={angulo} onChange={setAngulo} suffix="°" />
            </ConfigCard>
          </div>

          {/* Círculo de Precisão */}
          <ConfigCard className="max-w-[500px]">
            <h3 className="text-white font-bold text-base mb-1">Círculo de Precisão</h3>
            <p className="text-zinc-500 text-xs leading-relaxed mb-8">
              Ajuste da representação visual da incerteza geográfica. Círculos maiores permitem visualização macro, enquanto menores focam em alvos específicos com maior detalhamento.
            </p>
            
            <div className="flex gap-2 p-1 bg-[#1A1A1A] rounded-xl border border-white/5">
              {["Pequeno", "Médio", "Grande"].map((opt) => (
                <button
                  key={opt}
                  onClick={() => setCirculo(opt)}
                  className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all ${
                    circulo === opt
                      ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </ConfigCard>
        </div>
      </section>
    </div>
  );
}



