import React, { useEffect, useState } from 'react';
import './TaskStyles.css';

const TaskCard = ({ 
  task, 
  title, 
  priority, 
  onEdit, 
  onMove, 
  onDelete 
}) => {
  // Chuyển trạng thái công việc
  const [, setTick] = useState(0);

  useEffect(() => {
    const handleRefresh = () => setTick(t => t + 1);
    window.addEventListener('tf-force-refresh', handleRefresh);
    return () => window.removeEventListener('tf-force-refresh', handleRefresh);
  }, []);

  const displayTitle = task?.title || title || "Chưa có tên";
  const displayPriority = task?.priority || priority || "Medium";

  const getLabelClass = (p) => {
    if (p === 'High') return 'label-purple';
    if (p === 'Low') return 'label-blue';
    return 'label-amber';
  };

  //  nhảy cột 
  const handleMoveClick = (e) => {
    e.stopPropagation();

    if (task) {
      const nextStatusMap = {
        'todo': 'doing',
        'doing': 'done',
        'done': 'todo'
      };
      // 1. Thay đổi status
      task.status = nextStatusMap[task.status] || 'doing';
    }

    // 2. Báo cho App.jsx 
    if (typeof onMove === 'function') {
      onMove(task?.id !== undefined ? task.id : task);
    }

    // 3. giao diện vẽ lại
    window.dispatchEvent(new Event('tf-force-refresh'));
  };

  return (
    <div className="tf-task-card">
      {/* 1. TÊN TASK */}
      <h4 className="tf-task-title">{displayTitle}</h4>

      {/* 2. LABEL */}
      <div className="tf-task-header">
        <span className={`tf-task-label ${getLabelClass(displayPriority)}`}>
          {displayPriority === 'High' ? 'Cao' : displayPriority === 'Low' ? 'Thấp' : 'Trung bình'}
        </span>
      </div>

      {/* FOOTER */}
      <div className="tf-task-footer">
        <div className="tf-task-info-left">
          <div className="tf-task-avatar" title="Người phụ trách">
            <i className="bi bi-person"></i>
          </div>
          <div className="tf-task-icon-item" title="Hạn chót">
            <i className="bi bi-calendar3"></i>
            <span>10/5</span>
          </div>
        </div>
        <div className="tf-task-icon-item" title="Bình luận">
          <i className="bi bi-chat-left-text"></i>
          <span>1</span>
        </div>
      </div>

      {/* 3. BA NÚT BẤM */}
      <div className="tf-card-actions">
        <button 
          onClick={(e) => { e.stopPropagation(); onEdit && onEdit(task); }} 
          className="tf-action-btn edit" 
          title="Sửa task"
        >
          <i className="bi bi-pencil-square"></i> Sửa
        </button>

        <button 
          onClick={handleMoveClick} 
          className="tf-action-btn move" 
          title="Chuyển trạng thái"
        >
          <i className="bi bi-arrow-right-circle"></i> Đổi
        </button>

        <button 
          onClick={(e) => { e.stopPropagation(); onDelete && onDelete(task?.id !== undefined ? task.id : task); }} 
          className="tf-action-btn delete" 
          title="Xóa task"
        >
          <i className="bi bi-trash"></i> Xóa
        </button>
      </div>
    </div>
  );
};

export default TaskCard;