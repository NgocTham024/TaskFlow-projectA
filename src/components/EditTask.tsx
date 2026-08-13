import { useState } from 'react';

interface Task {
  id: number;
  title: string;
  status: string;
}

interface EditTaskProps {
  task: Task;
  onClose: () => void;
  onSave: (task: Task) => void;
}

export default function EditTask({ task, onClose, onSave }: EditTaskProps) {
  const [title, setTitle] = useState(task.title);
  const [status, setStatus] = useState(task.status);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ ...task, title, status });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Chỉnh sửa công việc</h3>
        <form onSubmit={handleSubmit}>
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