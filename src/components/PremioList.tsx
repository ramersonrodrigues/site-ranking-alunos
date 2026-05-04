import type { Premio } from "../models/Premio";

interface PremioListProps {
  premios: Premio[];
}

export function PremioList({ premios }: PremioListProps) {
  return (
    <section>
      <h2 className="text-xl font-bold text-white mb-4">🎁 Loja de Prêmios</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {premios.map((premio) => (
          <div
            key={premio.nome}
            className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 flex flex-col items-center gap-2 hover:border-indigo-500/50 transition-colors"
          >
            <span className="text-3xl">🎁</span>
            <h3 className="text-white font-semibold text-base">
              {premio.nome}
            </h3>
            <span className="bg-indigo-500/20 text-indigo-300 text-sm font-bold px-3 py-1 rounded-full">
              {premio.custo} pts
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
