import { useState } from "react";
import {
  User,
  Scale,
  BookOpen,
  Building,
  FileText,
  Target,
  Info,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

interface MenuItem {
  id: number;
  label: string;
  icon: JSX.Element;
  subItems?: { label: string; page: string }[];
}

interface DesktopMenuProps {
  onNavigate: (page: string) => void;
}

export default function DesktopMenu({ onNavigate }: DesktopMenuProps) {
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
    <div className="hidden md:block fixed top-16 left-0 w-64 h-full bg-white border-r border-gray-200 shadow-sm overflow-y-auto">
      <div className="p-4 space-y-2">
        {menuItems.map((item) => (
          <div key={item.id}>
            <button
              className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => toggleItem(item.id)}
            >
              <div className="flex items-center space-x-3">
                {item.icon}
                <span className="text-sm font-medium">{item.label}</span>
              </div>
              {item.subItems && (
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    openItems[item.id] ? "rotate-180" : ""
                  }`}
                />
              )}
            </button>

            {openItems[item.id] && item.subItems && (
              <div className="ml-8 mt-2 space-y-1">
                {item.subItems.map((subItem, index) => (
                  <button
                    key={index}
                    onClick={() => onNavigate(subItem.page)}
                    className="block w-full text-left py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                  >
                    {subItem.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}