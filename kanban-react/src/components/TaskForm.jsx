import { useState, useEffect } from "react";
import { TaskStatusLabels } from "../types/Task";

export default function TaskFormModal({ status, onSave, onCancel, initialData }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [responsible, setResponsible] = useState("");
  const [deadline, setDeadline] = useState("");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");
      setDescription(initialData.description || "");
      setResponsible(initialData.responsible || "");
      setDeadline(initialData.deadline || "");
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: initialData?.id || Date.now(),
      title,
      description,
      responsible,
      deadline,
      status,
    };
    onSave(newTask);
  };
  const statusColors = {
    todo: "bg-yellow-200 text-yellow-800 border-yellow-300",
    doing: "bg-blue-200 text-blue-800 border-blue-300",
    done: "bg-green-200 text-green-800 border-green-300",
  };
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-[400px] relative">
        <h2 className="text-xl font-semibold mb-4 text-center">
          {initialData ? "Editar Tarefa" : "Nova Tarefa"}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded-lg p-2"
            required
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded-lg p-2 resize-none"
            rows={3}
          />
          <input
            type="text"
            placeholder="Responsável"
            value={responsible}
            onChange={(e) => setResponsible(e.target.value)}
            className="border rounded-lg p-2"
            required
          />
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="border rounded-lg p-2"
            required
          />
          <div className="flex justify-left mt-1">
            <span
              className={`text-sm font-medium px-3 py-1 rounded-full border ${statusColors[status]}`}
            >
              {TaskStatusLabels[status]}
            </span>
          </div>

          <div className="flex justify-between mt-3">
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-300 hover:bg-gray-400 text-black rounded-lg px-4 py-2 transition"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 transition"
            >
              {initialData ? "Atualizar" : "Salvar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
