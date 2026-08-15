import { useState } from "react";

import {
  DndContext,
  DragOverlay,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DragStartEvent,
} from "@dnd-kit/core";

import "./Board.css";

import type { Task } from "../../types/task";
import Column from "./column";
import AddTask from "./AddTask";
import TaskCard from "./taskCard";

const COLUMNS: {
  title: string;
  status: Task["status"];
}[] = [
  {
    title: "Cần Làm",
    status: "todo",
  },
  {
    title: "Đang Làm",
    status: "doing",
  },
  {
    title: "Hoàn Thành",
    status: "done",
  },
];

interface BoardProps {
  searchQuery?: string;
  externalShowAdd?: boolean;
  onCloseExternalAdd?: () => void;
}

export default function Board({
  searchQuery = "",
  externalShowAdd,
  onCloseExternalAdd,
}: BoardProps = {}) {
  // =========================
  // DND SENSOR
  // =========================

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 6,
      },
    })
  );

  // =========================
  // TASKS
  // =========================

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Demo 1",
      description: "Chuyển đổi các component",
      priority: "High",
      status: "todo",
    },
    {
      id: 2,
      title: "Demo 2",
      description: "Tích hợp drag and drop",
      priority: "Medium",
      status: "doing",
    },
    {
      id: 3,
      title: "Demo 3",
      description: "Hoàn thiện UI",
      priority: "Low",
      status: "done",
    },
  ]);

  // Task đang kéo
  const [activeTask, setActiveTask] =
    useState<Task | null>(null);

  // =========================
  // ADD TASK
  // =========================

  const [showAddModal, setShowAddModal] =
    useState(false);

  const isAddModalOpen =
    externalShowAdd ?? showAddModal;

  const handleCloseModal = () => {
    setShowAddModal(false);
    onCloseExternalAdd?.();
  };

  // =========================
  // DRAG START
  // =========================

  const handleDragStart = (
    event: DragStartEvent
  ) => {
    const taskId = Number(event.active.id);

    const task = tasks.find(
      (item) => item.id === taskId
    );

    if (task) {
      setActiveTask(task);
    }
  };

  // =========================
  // DRAG END
  // =========================

  const handleDragEnd = (
    event: DragEndEvent
  ) => {
    const { active, over } = event;

    setActiveTask(null);

    if (!over) {
      return;
    }

    const activeId = Number(active.id);
    const overId = Number(over.id);

    setTasks((currentTasks) => {
      const activeIndex =
        currentTasks.findIndex(
          (task) => task.id === activeId
        );

      if (activeIndex === -1) {
        return currentTasks;
      }

      const activeTask =
        currentTasks[activeIndex];

      // =====================================
      // TÌM TASK ĐÍCH
      // =====================================

      const overTask =
        currentTasks.find(
          (task) => task.id === overId
        );

      // =====================================
      // THẢ VÀO COLUMN TRỐNG
      // =====================================

      if (!overTask) {
        const newStatus =
          over.id as Task["status"];

        if (
          newStatus !== "todo" &&
          newStatus !== "doing" &&
          newStatus !== "done"
        ) {
          return currentTasks;
        }

        return currentTasks.map((task) =>
          task.id === activeId
            ? {
                ...task,
                status: newStatus,
              }
            : task
        );
      }

      // =====================================
      // THẢ LÊN CHÍNH NÓ
      // =====================================

      if (activeId === overTask.id) {
        return currentTasks;
      }

      // =====================================
      // XÁC ĐỊNH TRÊN / DƯỚI TASK ĐÍCH
      // =====================================

      const activeRect =
        active.rect.current.translated;

      const overRect =
        over.rect;

      if (!activeRect) {
        return currentTasks;
      }

      // Tâm của task đang kéo
      const activeCenter =
        activeRect.top +
        activeRect.height / 2;

      // Tâm của task đích
      const overCenter =
        overRect.top +
        overRect.height / 2;

      // true = thả phía dưới task đích
      const insertAfter =
        activeCenter > overCenter;

      // =====================================
      // XÓA TASK KHỎI VỊ TRÍ CŨ
      // =====================================

      const newTasks =
        [...currentTasks];

      newTasks.splice(activeIndex, 1);

      // =====================================
      // TÌM LẠI VỊ TRÍ TASK ĐÍCH
      // =====================================

      const newOverIndex =
        newTasks.findIndex(
          (task) => task.id === overTask.id
        );

      if (newOverIndex === -1) {
        return currentTasks;
      }

      // =====================================
      // ĐỔI STATUS THEO COLUMN MỚI
      // =====================================

      const movedTask: Task = {
        ...activeTask,
        status: overTask.status,
      };

      // =====================================
      // INSERT BEFORE / AFTER
      // =====================================

      const insertIndex = insertAfter
        ? newOverIndex + 1
        : newOverIndex;

      newTasks.splice(
        insertIndex,
        0,
        movedTask
      );

      return newTasks;
    });
  };

  // =========================
  // DRAG CANCEL
  // =========================

  const handleDragCancel = () => {
    setActiveTask(null);
  };

  // =========================
  // ADD TASK
  // =========================

  const handleAddTask = (
    newTask: Task
  ) => {
    setTasks((currentTasks) => [
      ...currentTasks,
      newTask,
    ]);
  };

  // =========================
  // EDIT TASK
  // =========================

  const handleEditTask = (
    updatedTask: Task
  ) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === updatedTask.id
          ? updatedTask
          : task
      )
    );
  };

  // =========================
  // DELETE TASK
  // =========================

  const handleDeleteTask = (
    taskId: number
  ) => {
    setTasks((currentTasks) =>
      currentTasks.filter(
        (task) => task.id !== taskId
      )
    );
  };

  // =========================
  // SEARCH
  // =========================

  const normalizedSearch =
    searchQuery.trim().toLowerCase();

  const visibleTasks =
    normalizedSearch
      ? tasks.filter((task) =>
          `${task.title} ${
            task.description ?? ""
          }`
            .toLowerCase()
            .includes(normalizedSearch)
        )
      : tasks;

  // =========================
  // UI
  // =========================

  return (
    <div className="board-container">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
      >
        <div className="board-columns">
          {COLUMNS.map((column) => (
            <Column
              key={column.status}
              title={column.title}
              status={column.status}
              tasks={visibleTasks.filter(
                (task) =>
                  task.status ===
                  column.status
              )}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
            />
          ))}
        </div>

        {/* Drag Overlay */}
        <DragOverlay dropAnimation={null}>
          {activeTask ? (
            <TaskCard
              task={activeTask}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
              overlay
            />
          ) : null}
        </DragOverlay>
      </DndContext>

      {/* Add Task */}
      {isAddModalOpen && (
        <AddTask
          onClose={handleCloseModal}
          onAdd={handleAddTask}
        />
      )}
    </div>
  );
}