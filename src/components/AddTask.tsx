import { useState } from 'react';

interface AddTaskProps {
  onClose: () => void;
  onAdd: (task: { title: string; status: string }) => void;
}

export default function AddTask({ onClose, onAdd }: AddTaskProps) {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('To Do');

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Thêm công việc mới</h3>
        <form onSubmit={(e) => { e.preventDefault(); if (title.trim()) { onAdd({ title, status }); onClose(); } }}>
          <input
            type="text"
            placeholder="Tên công việc..."
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
            <button type="submit" className="btn-primary">Thêm</button>
          </div>
        </form>
      </div>
    </div>
  );
}