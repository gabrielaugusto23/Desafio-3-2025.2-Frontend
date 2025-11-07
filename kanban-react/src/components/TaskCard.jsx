export default function TaskCard({ task }) {
  return (
    <div className="flex justify-center mb-3">
      <div className="w-full bg-white border border-gray-300 rounded-xl p-3 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-gray-700 mb-1">{task.title}</h3>
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