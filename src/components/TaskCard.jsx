function TaskCard({ task, onDelete }) {

    return (

        <div className="task-card">

            <h3>{task.title}</h3>
            <p>Priority: {task.priority}</p>
            <div className="buttons">
                <button className="btn btn-outline-success btn-sm mx-1">Edit</button>
                <button className="btn btn-outline-danger btn-sm mx-1"  onClick={() => onDelete(task.id)}>Delete</button>
                <button className="btn btn-outline-secondary btn-sm mx-1">Move</button> 
            </div>
        </div>
    );
}
export default TaskCard;