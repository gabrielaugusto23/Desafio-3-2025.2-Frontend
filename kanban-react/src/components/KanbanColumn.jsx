import { useState } from "react";
import TaskCard from "./TaskCard";
import TaskFormModal from "./TaskForm";

export default function KanbanColumn({ title, tasks, status, onAddTask }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md w-72 md:w-120 sm:w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-700">{title}</h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-500 text-white cursor-pointer px-3 py-1 rounded-lg hover:bg-blue-600 transition"
        >
          +
        </button>
      </div>

      {tasks.length > 0 ? (
        tasks.map((task) => <TaskCard key={task.id} task={task} />)
      ) : (
        <p className="text-gray-400 text-center italic">Sem tarefas</p>
      )}

      {showModal && (
        <TaskFormModal
          status={status}
          onSave={(task) => {
            onAddTask(task);
            setShowModal(false);
          }}
          onCancel={() => setShowModal(false)}
        />
      )}
    </div>
  );
}