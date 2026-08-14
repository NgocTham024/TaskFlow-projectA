import { useState } from "react";
import "./Sidebar.css";

interface NavItem {
  icon: string;
  label: string;
  key: string;
}

const NAV_ITEMS: NavItem[] = [
  { icon: "⊞", label: "Dashboard", key: "dashboard" },
  { icon: "☰", label: "Board", key: "board" },
  { icon: "📅", label: "Calendar", key: "calendar" },
  { icon: "📊", label: "Reports", key: "reports" },
];

interface SidebarProps {
  activeKey?: string;
  onNavigate?: (key: string) => void;
}

export default function Sidebar({ activeKey = "board", onNavigate }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`sidebar ${collapsed ? "sidebar--collapsed" : ""}`}>
      {/* Logo */}
      <div className="sidebar-logo">
        <div className="sidebar-logo-icon">
          <span>✓</span>
        </div>
        {!collapsed && <span className="sidebar-logo-text">TaskFlow</span>}
      </div>

      {/* Toggle */}
      <button
        className="sidebar-toggle"
        onClick={() => setCollapsed((c) => !c)}
        title={collapsed ? "Mở rộng" : "Thu gọn"}
      >
        {collapsed ? "›" : "‹"}
      </button>

      {/* Navigation */}
      <nav className="sidebar-nav">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.key}
            className={`sidebar-nav-item ${activeKey === item.key ? "sidebar-nav-item--active" : ""}`}
            onClick={() => onNavigate?.(item.key)}
            title={collapsed ? item.label : undefined}
          >
            <span className="sidebar-nav-icon">{item.icon}</span>
            {!collapsed && <span className="sidebar-nav-label">{item.label}</span>}
          </button>
        ))}
      </nav>

      {/* User Avatar */}
      <div className="sidebar-footer">
        <div className="sidebar-user">
          <div className="sidebar-avatar">NT</div>
          {!collapsed && (
            <div className="sidebar-user-info">
              <span className="sidebar-user-name">Ngọc Thắm</span>
              <span className="sidebar-user-role">Member</span>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
