import { useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import EditTask from "./components/EditTask";

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

    const deleteTask = (id) => {
        setTasks((currentTasks) =>
            currentTasks.filter((task) => task.id !== id)
        );
    };
    const handleEdit = (task) => {
        setEditingTask(task);
        setTitle(task.title);
        setPriority(task.priority);

    };
    const updateTask = () => {
        const updatedTasks = EditTask(
            tasks,
            editingTask,
            title,
            priority
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
                    onDelete={deleteTask}
                    onEdit={handleEdit}
                />
                <TaskColumn
                    title="Doing"
                    tasks={tasks}
                    onDelete={deleteTask}
                    onEdit={handleEdit}
                />
                <TaskColumn
                    title="Done"
                    tasks={tasks}
                    onDelete={deleteTask}
                    onEdit={handleEdit}
                />
            </div>
        </div>
    );
}
export default App;