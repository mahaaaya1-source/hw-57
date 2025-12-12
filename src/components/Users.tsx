import UserItem from "./UserItem";
import { User } from "../types";

interface Props {
  users: User[];
}

const Users: React.FC<Props> = ({ users }) => {
  return (
    <div>
      <h4>Пользователи</h4>
      <ul className="list-group">
        {users.map(u => (
          <UserItem key={u.id} user={u} />
        ))}
      </ul>
    </div>
  );
};

export default Users;
