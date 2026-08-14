import { useState } from "react";
import { useDraggable } from "@dnd-kit/core";
import type { Task } from "../../types/task";
import EditTask from "./EditTask";
import TaskDetail from "./TaskDetail";

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: number) => void;
}

const priorityLabel: Record<Task["priority"], string> = {
  High: "Cao",
  Medium: "Trung bình",
  Low: "Thấp",
};

export default function TaskCard({ task, onEdit, onDelete }: TaskCardProps) {
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const [showDetail, setShowDetail] = useState<boolean>(false);

  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: task.id,
  });

  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 999 : undefined,
  };

  return (
    <>
      <div ref={setNodeRef} style={style} className="task-card-dnd" onClick={() => setShowDetail(true)}>
        <div className="task-card-inner">
          <div className="task-card-drag-handle" {...listeners} {...attributes} onClick={(e) => e.stopPropagation()}> ⠿ </div>
          <div className="task-card-content">
            <h6 className="task-card-title">{task.title}</h6>
            {task.description && (<p className="task-card-desc">{task.description}</p>)}
            <div className="task-card-footer">
              <span className={`priority-badge priority-badge-${task.priority.toLowerCase()}`}>
                {priorityLabel[task.priority]}
              </span>
              <div className="task-card-actions" onClick={(e) => e.stopPropagation()}>
                <button type="button" className="btn btn-sm btn-outline-primary" onClick={(e) => {
                  e.stopPropagation();
                  setShowEdit(true);
                }}> Sửa
                </button>
                <button type="button" className="btn btn-sm btn-outline-danger" onClick={(e) => {
                    e.stopPropagation();
                    onDelete(task.id);
                  }} > Xóa
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showDetail && (
        <TaskDetail task={task} onClose={() => setShowDetail(false)} onEditClick={() => setShowEdit(true)} />)}
      {showEdit && (
        <EditTask
          task={task}
          onClose={() => setShowEdit(false)}
          onSave={onEdit} />
      )}
    </>
  );
}