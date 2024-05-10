import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
    .then(() => {
      toast.success('Log Out Successfully')
    })
    .catch(() => toast.error('SignOut Unsuccessful'))
  }

  const navLink = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-[#dd5903]" : "")}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-[#dd5903]" : "")}
          to="/allFoods"
        >
          All Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-[#dd5903]" : "")}
          to="/gallery"
        >
          Gallery
        </NavLink>
      </li>
    </>
  );
  const buttonLink = (
    <>
    { user ?
          <NavLink onClick={handleLogOut}
          >LogOut</NavLink> :
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "text-[#dd5903]" : "")}
        >
          Login
        </NavLink>}
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#dd5903]" : "")}
        to="/register"
      >
        Register
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-300 md:py-4">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold"
          >
            {navLink}
            <span className="px-3 flex flex-col gap-0">{buttonLink}</span>
          </ul>
        </div>
        <a className="btn btn-ghost lg:text-3xl font-barlow text-[#dd5903]">
          Ruchi Bangla
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-6 px-1 text-2xl font-bold font-barlow">
          {navLink}
        </ul>
      </div>
      <div className="navbar-end hidden lg:flex gap-5 lg:mr-10">
        { user ?
          <button onClick={handleLogOut} className="btn bg-[#dd5903] text-white font-semibold text-lg">LogOut</button> :
        <NavLink
          to="/login"
          className="btn bg-[#dd5903] text-white font-semibold text-lg"
        >
          Login
        </NavLink>}
        <NavLink
          to="/register"
          className="btn bg-[#dd5903] text-white font-semibold text-lg"
        >
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
