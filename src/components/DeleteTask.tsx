interface DeleteTaskProps {
  onClose: () => void;
  onConfirm: () => void;
}

export default function DeleteTask({ onClose, onConfirm }: DeleteTaskProps) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Xác nhận xóa</h3>
        <p>Bạn có chắc chắn muốn xóa công việc này không?</p>
        <div className="modal-actions">
          <button onClick={onClose}>Hủy</button>
          <button className="btn-danger" onClick={onConfirm}>Xóa</button>
        </div>
      </div>
    </div>
  );
}