import type { Turma } from "../models/Turma";

interface TurmaSelectorProps {
  turmas: Turma[];
  turmaSelecionadaIndex: number;
  onTurmaChange: (index: number) => void;
}

export function TurmaSelector({
  turmas,
  turmaSelecionadaIndex,
  onTurmaChange,
}: TurmaSelectorProps) {
  return (
    <div className="w-full max-w-xs mx-auto">
      <label
        htmlFor="turma-select"
        className="block text-sm font-medium text-slate-400 mb-2"
      >
        Selecionar Turma
      </label>
      <select
        id="turma-select"
        value={turmaSelecionadaIndex}
        onChange={(e) => onTurmaChange(Number(e.target.value))}
        className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all cursor-pointer appearance-none"
      >
        {turmas.map((turma, index) => (
          <option key={index} value={index}>
            {turma.nome}
          </option>
        ))}
      </select>
    </div>
  );
}
