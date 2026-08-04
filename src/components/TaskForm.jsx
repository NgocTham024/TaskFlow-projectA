function TaskForm({
  title,
  setTitle,
  priority,
  setPriority,
  addTask,
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

      <button className="btn btn-primary btn-sm my-1" onClick={addTask}>
        Add Task
      </button>
    </div>
  );
}

export default TaskForm;