import { useState } from "react";
import { turmas } from "./data/turmas";
import { RankingService } from "./services/RankingService";
import { TurmaSelector } from "./components/TurmaSelector";
import { Top3 } from "./components/Top3";
import { TabelaRanking } from "./components/TabelaRanking";
import { PremioList } from "./components/PremioList";
import { ModalHistorico } from "./components/ModalHistorico";
import type { Aluno } from "./models/Aluno";

function App() {
  const [turmaSelecionadaIndex, setTurmaSelecionadaIndex] = useState(0);
  const [alunoSelecionado, setAlunoSelecionado] = useState<Aluno | null>(null);

  const turmaAtual = turmas[turmaSelecionadaIndex];
  const rankingOrdenado = RankingService.ordenarPorPontuacao(turmaAtual.alunos);
  const top3 = RankingService.getTop3(turmaAtual.alunos);

  const handleTurmaChange = (index: number) => {
    setTurmaSelecionadaIndex(index);
    setAlunoSelecionado(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <h1 className="text-2xl font-bold text-white tracking-tight">
            🎓 Ranking de Alunos
          </h1>
          <TurmaSelector
            turmas={turmas}
            turmaSelecionadaIndex={turmaSelecionadaIndex}
            onTurmaChange={handleTurmaChange}
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8 space-y-10">
        <Top3 alunos={top3} onAlunoClick={setAlunoSelecionado} />

        <TabelaRanking
          alunos={rankingOrdenado}
          onAlunoClick={setAlunoSelecionado}
        />

        <PremioList premios={turmaAtual.premios} />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-auto">
        <div className="max-w-5xl mx-auto px-4 py-6 text-center text-xs text-slate-500">
          Sistema de Gamificação Escolar &copy; {new Date().getFullYear()}
        </div>
      </footer>

      {/* Modal */}
      {alunoSelecionado && (
        <ModalHistorico
          aluno={alunoSelecionado}
          onClose={() => setAlunoSelecionado(null)}
        />
      )}
    </div>
  );
}

export default App;
