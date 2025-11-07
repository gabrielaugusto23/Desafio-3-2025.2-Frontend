import { Draggable } from "@hello-pangea/dnd";
import { CalendarDays, User } from "lucide-react";

export default function TaskCard({ task, index }) {
  const bgColor = {
    todo: "bg-[#8B5E3C]",
    doing: "bg-[#3C5A8B]",
    done: "bg-[#3C8B83]",
  }[task.status] || "bg-gray-400";

  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`${bgColor} text-white rounded-xl shadow-md p-4 hover:shadow-lg transition`}
        >
          <h3 className="text-center text-base font-semibold pb-2 mb-3 border-b border-white/30 truncate">
            {task.title}
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-2 text-sm pr-3 border-r border-white/30">
              <div className="flex items-center gap-2">
                <User size={14} />
                <span className="truncate">{task.responsible || "Sem responsável"}</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays size={14} />
                <span>{task.deadline || "Sem prazo"}</span>
              </div>
            </div>
            <div className="text-sm opacity-90 leading-snug pl-2">
              <p className="line-clamp-5 break-words">{task.description}</p>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}
