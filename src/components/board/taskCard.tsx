import { useState } from "react";

import {
  useSortable,
} from "@dnd-kit/sortable";

import {
  CSS,
} from "@dnd-kit/utilities";

import type { Task } from "../../types/task";

import EditTask from "./EditTask";
import TaskDetail from "./TaskDetail";

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: number) => void;
  overlay?: boolean;
}

const priorityLabel: Record<
  Task["priority"],
  string
> = {
  High: "Cao",
  Medium: "Trung bình",
  Low: "Thấp",
};

export default function TaskCard({
  task,
  onEdit,
  onDelete,
  overlay = false,
}: TaskCardProps) {
  const [showEdit, setShowEdit] =
    useState(false);

  const [showDetail, setShowDetail] =
    useState(false);

  const sortable = useSortable({
    id: task.id,
    disabled: overlay,
  });

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = sortable;

  const style = {
    transform: overlay
      ? undefined
      : CSS.Transform.toString(transform),

    transition: overlay
      ? undefined
      : transition,

    opacity:
      isDragging && !overlay
        ? 0.35
        : 1,

    zIndex:
      isDragging || overlay
        ? 1000
        : undefined,
  };

  return (
    <>
      <div
        ref={overlay ? undefined : setNodeRef}
        style={style}
        className={`task-card-dnd ${overlay
            ? "task-card-dnd-overlay"
            : ""
          }`}
        {...(!overlay
          ? listeners
          : {})}
        {...(!overlay
          ? attributes
          : {})}
        onClick={() => {
          if (!isDragging && !overlay) {
            setShowDetail(true);
          }
        }}
      >
        <div className="task-card-inner">

          {/* Drag icon */}
          <div
            className="task-card-drag-handle"
            aria-label="Kéo task"
          >
            ⠿
          </div>

          <div className="task-card-content">

            <h6 className="task-card-title">
              {task.title}
            </h6>

            {task.description && (
              <p className="task-card-desc">
                {task.description}
              </p>
            )}

            <div className="task-card-footer">

              <span
                className={`priority-badge priority-badge-${task.priority.toLowerCase()}`}
              >
                {
                  priorityLabel[
                  task.priority
                  ]
                }
              </span>

              <div
                className="task-card-actions"
                onPointerDown={(event) => {
                  event.stopPropagation();
                }}
                onClick={(event) => {
                  event.stopPropagation();
                }}
              >
                <button
                  type="button"
                  className="btn btn-sm btn-outline-primary"
                  onClick={() =>
                    setShowEdit(true)
                  }
                >
                  Sửa
                </button>

                <button
                  type="button"
                  className="btn btn-sm btn-outline-danger"
                  onClick={(e) => {
                    e.stopPropagation();

                    const confirmed = window.confirm(
                      `Bạn có chắc muốn xóa task "${task.title}" không?`
                    );

                    if (confirmed) {
                      onDelete(task.id);
                    }
                  }}
                >
                  Xóa
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

      {!overlay && showDetail && (
        <TaskDetail
          task={task}
          onClose={() =>
            setShowDetail(false)
          }
          onEditClick={() => {
            setShowDetail(false);
            setShowEdit(true);
          }}
        />
      )}

      {!overlay && showEdit && (
        <EditTask
          task={task}
          onClose={() =>
            setShowEdit(false)
          }
          onSave={(updatedTask) => {
            onEdit(updatedTask);
            setShowEdit(false);
          }}
        />
      )}
    </>
  );
}