import type { Task } from './TaskSection';

interface TaskDetailProps {
  task: Task;
  onClose: () => void;
  onEditClick: () => void;
}

export default function TaskDetail({ task, onClose, onEditClick }: TaskDetailProps) {
  return (
    <div className="modal-backdrop-custom">
      <div className="modal-dialog-custom">
        <div className="modal-header-custom">
          <h5 className="m-0 fw-bold text-primary">Chi tiết công việc</h5>
          <button type="button" className="modal-close-btn" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body-custom">
          <h4 className="fw-bold mb-2">{task.title}</h4>
          <span className="badge-status task-card-badge-todo mb-3">{task.status}</span>
          <div className="task-detail-description">
            <p className="m-0">{task.description || 'Chưa có mô tả.'}</p>
          </div>
        </div>
        <div className="modal-footer-custom">
          <button type="button" className="btn btn-secondary" onClick={onClose}>Đóng</button>
          <button 
            type="button" 
            className="btn btn-primary" 
            onClick={() => {
              onClose();
              onEditClick();
            }}
          >
            Chỉnh sửa
          </button>
        </div>
      </div>
    </div>
  );
}