import { useState } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import KanbanColumn from "./components/KanbanColumn";
import { TaskStatus } from "./types/Task";

export default function App() {
  const [tasks, setTasks] = useState({
    [TaskStatus.TODO]: [],
    [TaskStatus.DOING]: [],
    [TaskStatus.DONE]: [],
  });

  const handleAddTask = (status, newTask) => {
    setTasks((prev) => ({
      ...prev,
      [status]: [...prev[status], newTask],
    }));
  };

  const handleDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    const sourceCol = source.droppableId;
    const destCol = destination.droppableId;

    const sourceTasks = Array.from(tasks[sourceCol]);
    const [movedTask] = sourceTasks.splice(source.index, 1);
    const destTasks = Array.from(tasks[destCol]);
    movedTask.status = destCol;
    destTasks.splice(destination.index, 0, movedTask);

    setTasks((prev) => ({
      ...prev,
      [sourceCol]: sourceTasks,
      [destCol]: destTasks,
    }));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-10">Kanban Board</h1>
      <div className="relative w-full max-w-6xl">
        <div className="grid grid-cols-3 text-center font-semibold text-xl mb-6">
          <div className="border-b-1 border-gray-400 py-3">A Fazer</div>
          <div className="border-b-1 border-gray-400 py-3">Em Andamento</div>
          <div className="border-b-1 border-gray-400 py-3">Feito</div>
        </div>
        <div className="absolute top-0 bottom-0 left-1/3 w-[1px] bg-gray-400"></div>
        <div className="absolute top-0 bottom-0 left-2/3 w-[1px] bg-gray-400"></div>
        <DragDropContext onDragEnd={handleDragEnd}>
          <div className="grid grid-cols-3 gap-4">
            <KanbanColumn
              title="A Fazer"
              status={TaskStatus.TODO}
              tasks={tasks[TaskStatus.TODO]}
              onAddTask={(task) => handleAddTask(TaskStatus.TODO, task)}
            />
            <KanbanColumn
              title="Em Andamento"
              status={TaskStatus.DOING}
              tasks={tasks[TaskStatus.DOING]}
              onAddTask={(task) => handleAddTask(TaskStatus.DOING, task)}
            />
            <KanbanColumn
              title="Feito"
              status={TaskStatus.DONE}
              tasks={tasks[TaskStatus.DONE]}
              onAddTask={(task) => handleAddTask(TaskStatus.DONE, task)}
            />
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}