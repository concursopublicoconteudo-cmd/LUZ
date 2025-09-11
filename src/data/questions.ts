export interface Question {
  id: number;
  municipio: string;
  disciplina: string;
  assunto: string;
  concurso: string;
  ano: string;
  enunciado: string;
  contexto?: string;
  alternativas: string[];
  gabarito: number;
  comentario: string;
  favorited: boolean;
}

export const questions: Question[] = [
  {
    id: 1247,
    municipio: "Rio de Janeiro",
    disciplina: "Português",
    assunto: "Interpretação de Texto",
    concurso: "Prefeitura do Rio de Janeiro",
    ano: "2023",
    enunciado: "Com base no texto, é correto afirmar que:",
    contexto: "A educação é a arma mais poderosa que você pode usar para mudar o mundo. Ela é o grande motor do desenvolvimento pessoal e social.",
    alternativas: [
      "A educação tem papel secundário no desenvolvimento.",
      "O desenvolvimento pessoal independe da educação.",
      "A educação é fundamental para transformações sociais.",
      "O texto não menciona desenvolvimento social.",
      "A educação não influencia mudanças no mundo."
    ],
    gabarito: 2,
    comentario: "A alternativa C está correta pois o texto afirma que a educação é 'a arma mais poderosa para mudar o mundo' e 'o grande motor do desenvolvimento pessoal e social', evidenciando seu papel fundamental nas transformações sociais.",
    favorited: false
  },
  {
    id: 1248,
    municipio: "Niterói",
    disciplina: "Matemática",
    assunto: "Regra de Três",
    concurso: "Prefeitura de Niterói",
    ano: "2023",
    enunciado: "Se 3 funcionários fazem um trabalho em 12 dias, quantos dias 4 funcionários farão o mesmo trabalho?",
    alternativas: [
      "8 dias",
      "9 dias",
      "10 dias",
      "16 dias",
      "15 dias"
    ],
    gabarito: 1,
    comentario: "Trata-se de uma regra de três inversa. Se mais funcionários fazem o trabalho, menos dias são necessários. 3 funcionários → 12 dias; 4 funcionários → x dias. 3 × 12 = 4 × x → x = 36/4 = 9 dias.",
    favorited: false
  },
  {
    id: 1249,
    municipio: "Duque de Caxias",
    disciplina: "Direito Constitucional",
    assunto: "Direitos Fundamentais",
    concurso: "Prefeitura de Duque de Caxias",
    ano: "2022",
    enunciado: "Segundo a Constituição Federal, são direitos sociais:",
    alternativas: [
      "Apenas educação e saúde",
      "Educação, saúde, alimentação, trabalho, moradia, transporte, lazer, segurança, previdência social, proteção à maternidade e à infância, assistência aos desamparados",
      "Somente trabalho e previdência social",
      "Apenas saúde e segurança",
      "Educação, saúde e trabalho exclusivamente"
    ],
    gabarito: 1,
    comentario: "O artigo 6º da Constituição Federal lista todos os direitos sociais mencionados na alternativa B, sendo esta a resposta completa e correta.",
    favorited: false
  }
];

export const getQuestionsByMunicipio = (municipio: string): Question[] => {
  return questions.filter(q => q.municipio.toLowerCase().includes(municipio.toLowerCase()));
};

export const getFilteredQuestions = (filters: {
  municipio?: string;
  disciplina?: string;
  assunto?: string;
}): Question[] => {
  return questions.filter(q => {
    if (filters.municipio && !q.municipio.toLowerCase().includes(filters.municipio.toLowerCase())) {
      return false;
    }
    if (filters.disciplina && !q.disciplina.toLowerCase().includes(filters.disciplina.toLowerCase())) {
      return false;
    }
    if (filters.assunto && !q.assunto.toLowerCase().includes(filters.assunto.toLowerCase())) {
      return false;
    }
    return true;
  });
};