import { useState } from "react";
import type { FormEvent } from "react";
import type { Task, TaskPriority } from "../../types/task";

interface EditTaskProps {
  task: Task;
  onClose: () => void;
  onSave: (updatedTask: Task) => void;
}

export default function EditTask({ task, onClose, onSave }: EditTaskProps) {
  const [title, setTitle] = useState<string>(task.title || "");
  const [description, setDescription] = useState<string>(task.description || "");
  const [priority, setPriority] = useState<TaskPriority>(task.priority || "Medium");

  const handleSave = (e: FormEvent) => {
    e.preventDefault();
    onSave({ ...task, title, description, priority });
    onClose();
  };

  return (
    <div className="modal-backdrop-custom">
      <div className="modal-dialog-custom">
        <div className="modal-header-custom">
          <h5 className="m-0 fw-bold text-primary">Chỉnh sửa công việc</h5>
          <button type="button" className="modal-close-btn" onClick={onClose}>&times;</button>
        </div>
        <form onSubmit={handleSave}>
          <div className="modal-body-custom">
            <div className="mb-3">
              <label className="form-label fw-bold">Tiêu đề</label>
              <input
                type="text"
                className="form-control"
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
            <button type="submit" className="btn btn-primary">Lưu thay đổi</button>
          </div>
        </form>
      </div>
    </div>
  );
}
