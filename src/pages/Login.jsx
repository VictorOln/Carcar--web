import { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { FiLock } from "react-icons/fi";
import "leaflet/dist/leaflet.css";

export default function Login({ onLogin }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulação de login
    onLogin();
  };

  return (
    <div className="h-screen w-full flex overflow-hidden font-sans">
      {/* Lado Esquerdo: Mapa (55%) */}
      <div className="w-[55%] relative overflow-hidden">
        <MapContainer
          center={[-15.7801, -47.9292]}
          zoom={4}
          zoomControl={false}
          scrollWheelZoom={false}
          dragging={false}
          doubleClickZoom={false}
          className="h-full w-full grayscale-[0.2]"
          style={{ background: "#000" }}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; CARCARÁ'
          />
        </MapContainer>

        {/* Overlay do Texto com gradiente para suavizar a transição */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-[1000] flex flex-col justify-center px-24">
          <div className="max-w-[600px] animate-in fade-in slide-in-from-left duration-1000">
            <h1 className="text-white text-7xl font-black leading-[1.05] tracking-tighter uppercase italic">
              Bem-Vindo ao <br />
              <span className="text-orange-600 drop-shadow-[0_0_15px_rgba(234,88,12,0.4)]">Carcará</span> <br />
              <span className="text-4xl font-light tracking-normal not-italic text-zinc-300">
                Central de Monitoramento <br /> de incêndios em tempo real
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* Lado Direito: Formulário (45%) */}
      <div className="w-[45%] bg-[#1E1E1E] flex flex-col justify-center items-center px-20 relative border-l border-white/[0.03]">
        <div className="w-full max-w-[420px]">
          <div className="mb-12">
            {/* Badge Acesso Restrito */}
            <div className="inline-flex items-center gap-2.5 bg-red-600/10 border border-red-600/20 text-red-500 px-4 py-1.5 rounded-full mb-8">
              <FiLock size={14} className="animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Acesso restrito</span>
            </div>

            <h2 className="text-white text-4xl font-black tracking-tight mb-4 uppercase">
              Autenticação
            </h2>
            <p className="text-zinc-500 text-base leading-relaxed font-medium">
              Acesse o terminal de monitoramento operacional <br /> para gestão de ocorrências.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-7">
            <div className="space-y-2.5">
              <label className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em] ml-1">Usuário</label>
              <input
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                className="w-full bg-[#161616] border border-white/5 rounded-2xl px-6 py-5 text-zinc-200 outline-none focus:border-orange-600/40 focus:ring-4 focus:ring-orange-600/5 transition-all placeholder:text-zinc-800 font-medium"
                placeholder="digite seu usuário"
              />
            </div>

            <div className="space-y-2.5">
              <label className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em] ml-1">Senha</label>
              <div className="relative">
                <input
                  type="password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  className="w-full bg-[#161616] border border-white/5 rounded-2xl px-6 py-5 text-zinc-200 outline-none focus:border-orange-600/40 focus:ring-4 focus:ring-orange-600/5 transition-all placeholder:text-zinc-800 font-medium"
                  placeholder="••••••••"
                />
                <button type="button" className="absolute right-0 -bottom-8 text-[9px] text-zinc-600 hover:text-orange-500 font-black uppercase tracking-widest transition-colors">
                  Esqueceu a senha?
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-500 text-white font-black uppercase tracking-[0.2em] py-6 rounded-2xl transition-all shadow-2xl shadow-orange-600/20 mt-12 active:scale-[0.97] flex items-center justify-center gap-3 group"
            >
              <span>Acessar a Central</span>
              <div className="w-5 h-[2px] bg-white/30 group-hover:w-8 transition-all" />
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}
