import TaskCard from "./TaskCard";

export default function KanbanColumn({ title, tasks }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center text-gray-700">
        {title}
      </h2>

      {tasks.length > 0 ? (
        tasks.map((task) => <TaskCard key={task.id} task={task} />)
      ) : (
        <p className="text-gray-400 text-center italic">Sem tarefas</p>
      )}
    </div>
  );
}
