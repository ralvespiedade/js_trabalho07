
// Objeto Material

var carro = {
  // Atributos
  modelo: "onix",
  ano: 2022,
  cor: "Chevrolet",
  // Metodos
  aceletar() {
    console.log("O carro acelerou");
  },
  frear() {
    console.log("O carro freou");
  },
  buzinar() {
    console.log("O carro buzinou");
  }
}

var geladeira = {
  //Atributos
  fabricante: "Brastemp",
  modelo: "Inverter Plus",
  cor: "Cinza",
  // Metodos
  ligar() {
    return "Geladeia Ligada";
  },
  desligar() {
    return "Geladeira Desligada";
  },
  refrigeracaoRapida() {
    return "Refrigeração Rápida Ativada por 5 minutos";
  },  
}

// Objeto Abstrato

var poderMagico = {
  // Atributos
  potencia: "alta",
  duracao: "5 segundos",
  tipo: "Gelo Glacial",
  // Metodos
  ativar() {
    return `${this.tipo} ativado por ${this.duracao}`;
  },
  desativar() {
    return `${this.tipo} desativado`;
  },
  consentracao() {
    return 'Poder mágico já pode ser utilizado novamente.'
  }
}

var tarefa = {
  // Atributos
  descricaoTarefa: "Tomar remédio",
  dataTarefa: "17/11/2023",
  status: "em andamento",
  //Metodos
  marcarConcluida(tarefa) {
    return `${tarefa} foi conclida.`;
  },
  adiarTarefa(tarefa) {
    return `${tarefa} foi adiada.`;
  },
  editarTarefa(tarefa, novaTarefa, dataAlteracao)  {
    this.descricaoTarefa = novaTarefa
    this.dataTarefa = dataAlteracao
    this.status = 'em andamento'
    return `${tarefa} foi editada'.`;
  },
}