import { useState } from 'react';

export interface Comment {
  id: number;
  author: string;
  text: string;
  createdAt: string;
}

export interface Task {
  id: number;
  title: string;
  priority: 'High' | 'Medium' | 'Low';
  status: string;
  assignee?: string;
  deadline?: string;
  description?: string;
  comments?: Comment[];
}

interface TaskCardProps {
  task: Task;
  onEdit: () => void;
  onDelete: () => void;
  onUpdateDeadline: (newDeadline: string) => void;
  onMove: (newStatus: string) => void;
  onSelect?: () => void;
}

export default function TaskCard({ task, onEdit, onDelete, onUpdateDeadline, onMove, onSelect }: TaskCardProps) {
  const [isEditingDate, setIsEditingDate] = useState(false);
  const commentCount = task.comments ? task.comments.length : 0;

  return (
    <div className="task-card" onClick={onSelect} style={{ cursor: 'pointer' }}>
      <div className="task-card-header">
        <h3 className="task-title">{task.title}</h3>
        <div className="task-menu">
          {task.status !== 'To Do' && (
            <button 
              className="btn-icon" 
              onClick={(e) => { e.stopPropagation(); onMove(task.status === 'Completed' ? 'In Progress' : 'To Do'); }} 
              title="Chuyển về"
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
          )}
          {task.status !== 'Completed' && (
            <button 
              className="btn-icon" 
              onClick={(e) => { e.stopPropagation(); onMove(task.status === 'To Do' ? 'In Progress' : 'Completed'); }} 
              title="Chuyển tiếp"
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          )}
          <button 
            className="btn-icon" 
            onClick={(e) => { e.stopPropagation(); onEdit(); }} 
            title="Sửa"
          >
            <i className="fa-solid fa-pen"></i>
          </button>
          <button 
            className="btn-icon btn-delete" 
            onClick={(e) => { e.stopPropagation(); onDelete(); }} 
            title="Xóa"
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>

      <div className="task-label-container">
        <span className={`task-label-badge priority-${task.priority.toLowerCase()}`}>
          {task.priority}
        </span>
      </div>

      <div className="task-card-footer">
        <div className="footer-item" title="Người phụ trách">
          <i className="fa-solid fa-user"></i>
          <span>{task.assignee || 'Chưa có'}</span>
        </div>

        <div className="footer-item deadline-item" title="Deadline">
          <i className="fa-solid fa-calendar-days"></i>
          {isEditingDate ? (
            <input
              type="text"
              className="deadline-input"
              defaultValue={task.deadline}
              autoFocus
              onClick={(e) => e.stopPropagation()}
              onBlur={(e) => { onUpdateDeadline(e.target.value); setIsEditingDate(false); }}
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
              onClick={(e) => { e.stopPropagation(); setIsEditingDate(true); }}
            >
              {task.deadline || 'Set date'}
            </span>
          )}
        </div>

        <div className="footer-item" title="Số bình luận">
          <i className="fa-solid fa-comment"></i>
          <span>{commentCount}</span>
        </div>
      </div>
    </div>
  );
}