import { useState } from 'react';
import TaskCard from './TaskCard';
import type { Task } from './TaskCard';
import AddTask from './AddTask';
import EditTask from './EditTask';
import DeleteTask from './DeleteTask';
import './TaskSection.css';

export default function TaskSection() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Nghiên cứu người dùng',
      label: 'Nghiên cứu',
      deadline: '10/5',
      commentsCount: 3,
      priority: 'High',
      status: 'To Do',
    },
    {
      id: 2,
      title: 'Nghiên cứu thị trường',
      label: 'Thiết kế',
      deadline: '10/9',
      commentsCount: 1,
      priority: 'Medium',
      status: 'To Do',
    },
    {
      id: 3,
      title: 'Thiết kế giao diện chính',
      label: 'Thiết kế',
      deadline: '7/4',
      commentsCount: 3,
      priority: 'High',
      status: 'In Progress',
    },
    {
      id: 4,
      title: 'Xây dựng trang chủ',
      label: 'Phát triển',
      deadline: '10/4',
      commentsCount: 1,
      priority: 'Medium',
      status: 'In Progress',
    },
  ]);

  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [deletingTaskId, setDeletingTaskId] = useState<number | null>(null);

  const priorityWeight = { High: 3, Medium: 2, Low: 1 };

  const handleAddTask = (newTask: { title: string; status: string }) => {
    const createdTask: Task = {
      id: Date.now(),
      title: newTask.title || 'Công việc mới',
      label: 'Nghiên cứu',
      deadline: '12/12',
      commentsCount: 0,
      priority: 'Medium',
      status: newTask.status || 'To Do',
    };
    setTasks((prevTasks) => [...prevTasks, createdTask]);
  };

  const handleUpdateDeadline = (id: number, newDeadline: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === id ? { ...t, deadline: newDeadline } : t))
    );
  };

  const handleUpdateComments = (id: number, newCount: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === id ? { ...t, commentsCount: newCount } : t))
    );
  };

  // 🟢 Hàm xử lý dịch chuyển cột
  const handleMoveTask = (id: number, newStatus: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === id ? { ...t, status: newStatus } : t))
    );
  };

  const columns = [
    { title: 'Chưa bắt đầu', status: 'To Do', dotColor: '#a0a0a0' },
    { title: 'Đang làm', status: 'In Progress', dotColor: '#fadb14' },
    { title: 'Đã hoàn thành', status: 'Completed', dotColor: '#52c41a' },
  ];

  return (
    <div className="task-section">
      <div className="kanban-board">
        {columns.map((col) => {
          const colTasks = tasks
            .filter((t) => t.status === col.status)
            .sort((a, b) => priorityWeight[b.priority] - priorityWeight[a.priority]);

          return (
            <div className="kanban-column" key={col.status}>
              <div className="column-header">
                <div className="column-title-group">
                  <span className="status-dot" style={{ backgroundColor: col.dotColor }}></span>
                  <h3>{col.title}</h3>
                  <span className="task-count">{colTasks.length}</span>
                </div>
                <button className="btn-add-icon" onClick={() => setIsAddOpen(true)}>+</button>
              </div>

              <div className="column-body">
                {colTasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onEdit={() => setEditingTask(task)}
                    onDelete={() => setDeletingTaskId(task.id)}
                    onUpdateDeadline={(d) => handleUpdateDeadline(task.id, d)}
                    onUpdateComments={(c) => handleUpdateComments(task.id, c)}
                    onMove={(newStatus) => handleMoveTask(task.id, newStatus)}
                  />
                ))}
              </div>

              <button className="btn-add-card" onClick={() => setIsAddOpen(true)}>
                + Thêm thẻ
              </button>
            </div>
          );
        })}
      </div>

      {isAddOpen && (
        <AddTask onClose={() => setIsAddOpen(false)} onAdd={handleAddTask} />
      )}

      {editingTask && (
        <EditTask
          task={editingTask}
          onClose={() => setEditingTask(null)}
          onSave={(updated) => {
            setTasks((prevTasks) =>
              prevTasks.map((t) => (t.id === updated.id ? { ...t, ...updated } : t))
            );
            setEditingTask(null);
          }}
        />
      )}

      {deletingTaskId && (
        <DeleteTask
          onClose={() => setDeletingTaskId(null)}
          onConfirm={() => {
            setTasks((prevTasks) => prevTasks.filter((t) => t.id !== deletingTaskId));
            setDeletingTaskId(null);
          }}
        />
      )}
    </div>
  );
}