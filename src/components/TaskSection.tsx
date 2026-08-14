import { useState } from 'react';
import TaskCard, { type Task } from './TaskCard';
import AddTask from './AddTask';
import EditTask from './EditTask';
import DeleteTask from './DeleteTask';
import './TaskSection.css';

export default function TaskSection() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Design UI', priority: 'High', status: 'To Do', assignee: 'Nguyễn Văn A', deadline: '20/08/2026' },
    { id: 2, title: 'Create Login API', priority: 'Medium', status: 'In Progress', assignee: 'Trần Thị B', deadline: '22/08/2026' },
  ]);

  const [showAdd, setShowAdd] = useState(false);
  const [editTask, setEditTask] = useState<Task | null>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const columns = ['To Do', 'In Progress', 'Completed'];

  return (
    <div className="task-section">
      <div className="kanban-board">
        {columns.map((col) => {
          const colTasks = tasks.filter((t) => t.status === col);
          return (
            <div key={col} className="kanban-column">
              <div className="column-header">
                <h3>{col}</h3>
                <span className="task-count">{colTasks.length}</span>
              </div>

              <div className="column-body">
                {colTasks.map((t) => (
                  <TaskCard
                    key={t.id}
                    task={t}
                    onEdit={() => setEditTask(t)}
                    onDelete={() => setDeleteId(t.id)}
                    onUpdateDeadline={(dl) => setTasks(tasks.map((x) => (x.id === t.id ? { ...x, deadline: dl } : x)))}
                    onMove={(st) => setTasks(tasks.map((x) => (x.id === t.id ? { ...x, status: st } : x)))}
                  />
                ))}
              </div>

              <button className="btn-add-card" onClick={() => setShowAdd(true)}>
                + Thêm task
              </button>
            </div>
          );
        })}
      </div>

      {showAdd && (
        <AddTask
          onClose={() => setShowAdd(false)}
          onAdd={(newTask) => setTasks([...tasks, { id: Date.now(), priority: 'Medium', ...newTask }])}
        />
      )}

      {editTask && (
        <EditTask
          task={editTask}
          onClose={() => setEditTask(null)}
          onSave={(updated) => setTasks(tasks.map((x) => (x.id === updated.id ? updated : x)))}
        />
      )}

      {deleteId && (
        <DeleteTask
          onClose={() => setDeleteId(null)}
          onConfirm={() => { setTasks(tasks.filter((x) => x.id !== deleteId)); setDeleteId(null); }}
        />
      )}
    </div>
  );
}