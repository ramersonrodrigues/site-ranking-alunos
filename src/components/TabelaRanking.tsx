import type { Aluno } from "../models/Aluno";

interface TabelaRankingProps {
  alunos: Aluno[];
  onAlunoClick: (aluno: Aluno) => void;
}

export function TabelaRanking({ alunos, onAlunoClick }: TabelaRankingProps) {
  return (
    <section>
      <h2 className="text-xl font-bold text-white mb-4">📊 Ranking Completo</h2>
      <div className="overflow-x-auto rounded-xl border border-slate-700">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-800 text-slate-300 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Nome</th>
              <th className="px-4 py-3 text-right">Total</th>
              <th className="px-4 py-3 text-right">Usados</th>
              <th className="px-4 py-3 text-right">Disponíveis</th>
            </tr>
          </thead>
          <tbody>
            {alunos.map((aluno, index) => (
              <tr
                key={aluno.nome}
                onClick={() => onAlunoClick(aluno)}
                className="border-t border-slate-700/50 hover:bg-slate-800/60 transition-colors cursor-pointer"
              >
                <td className="px-4 py-3 font-bold text-slate-400">
                  {index + 1}
                </td>
                <td className="px-4 py-3 text-white font-medium">
                  {aluno.nome}
                </td>
                <td className="px-4 py-3 text-right text-indigo-400 font-semibold">
                  {aluno.total}
                </td>
                <td className="px-4 py-3 text-right text-red-400">
                  {aluno.usados}
                </td>
                <td className="px-4 py-3 text-right text-emerald-400">
                  {aluno.getDisponiveis()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
