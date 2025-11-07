import { useState } from "react";
import { Droppable } from "@hello-pangea/dnd";
import TaskCard from "./TaskCard";
import TaskFormModal from "./TaskForm";

export default function KanbanColumn({ title, tasks, status, onAddTask, onDeleteTask, onEditTask }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-2xl border border-gray-300 shadow-md flex flex-col w-[350px] p-4">
        <Droppable droppableId={status}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="flex-1 space-y-3 overflow-y-auto px-2"
              style={{ maxHeight: "620px" }}
            >
              {tasks.length > 0 ? (
                tasks.map((task, index) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    index={index}
                    onDelete={onDeleteTask}
                    onEdit={onEditTask}
                  />
                ))
              ) : (
                <p className="text-gray-400 text-center italic">Sem tarefas</p>
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        <button
          onClick={() => setShowModal(true)}
          className="mt-4 w-full bg-gray-800 text-white text-lg rounded-xl py-2 hover:bg-gray-900 cursor-pointer transition"
        >
          +
        </button>

        {showModal && (
          <TaskFormModal
            status={status}
            onSave={(task) => {
              onAddTask(task);
              setShowModal(false);
            }}
            onCancel={() => setShowModal(false)}
          />
        )}
      </div>
    </div>
  );
}
