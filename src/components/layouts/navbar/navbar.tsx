import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-12 px-2">
      <div className="flex gap-4">
        <Link to="/" className="font-bold text-tertiary-100">
          Home
        </Link>
        <Link className="font-bold text-tertiary-100" to={"/questions"}>
          Pertanyaan Umum
        </Link>
      </div>
      <div className="w-10 h-10 bg-primary-100 rounded-xl"></div>
    </nav>
  );
};
