export default function TaskCard({ task }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-3 shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
      <p className="text-sm text-gray-600 mt-1">{task.description}</p>
      <p className="text-sm text-gray-500 mt-2">
        <strong>Responsável:</strong> {task.responsible}
      </p>
      <p className="text-sm text-gray-500">
        <strong>Prazo:</strong> {task.deadline}
      </p>
    </div>
  );
}
