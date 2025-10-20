export interface Produto {
  codigo: string;
  nome: string;
  categoria: string;
  descricao: string;
  dimensoesExternas: string;
  dimensoesInternas: string;
  peso: string;
  capacidade: string;
  material: string;
  aplicacoes: string[];
  imagem: string;
  caracteristicas: string[];
}

export const produtos: Produto[] = [
  {
    codigo: "CN 1518",
    nome: "Caixa Industrial CN 1518",
    categoria: "Caixas CN",
    descricao: "Caixa plástica para uso industrial com possibilidade de uso com tampa e de colocação de porta-cartão plástico em duas faces laterais.",
    dimensoesExternas: "493,5 x 99 x 80 mm",
    dimensoesInternas: "122,5 x 72 x 71 mm (alt. int. livre sem tampa), 122,5 x 72 x 71 mm (alt. int. livre com tampa)",
    peso: "0,100 kg",
    capacidade: "0,6 L",
    material: "PP (Polipropileno)",
    aplicacoes: ["Indústria automotiva", "Indústria metalmecânica", "Indústria em geral"],
    imagem: "/produtos/002.webp",
    caracteristicas: [
      "Porta-cartão e tampa opcionais",
      "Não é oferecida com as alças abertas",
      "Possui espaço texturizado para colocação de etiqueta autoadesiva",
      "Face externa do fundo é lisa para facilitar o transporte em esteiras"
    ]
  },
  {
    codigo: "CN 2158",
    nome: "Caixa Industrial CN 2158",
    categoria: "Caixas CN",
    descricao: "Caixa plástica para uso industrial com possibilidade de uso com tampa e de colocação de porta-cartão plástico em duas faces laterais.",
    dimensoesExternas: "174 x 143 mm",
    dimensoesInternas: "172 x 122 x 70,5 mm (alt. int. livre sem tampa), 172 x 122 x 73,50 mm (alt. int. livre com tampa)",
    peso: "0,200 kg",
    capacidade: "1,5 L",
    material: "PP (Polipropileno)",
    aplicacoes: ["Indústria automotiva", "Indústria metalmecânica", "Indústria em geral"],
    imagem: "/produtos/002.webp",
    caracteristicas: [
      "Porta-cartão e tampa opcionais",
      "Não é oferecida com as alças abertas",
      "Possui espaço texturizado para colocação de etiqueta autoadesiva"
    ]
  },
  {
    codigo: "CN 321612",
    nome: "Caixa Industrial CN 321612",
    categoria: "Caixas CN",
    descricao: "Caixa plástica para uso industrial com possibilidade de uso com tampa.",
    dimensoesExternas: "320 x 162 x 120 mm",
    dimensoesInternas: "282 x 138 x 110,30 mm (alt. int. livre sem tampa), 282 x 138 x 108,50 mm (alt. int. livre com tampa)",
    peso: "0,390 kg",
    capacidade: "3,4 L",
    material: "PP (Polipropileno copolímero)",
    aplicacoes: ["Indústria automotiva", "Indústria metalmecânica", "Indústria em geral"],
    imagem: "/produtos/002.webp",
    caracteristicas: [
      "Possui espaço para colocação de cartão de identificação em duas faces",
      "Espaço texturizado para colocação de etiqueta autoadesiva",
      "Permite colocação de lacre quando utilizada com tampa (em dois lados da caixa)",
      "Face externa do fundo é totalmente lisa para facilitar o transporte em esteiras"
    ]
  },
  {
    codigo: "CN 4315",
    nome: "Caixa Industrial CN 4315",
    categoria: "Caixas CN",
    descricao: "Caixa plástica para uso industrial com possibilidade de uso com tampa.",
    dimensoesExternas: "400 x 300 x 158 mm",
    dimensoesInternas: "368 x 268 x 138 mm (alt. int. livre sem tampa), 368 x 268 x 135 mm (alt. int. livre com tampa)",
    peso: "1,025 kg",
    capacidade: "14 L",
    material: "PP (Polipropileno)",
    aplicacoes: ["Indústria automotiva", "Indústria metalmecânica", "Indústria em geral"],
    imagem: "/produtos/003.webp",
    caracteristicas: [
      "Porta-cartão e tampa opcionais",
      "Empilhamento compatível com a caixa CN 14"
    ]
  },
  {
    codigo: "CN 6408",
    nome: "Caixa Industrial CN 6408",
    categoria: "Caixas CN",
    descricao: "Caixa plástica para uso industrial com possibilidade de uso com tampa.",
    dimensoesExternas: "600 x 400 x 85 mm",
    dimensoesInternas: "565 x 365 x 65 mm (alt. int. livre sem tampa), 565 x 365 x 65,75 mm (alt. int. livre com tampa)",
    peso: "1,130 kg",
    capacidade: "13 L",
    material: "PP (Polipropileno)",
    aplicacoes: ["Indústria automotiva", "Indústria metalmecânica", "Indústria em geral"],
    imagem: "/produtos/003.webp",
    caracteristicas: [
      "Porta-cartão e tampa opcionais",
      "Possui espaço para colocação de cartão de identificação nas quatro faces",
      "Permite colocação de lacre quando utilizada com tampa (em três lados da caixa)",
      "Empilhamento compatível com as caixas CN 6435, CN 6425, CN 6415 e CN 4315"
    ]
  },
  {
    codigo: "CN 6415",
    nome: "Caixa Industrial CN 6415",
    categoria: "Caixas CN",
    descricao: "Caixa plástica para uso industrial com possibilidade de uso com tampa.",
    dimensoesExternas: "600 x 400 x 150 mm",
    dimensoesInternas: "565 x 365 x 138 mm (alt. int. livre sem tampa), 565 x 365 x 135,75 mm (alt. int. livre com tampa)",
    peso: "1,650 kg",
    capacidade: "28 L",
    material: "PP (Polipropileno)",
    aplicacoes: ["Indústria automotiva", "Indústria metalmecânica", "Indústria em geral"],
    imagem: "/produtos/003.webp",
    caracteristicas: [
      "Porta-cartão e tampa opcionais",
      "Empilhamento compatível com as caixas CN 6435, CN 6425, CN 6408 e CN 4315"
    ]
  },
  {
    codigo: "CN 6425",
    nome: "Caixa Industrial CN 6425",
    categoria: "Caixas CN",
    descricao: "Caixa plástica para uso industrial com tampa.",
    dimensoesExternas: "600 x 400 x 252 mm",
    dimensoesInternas: "565 x 365 x 230 mm (alt. int. livre sem tampa), 565 x 365 x 221 mm (alt. int. livre com tampa)",
    peso: "2,340 kg",
    capacidade: "47 L",
    material: "PP (Polipropileno)",
    aplicacoes: ["Indústria automotiva", "Indústria metalmecânica", "Indústria em geral"],
    imagem: "/produtos/004.webp",
    caracteristicas: [
      "Porta-cartão e tampa opcionais",
      "Possui espaço para colocação de cartão de identificação nas quatro faces",
      "Permite colocação de lacre quando utilizada com tampa (em três lados da caixa)",
      "Empilhamento compatível com as caixas CN 6435, CN 6415, CN 6408 e CN 4315"
    ]
  },
  {
    codigo: "CN 6430 A 4A",
    nome: "Caixa Hortifruti CN 6430 A 4A",
    categoria: "Caixas CN",
    descricao: "Caixa plástica para movimentação de diferentes sistemas de fluxos de materiais.",
    dimensoesExternas: "600 x 400 x 300 mm",
    dimensoesInternas: "553 x 379 x 276 mm (alt. int. livre)",
    peso: "2,235 kg",
    capacidade: "57 L",
    material: "PP (Polipropileno)",
    aplicacoes: ["Centros de distribuição e e-commerce", "Indústria em geral"],
    imagem: "/produtos/004.webp",
    caracteristicas: [
      "Permite uma redução de volume de 50% no empilhamento de retorno",
      "Conta com alças nas faces e pode ser oferecida com alças abertas também nas laterais"
    ]
  },
  {
    codigo: "CN 6430 F 4A",
    nome: "Caixa Hortifruti CN 6430 F 4A",
    categoria: "Caixas CN",
    descricao: "Caixa plástica para movimentação de diferentes sistemas de fluxos de materiais.",
    dimensoesExternas: "600 x 400 x 300 mm",
    dimensoesInternas: "553 x 379 x 276 mm (alt. int. livre)",
    peso: "2,320 kg",
    capacidade: "57 L",
    material: "PP (Polipropileno)",
    aplicacoes: ["Centros de distribuição e e-commerce", "Indústria em geral"],
    imagem: "/produtos/004.webp",
    caracteristicas: [
      "Permite uma redução de volume de 50% no empilhamento de retorno",
      "Conta com alças nas faces"
    ]
  },
  {
    codigo: "CN 6435",
    nome: "Caixa Industrial CN 6435",
    categoria: "Caixas CN",
    descricao: "Caixa para uso industrial com possibilidade de uso com tampa.",
    dimensoesExternas: "602 x 402 x 352 mm",
    dimensoesInternas: "565 x 365 x 340 mm (alt. int. livre sem tampa), 565 x 365 x 340 mm (alt. int. livre com tampa)",
    peso: "3,420 kg",
    capacidade: "67 L",
    material: "PP (Polipropileno)",
    aplicacoes: ["Indústria automotiva", "Indústria metal mecânica", "Indústria em geral"],
    imagem: "/produtos/005.webp",
    caracteristicas: [
      "Porta-cartão e tampa opcionais",
      "Empilhamento compatível com as caixas CN 6425, CN 6415, CN 6408 e CN 4315"
    ]
  },
  {
    codigo: "EURO 6415",
    nome: "Caixa Industrial EURO 6415",
    categoria: "Caixas EURO",
    descricao: "Caixa para uso industrial que racionaliza o manuseio, transporte e armazenagem dentro da cadeia logística.",
    dimensoesExternas: "594 x 396 x 156 mm",
    dimensoesInternas: "544 x 364 x 116,4 mm (alt. int. livre sem tampa), 544 x 364 x 122,4 mm (alt. int. livre com tampa)",
    peso: "1,970 kg",
    capacidade: "18 L / 20 kg",
    material: "PP (Polipropileno)",
    aplicacoes: ["Indústria automotiva", "Indústria metalmecânica", "Indústria em geral"],
    imagem: "/produtos/005.webp",
    caracteristicas: [
      "Porta-cartão e tampa opcionais",
      "Face interna do fundo é totalmente lisa para facilitar a carga e descarga automatizada do conteúdo",
      "Possibilita todos os movimentos dos diferentes sistemas de fluxo de materiais",
      "Permite colocação de lacre quando utilizada com tampa"
    ]
  },
  {
    codigo: "EURO 6421",
    nome: "Caixa Industrial EURO 6421",
    categoria: "Caixas EURO",
    descricao: "Caixa para uso industrial que racionaliza o manuseio, transporte e armazenagem dentro da cadeia logística.",
    dimensoesExternas: "594 x 396 x 213 mm",
    dimensoesInternas: "544 x 364 x 175,7 mm (alt. int. livre sem tampa), 544 x 364 x 181,7 mm (alt. int. livre com tampa)",
    peso: "2,230 kg",
    capacidade: "34,5 L / 20 kg",
    material: "PP (Polipropileno)",
    aplicacoes: ["Indústria automotiva", "Indústria metalmecânica", "Indústria em geral"],
    imagem: "/produtos/005.webp",
    caracteristicas: [
      "Porta-cartão e tampa opcionais",
      "Face interna do fundo é totalmente lisa para facilitar a carga e descarga automatizada do conteúdo",
      "Possibilita todos os movimentos dos diferentes sistemas de fluxo de materiais",
      "Permite colocação de lacre quando utilizada com tampa"
    ]
  },
  {
    codigo: "EURO 6432",
    nome: "Caixa Industrial EURO 6432",
    categoria: "Caixas EURO",
    descricao: "Caixa para uso industrial que racionaliza o manuseio, transporte e armazenagem dentro da cadeia logística.",
    dimensoesExternas: "594 x 396 x 328 mm",
    dimensoesInternas: "544 x 364 x 282,7 mm (alt. int. livre sem tampa), 544 x 364 x 288,7 mm (alt. int. livre com tampa)",
    peso: "3,370 kg",
    capacidade: "56 L / 20 kg",
    material: "PP (Polipropileno)",
    aplicacoes: ["Indústria automotiva", "Indústria metalmecânica", "Indústria em geral"],
    imagem: "/produtos/006.webp",
    caracteristicas: [
      "Porta-cartão e tampa opcionais",
      "Face interna do fundo é totalmente lisa para facilitar a carga e descarga automatizada do conteúdo",
      "Possibilita todos os movimentos dos diferentes sistemas de fluxo de materiais",
      "Permite colocação de lacre quando utilizada com tampa"
    ]
  },
  {
    codigo: "GALIA 1322",
    nome: "Caixa Industrial GALIA 1322",
    categoria: "Caixas GALIA",
    descricao: "Caixa plástica para uso industrial fornecida apenas na versão fechada.",
    dimensoesExternas: "970 x 272 x 192,7 mm",
    dimensoesInternas: "970 x 272 x 192,7 mm (alt. int. livre)",
    peso: "3,170 kg",
    capacidade: "48,5 L / 15 kg",
    material: "PP copo (Polipropileno)",
    aplicacoes: ["Indústria automotiva", "Indústria metalmecânica", "Indústria em geral"],
    imagem: "/produtos/006.webp",
    caracteristicas: [
      "Possui espaço para colocação de cartão de identificação em duas faces",
      "Permite colocação de lacre quando utilizada com tampa (em dois lados da caixa)",
      "Carga máxima: 15 kg/un. / 300 (para uma pilha) / 700 kg (quando paletizado)"
    ]
  },
  {
    codigo: "GALIA 3212",
    nome: "Caixa Industrial GALIA 3212",
    categoria: "Caixas GALIA",
    descricao: "Caixa plástica para uso industrial com possibilidade de utilização com tampa.",
    dimensoesExternas: "397 x 197 x 114 mm",
    dimensoesInternas: "263 x 163 x 90 mm (alt. int. livre sem tampa), 263 x 163 x 90 mm (alt. int. livre com tampa)",
    peso: "0,503 kg",
    capacidade: "4 L / 15 kg",
    material: "PE-AD (Polietileno Alta Densidade)",
    aplicacoes: ["Indústria automotiva", "Indústria metalmecânica", "Indústria em geral"],
    imagem: "/produtos/006.webp",
    caracteristicas: [
      "Tampa opcional",
      "Pode ser fornecido com porta-cartão plástico ou metálico",
      "Possui espaço para colocação de cartão de identificação em uma face",
      "Permite colocação de lacre quando utilizada com tampa",
      "Empilhamento compatível com as caixas GALIA 4312 e GALIA 4322"
    ]
  },
  {
    codigo: "GALIA 4312",
    nome: "Caixa Industrial GALIA 4312",
    categoria: "Caixas GALIA",
    descricao: "Caixa plástica para uso industrial com possibilidade de utilização com tampa.",
    dimensoesExternas: "396 x 297 x 114 mm",
    dimensoesInternas: "362 x 263 x 90 mm (alt. int. livre sem tampa), 362 x 263 x 90 mm (alt. int. livre com tampa)",
    peso: "0,872 kg",
    capacidade: "8 L / 15 kg",
    material: "PE-AD (Polietileno Alta Densidade)",
    aplicacoes: ["Indústria automotiva", "Indústria metalmecânica", "Indústria em geral"],
    imagem: "/produtos/007.webp",
    caracteristicas: [
      "Tampa opcional",
      "Pode ser fornecido com porta-cartão plástico ou metálico",
      "Empilhamento compatível com as caixas GALIA 3212, GALIA 4322, GALIA 6422 e GALIA 6432"
    ]
  },
  {
    codigo: "GALIA 4322",
    nome: "Caixa Industrial GALIA 4322",
    categoria: "Caixas GALIA",
    descricao: "Caixa plástica para uso industrial fornecida apenas na versão fechada.",
    dimensoesExternas: "396 x 297 x 214 mm",
    dimensoesInternas: "362 x 263 x 190 mm (alt. int. livre sem tampa), 362 x 263 x 190 mm (alt. int. livre com tampa)",
    peso: "1,382 kg",
    capacidade: "18 L / 15 kg",
    material: "PE-AD (Polietileno Alta Densidade)",
    aplicacoes: ["Indústria automotiva", "Indústria metalmecânica", "Indústria em geral"],
    imagem: "/produtos/007.webp",
    caracteristicas: [
      "Tampa opcional",
      "Pode ser fornecido com porta-cartão plástico ou metálico",
      "Permite colocação de lacre quando utilizada com tampa",
      "Empilhamento compatível com as caixas GALIA 3212, GALIA 4312, GALIA 6422 e GALIA 3212"
    ]
  },
  {
    codigo: "GALIA 6422",
    nome: "Caixa Industrial GALIA 6422",
    categoria: "Caixas GALIA",
    descricao: "Caixa plástica para uso industrial fornecida apenas na versão fechada.",
    dimensoesExternas: "594 x 396 x 214 mm",
    dimensoesInternas: "560 x 362 x 190 mm (alt. int. livre sem tampa), 560 x 362 x 190 mm (alt. int. livre com tampa)",
    peso: "2,322 kg",
    capacidade: "40 L / 15 kg",
    material: "PE-AD (Polietileno Alta Densidade)",
    aplicacoes: ["Indústria automotiva", "Indústria metalmecânica", "Indústria em geral"],
    imagem: "/produtos/007.webp",
    caracteristicas: [
      "Tampa opcional",
      "Pode ser fornecido com porta-cartão plástico ou metálico",
      "Permite colocação de lacre quando utilizada com tampa",
      "Empilhamento compatível com as caixas GALIA 6432, GALIA 4322, GALIA 4312 e GALIA 3212"
    ]
  },
  {
    codigo: "GALIA 6432",
    nome: "Caixa Industrial GALIA 6432",
    categoria: "Caixas GALIA",
    descricao: "Caixa plástica para uso industrial com possibilidade de utilização com tampa.",
    dimensoesExternas: "594 x 396 x 314 mm",
    dimensoesInternas: "560 x 362 x 292,7 mm (alt. int. livre sem tampa), 560 x 362 x 292,7 mm (alt. int. livre com tampa)",
    peso: "2,960 kg",
    capacidade: "59 L / 15 kg",
    material: "PE-AD (Polietileno Alta Densidade)",
    aplicacoes: ["Indústria automotiva", "Indústria metalmecânica", "Indústria em geral"],
    imagem: "/produtos/008.webp",
    caracteristicas: [
      "Tampa opcional",
      "Pode ser fornecido com porta-cartão plástico ou metálico",
      "Empilhamento compatível com as caixas GALIA 6422, GALIA 3212, GALIA 4312 e GALIA 4322"
    ]
  },
  {
    codigo: "KLT 3214",
    nome: "Caixa Industrial KLT 3214",
    categoria: "Caixas KLT",
    descricao: "Caixa para uso industrial que racionaliza o manuseio, transporte e armazenagem dentro da cadeia logística.",
    dimensoesExternas: "297 x 196 x 147,5 mm",
    dimensoesInternas: "271 x 136 x 129,5 mm (alt. int. livre sem tampa), 271 x 136 x 119,5 mm (alt. int. livre com tampa)",
    peso: "0,720 kg",
    capacidade: "4,6 L",
    material: "PP (Polipropileno)",
    aplicacoes: ["Indústria automotiva", "Indústria metalmecânica", "Indústria em geral"],
    imagem: "/produtos/008.webp",
    caracteristicas: [
      "Porta-cartão e tampa opcionais",
      "Possui espaço opcional para a colocação de cartão de identificação (padrão VDA 4902 - 210 x 75 mm)",
      "Espaço texturizado para colocação de etiqueta autoadesiva",
      "Permite colocação de lacre quando utilizada com tampa"
    ]
  },
  {
    codigo: "KLT 4314",
    nome: "Caixa Industrial KLT 4314",
    categoria: "Caixas KLT",
    descricao: "Caixa para uso industrial que racionaliza o manuseio, transporte e armazenagem dentro da cadeia logística.",
    dimensoesExternas: "396 x 297 x 147,50 mm",
    dimensoesInternas: "334 x 247 x 88 mm (alt. int. livre sem tampa), 334 x 247 x 88 mm (alt. int. livre com tampa)",
    peso: "1,630 kg",
    capacidade: "9 L",
    material: "PP (Polipropileno)",
    aplicacoes: ["Indústria automotiva", "Indústria metalmecânica", "Indústria em geral"],
    imagem: "/produtos/008.webp",
    caracteristicas: [
      "Porta-cartão e tampa opcionais",
      "Possui espaço para a colocação de cartão de identificação (padrão VDA 4902 - 210 x 75 mm)",
      "Espaço texturizado para colocação de etiqueta autoadesiva",
      "Permite colocação de lacre quando utilizada com tampa",
      "Permite empilhamento autotrável (cruzado 3x2) em pallet 1200x1000"
    ]
  }
];

