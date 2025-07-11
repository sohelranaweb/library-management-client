import { Link, NavLink } from "react-router";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "px-3 py-2 text-[#ff6163] font-semibold transition"
              : "px-3 py-2 text-gray-500 hover:text-[#ff6163] transition"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/books"
          className={({ isActive }) =>
            isActive
              ? "px-3 py-2 text-[#ff6163] font-semibold transition"
              : "px-3 py-2 text-gray-500 hover:text-[#ff6163] transition"
          }
        >
          All Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/create-book"
          className={({ isActive }) =>
            isActive
              ? "px-3 py-2 text-[#ff6163] font-semibold transition"
              : "px-3 py-2 text-gray-500 hover:text-[#ff6163] transition"
          }
        >
          Add Book
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/borrow-summary"
          className={({ isActive }) =>
            isActive
              ? "px-3 py-2 text-[#ff6163] font-semibold transition"
              : "px-3 py-2 text-gray-500 hover:text-[#ff6163] transition"
          }
        >
          Borrow Summary
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar container mx-auto bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/">
          <img src="https://i.ibb.co/mr4ggGxS/logo-1.png" alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
    </div>
  );
};

export default Navbar;
