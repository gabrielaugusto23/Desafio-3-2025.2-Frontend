import { useState } from "react";
import { Draggable } from "@hello-pangea/dnd";
import { CalendarDays, User, X } from "lucide-react";
import TaskFormModal from "./TaskForm";

export default function TaskCard({ task, index, onDelete, onEdit }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const bgColor = {
    todo: "bg-[#8B5E3C]",
    doing: "bg-[#3C5A8B]",
    done: "bg-[#3C8B83]",
  }[task.status] || "bg-gray-400";

  const handleEdit = (e) => {
    if (e.target.closest(".delete-btn")) return;
    setIsEditing(true);
  };

  function formatDateToBrazilian(isoDate) {
    if (!isoDate) return "";
    const date = new Date(isoDate);
    if (isNaN(date)) return isoDate;
    return date.toLocaleDateString("pt-BR");
  }

  return (
    <>
      <Draggable draggableId={task.id.toString()} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleEdit}
            className={`${bgColor} text-white rounded-xl shadow-md p-4 hover:shadow-lg transition relative cursor-pointer`}
          >
            {isHovered && (
              <button
                className="absolute top-1 right-1 delete-btn bg-red-500 hover:bg-red-600 text-white rounded-full p-1 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(task.id);
                }}
              >
                <X size={14} />
              </button>
            )}

            <h3 className="text-center text-base font-semibold pb-2 mb-3 border-b border-white/30 truncate">
              {task.title}
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-2 text-sm pr-3 border-r border-white/30">
                <div className="flex items-center gap-2">
                  <User size={14} />
                  <span className="truncate">
                    {task.responsible || "Sem responsável"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarDays size={14} />
                  <span>{task.deadline ? formatDateToBrazilian(task.deadline) : "Sem prazo"}</span>
                </div>
              </div>
              <div className="text-sm opacity-90 leading-snug pl-2">
                <p className="line-clamp-5 break-words">{task.description}</p>
              </div>
            </div>
          </div>
        )}
      </Draggable>
      {isEditing && (
        <TaskFormModal
          status={task.status}
          onSave={(updatedTask) => {
            onEdit(task.id, updatedTask);
            setIsEditing(false);
          }}
          onCancel={() => setIsEditing(false)}
          initialData={task}
        />
      )}
    </>
  );
}
