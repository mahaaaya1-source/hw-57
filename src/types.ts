export interface User {
  id: number;
  name: string;
  email: string;
  active: boolean;
  role: "user" | "editor" | "admin";
}
