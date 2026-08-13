import { useState } from 'react';

export interface Task {
  id: number;
  title: string;
  label: string;
  assignee?: string;
  deadline: string;
  commentsCount: number;
  priority: 'High' | 'Medium' | 'Low';
  status: string;
}

interface TaskCardProps {
  task: Task;
  onEdit: () => void;
  onDelete: () => void;
  onUpdateDeadline: (newDeadline: string) => void;
  onUpdateComments: (newCount: number) => void;
  onMove: (newStatus: string) => void; // 🟢 Hàm đổi cột
}

export default function TaskCard({
  task,
  onEdit,
  onDelete,
  onUpdateDeadline,
  onUpdateComments,
  onMove,
}: TaskCardProps) {
  const [isEditingDate, setIsEditingDate] = useState(false);

  const getLabelStyle = (label: string) => {
    switch (label.toLowerCase()) {
      case 'nghiên cứu':
        return { bg: '#e6f7ff', color: '#1890ff' };
      case 'thiết kế':
        return { bg: '#fffbe6', color: '#faad14' };
      case 'phát triển':
        return { bg: '#f9f0ff', color: '#722ed1' };
      default:
        return { bg: '#f5f5f5', color: '#595959' };
    }
  };

  const labelStyle = getLabelStyle(task.label);

  return (
    <div className="task-card">
      <div className="task-card-header">
        <h4 className="task-title">{task.title}</h4>
        <div className="task-menu">
          {task.status !== 'To Do' && (
            <button
              className="btn-icon"
              onClick={() => onMove(task.status === 'Completed' ? 'In Progress' : 'To Do')}
              title="Chuyển về cột trước"
            >
              ⬅️
            </button>
          )}
          {task.status !== 'Completed' && (
            <button
              className="btn-icon"
              onClick={() => onMove(task.status === 'To Do' ? 'In Progress' : 'Completed')}
            title="Chuyển sang cột tiếp"
            >
              ➡️
            </button>
          )}
          <button className="btn-icon" onClick={onEdit} title="Sửa">✏️</button>
          <button className="btn-icon" onClick={onDelete} title="Xóa">🗑️</button>
        </div>
      </div>

      <div className="task-label-container">
        <span
          className="task-label-badge"
          style={{ backgroundColor: labelStyle.bg, color: labelStyle.color }}
        >
          {task.label}
        </span>
      </div>

      <div className="task-card-footer">
        <div className="footer-item" title={task.assignee || 'Người phụ trách'}>
          <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>

        <div className="footer-item deadline-item">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>

          {isEditingDate ? (
            <input
              type="text"
              className="deadline-input"
              defaultValue={task.deadline}
              autoFocus
              onBlur={(e) => {
                onUpdateDeadline(e.target.value);
                setIsEditingDate(false);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  onUpdateDeadline((e.target as HTMLInputElement).value);
                  setIsEditingDate(false);
                }
              }}
            />
          ) : (
            <span
              className="deadline-text"
              onClick={() => setIsEditingDate(true)}
              title="Bấm để sửa deadline"
            >
              {task.deadline || 'Set date'}
            </span>
          )}
        </div>

        <div
          className="footer-item comment-item"
          onClick={() => onUpdateComments(task.commentsCount + 1)}
          title="Bấm để tăng số bình luận"
        >
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
          <span>{task.commentsCount}</span>
        </div>
      </div>
    </div>
  );
}