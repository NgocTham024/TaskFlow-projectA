import { useState } from 'react';
import TaskCard from './TaskCardTemp';
import AddTask from './AddTask';
import './TaskSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export interface Task {
  id: number;
  title: string;
  description: string;
  status: 'Todo' | 'In Progress' | 'Completed';
}

export default function TaskSection() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Demo 1',
      description: 'Chuyển đổi các component',
      status: 'In Progress'
    },
    {
      id: 2,
      title: 'Demo 2',
      description: 'Bật tắt task',
      status: 'Completed'
    }
  ]);

  const [showAddModal, setShowAddModal] = useState<boolean>(false);

  const handleAddTask = (newTask: Task) => {
    setTasks(prev => [...prev, newTask]);
  };

  const changeTaskStatus = (taskId: number, newStatus: Task['status']) => {
    setTasks(prev => prev.map(t => t.id === taskId ? { ...t, status: newStatus } : t));
  };

  const handleEditTask = (updatedTask: Task) => {
    setTasks(prev => prev.map(t => t.id === updatedTask.id ? updatedTask : t));
  };

  const handleDeleteTask = (taskId: number) => {
    setTasks(prev => prev.filter(t => t.id !== taskId));
  };

  return (
    <div className="container task-section-container">
      <h3 className="mb-4 text-primary fw-bold">Bảng Công Việc</h3>
      <div className="row g-4">
        <div className="col-lg-4">
          <div className="task-column-wrapper column-todo">
            <h5 className="column-title-todo">Việc Cần Làm</h5>
            {tasks.filter(t => t.status === 'Todo').map(task => (
              <TaskCard key={task.id} task={task} onChangeStatus={changeTaskStatus} onEdit={handleEditTask} onDelete={handleDeleteTask} />
            ))}
          </div>
        </div>

        <div className="col-lg-4">
          <div className="task-column-wrapper column-progress">
            <h5 className="column-title-progress">Đang Thực Hiện</h5>
            {tasks.filter(t => t.status === 'In Progress').map(task => (
              <TaskCard key={task.id} task={task} onChangeStatus={changeTaskStatus} onEdit={handleEditTask} onDelete={handleDeleteTask} />
            ))}
          </div>
        </div>

        <div className="col-lg-4">
          <div className="task-column-wrapper column-completed">
            <h5 className="column-title-completed">Đã Hoàn Thành</h5>
            {tasks.filter(t => t.status === 'Completed').map(task => (
              <TaskCard key={task.id} task={task} onChangeStatus={changeTaskStatus} onEdit={handleEditTask} onDelete={handleDeleteTask} />
            ))}
          </div>
        </div>
      </div>

      <button 
        className="btn btn-primary btn-floating-add fw-bold"
        onClick={() => setShowAddModal(true)}
      >
        +
      </button>

      {showAddModal && <AddTask onClose={() => setShowAddModal(false)} onAdd={handleAddTask} />}
    </div>
  );
}