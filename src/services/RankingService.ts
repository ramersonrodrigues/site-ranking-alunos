import type { Aluno } from "../models/Aluno";

export class RankingService {
  static ordenarPorPontuacao(alunos: Aluno[]): Aluno[] {
    return [...alunos].sort((a, b) => b.total - a.total);
  }

  static getTop3(alunos: Aluno[]): Aluno[] {
    return RankingService.ordenarPorPontuacao(alunos).slice(0, 3);
  }
}
