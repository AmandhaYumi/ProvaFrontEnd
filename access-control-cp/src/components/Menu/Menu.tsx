import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="space-x-4">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/cadastro">Cadastro</Link>
    </nav>
  );
}
