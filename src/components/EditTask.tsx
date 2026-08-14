import { useState } from 'react';
import type { Task } from './TaskCard';

interface EditTaskProps {
  task: Task;
  onClose: () => void;
  onSave: (task: Task) => void;
}

export default function EditTask({ task, onClose, onSave }: EditTaskProps) {
  const [title, setTitle] = useState(task.title);
  const [status, setStatus] = useState(task.status);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Chỉnh sửa công việc</h3>
        <form onSubmit={(e) => { e.preventDefault(); onSave({ ...task, title, status }); onClose(); }}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <div className="modal-actions">
            <button type="button" onClick={onClose}>Hủy</button>
            <button type="submit" className="btn-primary">Lưu</button>
          </div>
        </form>
      </div>
    </div>
  );
}