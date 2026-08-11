import type { TaskPriority } from "../types/task";

interface TaskFormProps {
  title: string;
  priority: TaskPriority;
  setTitle: (value: string) => void;
  setPriority: (value: TaskPriority) => void;
  addTask: () => void;
}

function TaskForm({
  title,
  priority,
  setTitle,
  setPriority,
  addTask,
}: TaskFormProps) {
  return (
    <div className="task-form">
      <input
        type="text"
        placeholder="Enter task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTask();
          }
        }}
      />

      <select
        value={priority}
        onChange={(e) =>
          setPriority(e.target.value as TaskPriority)
        }
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <button
        type="button"
        onClick={addTask}
        className="add-task-button"
      >
        + Add Task
      </button>
    </div>
  );
}

export default TaskForm;