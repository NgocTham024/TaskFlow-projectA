import "./Header.css";
import { FiSearch } from "react-icons/fi";
import { headerData } from "../../data/headerData";
import { actionData } from "../../data/actionData";

function Header() {
  return (
    <header className="header">
      {/* Left */}

      <div className="header-left">
        <div className="logo">
          <div className="logo-icon">✓</div>

          <h2>TaskFlow</h2>
        </div>

        <select className="project-select">
          <option>{headerData.currentProject}</option>
        </select>
      </div>

      {/* Center */}

      <div className="header-center">
        <div className="search-box">
          <FiSearch size={18} />

          <input
            type="text"
            placeholder={headerData.searchPlaceholder}
          />
        </div>
      </div>

      {/* Right */}

      <div className="header-right">
        {actionData.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              className="icon-btn"
              title={item.title}
            >
              <Icon size={20} />
            </button>
          );
        })}

        <div className="avatar">
          {headerData.avatar}
        </div>
      </div>
    </header>
  );
}

export default Header;