import { useState } from "react";
import { Task } from "../types/Task";
import { TaskStatusLabels } from "../types/Task";

export default function TaskFormModal({ status, onSave, onCancel }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [responsible, setResponsible] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSave = () => {
    if (!title.trim()) return alert("O título é obrigatório!");
    const newTask = new Task({
      id: Date.now(),
      title,
      description,
      responsible,
      deadline,
      status,
    });
    onSave(newTask);
  };

  const statusColor = {
    todo: "bg-blue-100 text-blue-700",
    doing: "bg-yellow-100 text-yellow-700",
    done: "bg-green-100 text-green-700",
  }[status] || "bg-gray-100 text-gray-700";

  const translatedStatus = TaskStatusLabels[status] || status;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md mx-4">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">
          Criar Tarefa
        </h2>

        <input
          type="text"
          placeholder="Título"
          className="w-full border rounded-lg p-2 mb-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Descrição"
          className="w-full border rounded-lg p-2 mb-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Responsável"
          className="w-full border rounded-lg p-2 mb-2"
          value={responsible}
          onChange={(e) => setResponsible(e.target.value)}
        />
        <input
          type="date"
          className="w-full border rounded-lg p-2 mb-4"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />

        <div
          className={`text-sm font-medium px-3 py-1 rounded-full ${statusColor} w-fit mb-4`}
        >
          {translatedStatus}
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}
