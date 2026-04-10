import { useState } from "react"; //importei o estado
import logoImg from "../assets/logo-carcara.png";

export default function Topbar() {
  // Criei um estado para saber qual botão está selecionado
  // O padrão começa no 'Painel'
  const [activeTab, setActiveTab] = useState("Painel");

  // Uma lista com os nomes dos menus
  const menus = ["Painel", "Alertas", "Mapas", "Configurações"];

  return (
    <nav className="flex items-center justify-between px-8 h-27 bg-[#313131] border-b border-white/5 sticky top-0 z-[1000]">
   
      <div className="flex items-center gap-3">
        <img src={logoImg} alt="Logo" className="h-20 w-auto" />
      </div>

      {/*Menu*/}
      <div className="flex bg-[#313131] p-1.5 rounded-full border border-white/5">
        {menus.map((menu) => (
          <button
            key={menu}
            onClick={() => setActiveTab(menu)} // Quando clica, atualiza o State!
            className={`
              px-6 py-2 rounded-full text-sm font-bold transition-all duration-300
              ${
                activeTab === menu
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20" // Se estiver ativo: Laranja
                  : "text-zinc-400 hover:text-white" // Se não: Cinza com hover branco
              }
            `}
          >
            {menu}
          </button>
        ))}
      </div>

      {/* Perfil que coloquei só pra representar, no futuro eu vou mexer ainda*/}
      <div className="flex items-center gap-6">
        <button className="text-zinc-400 hover:text-orange-500 transition-colors"></button>
        <div className="h-8 w-[1px] bg-zinc-800"></div>
        <div className="flex items-center gap-3">
          <span className="text-white font-bold text-sm">Operador</span>
          <div className="w-10 h-10 bg-zinc-800 rounded-full border border-white/10"></div>
        </div>
      </div>
    </nav>
  );
}
