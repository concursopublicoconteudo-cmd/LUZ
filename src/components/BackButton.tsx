import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  onBack: () => void;
}

export default function BackButton({ onBack }: BackButtonProps) {
  return (
    <button
      onClick={onBack}
      className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-4 transition-colors"
    >
      <ArrowLeft size={20} />
      <span className="font-medium">Voltar</span>
    </button>
  );
}