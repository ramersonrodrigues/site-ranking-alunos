import type { Aluno } from "../models/Aluno";

interface Top3Props {
  alunos: Aluno[];
  onAlunoClick: (aluno: Aluno) => void;
}

const medalhas = ["🥇", "🥈", "🥉"];

const podiumStyles = [
  "from-yellow-500/20 to-yellow-600/5 border-yellow-500/30 ring-yellow-500/20",
  "from-slate-400/20 to-slate-500/5 border-slate-400/30 ring-slate-400/20",
  "from-amber-700/20 to-amber-800/5 border-amber-700/30 ring-amber-700/20",
];

export function Top3({ alunos, onAlunoClick }: Top3Props) {
  if (alunos.length === 0) return null;

  return (
    <section>
      <h2 className="text-xl font-bold text-white mb-4 text-center">
        🏆 Top 3
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {alunos.map((aluno, index) => (
          <button
            key={aluno.nome}
            onClick={() => onAlunoClick(aluno)}
            className={`group bg-gradient-to-b ${podiumStyles[index]} border rounded-xl p-5 text-center transition-all duration-200 hover:scale-105 hover:ring-2 cursor-pointer`}
          >
            <span className="text-4xl block mb-2">{medalhas[index]}</span>
            <h3 className="text-white font-semibold text-lg group-hover:text-indigo-300 transition-colors">
              {aluno.nome}
            </h3>
            <p className="text-2xl font-bold text-indigo-400 mt-1">
              {aluno.total} pts
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Disponíveis: {aluno.getDisponiveis()} pts
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}
