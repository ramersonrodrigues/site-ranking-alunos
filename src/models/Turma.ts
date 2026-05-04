import type { Aluno } from "./Aluno";
import type { Premio } from "./Premio";

export class Turma {
  nome: string;
  alunos: Aluno[];
  premios: Premio[];

  constructor(nome: string, alunos: Aluno[], premios: Premio[]) {
    this.nome = nome;
    this.alunos = alunos;
    this.premios = premios;
  }
}
