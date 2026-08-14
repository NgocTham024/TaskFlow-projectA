import { useState } from "react";
import type { FormEvent } from "react";
import type { Task, TaskPriority } from "../../types/task";

interface AddTaskProps {
  onClose: () => void;
  onAdd: (newTask: Task) => void;
}

export default function AddTask({ onClose, onAdd }: AddTaskProps) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [priority, setPriority] = useState<TaskPriority>("Medium");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAdd({
      id: Date.now(),
      title,
      description,
      priority,
      status: "todo",
    });
    onClose();
  };

  return (
    <div className="modal-backdrop-custom">
      <div className="modal-dialog-custom">
        <div className="modal-header-custom">
          <h5 className="m-0 fw-bold text-primary">Thêm công việc mới</h5>
          <button type="button" className="modal-close-btn" onClick={onClose}>&times;</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="modal-body-custom">
            <div className="mb-3">
              <label className="form-label fw-bold">Tiêu đề</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập tiêu đề..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Mô tả</label>
              <textarea
                className="form-control"
                rows={3}
                placeholder="Nhập mô tả..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Độ ưu tiên</label>
              <select
                className="form-select"
                value={priority}
                onChange={(e) => setPriority(e.target.value as TaskPriority)}
              >
                <option value="High">Cao</option>
                <option value="Medium">Trung bình</option>
                <option value="Low">Thấp</option>
              </select>
            </div>
          </div>
          <div className="modal-footer-custom">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Hủy</button>
            <button type="submit" className="btn btn-primary">Thêm mới</button>
          </div>
        </form>
      </div>
    </div>
  );
}
