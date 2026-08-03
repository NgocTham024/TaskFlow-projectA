import TaskCard from "./TaskCard";

function TaskColumn({ title, tasks }) {

    return (
        <div className="column">
            <h2>{title}</h2>
            {
                tasks
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
                        />
                    ))
            }
        </div>
    );
}
export default TaskColumn;