import { useState } from "react";
import KanbanColumn from "../components/KanbanColumn";
import { TaskStatus } from "../types/Task";

export default function Board() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => setTasks((prev) => [...prev, newTask]);

  const todo = tasks.filter((t) => t.status === TaskStatus.TODO);
  const doing = tasks.filter((t) => t.status === TaskStatus.DOING);
  const done = tasks.filter((t) => t.status === TaskStatus.DONE);

  return (
    <div className="min-h-screen bg-[#2f2f2f] flex flex-col items-center justify-center py-10">
      <div className="relative w-full max-w-6xl border-4 border-gray-500 rounded-3xl p-8 bg-[#2f2f2f]">
        <div className="absolute top-[90px] left-8 right-8 h-[2px] bg-gray-500"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold text-white mb-4 border-b-2 border-gray-500 pb-2 w-full text-center">
              A Fazer
            </h2>
            <KanbanColumn
              title="A Fazer"
              tasks={todo}
              status={TaskStatus.TODO}
              onAddTask={addTask}
            />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold text-white mb-4 border-b-2 border-gray-500 pb-2 w-full text-center">
              Fazendo
            </h2>
            <KanbanColumn
              title="Fazendo"
              tasks={doing}
              status={TaskStatus.DOING}
              onAddTask={addTask}
            />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold text-white mb-4 border-b-2 border-gray-500 pb-2 w-full text-center">
              Feito
            </h2>
            <KanbanColumn
              title="Feito"
              tasks={done}
              status={TaskStatus.DONE}
              onAddTask={addTask}
            />
          </div>
        </div>
        <div className="absolute top-[110px] bottom-8 left-1/3 w-[2px] bg-gray-500"></div>
        <div className="absolute top-[110px] bottom-8 left-2/3 w-[2px] bg-gray-500"></div>
      </div>
    </div>
  );
}
