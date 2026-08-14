import { useDraggable } from "@dnd-kit/core";
import type { CSSProperties } from "react";
import type { Task } from "../types/task";

interface TaskCardProps {
  task: Task;
  overlay?: boolean;
}

function TaskCard({
  task,
  overlay = false,
}: TaskCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    isDragging,
  } = useDraggable({
    id: task.id,
    disabled: overlay,
  });

  const style: CSSProperties = {
    opacity:
      isDragging && !overlay
        ? 0.35
        : 1,

    cursor: "move",
  };

  // Card đang được kéo
  if (overlay) {
    return (
      <div
        className="task-card task-card-overlay"
        style={{
          ...style,
          cursor: "move",
        }}
      >
        <div className="task-card-header">
          <h3>{task.title}</h3>
        </div>

        <span
          className={`priority-badge priority-${task.priority.toLowerCase()}`}
        >
          {task.priority}
        </span>

        <div className="task-card-footer">
          <span className="drag-hint">
            ⋮⋮ Drag to move
          </span>
        </div>
      </div>
    );
  }

  // Card bình thường
  return (
    <div
      ref={setNodeRef}
      style={style}
      className="task-card"
      {...listeners}
      {...attributes}
    >
      <div className="task-card-header">
        <h3>{task.title}</h3>
      </div>

      <span
        className={`priority-badge priority-${task.priority.toLowerCase()}`}
      >
        {task.priority}
      </span>

      <div className="task-card-footer">
        <span className="drag-hint">
          ⋮⋮ Drag to move
        </span>
      </div>
    </div>
  );
}

export default TaskCard;