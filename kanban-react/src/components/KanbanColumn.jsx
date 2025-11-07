import { useState } from "react";
import TaskCard from "./TaskCard";
import TaskForm from "./TaskForm";

export default function KanbanColumn({ title, tasks, status, onAddTask }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-700">{title}</h2>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition"
        >
          +
        </button>
      </div>

      {showForm && (
        <TaskForm
          status={status}
          onSave={(task) => {
            onAddTask(task);
            setShowForm(false);
          }}
          onCancel={() => setShowForm(false)}
        />
      )}

      {tasks.length > 0 ? (
        tasks.map((task) => <TaskCard key={task.id} task={task} />)
      ) : (
        <p className="text-gray-400 text-center italic">Sem tarefas</p>
      )}
    </div>
  );
}