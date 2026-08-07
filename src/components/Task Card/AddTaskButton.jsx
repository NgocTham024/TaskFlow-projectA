import React, { useState } from 'react';
import './TaskStyles.css';

const AddTaskButton = ({ onAddTask }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [label, setLabel] = useState('Nghiên cứu');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (onAddTask) {
      onAddTask({
        title,
        label,
        date: date || '10/5',
        comments: 0
      });
    }

    setTitle('');
    setIsOpen(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="tf-floating-add-btn"
        title="Thêm Task mới"
      >
        <i className="bi bi-plus-lg"></i>
      </button>

      {isOpen && (
        <div className="tf-modal-overlay">
          <div className="tf-modal-content sm">
            <button onClick={() => setIsOpen(false)} className="tf-modal-close-btn">
              <i className="bi bi-x-lg"></i>
            </button>

            <h3 className="tf-modal-form-title">Tạo task mới</h3>

            <form onSubmit={handleSubmit} className="tf-form">
              <div className="tf-form-group">
                <label>Tên task</label>
                <input 
                  type="text"
                  required
                  placeholder="Nhập tên nhiệm vụ..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="tf-form-group">
                <label>Nhãn (Label)</label>
                <input 
                  type="text"
                  placeholder="VD: Thiết kế, Phát triển..."
                  value={label}
                  onChange={(e) => setLabel(e.target.value)}
                />
              </div>

              <div className="tf-form-group">
                <label>Ngày (DD/MM)</label>
                <input 
                  type="text"
                  placeholder="10/5"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div className="tf-form-actions">
                <button 
                  type="button" 
                  onClick={() => setIsOpen(false)}
                  className="tf-btn-secondary"
                >
                  Hủy
                </button>
                <button type="submit" className="tf-btn-primary">
                  Tạo ngay
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddTaskButton;