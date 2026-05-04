import { Aluno } from "../models/Aluno";
import { HistoricoItem } from "../models/HistoricoItem";
import { Premio } from "../models/Premio";
import { Turma } from "../models/Turma";

const premiosPadrao: Premio[] = [
  new Premio("Caixa de chocolate", 100),
  new Premio("Barra de chocolate", 150),
  new Premio("Livro", 200),
  new Premio("Pizza", 250),
];

const turmaA = new Turma(
  "João Silva Filho - 3º Ano | Sistemas",
  [
    // new Aluno("Lucas Silva", [
    //   new HistoricoItem("ganho", 15, "Participação em aula", "05/03/2025", "Matemática"),
    //   new HistoricoItem("ganho", 10, "Nota acima de 9", "12/03/2025", "Português"),
    //   new HistoricoItem("ganho", 20, "Projeto em grupo", "20/03/2025", "História"),
    //   new HistoricoItem("uso", 10, "Barra de chocolate x2", "25/03/2025", "Premiação"),
    //   new HistoricoItem("uso", 10, "Nota", "25/03/2025", "Matemática"),
    // ]),
    new Aluno("Sarah", [
      
    ]),
    
    new Aluno("Iasmin", [
      
    ]),
    new Aluno("Vitor", [
      
    ]),
    new Aluno("Caio", [
      
    ]),
    new Aluno("Alex", [
      
    ]),
      new Aluno("Hanna", [
      
    ]),
      new Aluno("Karlos", [
      
    ]),
      new Aluno("Arthur", [
      
    ]),
       new Aluno("Flavia", [
      
    ]),
      new Aluno("Ana Carolina", [
      
    ]),
    new Aluno("Ana Karoliny", [
      
    ]),
    new Aluno("André", [
      
    ]),

  ],
  premiosPadrao
);

const turmaB = new Turma(
  "Raquel Magalhães - 2º Ano | Sistemas",
  [


  ],
  premiosPadrao
);

const turmaC = new Turma(
  "Raquel Magalhães - 3º Ano | IA",
  [


  ],
  premiosPadrao
);

export const turmas: Turma[] = [turmaA, turmaB, turmaC];
