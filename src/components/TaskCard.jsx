import React, { useState } from 'react';
import EditTask from './EditTask';
import DeleteTask from './DeleteTask';

export default function TaskCard({ task, onChangeStatus, onEdit, onDelete }) {
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const getBadgeClass = (status) => {
    switch (status) {
      case 'Completed': return 'bg-success text-white';
      case 'In Progress': return 'bg-warning text-dark';
      case 'Todo': return 'bg-secondary text-white';
      default: return 'bg-light text-dark';
    }
  };

  const renderStatusButton = (task) => {
    switch (task.status) {
      case 'Todo':
        return <button className="btn btn-sm btn-outline-warning ms-2" onClick={() => onChangeStatus(task.id, 'In Progress')}>Đổi</button>;
      case 'In Progress':
        return <button className="btn btn-sm btn-outline-success ms-2" onClick={() => onChangeStatus(task.id, 'Completed')}>Đổi</button>;
      case 'Completed':
        return <button className="btn btn-sm btn-outline-secondary ms-2" onClick={() => onChangeStatus(task.id, 'Todo')}>Đổi</button>;
      default: return null;
    }
  };

  return (
    <>
      <div className="card shadow-sm border custom-card bg-light mb-3">
        <div className="card-body p-3">
          <h5 className="card-title fw-bold text-dark mb-2">{task?.title}</h5>
          <p className="card-text text-secondary small mb-3">{task?.description}</p>
          
          <div className="d-flex justify-content-between align-items-center pt-2 border-top">
            <div className="d-flex align-items-center">
              <span className={`badge ${getBadgeClass(task?.status)}`}>{task?.status}</span>
              {renderStatusButton(task)}
            </div>
            <div>
              <button className="btn btn-sm btn-outline-primary me-2" onClick={() => setShowEdit(true)}>Sửa</button>
              <button className="btn btn-sm btn-outline-danger" onClick={() => setShowDelete(true)}>Xóa</button>
            </div>
          </div>
        </div>
      </div>

      {showEdit && <EditTask task={task} onClose={() => setShowEdit(false)} onSave={onEdit} />}
      {showDelete && <DeleteTask task={task} onClose={() => setShowDelete(false)} onDeleteConfirm={onDelete} />}
    </>
  );
}