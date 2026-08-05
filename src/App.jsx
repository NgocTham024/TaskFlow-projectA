import { useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";

function App() {
  const [tasks, setTasks] = useState([

    {
      id: 1,
      title: "Design UI",
      priority: "High",
      status: "todo"
    },

    {
      id: 2,
      title: "Create Login API",
      priority: "Medium",
      status: "todo"
    }
  ]);

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("High");
  const [editingTask, setEditingTask] = useState(null);

  const addTask = () => {

    if (title.trim() === "") {
      alert("Please enter task name");
      return;
    }

    const newTask = {
      id: Date.now(),
      title: title,
      priority: priority,
      status: "todo"
    };

    setTasks([...tasks, newTask]);
    setTitle("");
    setPriority("High");
  };

  const handleEdit = (task) => {

    setEditingTask(task);
    setTitle(task.title);
    setPriority(task.priority);

  };

  const updateTask = () => {

    if (title.trim() === "") {
      alert("Please enter task name");
      return;
    }

    const updatedTasks = tasks.map((task) =>
      task.id === editingTask.id
        ? {
            ...task,
            title: title,
            priority: priority
          }
        : task
    );

    setTasks(updatedTasks);
    setEditingTask(null);
    setTitle("");
    setPriority("High");

  };

  return (
    <div className="container">
      <Header />

      <TaskForm
        title={title}
        setTitle={setTitle}
        priority={priority}
        setPriority={setPriority}
        addTask={addTask}
        updateTask={updateTask}
        editingTask={editingTask}
      />

      <div className="board">
        <TaskColumn
          title="To Do"
          tasks={tasks}
          onEdit={handleEdit}
        />

        <TaskColumn
          title="Doing"
          tasks={tasks}
          onEdit={handleEdit}
        />

        <TaskColumn
          title="Done"
          tasks={tasks}
          onEdit={handleEdit}
        />
      </div>
    </div>
  );
}

export default App;