import React from 'react';
import './TaskStyles.css';

const TaskDetailModal = ({ isOpen, onClose, task }) => {
  if (!isOpen || !task) return null;

  return (
    <div className="tf-modal-overlay">
      <div className="tf-modal-content">
        <button onClick={onClose} className="tf-modal-close-btn">
          <i className="bi bi-x-lg"></i>
        </button>

        <span className={`tf-task-label ${task.labelBgClass || 'label-blue'}`}>
          {task.label || "Nhiệm vụ"}
        </span>

        <h3 className="tf-modal-title">{task.title}</h3>

        <div className="tf-modal-info-box">
          <div className="tf-modal-info-item">
            <i className="bi bi-person"></i>
            <span>Người phụ trách: <b>Thành viên 3</b></span>
          </div>
          <div className="tf-modal-info-item">
            <i className="bi bi-calendar3"></i>
            <span>Thời gian: <b>{task.date || "Chưa có"}</b></span>
          </div>
          <div className="tf-modal-info-item">
            <i className="bi bi-chat-left-text"></i>
            <span>Bình luận: <b>{task.comments || 0} lượt</b></span>
          </div>
        </div>

        <button onClick={onClose} className="tf-btn-primary full-width">
          Đóng
        </button>
      </div>
    </div>
  );
};

export default TaskDetailModal;