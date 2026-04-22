import { FiBell } from "react-icons/fi";

import logoImg from "../assets/logo-carcara.png";

const menus = ["Painel", "Alertas", "Mapas", "Configurações"];

export default function Topbar({ activePage, onNavigate }) {
  return (
    // Removi a classe h-20 daqui e coloquei no container flex para centralizar melhor
    <nav className="w-full bg-[#313131] border-b border-white/5 sticky top-0 z-[1000]">
      <div className="w-full h-20 flex items-center justify-between px-8">
        {/* Lado Esquerdo: Logo e Texto - Encostado na ponta */}
        <div className="flex items-center gap-4">
          <div className="h-30 w-60 flex items-center justify-center">
            {/* CORREÇÃO DO src={logoImg} SEM ASPAS */}
            <img
              src={logoImg}
              alt="Logo Carcará"
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        {/* Centro: Navegação - Mantém-se centralizado visualmente */}
        <div className="flex bg-[#242424] p-1.5 rounded-full border border-white/5">
          {menus.map((menu) => (
            <button
              key={menu}
              onClick={() => onNavigate(menu)}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                activePage === menu
                  ? "bg-orange-600 text-white shadow-lg shadow-orange-600/20"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {menu.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Lado Direito: Perfil e Notificações - Encostado na outra ponta */}
        <div className="flex items-center gap-5">
          <button className="relative p-2 text-zinc-500 hover:text-white transition-colors">
            <FiBell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-orange-600 rounded-full border-2 border-[#1A1A1A]"></span>
          </button>

          <div className="h-10 w-10 rounded-full border-2 border-orange-600 p-0.5 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
            <img
              src="https://github.com/vbrunoo.png" // Exemplo de avatar
              alt="Victor Bruno"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
