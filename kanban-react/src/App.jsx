// src/App.jsx
import { useState } from "react";
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

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center mb-8">Kanban Board</h1>

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
    </div>
  );
}

export default App;
