function EditTask(tasks, editingTask, title, priority) {
    return tasks.map((task) =>
        task.id === editingTask.id
            ? {
                ...task,
                title,
                priority
            }
            : task
    );
}

export default EditTask;