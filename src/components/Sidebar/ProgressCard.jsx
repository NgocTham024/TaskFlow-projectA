import { progressData } from "../../data/progressData";
import "./ProgressCard.css";
function ProgressCard() {
  return (
    <div className="progress-card">
      <h3>Tiến độ tổng thể</h3>

      <div className="progress-circle">
        50%
      </div>

      <p className="progress-text">
        Hoàn thành
      </p>

      {progressData.map((item) => (
        <div
          className="progress-item"
          key={item.id}
        >
          <span
            className="status-dot"
            style={{
              backgroundColor: item.color,
            }}
          ></span>

          <span>{item.label}</span>

          <span className="count">
            {item.value}
          </span>
        </div>
      ))}

      <button className="progress-btn">
        Xem báo cáo chi tiết
      </button>
    </div>
  );
}

export default ProgressCard;