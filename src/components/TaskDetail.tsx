import { useState } from 'react';
import type { Task, Comment } from './TaskCard';

interface TaskDetailProps {
  task: Task;
  onClose: () => void;
  onSave: (updatedTask: Task) => void;
}

export default function TaskDetail({ task, onClose, onSave }: TaskDetailProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(task.title || '');
  const [description, setDescription] = useState<string>(task.description || '');
  const [status, setStatus] = useState<string>(task.status || 'To Do');
  const [deadline, setDeadline] = useState<string>(task.deadline || '');
  const [assignee, setAssignee] = useState<string>(task.assignee || '');
  const [comments, setComments] = useState<Comment[]>(task.comments || []);
  const [newComment, setNewComment] = useState<string>('');

  const handleSave = () => {
    if (!title.trim()) return;
    onSave({
      ...task,
      title,
      description,
      status,
      deadline,
      assignee,
      comments,
    });
    setIsEditing(false);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const commentObj: Comment = {
      id: Date.now(),
      author: 'Bạn',
      text: newComment.trim(),
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const updatedComments = [...comments, commentObj];
    setComments(updatedComments);
    setNewComment('');
    onSave({ ...task, comments: updatedComments });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content modal-detail">
        <h3>{isEditing ? 'Chỉnh sửa Task' : 'Chi tiết công việc'}</h3>

        {isEditing ? (
          <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
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
            <input 
              type="text" 
              placeholder="Người phụ trách..."
              value={assignee} 
              onChange={(e) => setAssignee(e.target.value)} 
            />
            <input 
              type="text" 
              placeholder="Deadline..."
              value={deadline} 
              onChange={(e) => setDeadline(e.target.value)} 
            />
            <textarea 
              rows={3} 
              placeholder="Mô tả..."
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              className="detail-textarea"
            />
            <div className="modal-actions">
              <button type="button" onClick={() => setIsEditing(false)}>Hủy</button>
              <button type="submit" className="btn-primary">Lưu</button>
            </div>
          </form>
        ) : (
          <div className="detail-container">
            <p><strong>Trạng thái:</strong> {task.status}</p>
            <p><strong>Người phụ trách:</strong> {task.assignee || 'Chưa có'}</p>
            <p><strong>Deadline:</strong> {task.deadline || 'Chưa đặt'}</p>
            <p><strong>Mô tả:</strong> {task.description || 'Chưa có mô tả.'}</p>
            
            <hr className="detail-divider" />
            
            <h4>Bình luận ({comments.length})</h4>
            <div className="comments-box">
              {comments.length === 0 ? (
                <p className="no-comment-text">Chưa có bình luận.</p>
              ) : (
                comments.map((c) => (
                  <div key={c.id} className="comment-bubble">
                    <strong>{c.author}:</strong> {c.text}
                  </div>
                ))
              )}
            </div>

            <form onSubmit={handleAddComment} className="comment-input-group">
              <input 
                type="text" 
                placeholder="Nhập bình luận..." 
                value={newComment} 
                onChange={(e) => setNewComment(e.target.value)} 
              />
              <button type="submit" className="btn-primary">Gửi</button>
            </form>

            <div className="modal-actions">
              <button type="button" onClick={() => setIsEditing(true)}>Sửa</button>
              <button type="button" className="btn-primary" onClick={onClose}>Đóng</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}