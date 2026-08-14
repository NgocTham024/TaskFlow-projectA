import { useState } from "react";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import Board from "../components/board/Board";
import "./TodoDemo.css";

export default function BoardPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddTask, setShowAddTask] = useState(false);

  return (
    <div className="board-page">
      <Sidebar />

      <div className="board-page-content">
        <header className="board-page-header">
          <div className="board-page-header-left">
            <h1>Board</h1>
            <p>Quản lý công việc theo kanban</p>
          </div>

          <div className="board-page-header-right">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
            />

            <button
              className="board-page-add-btn"
              onClick={() => setShowAddTask(true)}
            >
              + Thêm task
            </button>

            <div className="board-page-avatar">
              NT
            </div>
          </div>
        </header>

        <main className="board-page-main">
          <div className="todo-demo">
            <Board
              searchQuery={searchQuery}
              externalShowAdd={showAddTask}
              onCloseExternalAdd={() => setShowAddTask(false)}
            />
          </div>
        </main>
      </div>
    </div>
  );
}