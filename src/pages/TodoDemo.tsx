import { useState } from "react";

import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DragStartEvent,
} from "@dnd-kit/core";

import Header from "../components/Header";
import TaskForm from "../components/TaskForm";
import TaskColumn from "../components/TaskColumn";
import SearchBar from "../components/SearchBar";
import TaskCard from "../components/TaskCard";

import type {
  Task,
  TaskPriority,
  TaskStatus,
} from "../types/task";

import "./TodoDemo.css";

function App() {
  // dnd-kit sensor
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  // task state
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Design UI",
      description: "",
      priority: "High",
      status: "todo",
    },
    {
      id: 2,
      title: "Create Login API",
      description: "",
      priority: "Medium",
      status: "todo",
    },
    {
      id: 3,
      title: "Home",
      description: "",
      priority: "High",
      status: "todo",
    },
  ]);

  // form state
  const [title, setTitle] = useState("");

  const [priority, setPriority] =
    useState<TaskPriority>("High");

  // search state
  const [search, setSearch] = useState("");

  // active drag task
  const [activeTask, setActiveTask] =
    useState<Task | null>(null);

  // add task
  const addTask = () => {
    if (!title.trim()) {
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      title: title.trim(),
      description: "",
      priority,
      status: "todo",
    };

    setTasks((currentTasks) => [
      ...currentTasks,
      newTask,
    ]);

    setTitle("");
    setPriority("High");
  };

  // drag start
  const handleDragStart = (
    event: DragStartEvent
  ) => {
    const taskId = Number(event.active.id);

    const task = tasks.find(
      (task) => task.id === taskId
    );

    if (task) {
      setActiveTask(task);
    }
  };

  // drag end / move task
  const handleDragEnd = (
    event: DragEndEvent
  ) => {
    const { active, over } = event;

    // Không còn kéo nữa
    setActiveTask(null);

    // Nếu thả ra ngoài một column
    if (!over) {
      return;
    }

    const taskId = Number(active.id);

    const newStatus =
      String(over.id) as TaskStatus;

    // Chỉ cho phép 3 status hợp lệ
    if (
      newStatus !== "todo" &&
      newStatus !== "doing" &&
      newStatus !== "done"
    ) {
      return;
    }

    // Cập nhật status của task
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: newStatus,
            }
          : task
      )
    );
  };

  // drag cancel
  const handleDragCancel = () => {
    setActiveTask(null);
  };

  // search
  const filteredTasks = tasks.filter(
    (task) =>
      task.title
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  // UI
  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <div className="todo-demo">

        <Header />

        <SearchBar
          value={search}
          onChange={setSearch}
        />

        <TaskForm
          title={title}
          priority={priority}
          setTitle={setTitle}
          setPriority={setPriority}
          addTask={addTask}
        />

        <div className="board">

          <TaskColumn
            title="To Do"
            status="todo"
            tasks={filteredTasks}
          />

          <TaskColumn
            title="Doing"
            status="doing"
            tasks={filteredTasks}
          />

          <TaskColumn
            title="Done"
            status="done"
            tasks={filteredTasks}
          />

        </div>

        {/* Card hiển thị khi đang kéo */}
        <DragOverlay dropAnimation={null}>
          {activeTask ? (
            <TaskCard
              task={activeTask}
              overlay
            />
          ) : null}
        </DragOverlay>

      </div>
    </DndContext>
  );
}

export default App;