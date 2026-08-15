import type { Task } from "../../types/task";
import TaskCard from "./taskCard";

import { useDroppable } from "@dnd-kit/core";

import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

interface ColumnProps {
  title: string;
  tasks: Task[];
  status: Task["status"];
  onEdit: (task: Task) => void;
  onDelete: (id: number) => void;
}

export default function Column({
  title,
  tasks,
  status,
  onEdit,
  onDelete,
}: ColumnProps) {
  const {
    setNodeRef,
    isOver,
  } = useDroppable({
    id: status,
  });

  return (
    <div
      ref={setNodeRef}
      className={`board-column ${
        isOver
          ? "board-column--over"
          : ""
      }`}
    >
      <div className="board-column-header">
        <h5 className="board-column-title">
          {title}
        </h5>

        <span className="board-column-count">
          {tasks.length}
        </span>
      </div>

      <div className="board-column-body">
        <SortableContext
          items={tasks.map(
            (task) => task.id
          )}
          strategy={
            verticalListSortingStrategy
          }
        >
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </SortableContext>

        {tasks.length === 0 && (
          <div className="board-column-empty">
            Kéo thả task vào đây
          </div>
        )}
      </div>
    </div>
  );
}