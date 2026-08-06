import { userData } from "../../data/userData";
import "./UserCard.css";

function UserCard() {
  return (
    <div className="user-card">
      <div className="avatar">
        {userData.avatar}
      </div>

      <div className="user-info">
        <h4>{userData.name}</h4>
        <p>{userData.email}</p>
      </div>
    </div>
  );
}

export default UserCard;