import { Aluno } from "../models/Aluno";
import { HistoricoItem } from "../models/HistoricoItem";
import { Premio } from "../models/Premio";
import { Turma } from "../models/Turma";

const premiosPadrao: Premio[] = [
  new Premio("Caixa de chocolate", 10),
  new Premio("Barra de chocolate", 5),
  new Premio("Livro", 15),
];

const turmaA = new Turma(
  "João Silva Filho - 3º Ano | Sistemas",
  [
    new Aluno("Lucas Silva", [
      new HistoricoItem("ganho", 15, "Participação em aula", "05/03/2025", "Matemática"),
      new HistoricoItem("ganho", 10, "Nota acima de 9", "12/03/2025", "Português"),
      new HistoricoItem("ganho", 20, "Projeto em grupo", "20/03/2025", "História"),
      new HistoricoItem("uso", 10, "Barra de chocolate x2", "25/03/2025", "Premiação"),
    ]),
    new Aluno("Ana Beatriz", [
      new HistoricoItem("ganho", 20, "Melhor nota da turma", "02/03/2025", "Matemática"),
      new HistoricoItem("ganho", 15, "Apresentação oral", "10/03/2025", "Português"),
      new HistoricoItem("ganho", 25, "Trabalho extra", "18/03/2025", "História"),
      new HistoricoItem("uso", 15, "Livro", "22/03/2025", "Premiação"),
    ]),
    new Aluno("Pedro Henrique", [
      new HistoricoItem("ganho", 10, "Participação em aula", "03/03/2025", "Matemática"),
      new HistoricoItem("ganho", 15, "Redação destaque", "14/03/2025", "Português"),
      new HistoricoItem("ganho", 10, "Quiz de história", "21/03/2025", "História"),
      new HistoricoItem("uso", 5, "Barra de chocolate", "28/03/2025", "Premiação"),
    ]),
    new Aluno("Maria Clara", [
      new HistoricoItem("ganho", 20, "Olimpíada de matemática", "01/03/2025", "Matemática"),
      new HistoricoItem("ganho", 10, "Leitura extra", "08/03/2025", "Português"),
      new HistoricoItem("ganho", 20, "Seminário", "15/03/2025", "História"),
      new HistoricoItem("uso", 10, "Caixa de chocolate", "19/03/2025", "Premiação"),
      new HistoricoItem("uso", 10, "Caixa de chocolate", "26/03/2025", "Premiação"),
    ]),
    new Aluno("João Gabriel", [
      new HistoricoItem("ganho", 10, "Dever de casa completo", "04/03/2025", "Matemática"),
      new HistoricoItem("ganho", 5, "Participação em aula", "11/03/2025", "Português"),
      new HistoricoItem("ganho", 10, "Trabalho em dupla", "19/03/2025", "História"),
    ]),
  ],
  premiosPadrao
);

const turmaB = new Turma(
  "Raquel Magalhães - 2º Ano | Sistemas",
  [
    new Aluno("Isabela Santos", [
      new HistoricoItem("ganho", 20, "Prova com nota máxima", "06/03/2025", "Matemática"),
      new HistoricoItem("ganho", 15, "Concurso de redação", "13/03/2025", "Português"),
      new HistoricoItem("ganho", 20, "Feira de ciências", "20/03/2025", "História"),
      new HistoricoItem("uso", 10, "Caixa de chocolate", "27/03/2025", "Premiação"),
    ]),
    new Aluno("Rafael Oliveira", [
      new HistoricoItem("ganho", 15, "Exercícios extras", "05/03/2025", "Matemática"),
      new HistoricoItem("ganho", 10, "Apresentação de livro", "12/03/2025", "Português"),
      new HistoricoItem("ganho", 15, "Pesquisa histórica", "19/03/2025", "História"),
      new HistoricoItem("uso", 5, "Barra de chocolate", "23/03/2025", "Premiação"),
      new HistoricoItem("uso", 10, "Caixa de chocolate", "28/03/2025", "Premiação"),
    ]),
    new Aluno("Camila Ferreira", [
      new HistoricoItem("ganho", 25, "Olimpíada de matemática - Ouro", "01/03/2025", "Matemática"),
      new HistoricoItem("ganho", 20, "Melhor redação do mês", "10/03/2025", "Português"),
      new HistoricoItem("ganho", 25, "Projeto interdisciplinar", "17/03/2025", "História"),
      new HistoricoItem("uso", 15, "Livro", "21/03/2025", "Premiação"),
      new HistoricoItem("uso", 10, "Caixa de chocolate", "25/03/2025", "Premiação"),
    ]),
    new Aluno("Thiago Costa", [
      new HistoricoItem("ganho", 10, "Participação ativa", "07/03/2025", "Matemática"),
      new HistoricoItem("ganho", 10, "Leitura complementar", "14/03/2025", "Português"),
      new HistoricoItem("ganho", 10, "Documentário apresentado", "22/03/2025", "História"),
      new HistoricoItem("uso", 5, "Barra de chocolate", "29/03/2025", "Premiação"),
    ]),
  ],
  premiosPadrao
);

export const turmas: Turma[] = [turmaA, turmaB];
