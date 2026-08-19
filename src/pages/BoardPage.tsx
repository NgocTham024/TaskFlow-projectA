import { useState } from "react";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import Board from "../components/board/Board";
import "./BoardPage.css";

export default function BoardPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddTask, setShowAddTask] = useState(false);

  return (
    <div className="board-page">
      <Sidebar />

      <div className="board-page-content">

        {/* Header */}
        <header className="board-page-header">

          {/* Header left */}
          <div className="board-page-header-left">

            {/* Project selector */}
            <div className="board-project-selector">
              <select
                className="board-project-select"
                defaultValue="Website Redesign"
                aria-label="Chọn dự án"
              >
                <option value="Website Redesign">
                  Website Redesign
                </option>

                <option value="Mobile App">
                  Mobile App
                </option>

                <option value="Accounting campaign">
                  Accounting campaign
                </option>

                <option value="Product Launch">
                  Product Launch
                </option>
              </select>
            </div>

          </div>

          {/* Header right */}
          <div className="board-page-header-right">

            {/* Search */}
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
            />

            {/* Header icons */}
            <div className="board-page-header-icons">

              {/* Notification */}
              <button
                type="button"
                className="board-header-icon-btn"
                title="Thông báo"
                aria-label="Thông báo"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 8C18 5.79 16.21 4 14 4H10C7.79 4 6 5.79 6 8V13L4 16H20L18 13V8Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M10 20H14"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>

                <span className="notification-dot"></span>
              </button>

              {/* Help */}
              <button
                type="button"
                className="board-header-icon-btn"
                title="Trợ giúp"
                aria-label="Trợ giúp"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />

                  <path
                    d="M9.8 9.2C10 7.9 11 7.2 12.2 7.2C13.7 7.2 14.6 8.1 14.6 9.3C14.6 10.3 14 10.8 13.2 11.4C12.4 12 12 12.5 12 13.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />

                  <circle
                    cx="12"
                    cy="16.5"
                    r="1"
                    fill="currentColor"
                  />
                </svg>
              </button>

              {/* Settings */}
              <button
                type="button"
                className="board-header-icon-btn"
                title="Cài đặt"
                aria-label="Cài đặt"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 8.5C10.07 8.5 8.5 10.07 8.5 12C8.5 13.93 10.07 15.5 12 15.5C13.93 15.5 15.5 13.93 15.5 12C15.5 10.07 13.93 8.5 12 8.5Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />

                  <path
                    d="M19 13.2C19.1 12.8 19.1 12.4 19 10.8L21 9.3L19 5.8L16.7 6.7C16.1 6.2 15.5 5.9 14.8 5.6L14.5 3H10.5L10.2 5.6C9.5 5.9 8.9 6.2 8.3 6.7L6 5.8L4 9.3L6 10.8C5.9 11.2 5.9 11.6 6 13.2L4 14.7L6 18.2L8.3 17.3C8.9 17.8 9.5 18.1 10.2 18.4L10.5 21H14.5L14.8 18.4C15.5 18.1 16.1 17.8 16.7 17.3L19 18.2L21 14.7L19 13.2Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

            </div>

            {/* Add task */}
            <button
              type="button"
              className="board-page-add-btn"
              onClick={() => setShowAddTask(true)}
            >
              + Thêm task
            </button>

            {/* Avatar */}
            <div className="board-page-avatar">
              NT
            </div>

          </div>
        </header>

        {/* Main board */}
        <main className="board-page-main">
          <Board
            searchQuery={searchQuery}
            externalShowAdd={showAddTask}
            onCloseExternalAdd={() => setShowAddTask(false)}
          />
        </main>

      </div>
    </div>
  );
}