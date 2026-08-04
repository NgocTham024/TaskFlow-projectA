function TaskCard({ task, onEdit }) {

    return (

        <div className="task-card">

            <h3>{task.title}</h3>
            <p>Priority: {task.priority}</p>
            <div className="buttons">
                <button onClick={() => onEdit(task)}>Edit</button>
                <button>Delete</button>
                <button>Move</button>
            </div>
        </div>
    );
}
export default TaskCard;