import React, { useState } from 'react';

export default function AddTask({ onClose, onAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAdd({
      id: Date.now(),
      title,
      description,
      status: 'Todo' // set mặc định task mới sẽ vào cột Việc Cần Làm
    });
    onClose();
  };

  return (
    <div className="modal d-block bg-dark bg-opacity-50" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title fw-bold text-primary">Thêm công việc mới</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
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
                  rows="3" 
                  placeholder="Nhập mô tả..."
                  value={description} 
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>Hủy</button>
              <button type="submit" className="btn btn-primary">Thêm mới</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}