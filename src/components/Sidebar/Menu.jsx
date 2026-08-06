import { menuData } from "../../data/menuData";
import "./Menu.css";
function Menu() {
  return (
    <div>
      {menuData.map((item) => {
        const Icon = item.icon;

        return (
          <div className="menu-item" key={item.id}>
            <Icon size={20} />
            <span>{item.title}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;