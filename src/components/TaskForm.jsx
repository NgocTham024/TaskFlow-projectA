function TaskForm({
  title,
  setTitle,
  priority,
  setPriority,
  addTask,
  updateTask,
  editingTask,
}) {
  return (
    <div className="task-form">
      <input
        type="text"
        placeholder="Enter task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <button
        onClick={
          editingTask
            ? updateTask
            : addTask
        }
      >
        {
          editingTask
            ? "Save"
            : "Add Task"
        }
      </button>
    </div>
  );
}

export default TaskForm;