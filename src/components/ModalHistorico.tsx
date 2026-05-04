import { useEffect, useRef } from "react";
import type { Aluno } from "../models/Aluno";

interface ModalHistoricoProps {
  aluno: Aluno;
  onClose: () => void;
}

export function ModalHistorico({ aluno, onClose }: ModalHistoricoProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in"
    >
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-lg max-h-[80vh] flex flex-col animate-scale-in shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-700">
          <div>
            <h2 className="text-lg font-bold text-white">{aluno.nome}</h2>
            <div className="flex gap-3 mt-1 text-xs">
              <span className="text-indigo-400">
                Total: {aluno.total} pts
              </span>
              <span className="text-red-400">
                Usados: {aluno.usados} pts
              </span>
              <span className="text-emerald-400">
                Disponíveis: {aluno.getDisponiveis()} pts
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors text-2xl leading-none cursor-pointer"
            aria-label="Fechar"
          >
            ✕
          </button>
        </div>

        {/* Histórico */}
        <div className="overflow-y-auto p-5 space-y-3 flex-1">
          {aluno.historico.length === 0 ? (
            <p className="text-slate-500 text-center py-8">
              Nenhum registro encontrado.
            </p>
          ) : (
            aluno.historico.map((item, index) => {
              const isGanho = item.tipo === "ganho";
              return (
                <div
                  key={index}
                  className={`rounded-xl p-4 border ${
                    isGanho
                      ? "bg-emerald-500/10 border-emerald-500/20"
                      : "bg-red-500/10 border-red-500/20"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider ${
                        isGanho ? "text-emerald-400" : "text-red-400"
                      }`}
                    >
                      {isGanho ? "▲ GANHO" : "▼ USO"}
                    </span>
                    <span
                      className={`text-lg font-bold ${
                        isGanho ? "text-emerald-400" : "text-red-400"
                      }`}
                    >
                      {isGanho ? "+" : "-"}{item.valor} pts
                    </span>
                  </div>
                  <p className="text-white text-sm">{item.descricao}</p>
                  <div className="flex items-center justify-between mt-2 text-xs text-slate-400">
                    <span>📚 {item.disciplina}</span>
                    <span>📅 {item.data}</span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
