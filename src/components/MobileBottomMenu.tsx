import {
  Home,
  HelpCircle,
  Heart,
  LogIn,
  Menu,
} from "lucide-react";

interface MobileBottomMenuProps {
  active: string;
  onNavigate: (page: string, active: string) => void;
  onMenuToggle: () => void;
  menuOpen: boolean;
}

export default function MobileBottomMenu({ 
  active, 
  onNavigate, 
  onMenuToggle, 
  menuOpen 
}: MobileBottomMenuProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-around py-2 shadow-md">
      <button
        className={`flex flex-col items-center ${
          active === "home" && !menuOpen ? "text-blue-600" : "text-gray-500"
        }`}
        onClick={() => onNavigate("home", "home")}
      >
        <Home size={22} />
        <span className="text-xs">Início</span>
      </button>

      <button
        className={`flex flex-col items-center ${
          active === "questoes" && !menuOpen ? "text-blue-600" : "text-gray-500"
        }`}
        onClick={() => onNavigate("questoes", "questoes")}
      >
        <HelpCircle size={22} />
        <span className="text-xs">Questões</span>
      </button>

      <button
        className={`flex flex-col items-center ${
          active === "favoritos" && !menuOpen ? "text-blue-600" : "text-gray-500"
        }`}
        onClick={() => onNavigate("favoritos", "favoritos")}
      >
        <Heart size={22} />
        <span className="text-xs">Favoritos</span>
      </button>

      <button
        className={`flex flex-col items-center ${
          active === "entrar" && !menuOpen ? "text-blue-600" : "text-gray-500"
        }`}
        onClick={() => onNavigate("entrar", "entrar")}
      >
        <LogIn size={22} />
        <span className="text-xs">Entrar</span>
      </button>

      <button
        className={`flex flex-col items-center ${
          menuOpen ? "text-blue-600" : "text-gray-500"
        }`}
        onClick={onMenuToggle}
      >
        <Menu size={22} />
        <span className="text-xs">Menu</span>
      </button>
    </div>
  );
}