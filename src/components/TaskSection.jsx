import React, { useState } from 'react';
import TaskCard from './TaskCard';
import AddTask from './AddTask';
import './TaskSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TaskSection() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Thiết kế giao diện TaskFlow',
      description: 'Chuyển đổi các component sang Vite + React',
      status: 'In Progress'
    },
    {
      id: 2,
      title: 'Tích hợp Bootstrap Modal',
      description: 'Xử lý bật/tắt Modal cho EditTask và DeleteTask',
      status: 'Completed'
    }
  ]);

  const [showAddModal, setShowAddModal] = useState(false);

  // thêm Task mới
  const handleAddTask = (newTask) => {
    setTasks(prev => [...prev, newTask]);
  };

  // đổi trạng thái
  const changeTaskStatus = (taskId, newStatus) => {
    setTasks(prev => prev.map(t => t.id === taskId ? { ...t, status: newStatus } : t));
  };

  // Sửa Task
  const handleEditTask = (updatedTask) => {
    setTasks(prev => prev.map(t => t.id === updatedTask.id ? updatedTask : t));
  };

  // xóa Task
  const handleDeleteTask = (taskId) => {
    setTasks(prev => prev.filter(t => t.id !== taskId));
  };

  return (
    <div className="container py-4 position-relative">
      <h3 className="mb-4 text-primary fw-bold">Bảng Công Việc</h3>
      <div className="row g-4">
        <div className="col-lg-4">
          <div className="border border-secondary p-3 rounded bg-white h-100">
            <h5 className="mb-3 text-secondary border-bottom pb-2">Việc Cần Làm</h5>
            {tasks.filter(t => t.status === 'Todo').map(task => (
              <TaskCard key={task.id} task={task} onChangeStatus={changeTaskStatus} onEdit={handleEditTask} onDelete={handleDeleteTask} />
            ))}
          </div>
        </div>

        <div className="col-lg-4">
          <div className="border border-warning p-3 rounded bg-white h-100">
            <h5 className="mb-3 text-warning border-bottom pb-2">Đang Thực Hiện</h5>
            {tasks.filter(t => t.status === 'In Progress').map(task => (
              <TaskCard key={task.id} task={task} onChangeStatus={changeTaskStatus} onEdit={handleEditTask} onDelete={handleDeleteTask} />
            ))}
          </div>
        </div>

        <div className="col-lg-4">
          <div className="border border-success p-3 rounded bg-white h-100">
            <h5 className="mb-3 text-success border-bottom pb-2">Đã Hoàn Thành</h5>
            {tasks.filter(t => t.status === 'Completed').map(task => (
              <TaskCard key={task.id} task={task} onChangeStatus={changeTaskStatus} onEdit={handleEditTask} onDelete={handleDeleteTask} />
            ))}
          </div>
        </div>
      </div>

      {/* add button */}
      <button 
        className="btn btn-primary btn-floating-add fw-bold"
        onClick={() => setShowAddModal(true)}
      >
        +
      </button>

      {/* Popup Thêm Task */}
      {showAddModal && <AddTask onClose={() => setShowAddModal(false)} onAdd={handleAddTask} />}
    </div>
  );
}