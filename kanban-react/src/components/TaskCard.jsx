import { TaskStatusLabels } from "../types/Task";

export default function TaskCard({ task }) {
  const statusColor = {
    todo: "bg-blue-100 text-blue-700",
    doing: "bg-yellow-100 text-yellow-700",
    done: "bg-green-100 text-green-700",
  }[task.status] || "bg-gray-100 text-gray-700";
  const translatedStatus = TaskStatusLabels[task.status] || task.status;
  return (
    <div className="flex justify-center mb-3">
      <div className="w-full bg-white border border-gray-300 rounded-xl p-3 shadow-sm hover:shadow-md transition">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-gray-700">{task.title}</h3>
          <span
            className={`text-xs font-medium px-2 py-1 rounded-full ${statusColor}`}
          >
            {translatedStatus}
          </span>
        </div>
        <p className="text-sm text-gray-600 mb-2">{task.description}</p>
        <p className="text-xs text-gray-500">
          <strong>Responsável:</strong> {task.responsible}
        </p>
        <p className="text-xs text-gray-500">
          <strong>Prazo:</strong> {task.deadline}
        </p>
      </div>
    </div>
  );
}
