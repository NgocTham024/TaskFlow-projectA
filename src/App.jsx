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
  const newTask = {

    id: Date.now(),

    title,

    priority,

    status: "todo"

  }
  return (
    <div className="container">
      <Header />

      <TaskForm

        title={title}

        setTitle={setTitle}

        priority={priority}

        setPriority={setPriority}

        addTask={addTask}

      />

      <div className="board">
        <TaskColumn

          title="To Do"

          tasks={tasks}

        />
        <TaskColumn

          title="Doing"

          tasks={tasks}

        />
        <TaskColumn

          title="Done"

          tasks={tasks}

        />
      </div>
    </div>
  );
}

export default App;