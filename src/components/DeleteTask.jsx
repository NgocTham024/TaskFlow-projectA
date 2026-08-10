import React from 'react';

export default function DeleteTask({ task, onClose, onDeleteConfirm }) {
  const handleDelete = () => {
    // Gọi hàm xóa theo id
    onDeleteConfirm(task.id);
    onClose();
  };

  return (
    <div className="modal d-block bg-dark bg-opacity-50" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-danger fw-bold">Xác nhận xóa</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <p>Bạn có chắc chắn muốn xóa công việc <strong>"{task?.title}"</strong> không?</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Hủy</button>
            <button type="button" className="btn btn-danger" onClick={handleDelete}>Xóa ngay</button>
          </div>
        </div>
      </div>
    </div>
  );
}