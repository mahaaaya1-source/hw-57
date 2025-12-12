import { useState } from "react";
import { User } from "../types";

interface Props {
  onAddUser: (user: User) => void;
}

const UserForm: React.FC<Props> = ({ onAddUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [active, setActive] = useState(false);
  const [role, setRole] = useState<User['role']>("user");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      alert('Please fill name and email');
      return;
    }
    const newUser: User = {
      id: Date.now(),
      name,
      email,
      active,
      role,
    };
    onAddUser(newUser);
    setName("");
    setEmail("");
    setActive(false);
    setRole("user");
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded bg-light">
      <h4>Создать пользователя</h4>

      <div className="mb-3">
        <label className="form-label">Имя:</label>
        <input
          className="form-control"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          className="form-control"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Роль:</label>
        <select
          className="form-select"
          value={role}
          onChange={e => setRole(e.target.value as User['role'])}
        >
          <option value="user">user</option>
          <option value="editor">editor</option>
          <option value="admin">admin</option>
        </select>
      </div>

      <div className="form-check mb-3">
        <input
          type="checkbox"
          className="form-check-input"
          id="activeCheck"
          checked={active}
          onChange={e => setActive(e.target.checked)}
        />
        <label className="form-check-label" htmlFor="activeCheck">Активен</label>
      </div>

      <button className="btn btn-primary w-100" type="submit">Добавить</button>
    </form>
  );
};

export default UserForm;
