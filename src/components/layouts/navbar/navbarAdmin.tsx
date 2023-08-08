import { Link, useNavigate } from "react-router-dom";
import logoMaelo from "../../assets/logo_maelo.svg";
export const NavbarAdmin = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("login");
    navigate("/login");
  };
  return (
    <nav className={` flex items-center justify-between h-12 px-2`}>
      <div className="flex items-center gap-4">
        <Link to="/" className="font-bold text-md text-tertiary-100">
          <img src={logoMaelo} alt="logo-maelo" className="w-10 h-10" />
        </Link>
        <Link
          className="font-bold text-md text-tertiary-100"
          to={"/admin-products"}
        >
          Produk
        </Link>
        <Link
          className="font-bold text-md text-tertiary-100"
          to={"/admin-orders"}
        >
          Pesanan
        </Link>
        <Link
          className="font-bold text-md text-tertiary-100"
          to={"/admin-report"}
        >
          Laporan
        </Link>
        <button
          className="px-2 py-1 text-sm font-bold text-white bg-red-400 rounded "
          onClick={() => handleLogout()}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};
