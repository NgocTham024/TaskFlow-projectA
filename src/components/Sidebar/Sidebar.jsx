import "./Sidebar.css";

import Menu from "./Menu";
import ProjectList from "./ProjectList";
import ProgressCard from "./ProgressCard";
import UserCard from "./UserCard";

function Sidebar() {
    return (
        <aside className="sidebar">

            <Menu />

            <ProjectList />

            <ProgressCard />

            <UserCard />

        </aside>
    );
}

export default Sidebar;