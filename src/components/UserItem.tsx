import { User } from "../types";

interface Props {
  user: User;
}

const UserItem: React.FC<Props> = ({ user }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div>
        <strong>{user.name}</strong> ({user.email})
        <br />
        Роль: {user.role}
      </div>

      <span className={"badge " + (user.active ? "bg-success" : "bg-secondary")}>
        {user.active ? "Активен" : "Неактивен"}
      </span>
    </li>
  );
};

export default UserItem;
