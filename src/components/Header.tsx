import SearchBar from "./SearchBar";
import "./Header.css";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export default function Header({
  searchQuery,
  onSearchChange,
}: HeaderProps) {
  return (
    <header className="app-header">
      {/* Logo */}
      <div className="app-header-logo">
        <div className="app-header-logo-icon">✓</div>
        <span className="app-header-logo-text">
          Task<span>Flow</span>
        </span>
      </div>

      {/* Project */}
      <button className="project-selector" type="button">
        <span>Website Redesign</span>
        <span className="project-selector-arrow">⌄</span>
      </button>

      {/* Search */}
      <div className="app-header-search">
        <SearchBar
          value={searchQuery}
          onChange={onSearchChange}
        />
      </div>

      {/* Actions */}
      <div className="app-header-actions">
        <button
          className="header-icon-button"
          type="button"
          title="Thông báo"
        >
          ♧
        </button>

        <button
          className="header-icon-button"
          type="button"
          title="Trợ giúp"
        >
          ?
        </button>

        <button
          className="header-icon-button"
          type="button"
          title="Cài đặt"
        >
          ⚙
        </button>

        <button
          className="header-avatar"
          type="button"
          title="Tài khoản"
        >
          NT
        </button>
      </div>
    </header>
  );
}