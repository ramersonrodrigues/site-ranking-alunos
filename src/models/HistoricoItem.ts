export class HistoricoItem {
  tipo: "ganho" | "uso";
  valor: number;
  descricao: string;
  data: string;
  disciplina: string;

  constructor(
    tipo: "ganho" | "uso",
    valor: number,
    descricao: string,
    data: string,
    disciplina: string
  ) {
    this.tipo = tipo;
    this.valor = valor;
    this.descricao = descricao;
    this.data = data;
    this.disciplina = disciplina;
  }
}
