import { Aluno } from "../models/Aluno";
import { HistoricoItem } from "../models/HistoricoItem";
import { Premio } from "../models/Premio";
import { Turma } from "../models/Turma";

const premiosPadrao: Premio[] = [
  new Premio("Caneta Alex", 50),
  new Premio("Barra chocolate", 100),
  new Premio("Caixa de chocolate", 150),
  new Premio("Livro - A Metamorfose", 150),
  new Premio("Livro - Contos dos Irmãos Grimm", 600),
  new Premio("Livro - Vidas Secas", 200),
  new Premio("Livro - Cartas de um diabo a seu aprendiz", 400),
  new Premio("Livro - Berserk - Comum", 400),

];

const turmaA = new Turma(
  "João Silva Filho - 3º Ano",
  [
    // new Aluno("Lucas Silva", [
    //   new HistoricoItem("ganho", 15, "Participação em aula", "05/03/2025", "Matemática"),
    //   new HistoricoItem("ganho", 10, "Nota acima de 9", "12/03/2025", "Português"),
    //   new HistoricoItem("ganho", 20, "Projeto em grupo", "20/03/2025", "História"),
    //   new HistoricoItem("uso", 10, "Barra de chocolate x2", "25/03/2025", "Premiação"),
    //   new HistoricoItem("uso", 10, "Nota", "25/03/2025", "Matemática"),
    // ]),
    new Aluno("Sarah", [
      new HistoricoItem("ganho", 5, "Exercicio", "22/05/2025", "Frontend"),
      new HistoricoItem("ganho", 5, "Exercicio", "22/05/2025", "Frontend"),
      new HistoricoItem("ganho", 5, "Exercicio", "29/05/2025", "Laboratorio - Redação"),
      new HistoricoItem("ganho", 5, "Exercicio", "29/05/2025", "Frontend"),
    ]),
    
    new Aluno("Iasmin", [
      new HistoricoItem("ganho", 10, "Exercicio", "22/05/2025", "POO"),
      new HistoricoItem("ganho", 5, "Exercicio", "29/05/2025", "Frontend"),
      new HistoricoItem("ganho", 5, "Exercicio", "29/05/2025", "Frontend"),
    ]),
    new Aluno("Victor", [
        new HistoricoItem("ganho", 30, "Exercicio", "29/05/2025", "Mini teste - Matematica"),

    ]),
    new Aluno("Caio", [
       new HistoricoItem("ganho", 10, "Exercicio", "05/03/2025", "Segurança de Sistemas"),
       new HistoricoItem("ganho", 5, "Exercicio", "29/05/2025", "Frontend"),
       new HistoricoItem("ganho", 5, "Exercicio", "29/05/2025", "Frontend"),
       new HistoricoItem("ganho", 10, "Exercicio", "29/05/2025", "Olipiadas de Matematica"),
    ]),
    new Aluno("Alex", [
      
    ]),
    new Aluno("Maria Eduarda", [
      new HistoricoItem("ganho", 5, "Exercicio", "29/05/2025", "Laboratorio - Redação"),
      new HistoricoItem("ganho", 5, "Exercicio", "29/05/2025", "Frontend"),
      new HistoricoItem("ganho", 5, "Exercicio", "29/05/2025", "Frontend"),
    ]),
    new Aluno("Hanna", [
      new HistoricoItem("ganho", 10, "Exercicio", "05/03/2025", "Segurança de Sistemas"),
      new HistoricoItem("ganho", 5, "Exercicio", "22/05/2025", "POO"),
      new HistoricoItem("ganho", 5, "Exercicio", "25/05/2025", "Frontend"),
      new HistoricoItem("ganho", 5, "Exercicio", "29/05/2025", "Frontend"),
      new HistoricoItem("ganho", 5, "Exercicio", "29/05/2025", "Laboratorio - Redação"),
    ]),
    new Aluno("Karlos", [
      new HistoricoItem("ganho", 5, "Exercicio", "22/05/2025", "POO"),
      new HistoricoItem("ganho", 5, "Exercicio", "25/05/2025", "Frontend"),
      new HistoricoItem("ganho", 5, "Exercicio", "29/05/2025", "Laboratorio - Redação"),
      new HistoricoItem("ganho", 5, "Exercicio", "29/05/2025", "Frontend"),
      new HistoricoItem("ganho", 5, "Exercicio", "29/05/2025", "Frontend"),
    ]),
    new Aluno("Arthur", [
      new HistoricoItem("ganho", 5, "Exercicio", "25/05/2025", "Frontend"),
    ]),
    new Aluno("Flavia", [
      new HistoricoItem("ganho", 5, "Exercicio", "25/03/2025", "Segurança de Sistemas"),
      new HistoricoItem("ganho", 15, "Exercicio", "29/05/2025", "Mini teste - Matematica"),
    ]),
    new Aluno("Ana Carolina", [
      new HistoricoItem("ganho", 5, "Exercicio", "13/03/2025", "Segurança de Sistemas"),
    ]),
    new Aluno("Ana Karoliny", [
      new HistoricoItem("ganho", 10, "Exercicio", "05/03/2025", "Segurança de Sistemas"),
      new HistoricoItem("ganho", 10, "Exercicio", "13/03/2025", "Segurança de Sistemas"),
      new HistoricoItem("ganho", 5, "Exercicio", "25/05/2025", "Frontend"),
      new HistoricoItem("ganho", 5, "Exercicio", "29/05/2025", "Frontend"),
    ]),
    new Aluno("André", [
      
    ]),
    new Aluno("Nara", [
        new HistoricoItem("ganho", 10, "Exercicio", "22/05/2025", "POO"),
        new HistoricoItem("ganho", 10, "Exercicio", "22/05/2025", "POO"),
        new HistoricoItem("ganho", 5, "Exercicio", "25/05/2025", "Frontend"),
        new HistoricoItem("ganho", 5, "Exercicio", "29/05/2025", "Frontend"),
        new HistoricoItem("ganho", 15, "Exercicio", "29/05/2025", "Mini teste - Matematica"),
        new HistoricoItem("ganho", 5, "Exercicio", "29/05/2025", "Laboratorio - Redação"),
        new HistoricoItem("ganho", 5, "Exercicio", "29/05/2025", "Frontend"),
    ]),

  ],
  premiosPadrao
);

const turmaB = new Turma(
  "Raquel Magalhães - 2º Ano",
  [
    new Aluno("Gustavo", [
      new HistoricoItem("ganho", 10, "Exercicio", "07/03/2025", "POO"),
      new HistoricoItem("ganho", 10, "Apresentação trabalho", "15/05/2025", "IA"),
      new HistoricoItem("ganho", 10, "Exercicio HTML e CSS", "21/05/2025", "Frontend"),
    ]),
     new Aluno("Alerrandro", [
      new HistoricoItem("ganho", 10, "Exercicio", "07/03/2025", "POO"),
      new HistoricoItem("ganho", 10, "Exercicio HTML e CSS", "21/05/2025", "Frontend"),
    ]),
    new Aluno("Fabiola", [
      
    ]),
    new Aluno("Maria Vitoria", [
      new HistoricoItem("ganho", 2, "Exercicio", "14/03/2025", "POO"),
    ]),
    new Aluno("Alany", [
       new HistoricoItem("ganho", 2, "Exercicio", "14/03/2025", "POO"),
    ]),
    new Aluno("Mainara", [
       new HistoricoItem("ganho",2, "Exercicio", "14/03/2025", "POO"),
    ]),
    new Aluno("Lucas", [
       new HistoricoItem("ganho", 2, "Exercicio", "14/03/2025", "POO"),
    ]),
    new Aluno("Iarlisson", [
      
    ]),
    new Aluno("Kauã Nascimento", [
      new HistoricoItem("ganho", 2, "Exercicio", "14/03/2025", "POO"),
    ]),
    new Aluno("Ilzamra", [
      
    ]),
    new Aluno("Thais", [
      
    ]),
    new Aluno("Annykelly", [
      
    ]),
    new Aluno("Francisco", [
      
    ]),
    new Aluno("Julio", [
      new HistoricoItem("ganho", 3, "Exercicio", "07/03/2025", "POO"),
    ]),


  ],
  premiosPadrao
);

const turmaC = new Turma(
  "Raquel Magalhães - 3º Ano ",                         
  [
    new Aluno("Mateus", [
      
    ]),


  ],
  premiosPadrao
);

export const turmas: Turma[] = [turmaA, turmaB, turmaC];
