import { useState } from "react";
import {
  User,
  Scale,
  BookOpen,
  Building,
  FileText,
  Target,
  Info,
  ChevronRight,
} from "lucide-react";

interface MenuItem {
  id: number;
  label: string;
  icon: JSX.Element;
  subItems?: { label: string; page: string }[];
}

interface MobileSideMenuProps {
  onNavigate: (page: string) => void;
}

export default function MobileSideMenu({ onNavigate }: MobileSideMenuProps) {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const menuItems: MenuItem[] = [
    { 
      id: 1, 
      label: "Meu Perfil", 
      icon: <User size={20} />,
      subItems: [
        { label: "Dashboard", page: "dashboard" },
        { label: "Ranking", page: "ranking" }
      ]
    },
    { 
      id: 2, 
      label: "Questões por Leis", 
      icon: <Scale size={20} />,
      subItems: [
        { label: "Leis de Concurso Público", page: "leis-concurso" }
      ]
    },
    { 
      id: 3, 
      label: "Apostilas Digitais", 
      icon: <BookOpen size={20} />,
      subItems: [
        { label: "Apostilas para Concurso", page: "apostilas" }
      ]
    },
    { 
      id: 4, 
      label: "Concursos Públicos", 
      icon: <Building size={20} />,
      subItems: [
        { label: "News Concursos", page: "concursos-info" }
      ]
    },
    { 
      id: 5, 
      label: "Provas de Concursos", 
      icon: <FileText size={20} />,
      subItems: [
        { label: "Baixar Provas", page: "baixar-provas" }
      ]
    },
    { 
      id: 6, 
      label: "Simulados", 
      icon: <Target size={20} />,
      subItems: [
        { label: "Simulado Digital", page: "simulado-digital" }
      ]
    },
    { 
      id: 7, 
      label: "Informativo", 
      icon: <Info size={20} />,
      subItems: [
        { label: "Novidades", page: "novidades" }
      ]
    },
  ];

  const toggleItem = (itemId: number) => {
    setOpenItems(prev => {
      // Close all other items when opening a new one
      const newState: Record<number, boolean> = {};
      Object.keys(prev).forEach(key => {
        newState[parseInt(key)] = false;
      });
      newState[itemId] = !prev[itemId];
      return newState;
    });
  };

  return (
    <div className="md:hidden space-y-3 pb-20">
      {menuItems.map((item) => (
        <div key={item.id}>
          <div
            className="bg-gray-100 rounded-full px-4 py-3 flex items-center justify-between cursor-pointer shadow-sm"
            onClick={() => toggleItem(item.id)}
          >
            <div className="flex items-center space-x-3">
              {item.icon}
              <span className="text-sm">{item.label}</span>
            </div>
            <ChevronRight
              size={18}
              className={`transition-transform duration-200 ${
                openItems[item.id] ? "rotate-90" : ""
              }`}
            />
          </div>

          {openItems[item.id] && item.subItems && (
            <div className="ml-10 mt-2 space-y-2 text-sm text-gray-600">
              {item.subItems.map((subItem, index) => (
                <button
                  key={index}
                  onClick={() => onNavigate(subItem.page)}
                  className="block w-full text-left py-1 hover:text-blue-600 transition-colors"
                >
                  {subItem.label}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}