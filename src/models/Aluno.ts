import { HistoricoItem } from "./HistoricoItem";

export class Aluno {
  nome: string;
  historico: HistoricoItem[];

  constructor(nome: string, historico: HistoricoItem[]) {
    this.nome = nome;
    this.historico = historico;
  }

  get total(): number {
    return this.historico
      .filter((item) => item.tipo === "ganho")
      .reduce((soma, item) => soma + item.valor, 0);
  }

  get usados(): number {
    return this.historico
      .filter((item) => item.tipo === "uso")
      .reduce((soma, item) => soma + item.valor, 0);
  }

  getDisponiveis(): number {
    return this.total - this.usados;
  }

  adicionarGanho(
    valor: number,
    descricao: string,
    data: string,
    disciplina: string
  ): void {
    this.historico.push(
      new HistoricoItem("ganho", valor, descricao, data, disciplina)
    );
  }

  adicionarUso(
    valor: number,
    descricao: string,
    data: string,
    disciplina: string
  ): void {
    this.historico.push(
      new HistoricoItem("uso", valor, descricao, data, disciplina)
    );
  }
}
