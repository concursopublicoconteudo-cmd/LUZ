import { useState } from "react";
import Header from "./components/Header";
import DesktopMenu from "./components/DesktopMenu";
import MobileBottomMenu from "./components/MobileBottomMenu";
import MobileSideMenu from "./components/MobileSideMenu";
import BackButton from "./components/BackButton";
import SearchBar from "./components/SearchBar";
import { municipios } from "./data/municipios";
import { questions, getQuestionsByMunicipio, getFilteredQuestions, Question } from "./data/questions";
import {
  Check,
  Users,
  Clock,
  Award,
  Zap,
  ChevronDown,
  ChevronUp,
  Download,
  Heart,
  Filter,
  BarChart3,
  Target,
  Trophy,
  Scale,
  BookOpen,
  Building,
  FileText,
  Info,
  Newspaper,
  Bell,
  FileCheck,
  Phone,
  Mail,
  MapPin,
  Shield,
  Scissors,
  Play,
  Pause,
  SkipForward,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function App() {
  const [active, setActive] = useState("home");
  const [currentPage, setCurrentPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [filterExpanded, setFilterExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showComment, setShowComment] = useState(false);
  const [eliminatedOptions, setEliminatedOptions] = useState<number[]>([]);
  const [filters, setFilters] = useState({
    municipio: "",
    disciplina: "",
    assunto: ""
  });
  const [simuladoActive, setSimuladoActive] = useState(false);
  const [simuladoTime, setSimuladoTime] = useState(0);
  const [simuladoQuestions, setSimuladoQuestions] = useState<Question[]>([]);
  const [currentSimuladoIndex, setCurrentSimuladoIndex] = useState(0);
  const [dashboardMonth, setDashboardMonth] = useState(new Date().getMonth());
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const navigateToPage = (page: string, activeTab?: string) => {
    setCurrentPage(page);
    setMenuOpen(false);
    if (activeTab) {
      setActive(activeTab);
    } else {
      setActive("menu");
    }
  };

  const handleLogoClick = () => {
    setCurrentPage("home");
    setActive("home");
    setMenuOpen(false);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleBackClick = () => {
    setCurrentPage("home");
    setActive("home");
    setMenuOpen(false);
  };

  const handleMunicipioClick = (municipio: string) => {
    setFilters({ ...filters, municipio });
    setCurrentPage("questoes");
    setActive("questoes");
  };

  const handleStartSimulado = (questionCount: number) => {
    const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5).slice(0, questionCount);
    setSimuladoQuestions(shuffledQuestions);
    setSimuladoActive(true);
    setSimuladoTime(questionCount * 3 * 60); // 3 minutes per question
    setCurrentSimuladoIndex(0);
    setCurrentPage("simulado-active");
  };

  const filteredMunicipios = municipios.filter(m => 
    m.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredQuestions = getFilteredQuestions(filters);
  const currentQuestion = filteredQuestions[currentQuestionIndex];

  const toggleCardExpansion = (cardId: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const beneficios = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      titulo: "Comunidade Ativa",
      descricao: "Mais de 50.000 concurseiros estudando juntos"
    },
    {
      icon: <Clock className="w-8 h-8 text-green-600" />,
      titulo: "Estudo 24/7",
      descricao: "Acesso ilimitado a qualquer hora do dia"
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      titulo: "Aprovação Garantida",
      descricao: "Metodologia comprovada com 85% de aprovação"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      titulo: "Atualizações Rápidas",
      descricao: "Conteúdo sempre atualizado com as últimas mudanças"
    }
  ];

  const renderPage = () => {
    const showBackButton = currentPage !== "home" && currentPage !== "questoes" && currentPage !== "favoritos" && currentPage !== "entrar";

    switch (currentPage) {
      case "home":
        return (
          <div className="space-y-8 pb-20">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg overflow-hidden">
              <div className="flex flex-col md:flex-row items-center p-8 md:p-12">
                <div className="w-full md:w-1/2 mb-6 md:mb-0">
                  <img 
                    src="/page-img.jpg"
                    alt="Pessoa estudando para concurso" 
                    className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="w-full md:w-1/2 text-white space-y-6 md:pl-8">
                  <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                    Concursos Municipais
                  </h1>
                  <p className="text-blue-100 text-lg md:text-xl leading-relaxed">
                    Milhares de questões para concurso do Estado do Rio de Janeiro
                  </p>
                  <button 
                    onClick={() => isLoggedIn ? navigateToPage("questoes", "questoes") : navigateToPage("entrar", "entrar")}
                    className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    {isLoggedIn ? "Começar Agora" : "Começar Grátis"}
                  </button>
                </div>
              </div>
            </div>

            {/* Municípios do RJ */}
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
                Questões por município
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center text-gray-600">
                Rio de Janeiro
              </h3>
              
              <SearchBar 
                value={searchTerm}
                onChange={setSearchTerm}
                placeholder="Buscar município..."
              />
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {filteredMunicipios.map((municipio, index) => (
                  <button
                    key={index}
                    onClick={() => handleMunicipioClick(municipio.nome)}
                    className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all hover:border-blue-300 cursor-pointer"
                  >
                    <h3 className="font-semibold text-sm mb-2">{municipio.nome}</h3>
                    <p className="text-gray-600 text-xs mb-4">{municipio.questoes} questões</p>
                    <div className="w-full bg-blue-600 text-white py-2 px-3 rounded text-xs font-medium hover:bg-blue-700 transition-colors">
                      Acessar
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Planos */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">Escolha seu Plano</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-800">Free</h3>
                    <p className="text-3xl font-bold text-blue-600 my-2">R$ 0</p>
                    <p className="text-gray-600 mb-4">Para começar</p>
                    <ul className="space-y-2 text-sm text-left mb-6">
                      <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />100 questões por mês</li>
                      <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Acesso básico</li>
                      <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Suporte por email</li>
                    </ul>
                    <button className="w-full bg-gray-600 text-white py-2 rounded font-medium">
                      Começar Grátis
                    </button>
                  </div>
                </div>
                
                <div className="bg-white border-2 border-blue-600 rounded-lg p-6 shadow-sm relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Mais Popular
                    </span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-800">Premium</h3>
                    <p className="text-3xl font-bold text-blue-600 my-2">R$ 39,00</p>
                    <p className="text-gray-600 mb-4">por mês</p>
                    <ul className="space-y-2 text-sm text-left mb-6">
                      <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Questões ilimitadas</li>
                      <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Simulados completos</li>
                      <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Apostilas digitais</li>
                      <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Suporte prioritário</li>
                    </ul>
                    <button className="w-full bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700 transition-colors">
                      Assinar Premium
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefícios */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">Por que escolher nossa plataforma?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {beneficios.map((beneficio, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <div className="flex items-start space-x-4">
                      {beneficio.icon}
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">{beneficio.titulo}</h3>
                        <p className="text-gray-600 text-sm">{beneficio.descricao}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Rodapé */}
            <div className="bg-gray-800 text-white rounded-lg p-6 mt-8 max-w-4xl mx-auto">
              <div className="text-center">
                <h3 className="text-lg font-bold mb-2">Concursos Municipais</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Sua plataforma completa para aprovação em concursos públicos
                </p>
                <div className="flex justify-center space-x-4 text-sm">
                  <button onClick={() => setCurrentPage("sobre")} className="text-gray-300 hover:text-white">Sobre</button>
                  <button onClick={() => setCurrentPage("contato")} className="text-gray-300 hover:text-white">Contato</button>
                  <button onClick={() => setCurrentPage("termos")} className="text-gray-300 hover:text-white">Termos</button>
                  <button onClick={() => setCurrentPage("privacidade")} className="text-gray-300 hover:text-white">Privacidade</button>
                </div>
                <p className="text-gray-400 text-xs mt-4">
                  © 2024 Concursos Municipais. Todos os direitos reservados.
                </p>
              </div>
            </div>
          </div>
        );

      case "questoes":
        return (
          <div className="space-y-6 pb-20 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold">📝 Questões</h1>
            
            {/* Filtros */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <button 
                onClick={() => setFilterExpanded(!filterExpanded)}
                className="w-full p-4 flex items-center justify-between hover:bg-gray-50"
              >
                <h3 className="font-semibold">Filtros</h3>
                {filterExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              {filterExpanded && (
                <div className="p-4 border-t border-gray-200 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Município</label>
                    <select 
                      value={filters.municipio}
                      onChange={(e) => setFilters({...filters, municipio: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                    >
                      <option value="">Todos os municípios</option>
                      {municipios.map(m => (
                        <option key={m.nome} value={m.nome}>{m.nome}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Disciplina</label>
                    <select 
                      value={filters.disciplina}
                      onChange={(e) => setFilters({...filters, disciplina: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                    >
                      <option value="">Todas as disciplinas</option>
                      <option value="Português">Português</option>
                      <option value="Matemática">Matemática</option>
                      <option value="Direito Constitucional">Direito Constitucional</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Assunto</label>
                    <select 
                      value={filters.assunto}
                      onChange={(e) => setFilters({...filters, assunto: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                    >
                      <option value="">Todos os assuntos</option>
                      <option value="Interpretação de Texto">Interpretação de Texto</option>
                      <option value="Regra de Três">Regra de Três</option>
                      <option value="Direitos Fundamentais">Direitos Fundamentais</option>
                    </select>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-end">
              <button 
                onClick={() => {
                  setCurrentQuestionIndex(0);
                  setSelectedAnswer(null);
                  setShowComment(false);
                  setEliminatedOptions([]);
                }}
                className="bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center"
              >
                <Filter className="w-4 h-4 mr-2" />
                Aplicar Filtro
              </button>
            </div>

            {/* Card da Questão */}
            {currentQuestion && (
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                    Questão #{currentQuestion.id}
                  </span>
                  <button 
                    onClick={() => {
                      const updatedQuestions = [...questions];
                      const questionIndex = updatedQuestions.findIndex(q => q.id === currentQuestion.id);
                      updatedQuestions[questionIndex].favorited = !updatedQuestions[questionIndex].favorited;
                    }}
                    className={`${currentQuestion.favorited ? 'text-red-500' : 'text-gray-400'} hover:text-red-500`}
                  >
                    <Heart className="w-5 h-5" fill={currentQuestion.favorited ? 'currentColor' : 'none'} />
                  </button>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Concurso:</strong> {currentQuestion.concurso} - {currentQuestion.ano}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    <strong>Município:</strong> {currentQuestion.municipio} | <strong>Disciplina:</strong> {currentQuestion.disciplina} | <strong>Assunto:</strong> {currentQuestion.assunto}
                  </p>
                </div>

                <div className="mb-6">
                  <p className="text-gray-800 leading-relaxed">
                    {currentQuestion.enunciado.includes("Leia o texto") ? "Leia o texto abaixo e responda à questão:" : currentQuestion.enunciado}
                  </p>
                  {currentQuestion.contexto && (
                    <div className="bg-gray-50 p-4 rounded-lg mt-3 mb-4">
                      <p className="text-sm text-gray-700 italic">
                        "{currentQuestion.contexto}"
                      </p>
                    </div>
                  )}
                  {!currentQuestion.enunciado.includes("Com base no texto") && (
                    <p className="text-gray-800 font-medium mt-4">
                      {currentQuestion.enunciado}
                    </p>
                  )}
                </div>

                <div className="space-y-3">
                  {currentQuestion.alternativas.map((alternativa, index) => (
                    <label 
                      key={index} 
                      className={`flex items-start space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded ${
                        eliminatedOptions.includes(index) ? 'opacity-50 line-through' : ''
                      }`}
                    >
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setEliminatedOptions(prev => 
                            prev.includes(index) 
                              ? prev.filter(i => i !== index)
                              : [...prev, index]
                          );
                        }}
                        className="text-gray-400 hover:text-red-500 mt-1"
                      >
                        <Scissors size={16} />
                      </button>
                      <input 
                        type="radio" 
                        name="questao" 
                        value={index}
                        checked={selectedAnswer === index}
                        onChange={() => setSelectedAnswer(index)}
                        className="mt-1" 
                      />
                      <span className="text-sm text-gray-700">
                        {String.fromCharCode(65 + index)}) {alternativa}
                      </span>
                    </label>
                  ))}
                </div>

                <div className="flex justify-between mt-6 pt-4 border-t border-gray-200">
                  <button 
                    onClick={() => setShowComment(!showComment)}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    {showComment ? "Ocultar Comentário" : "Ver Comentário"}
                  </button>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => {
                        if (currentQuestionIndex > 0) {
                          setCurrentQuestionIndex(currentQuestionIndex - 1);
                          setSelectedAnswer(null);
                          setShowComment(false);
                          setEliminatedOptions([]);
                        }
                      }}
                      disabled={currentQuestionIndex === 0}
                      className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors disabled:opacity-50"
                    >
                      Anterior
                    </button>
                    <button 
                      onClick={() => {
                        if (selectedAnswer !== null) {
                          // Process answer
                          setShowComment(true);
                        }
                      }}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                    >
                      Responder
                    </button>
                    <button 
                      onClick={() => {
                        if (currentQuestionIndex < filteredQuestions.length - 1) {
                          setCurrentQuestionIndex(currentQuestionIndex + 1);
                          setSelectedAnswer(null);
                          setShowComment(false);
                          setEliminatedOptions([]);
                        }
                      }}
                      disabled={currentQuestionIndex === filteredQuestions.length - 1}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
                    >
                      <SkipForward className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {showComment && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Comentário:</h4>
                    <p className="text-blue-700 text-sm">{currentQuestion.comentario}</p>
                    <p className="text-blue-600 text-sm mt-2 font-medium">
                      Gabarito: {String.fromCharCode(65 + currentQuestion.gabarito)}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        );

      case "favoritos":
        return (
          <div className="pb-20 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">⭐ Favoritos</h1>
            <div className="text-center py-12">
              <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Você ainda não tem questões favoritas</p>
              <p className="text-gray-400 text-sm mt-2">Favorite questões para acessá-las rapidamente</p>
            </div>
          </div>
        );

      case "entrar":
        return (
          <div className="pb-20 max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold">Entrar na sua conta</h1>
              <p className="text-gray-600 mt-2">Acesse sua conta para continuar estudando</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                setIsLoggedIn(true);
                setCurrentPage("dashboard");
                setActive("menu");
              }}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
                  <input 
                    type="password" 
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Entrar
                </button>
              </form>
              
              <div className="text-center mt-6">
                <p className="text-gray-600 text-sm">
                  Não tem uma conta? 
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium ml-1">
                    Cadastre-se
                  </a>
                </p>
              </div>
            </div>
          </div>
        );

      case "dashboard":
        return (
          <div className="pb-20 max-w-4xl mx-auto">
            {showBackButton && <BackButton onBack={handleBackClick} />}
            <h1 className="text-2xl font-bold mb-6">📊 Dashboard</h1>
            
            {/* Progress Card - Always visible */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-6">
              <h3 className="font-semibold mb-4">Progresso Anual 2024</h3>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                <div className="bg-blue-600 h-3 rounded-full" style={{width: `${(new Date().getMonth() + 1) / 12 * 100}%`}}></div>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Janeiro</span>
                <span className="font-medium">Mês atual: {new Date().toLocaleDateString('pt-BR', {month: 'long'})}</span>
                <span>Dezembro</span>
              </div>
              <p className="text-center mt-2 text-sm text-gray-500">
                Total de questões no ano: 2,847
              </p>
            </div>

            {/* Monthly Navigation Card */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm mb-6">
              <button 
                onClick={() => toggleCardExpansion('monthly')}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-50"
              >
                <h3 className="font-semibold">Estatísticas Mensais</h3>
                {expandedCards.monthly ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              {expandedCards.monthly && (
                <div className="px-6 pb-6 border-t border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <button 
                      onClick={() => setDashboardMonth(Math.max(0, dashboardMonth - 1))}
                      disabled={dashboardMonth === 0}
                      className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <h4 className="font-medium">
                      {new Date(2024, dashboardMonth).toLocaleDateString('pt-BR', {month: 'long', year: 'numeric'})}
                    </h4>
                    <button 
                      onClick={() => setDashboardMonth(Math.min(11, dashboardMonth + 1))}
                      disabled={dashboardMonth === 11}
                      className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-600">{247 + dashboardMonth * 50}</p>
                      <p className="text-sm text-gray-600">Questões</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">{78 + dashboardMonth}%</p>
                      <p className="text-sm text-gray-600">Acertos</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Daily Stats Card */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <button 
                onClick={() => toggleCardExpansion('daily')}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-50"
              >
                <h3 className="font-semibold">Estatísticas de Hoje</h3>
                {expandedCards.daily ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              {expandedCards.daily && (
                <div className="px-6 pb-6 border-t border-gray-200">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <p className="text-xl font-bold text-blue-600">23</p>
                      <p className="text-xs text-gray-600">Questões</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-green-600">18</p>
                      <p className="text-xs text-gray-600">Acertos</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-red-600">5</p>
                      <p className="text-xs text-gray-600">Erros</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-purple-600">2</p>
                      <p className="text-xs text-gray-600">Simulados</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      case "simulado-digital":
        return (
          <div className="pb-20 max-w-4xl mx-auto">
            {showBackButton && <BackButton onBack={handleBackClick} />}
            <h1 className="text-2xl font-bold mb-6">🎯 Simulado Digital</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { nome: "Simulado Geral - Nível Médio", questoes: 50, tempo: "3h" },
                { nome: "Simulado Geral - Nível Superior", questoes: 60, tempo: "4h" },
                { nome: "Simulado Português", questoes: 30, tempo: "2h" },
                { nome: "Simulado Matemática", questoes: 25, tempo: "2h" },
                { nome: "Simulado Direito Constitucional", questoes: 40, tempo: "3h" },
                { nome: "Simulado Informática", questoes: 20, tempo: "1h30" }
              ].map((simulado, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <div className="flex items-start space-x-4">
                    <Target className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-2">{simulado.nome}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                        <span>{simulado.questoes} questões</span>
                        <span>•</span>
                        <span>{simulado.tempo}</span>
                      </div>
                      <button 
                        onClick={() => handleStartSimulado(simulado.questoes)}
                        className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
                      >
                        Iniciar Simulado
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "simulado-active":
        return (
          <div className="pb-20 max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-6">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-bold">Simulado em Andamento</h1>
                <div className="text-lg font-mono bg-red-100 text-red-800 px-3 py-1 rounded">
                  {Math.floor(simuladoTime / 60)}:{(simuladoTime % 60).toString().padStart(2, '0')}
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                  style={{width: `${((currentSimuladoIndex + 1) / simuladoQuestions.length) * 100}%`}}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Questão {currentSimuladoIndex + 1} de {simuladoQuestions.length}
              </p>
            </div>

            {simuladoQuestions[currentSimuladoIndex] && (
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                {/* Question content similar to regular questions */}
                <div className="mb-4">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">
                    Questão #{simuladoQuestions[currentSimuladoIndex].id}
                  </span>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-800 leading-relaxed mb-4">
                    {simuladoQuestions[currentSimuladoIndex].enunciado}
                  </p>
                  {simuladoQuestions[currentSimuladoIndex].contexto && (
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <p className="text-sm text-gray-700 italic">
                        "{simuladoQuestions[currentSimuladoIndex].contexto}"
                      </p>
                    </div>
                  )}
                </div>

                <div className="space-y-3 mb-6">
                  {simuladoQuestions[currentSimuladoIndex].alternativas.map((alternativa, index) => (
                    <label key={index} className="flex items-start space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                      <input type="radio" name="simulado-questao" className="mt-1" />
                      <span className="text-sm text-gray-700">
                        {String.fromCharCode(65 + index)}) {alternativa}
                      </span>
                    </label>
                  ))}
                </div>

                <div className="flex justify-between">
                  <button 
                    onClick={() => {
                      setSimuladoActive(false);
                      setCurrentPage("simulado-digital");
                    }}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
                  >
                    Finalizar Simulado
                  </button>
                  <button 
                    onClick={() => {
                      if (currentSimuladoIndex < simuladoQuestions.length - 1) {
                        setCurrentSimuladoIndex(currentSimuladoIndex + 1);
                      } else {
                        setSimuladoActive(false);
                        setCurrentPage("simulado-digital");
                      }
                    }}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    {currentSimuladoIndex === simuladoQuestions.length - 1 ? "Finalizar" : "Próxima"}
                  </button>
                </div>
              </div>
            )}
          </div>
        );

      // Add other cases with back button
      case "ranking":
        return (
          <div className="pb-20 max-w-4xl mx-auto">
            {showBackButton && <BackButton onBack={handleBackClick} />}
            <h1 className="text-2xl font-bold mb-6">🏆 Ranking</h1>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-semibold">Top 10 Usuários</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {[1,2,3,4,5,6,7,8,9,10].map((pos) => (
                  <div key={pos} className="p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                        pos === 1 ? 'bg-yellow-500' : pos === 2 ? 'bg-gray-400' : pos === 3 ? 'bg-orange-500' : 'bg-blue-500'
                      }`}>
                        {pos}
                      </span>
                      <div>
                        <p className="font-medium">Usuário {pos}</p>
                        <p className="text-sm text-gray-600">{1000 - (pos * 50)} pontos</p>
                      </div>
                    </div>
                    <Trophy className="w-5 h-5 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "concursos-info":
        return (
          <div className="pb-20 max-w-4xl mx-auto">
            {showBackButton && <BackButton onBack={handleBackClick} />}
            <h1 className="text-2xl font-bold mb-6">📰 News Concursos</h1>
            <div className="space-y-6">
              {[
                {
                  titulo: "Prefeitura do Rio abre 500 vagas para diversos cargos",
                  data: "15 de Janeiro, 2024",
                  resumo: "Edital prevê salários de até R$ 8.000 para cargos de nível superior..."
                },
                {
                  titulo: "Concurso da Câmara Municipal de Niterói tem inscrições abertas",
                  data: "12 de Janeiro, 2024",
                  resumo: "São 20 vagas imediatas e formação de cadastro reserva..."
                },
                {
                  titulo: "INSS anuncia novo concurso com 1.000 vagas",
                  data: "10 de Janeiro, 2024",
                  resumo: "Edital deve ser publicado no primeiro semestre de 2024..."
                }
              ].map((noticia, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <div className="flex items-start space-x-4">
                    <Newspaper className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-2">{noticia.titulo}</h3>
                      <p className="text-sm text-gray-500 mb-2">{noticia.data}</p>
                      <p className="text-gray-600 text-sm mb-4">{noticia.resumo}</p>
                      <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                        Ler mais →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      // Add other existing cases with back button where needed...
      default:
        return (
          <div className="pb-20 max-w-4xl mx-auto">
            {showBackButton && <BackButton onBack={handleBackClick} />}
            <div className="text-center py-12">
              <p className="text-gray-500">Página em desenvolvimento</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <Header onLogoClick={handleLogoClick} />
      
      <div className="flex flex-1 pt-16">
        <DesktopMenu onNavigate={navigateToPage} />
        
        <div className="flex-1 md:ml-64 overflow-y-auto p-4">
          {menuOpen ? (
            <MobileSideMenu onNavigate={navigateToPage} />
          ) : (
            renderPage()
          )}
        </div>
      </div>

      <MobileBottomMenu 
        active={active}
        onNavigate={(page, activeTab) => {
          setCurrentPage(page);
          setActive(activeTab);
          setMenuOpen(false);
        }}
        onMenuToggle={handleMenuToggle}
        menuOpen={menuOpen}
      />
    </div>
  );
}