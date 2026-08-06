import "./BoardNavigation.css";

import { boardNavigationData } from "../../data/boardNavigationData";

function BoardNavigation() {
  return (
    <div className="board-navigation">
      {boardNavigationData.map((item) => {
        const Icon = item.icon;

        return (
          <button
            key={item.id}
            className={`nav-item ${item.active ? "active" : ""}`}
          >
            <Icon size={18} />

            <span>{item.title}</span>
          </button>
        );
      })}
    </div>
  );
}

export default BoardNavigation;