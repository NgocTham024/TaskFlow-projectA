function TaskCard({ task, moveTask }) {

    return (

        <div className="task-card">

            <h3>{task.title}</h3>
            <p>Priority: {task.priority}</p>
            <div className="buttons">
                <button>Edit</button>
                <button>Delete</button>
                <button onClick={() => moveTask(task.id)}>
                    Move
                </button>
            </div>
        </div>
    );
}
export default TaskCard;