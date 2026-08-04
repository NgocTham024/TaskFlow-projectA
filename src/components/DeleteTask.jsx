import React, { useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";

function DeleteTask() {
    const [tasks, setTasks] = useState([]);

    function handleDelete(indexToDelete) {
        setTasks((currentTasks) =>
            currentTasks.filter((task, index) => index !== indexToDelete)
        );
    }

    return (
        <div>
            <ol>
                {tasks.map((task, index) => (
                    <li key={index} className="mb-2">
                        <span className="text me-3">{task}</span>

                        <button
                            type="button"
                            className="btn btn-outline-danger btn-sm"
                            onClick={() => handleDelete(index)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ol>
        </div>
    );
}
export default DeleteTask;