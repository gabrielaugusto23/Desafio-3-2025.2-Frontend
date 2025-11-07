import { useState } from "react";
import KanbanColumn from "../components/KanbanColumn";
import { TaskStatus } from "../types/Task";

export default function Board() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Criar layout inicial",
      description: "Montar o layout base do Kanban",
      responsible: "Guto",
      deadline: "2025-11-10",
      status: TaskStatus.TODO,
    },
    {
      id: 2,
      title: "Implementar componentes",
      description: "Criar TaskCard e KanbanColumn",
      responsible: "Guto",
      deadline: "2025-11-12",
      status: TaskStatus.DOING,
    },
  ]);

  const todo = tasks.filter((t) => t.status === TaskStatus.TODO);
  const doing = tasks.filter((t) => t.status === TaskStatus.DOING);
  const done = tasks.filter((t) => t.status === TaskStatus.DONE);

  return (
    <div className="max-h-screen overflow-auto bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Kanban Board</h1>

      <div className="grid grid-cols-3 gap-6">
        <KanbanColumn title="A Fazer" tasks={todo} />
        <KanbanColumn title="Em Andamento" tasks={doing} />
        <KanbanColumn title="Concluído" tasks={done} />
      </div>
    </div>
  );
}