import { useState } from "react";
import { User } from "./types";
import UserForm from "./components/UserForm";
import Users from "./components/Users";

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (user: User) => {
    setUsers(prev => [...prev, user]);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12 col-md-4 mb-3">
          <UserForm onAddUser={addUser} />
        </div>

        <div className="col-12 col-md-8">
          <Users users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;
