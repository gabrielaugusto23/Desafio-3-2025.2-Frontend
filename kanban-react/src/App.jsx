import { useState } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import KanbanColumn from "./components/KanbanColumn";
import { TaskStatus, TaskStatusLabels } from "./types/Task";

function App() {
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
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center mb-8">Kanban Board</h1>

      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="flex flex-wrap justify-center gap-4 max-w-120px">
          <KanbanColumn
            title={TaskStatusLabels.todo}
            status={TaskStatus.TODO}
            tasks={tasks[TaskStatus.TODO]}
            onAddTask={(task) => handleAddTask(TaskStatus.TODO, task)}
          />

          <KanbanColumn
            title={TaskStatusLabels.doing}
            status={TaskStatus.DOING}
            tasks={tasks[TaskStatus.DOING]}
            onAddTask={(task) => handleAddTask(TaskStatus.DOING, task)}
          />

          <KanbanColumn
            title={TaskStatusLabels.done}
            status={TaskStatus.DONE}
            tasks={tasks[TaskStatus.DONE]}
            onAddTask={(task) => handleAddTask(TaskStatus.DONE, task)}
          />
        </div>
      </DragDropContext>
    </div>
  );
}

export default App;