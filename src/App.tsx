import { useState } from "react";
import {
  Home,
  HelpCircle,
  Heart,
  LogIn,
  Menu,
  User,
  ChevronRight,
  BarChart3,
  Trophy,
  Scale,
  BookOpen,
  Building,
  FileText,
  Target,
  Info,
  MapPin,
  Filter,
  Star,
  Check,
  Users,
  Clock,
  Award,
  Zap,
  ChevronDown,
  ChevronUp,
  Download,
  Calendar,
  Phone,
  Mail,
  Shield,
  FileCheck,
  Newspaper,
  Bell,
} from "lucide-react";

export default function App() {
  const [active, setActive] = useState("home");
  const [currentPage, setCurrentPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [openItems, setOpenItems] = useState({});
  const [filterExpanded, setFilterExpanded] = useState(false);

  const toggleItem = (itemId) => {
    setOpenItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const navigateToPage = (page) => {
    setCurrentPage(page);
    setMenuOpen(false);
    setActive("menu");
  };

  const menuItems = [
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
        { label: "Informativo", page: "concursos-info" }
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

  const municipios = [
    { nome: "Rio de Janeiro", questoes: 1250 },
    { nome: "Niterói", questoes: 890 },
    { nome: "Duque de Caxias", questoes: 650 },
    { nome: "Nova Iguaçu", questoes: 540 },
    { nome: "Belford Roxo", questoes: 420 },
    { nome: "São Gonçalo", questoes: 380 },
    { nome: "Campos dos Goytacazes", questoes: 320 },
    { nome: "Petrópolis", questoes: 280 },
    { nome: "Volta Redonda", questoes: 240 },
    { nome: "Magé", questoes: 180 },
  ];

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

  const leis = [
    { nome: "Lei 8.112/90", descricao: "Lei dos Servidores Federais" },
    { nome: "Lei 9.394/96", descricao: "Lei de Diretrizes e Bases da Educação" },
    { nome: "Lei 8.080/90", descricao: "Lei do Sistema Único de Saúde" },
    { nome: "Lei 8.069/90", descricao: "Estatuto da Criança e do Adolescente" },
    { nome: "Lei 10.741/03", descricao: "Estatuto do Idoso" },
    { nome: "Lei 11.340/06", descricao: "Lei Maria da Penha" },
    { nome: "Lei 12.527/11", descricao: "Lei de Acesso à Informação" },
    { nome: "Lei 13.146/15", descricao: "Lei Brasileira de Inclusão" },
    { nome: "Lei 8.429/92", descricao: "Lei de Improbidade Administrativa" },
    { nome: "Lei 9.784/99", descricao: "Lei do Processo Administrativo Federal" }
  ];

  const apostilas = [
    { nome: "Português", descricao: "Gramática e Interpretação de Texto" },
    { nome: "Matemática", descricao: "Matemática Básica e Raciocínio Lógico" },
    { nome: "Direito Constitucional", descricao: "Constituição Federal Comentada" },
    { nome: "Direito Administrativo", descricao: "Princípios e Atos Administrativos" },
    { nome: "Informática", descricao: "Windows, Word, Excel e Internet" },
    { nome: "Atualidades", descricao: "Conhecimentos Gerais e Atualidades" },
    { nome: "Legislação Municipal", descricao: "Leis Orgânicas dos Municípios" },
    { nome: "Saúde Pública", descricao: "SUS e Políticas de Saúde" },
    { nome: "Educação", descricao: "LDB e Políticas Educacionais" },
    { nome: "Contabilidade Pública", descricao: "Orçamento e Finanças Públicas" }
  ];

  // Conteúdos de cada página
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <div className="space-y-8 pb-20">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg overflow-hidden">
              <div className="flex flex-col md:flex-row items-center p-6">
                <div className="w-full md:w-1/2 mb-4 md:mb-0 md:order-2">
                  <img 
                    src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg" 
                    alt="Pessoa estudando para concurso" 
                    className="w-full h-48 md:h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="w-full md:w-1/2 text-white space-y-4 md:order-1 md:pr-6">
                  <h1 className="text-2xl md:text-3xl font-bold">
                    Sua Aprovação Começa Aqui!
                  </h1>
                  <p className="text-blue-100 text-sm md:text-base">
                    Prepare-se para concursos públicos com milhares de questões atualizadas e conteúdo de qualidade.
                  </p>
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Começar Agora
                  </button>
                </div>
              </div>
            </div>

            {/* Municípios do RJ */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">
                QUESTÕES POR<br />MUNICÍPIO - RJ
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {municipios.map((municipio, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                    <h3 className="font-semibold text-xs mb-1">{municipio.nome}</h3>
                    <p className="text-gray-600 text-xs mb-3">{municipio.questoes} questões</p>
                    <button className="w-full bg-blue-600 text-white py-2 px-3 rounded text-xs font-medium hover:bg-blue-700 transition-colors">
                      Acessar
                    </button>
                  </div>
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
            
            {/* Filtros Expansíveis */}
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
                    <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm">
                      <option>Selecione um município</option>
                      <option>Rio de Janeiro</option>
                      <option>Niterói</option>
                      <option>Duque de Caxias</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Disciplina</label>
                    <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm">
                      <option>Selecione uma disciplina</option>
                      <option>Português</option>
                      <option>Matemática</option>
                      <option>Direito Constitucional</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Assunto</label>
                    <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm">
                      <option>Selecione um assunto</option>
                      <option>Interpretação de Texto</option>
                      <option>Regra de Três</option>
                      <option>Direitos Fundamentais</option>
                    </select>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center">
                    <Filter className="w-4 h-4 mr-2" />
                    Aplicar Filtro
                  </button>
                </div>
              )}
            </div>

            {/* Card da Questão */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                  Questão #1247
                </span>
                <button className="text-gray-400 hover:text-red-500">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Concurso:</strong> Prefeitura do Rio de Janeiro - 2023
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Disciplina:</strong> Português | <strong>Assunto:</strong> Interpretação de Texto
                </p>
              </div>

              <div className="mb-6">
                <p className="text-gray-800 leading-relaxed">
                  Leia o texto abaixo e responda à questão:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mt-3 mb-4">
                  <p className="text-sm text-gray-700 italic">
                    "A educação é a arma mais poderosa que você pode usar para mudar o mundo. 
                    Ela é o grande motor do desenvolvimento pessoal e social."
                  </p>
                </div>
                <p className="text-gray-800 font-medium">
                  Com base no texto, é correto afirmar que:
                </p>
              </div>

              <div className="space-y-3">
                {['A) A educação tem papel secundário no desenvolvimento.', 
                  'B) O desenvolvimento pessoal independe da educação.', 
                  'C) A educação é fundamental para transformações sociais.',
                  'D) O texto não menciona desenvolvimento social.',
                  'E) A educação não influencia mudanças no mundo.'].map((alternativa, index) => (
                  <label key={index} className="flex items-start space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                    <input type="radio" name="questao" className="mt-1" />
                    <span className="text-sm text-gray-700">{alternativa}</span>
                  </label>
                ))}
              </div>

              <div className="flex justify-between mt-6 pt-4 border-t border-gray-200">
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  Ver Comentário
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                  Responder
                </button>
              </div>
            </div>
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
              <LogIn className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h1 className="text-2xl font-bold">Entrar na sua conta</h1>
              <p className="text-gray-600 mt-2">Acesse sua conta para continuar estudando</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
                  <input 
                    type="password" 
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    placeholder="••••••••"
                  />
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
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
            <h1 className="text-2xl font-bold mb-6">📊 Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Questões Respondidas</h3>
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-3xl font-bold text-blue-600">1,247</p>
                <p className="text-sm text-gray-600">Este mês</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Taxa de Acerto</h3>
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-3xl font-bold text-green-600">78%</p>
                <p className="text-sm text-gray-600">Média geral</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Simulados</h3>
                  <FileCheck className="w-6 h-6 text-purple-600" />
                </div>
                <p className="text-3xl font-bold text-purple-600">23</p>
                <p className="text-sm text-gray-600">Realizados</p>
              </div>
            </div>
          </div>
        );

      case "ranking":
        return (
          <div className="pb-20 max-w-4xl mx-auto">
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

      case "leis-concurso":
        return (
          <div className="pb-20 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">⚖️ Leis de Concurso Público</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {leis.map((lei, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <Scale className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">{lei.nome}</h3>
                      <p className="text-gray-600 text-sm mb-4">{lei.descricao}</p>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                        Estudar Lei
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "apostilas":
        return (
          <div className="pb-20 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">📚 Apostilas para Concurso</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {apostilas.map((apostila, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <BookOpen className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">{apostila.nome}</h3>
                      <p className="text-gray-600 text-sm mb-4">{apostila.descricao}</p>
                      <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                        Baixar PDF
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "concursos-info":
        return (
          <div className="pb-20 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">📰 Informativo de Concursos</h1>
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

      case "baixar-provas":
        return (
          <div className="pb-20 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">📄 Baixar Provas</h1>
            <div className="space-y-4">
              {[
                { concurso: "Prefeitura do Rio de Janeiro", ano: "2023", cargo: "Analista Administrativo" },
                { concurso: "Câmara Municipal de Niterói", ano: "2023", cargo: "Técnico Legislativo" },
                { concurso: "Prefeitura de Duque de Caxias", ano: "2022", cargo: "Professor" },
                { concurso: "INSS", ano: "2022", cargo: "Técnico do Seguro Social" },
                { concurso: "Prefeitura de Nova Iguaçu", ano: "2022", cargo: "Fiscal de Tributos" }
              ].map((prova, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start space-x-4">
                      <FileText className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-800">{prova.concurso}</h3>
                        <p className="text-sm text-gray-600">{prova.cargo} - {prova.ano}</p>
                      </div>
                    </div>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors flex items-center">
                      <Download className="w-4 h-4 mr-2" />
                      Baixar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "simulado-digital":
        return (
          <div className="pb-20 max-w-4xl mx-auto">
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
                      <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
                        Iniciar Simulado
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "novidades":
        return (
          <div className="pb-20 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">🔔 Novidades</h1>
            <div className="space-y-6">
              {[
                {
                  tipo: "Atualização",
                  titulo: "Nova funcionalidade: Simulados cronometrados",
                  data: "20 de Janeiro, 2024",
                  conteudo: "Agora você pode fazer simulados com tempo real de prova para uma experiência mais realista."
                },
                {
                  tipo: "Comunicado",
                  titulo: "Manutenção programada do sistema",
                  data: "18 de Janeiro, 2024",
                  conteudo: "O sistema ficará indisponível no dia 25/01 das 2h às 6h para melhorias na infraestrutura."
                },
                {
                  tipo: "Novidade",
                  titulo: "Adicionadas 500 novas questões de Português",
                  data: "15 de Janeiro, 2024",
                  conteudo: "Questões atualizadas dos últimos concursos municipais do Rio de Janeiro."
                },
                {
                  tipo: "Informativo",
                  titulo: "Dicas de estudo para concursos municipais",
                  data: "12 de Janeiro, 2024",
                  conteudo: "Confira nossas dicas exclusivas para otimizar seus estudos e aumentar suas chances de aprovação."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <div className="flex items-start space-x-4">
                    <Bell className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          item.tipo === 'Atualização' ? 'bg-blue-100 text-blue-800' :
                          item.tipo === 'Comunicado' ? 'bg-red-100 text-red-800' :
                          item.tipo === 'Novidade' ? 'bg-green-100 text-green-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {item.tipo}
                        </span>
                        <span className="text-sm text-gray-500">{item.data}</span>
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-2">{item.titulo}</h3>
                      <p className="text-gray-600 text-sm">{item.conteudo}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "sobre":
        return (
          <div className="pb-20 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">ℹ️ Sobre Nós</h1>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Concursos Municipais</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Somos uma plataforma especializada em preparação para concursos públicos municipais, 
                  oferecendo conteúdo de qualidade e ferramentas eficazes para sua aprovação.
                </p>
                <p>
                  Nossa missão é democratizar o acesso à educação de qualidade para concursos públicos, 
                  proporcionando aos candidatos as melhores condições de estudo e preparação.
                </p>
                <h3 className="font-semibold text-lg mt-6 mb-2">Nossos Valores</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Excelência no conteúdo educacional</li>
                  <li>Compromisso com a aprovação dos alunos</li>
                  <li>Inovação constante em metodologias de ensino</li>
                  <li>Transparência e ética em todas as relações</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case "contato":
        return (
          <div className="pb-20 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">📞 Contato</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Entre em Contato</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span>(21) 3333-4444</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span>contato@concursosmunicipais.com.br</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                    <span>Rua das Flores, 123<br />Centro - Rio de Janeiro/RJ<br />CEP: 20000-000</span>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Envie uma Mensagem</h2>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Seu nome"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  />
                  <input 
                    type="email" 
                    placeholder="Seu email"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  />
                  <textarea 
                    placeholder="Sua mensagem"
                    rows={4}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  ></textarea>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        );

      case "termos":
        return (
          <div className="pb-20 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">📋 Termos de Uso</h1>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="space-y-6 text-gray-700">
                <section>
                  <h2 className="text-lg font-semibold mb-3">1. Aceitação dos Termos</h2>
                  <p>
                    Ao acessar e usar a plataforma Concursos Municipais, você concorda em cumprir 
                    e estar vinculado aos seguintes termos e condições de uso.
                  </p>
                </section>
                <section>
                  <h2 className="text-lg font-semibold mb-3">2. Uso da Plataforma</h2>
                  <p>
                    A plataforma destina-se exclusivamente para fins educacionais e de preparação 
                    para concursos públicos. É proibido o uso para fins comerciais não autorizados.
                  </p>
                </section>
                <section>
                  <h2 className="text-lg font-semibold mb-3">3. Responsabilidades do Usuário</h2>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Manter a confidencialidade de suas credenciais de acesso</li>
                    <li>Não compartilhar conteúdo protegido por direitos autorais</li>
                    <li>Usar a plataforma de forma ética e respeitosa</li>
                  </ul>
                </section>
                <section>
                  <h2 className="text-lg font-semibold mb-3">4. Propriedade Intelectual</h2>
                  <p>
                    Todo o conteúdo disponibilizado na plataforma é protegido por direitos autorais 
                    e não pode ser reproduzido sem autorização expressa.
                  </p>
                </section>
              </div>
            </div>
          </div>
        );

      case "privacidade":
        return (
          <div className="pb-20 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">🔒 Política de Privacidade</h1>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="space-y-6 text-gray-700">
                <section>
                  <h2 className="text-lg font-semibold mb-3">Coleta de Informações</h2>
                  <p>
                    Coletamos informações que você nos fornece diretamente, como nome, email e 
                    dados de progresso nos estudos para melhorar sua experiência na plataforma.
                  </p>
                </section>
                <section>
                  <h2 className="text-lg font-semibold mb-3">Uso das Informações</h2>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Personalizar sua experiência de aprendizado</li>
                    <li>Enviar atualizações sobre novos conteúdos</li>
                    <li>Melhorar nossos serviços e funcionalidades</li>
                    <li>Fornecer suporte técnico quando necessário</li>
                  </ul>
                </section>
                <section>
                  <h2 className="text-lg font-semibold mb-3">Proteção de Dados</h2>
                  <p>
                    Implementamos medidas de segurança adequadas para proteger suas informações 
                    pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
                  </p>
                </section>
                <section>
                  <h2 className="text-lg font-semibold mb-3">Seus Direitos</h2>
                  <p>
                    Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. 
                    Entre em contato conosco para exercer esses direitos.
                  </p>
                </section>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Barra Superior Fixa */}
      <div className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50 px-4 py-3 shadow-sm">
        <div className="flex items-center justify-center space-x-2">
          <Building className="w-6 h-6 text-blue-600" />
          <h1 className="text-lg font-bold text-gray-800">CONCURSOS MUNICIPAIS</h1>
        </div>
      </div>

      {/* Conteúdo principal com padding-top para compensar a barra fixa */}
      <div className="flex-1 overflow-y-auto pt-16 p-4">
        {menuOpen ? (
          <div className="space-y-3">
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

                {/* Submenus */}
                {openItems[item.id] && item.subItems && (
                  <div className="ml-10 mt-2 space-y-2 text-sm text-gray-600">
                    {item.subItems.map((subItem, index) => (
                      <button
                        key={index}
                        onClick={() => navigateToPage(subItem.page)}
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
        ) : (
          renderPage()
        )}
      </div>

      {/* Menu inferior fixo */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-around py-2 shadow-md">
        <button
          className={`flex flex-col items-center ${
            active === "home" && !menuOpen ? "text-blue-600" : "text-gray-500"
          }`}
          onClick={() => {
            setActive("home");
            setCurrentPage("home");
            setMenuOpen(false);
          }}
        >
          <Home size={22} />
          <span className="text-xs">Início</span>
        </button>

        <button
          className={`flex flex-col items-center ${
            active === "questoes" && !menuOpen ? "text-blue-600" : "text-gray-500"
          }`}
          onClick={() => {
            setActive("questoes");
            setCurrentPage("questoes");
            setMenuOpen(false);
          }}
        >
          <HelpCircle size={22} />
          <span className="text-xs">Questões</span>
        </button>

        <button
          className={`flex flex-col items-center ${
            active === "favoritos" && !menuOpen ? "text-blue-600" : "text-gray-500"
          }`}
          onClick={() => {
            setActive("favoritos");
            setCurrentPage("favoritos");
            setMenuOpen(false);
          }}
        >
          <Heart size={22} />
          <span className="text-xs">Favoritos</span>
        </button>

        <button
          className={`flex flex-col items-center ${
            active === "entrar" && !menuOpen ? "text-blue-600" : "text-gray-500"
          }`}
          onClick={() => {
            setActive("entrar");
            setCurrentPage("entrar");
            setMenuOpen(false);
          }}
        >
          <LogIn size={22} />
          <span className="text-xs">Entrar</span>
        </button>

        <button
          className={`flex flex-col items-center ${
            menuOpen ? "text-blue-600" : "text-gray-500"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={22} />
          <span className="text-xs">Menu</span>
        </button>
      </div>
    </div>
  );
}