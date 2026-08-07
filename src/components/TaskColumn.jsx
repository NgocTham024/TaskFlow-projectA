import React from "react";
import TaskCard from "./Task Card/TaskCard";

function TaskColumn({ title, tasks, moveTask, onDelete, onEdit }) {
    return (
        <div className="column">
            <h2>{title}</h2>

            {tasks
                .filter((task) => {
                    if (title === "To Do") {
                        return task.status === "todo";
                    }

                    if (title === "Doing") {
                        return task.status === "doing";
                    }

                    if (title === "Done") {
                        return task.status === "done";
                    }

                    return false;
                })
                .map((task) => (
                    <TaskCard
                        key={task.id}
                        task={task}
                        moveTask={moveTask}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />
                ))}
        </div>
    );
}

export default TaskColumn;