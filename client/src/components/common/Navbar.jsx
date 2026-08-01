import { NavLink } from "react-router-dom";
import { FaBriefcase } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import logo from "../../assets/logo/careernest-horizontal.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
  logout();
  navigate("/login");
  };
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Jobs", path: "/jobs" },
    { name: "Companies", path: "/companies" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src={logo}
            alt="CareerNest"
            className="h-12 w-auto"
          />
        </NavLink>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `transition duration-300 hover:text-blue-600 ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

        </div>

        {/* Desktop Buttons */}

        <div className="hidden md:flex items-center gap-3">
      {user ? (
        <div className="flex items-center gap-4">

          <span className="font-medium">
            Welcome, {user.name}
          </span>

          <NavLink
            to={
              user.role === "recruiter"
                ? "/recruiter/dashboard"
                : "/jobseeker/dashboard"
            }
            className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Dashboard
          </NavLink>

          <button
            onClick={handleLogout}
            className="px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
          >
            Logout
          </button>

        </div>
      ) : (
  <div className="flex items-center gap-3">
    <NavLink
      to="/login"
      className="px-5 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
    >
      Login
    </NavLink>

    <NavLink
      to="/register"
      className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
    >
      Register
    </NavLink>
  </div>
)}

        </div>

        {/* Mobile Menu Button */}

        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">

          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-4 hover:bg-gray-100"
            >
              {item.name}
            </NavLink>
          ))}

          <div className="p-4 flex flex-col gap-3">

            <NavLink
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="border border-blue-600 text-blue-600 rounded-lg py-2 text-center"
            >
              Login
            </NavLink>

            <NavLink
              to="/register"
              onClick={() => setMenuOpen(false)}
              className="bg-blue-600 text-white rounded-lg py-2 text-center"
            >
              Register
            </NavLink>

          </div>

        </div>
      )}
    </nav>
  );
}

export default Navbar;