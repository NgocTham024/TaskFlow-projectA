import React, { useState } from 'react';

export default function EditTask({ task, onClose, onSave }) {
  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');

  const handleSave = (e) => {
    e.preventDefault();
    // Gửi thông tin mới về TaskSection
    onSave({
      ...task,
      title: title,
      description: description
    });
    onClose();
  };

  return (
    <div className="modal d-block bg-dark bg-opacity-50" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title fw-bold">Chỉnh sửa công việc</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <form onSubmit={handleSave}>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label font-weight-bold">Tiêu đề</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)} 
                  required 
                />
              </div>
              <div className="mb-3">
                <label className="form-label font-weight-bold">Mô tả</label>
                <textarea 
                  className="form-control" 
                  rows="3" 
                  value={description} 
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>Hủy</button>
              <button type="submit" className="btn btn-primary">Lưu thay đổi</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}