import { useDroppable } from "@dnd-kit/core";
import type {
  Task,
  TaskStatus,
} from "../types/task";

import TaskCard from "./TaskCard";

interface TaskColumnProps {
  title: string;
  status: TaskStatus;
  tasks: Task[];
}

function TaskColumn({
  title,
  status,
  tasks,
}: TaskColumnProps) {
  const {
    isOver,
    setNodeRef,
  } = useDroppable({
    id: status,
  });

  const columnTasks = tasks.filter(
    (task) => task.status === status
  );

  return (
    <div
      ref={setNodeRef}
      className={`column ${
        isOver ? "column-over" : ""
      }`}
    >
      <div className="column-header">
        <h2>{title}</h2>

        <span className="task-count">
          {columnTasks.length}
        </span>
      </div>

      <div className="column-content">
        {columnTasks.length === 0 ? (
          <div className="empty-column">
            Drop tasks here
          </div>
        ) : (
          columnTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default TaskColumn;