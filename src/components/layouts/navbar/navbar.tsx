import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-12 px-2">
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <div>Contact</div>
      </div>
      <div>Logo</div>
    </nav>
  );
};
