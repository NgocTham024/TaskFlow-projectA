import { useState } from "react";

import {
  faHouse,
  faSquareCheck,
  faChartLine,
  faCalendarDays,
  faChartColumn,
  faPlus,
  faThumbtack,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Sidebar.css";

interface NavItem {
  icon: typeof faHouse;
  label: string;
  key: string;
}

const NAV_ITEMS: NavItem[] = [
  {
    icon: faHouse,
    label: "Trang chủ",
    key: "home",
  },
  {
    icon: faSquareCheck,
    label: "Công việc của tôi",
    key: "my-tasks",
  },
  {
    icon: faChartLine,
    label: "Hoạt động",
    key: "activity",
  },
  {
    icon: faCalendarDays,
    label: "Lịch",
    key: "calendar",
  },
  {
    icon: faChartColumn,
    label: "Báo cáo",
    key: "reports",
  },
];

const PROJECTS = [
  {
    name: "Website Redesign",
    color: "#ec4899",
    pinned: true,
  },
  {
    name: "Mobile App",
    color: "#c026d3",
    pinned: false,
  },
  {
    name: "Accounting campaign",
    color: "#3b82f6",
    pinned: false,
  },
  {
    name: "Product Lauch",
    color: "#f97316",
    pinned: false,
  },
];

interface SidebarProps {
  activeKey?: string;
  onNavigate?: (key: string) => void;
  onCollapsedChange?: (collapsed: boolean) => void;
}

export default function Sidebar({
  activeKey = "board",
  onNavigate,
  onCollapsedChange,
}: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed((current) => {
      const next = !current;

      onCollapsedChange?.(next);

      return next;
    });
  };

  return (
    <aside
      className={`sidebar ${
        collapsed ? "sidebar--collapsed" : ""
      }`}
    >
      {/* =========================
          LOGO
          ========================= */}

      <div className="sidebar-logo">
        <div className="sidebar-logo-icon">
          <span>✓</span>
        </div>

        {!collapsed && (
          <span className="sidebar-logo-text">
            Task<span>Flow</span>
          </span>
        )}
      </div>

      {/* =========================
          TOGGLE BUTTON
          ========================= */}

      <button
        className="sidebar-toggle"
        onClick={toggleSidebar}
        title={collapsed ? "Mở rộng" : "Thu gọn"}
        type="button"
      >
        {collapsed ? "›" : "‹"}
      </button>

      {!collapsed && (
        <>
          {/* =========================
              NAVIGATION
              ========================= */}

          <nav className="sidebar-nav">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.key}
                type="button"
                className={`sidebar-nav-item ${
                  activeKey === item.key
                    ? "sidebar-nav-item--active"
                    : ""
                }`}
                onClick={() => onNavigate?.(item.key)}
              >
                <span className="sidebar-nav-icon">
                  <FontAwesomeIcon icon={item.icon} />
                </span>

                <span className="sidebar-nav-label">
                  {item.label}
                </span>
              </button>
            ))}
          </nav>

          {/* =========================
              PROJECTS
              ========================= */}

          <div className="sidebar-projects">
            <div className="sidebar-section-title">
              <span>Dự án</span>

              <button
                type="button"
                className="sidebar-project-add"
                title="Thêm dự án"
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>

            <div className="sidebar-project-list">
              {PROJECTS.map((project) => (
                <button
                  key={project.name}
                  type="button"
                  className="sidebar-project-item"
                >
                  <span
                    className="sidebar-project-dot"
                    style={{
                      backgroundColor:
                        project.color,
                    }}
                  />

                  <span className="sidebar-project-name">
                    {project.name}
                  </span>

                  {project.pinned && (
                    <span className="sidebar-project-pin">
                      <FontAwesomeIcon
                        icon={faThumbtack}
                      />
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* =========================
              PROGRESS
              ========================= */}

          <div className="sidebar-progress">
            <h3>Tiến độ tổng thể</h3>

            <div className="sidebar-progress-summary">
              <div className="progress-circle">
                <span>50%</span>
              </div>

              <div className="progress-complete">
                <strong>50%</strong>
                <span>Hoàn thành</span>
              </div>
            </div>

            <div className="progress-row">
              <span>
                <i className="progress-dot done" />
                Đã xong
              </span>

              <strong>35</strong>
            </div>

            <div className="progress-row">
              <span>
                <i className="progress-dot doing" />
                Đang làm
              </span>

              <strong>10</strong>
            </div>

            <div className="progress-row">
              <span>
                <i className="progress-dot todo" />
                Chưa bắt đầu
              </span>

              <strong>15</strong>
            </div>

            <button
              type="button"
              className="progress-report-button"
            >
              Xem báo cáo chi tiết
            </button>
          </div>
        </>
      )}

      {/* =========================
          USER
          ========================= */}

      <div className="sidebar-footer">
        <div className="sidebar-user">
          <div className="sidebar-avatar">
            NT
          </div>

          {!collapsed && (
            <div className="sidebar-user-info">
              <span className="sidebar-user-name">
                Ngọc Thắm
              </span>

              <span className="sidebar-user-email">
                member@example.com
              </span>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}