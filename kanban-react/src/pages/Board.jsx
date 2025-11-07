import { useState } from "react";
import KanbanColumn from "../components/KanbanColumn";
import { TaskStatus } from "../types/Task";

export default function Board() {
  const [tasks, setTasks] = useState([]);
  
  const addTask = (newTask) => {
    setTasks((prev) => [...prev, newTask]);
  };

  const todo = tasks.filter((t) => t.status === TaskStatus.TODO);
  const doing = tasks.filter((t) => t.status === TaskStatus.DOING);
  const done = tasks.filter((t) => t.status === TaskStatus.DONE);

  return (
    <div className="max-h-screen overflow-auto bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Kanban Board</h1>

      <div className="grid grid-cols-3 gap-6">
        <KanbanColumn title="A Fazer" tasks={todo} status={TaskStatus.TODO} onAddTask={addTask} />
        <KanbanColumn title="Em Andamento" tasks={doing} status={TaskStatus.DOING} onAddTask={addTask} />
        <KanbanColumn title="Concluído" tasks={done} status={TaskStatus.DONE} onAddTask={addTask} />
      </div>
    </div>
  );
}