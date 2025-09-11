import { Building } from "lucide-react";

interface HeaderProps {
  onLogoClick: () => void;
}

export default function Header({ onLogoClick }: HeaderProps) {
  return (
    <div className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50 px-4 py-3 shadow-sm">
      <div className="flex items-center justify-center space-x-2">
        <button 
          onClick={onLogoClick}
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
        >
          <Building className="w-6 h-6 text-blue-600" />
          <h1 className="text-lg font-bold text-gray-800">CONCURSOS MUNICIPAIS</h1>
        </button>
      </div>
    </div>
  );
}