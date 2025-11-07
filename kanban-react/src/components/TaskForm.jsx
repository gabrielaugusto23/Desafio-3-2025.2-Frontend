import { useState } from "react";
import { Task } from "../types/Task";

export default function TaskForm({ status, onSave, onCancel }) {
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

  return (
    <div className="border border-gray-300 p-4 rounded-xl mb-3 bg-gray-50">
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
        className="w-full border rounded-lg p-2 mb-2"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />

      <div className="flex justify-end gap-2">
        <button
          onClick={onCancel}
          className="px-3 py-1 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
        >
          Cancelar
        </button>
        <button
          onClick={handleSave}
          className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          Salvar
        </button>
      </div>
    </div>
  );
}