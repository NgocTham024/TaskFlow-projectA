import { useState } from 'react';
import EditTask from './EditTask';
import TaskDetail from './TaskDetail';
import type { Task } from './TaskSection';

interface TaskCardProps {
  task: Task;
  onChangeStatus: (id: number, status: Task['status']) => void;
  onEdit: (task: Task) => void;
  onDelete: (id: number) => void;
}

export default function TaskCard({ task, onChangeStatus, onEdit, onDelete }: TaskCardProps) {
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const [showDetail, setShowDetail] = useState<boolean>(false);

  const getBadgeClass = (status?: Task['status']) => {
    switch (status) {
      case 'Completed': return 'task-card-badge-completed';
      case 'In Progress': return 'task-card-badge-progress';
      case 'Todo': return 'task-card-badge-todo';
      default: return 'task-card-badge-default';
    }
  };

  const renderStatusButton = (taskItem: Task) => {
    switch (taskItem.status) {
      case 'Todo':
        return <button className="btn btn-sm btn-outline-warning ms-2" onClick={(e) => { e.stopPropagation(); onChangeStatus(taskItem.id, 'In Progress'); }}>Đổi</button>;
      case 'In Progress':
        return <button className="btn btn-sm btn-outline-success ms-2" onClick={(e) => { e.stopPropagation(); onChangeStatus(taskItem.id, 'Completed'); }}>Đổi</button>;
      case 'Completed':
        return <button className="btn btn-sm btn-outline-secondary ms-2" onClick={(e) => { e.stopPropagation(); onChangeStatus(taskItem.id, 'Todo'); }}>Đổi</button>;
      default: return null;
    }
  };

  return (
    <>
      <div className="custom-card" onClick={() => setShowDetail(true)}>
        <div className="p-3">
          <h5 className="fw-bold text-dark mb-2">{task?.title}</h5>
          <p className="text-secondary small mb-3">{task?.description}</p>
          
          <div className="card-footer-flex">
            <div className="d-flex align-items-center">
              <span className={`badge-status ${getBadgeClass(task?.status)}`}>{task?.status}</span>
              {renderStatusButton(task)}
            </div>
            <div>
              <button 
                className="btn btn-sm btn-outline-primary me-2" 
                onClick={(e) => { e.stopPropagation(); setShowEdit(true); }}
              >
                Sửa
              </button>
              <button 
                className="btn btn-sm btn-outline-danger" 
                onClick={(e) => { e.stopPropagation(); onDelete(task.id); }}
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      </div>

      {showDetail && (
        <TaskDetail 
          task={task} 
          onClose={() => setShowDetail(false)} 
          onEditClick={() => setShowEdit(true)} 
        />
      )}
      {showEdit && <EditTask task={task} onClose={() => setShowEdit(false)} onSave={onEdit} />}
    </>
  );
}