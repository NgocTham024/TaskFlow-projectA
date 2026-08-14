import { useState } from "react";
import "./Board.css";
import type { Task } from "../../types/task";
import Column from "./column";
import AddTask from "./AddTask";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";

const COLUMNS: { title: string; status: Task["status"] }[] = [
  { title: "Cần Làm", status: "todo" },
  { title: "Đang Làm", status: "doing" },
  { title: "Hoàn Thành", status: "done" },
];

interface BoardProps {
  searchQuery?: string;
  externalShowAdd?: boolean;
  onCloseExternalAdd?: () => void;
}

export default function Board({ searchQuery = "", externalShowAdd, onCloseExternalAdd }: BoardProps = {}) {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Demo 1", description: "Chuyển đổi các component", priority: "High", status: "todo" },
    { id: 2, title: "Demo 2", description: "Tích hợp drag and drop", priority: "Medium", status: "doing" },
    { id: 3, title: "Demo 3", description: "Hoàn thiện UI", priority: "Low", status: "done" },
  ]);

  const [showAddModal, setShowAddModal] = useState<boolean>(false);

  // Kết hợp modal trigger từ layout bên ngoài và nội bộ
  const isAddModalOpen = externalShowAdd ?? showAddModal;
  const handleCloseModal = () => {
    setShowAddModal(false);
    onCloseExternalAdd?.();
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;
    const taskId = active.id as number;
    const newStatus = over.id as Task["status"];
    if (!["todo", "doing", "done"].includes(newStatus)) return;
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, status: newStatus } : t))
    );
  };

  const handleAddTask = (newTask: Task) => {
    setTasks((prev) => [...prev, newTask]);
  };

  const handleEditTask = (updatedTask: Task) => {
    setTasks((prev) => prev.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
  };

  const handleDeleteTask = (taskId: number) => {
    setTasks((prev) => prev.filter((t) => t.id !== taskId));
  };

  const normalizedSearch = searchQuery.trim().toLowerCase();
  const visibleTasks = normalizedSearch
    ? tasks.filter((task) =>
        `${task.title} ${task.description}`.toLowerCase().includes(normalizedSearch)
      )
    : tasks;

  return (
    <div className="board-container">
      <DndContext onDragEnd={handleDragEnd}>
        <div className="board-columns">
          {COLUMNS.map((col) => (
            <Column
              key={col.status}
              title={col.title}
              tasks={visibleTasks.filter((t) => t.status === col.status)}
              status={col.status}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
            />
          ))}
        </div>
      </DndContext>

      {isAddModalOpen && (
        <AddTask onClose={handleCloseModal} onAdd={handleAddTask} />
      )}
    </div>
  );
}