import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import Logo from "/public/logo.svg";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <Link to="/" className="lg:font-bold">
          Home
        </Link>
      </li>
      <li>
        <Link to="/services" className="lg:font-bold">
          Services
        </Link>
      </li>
      <li>
        <Link to="/blog" className="lg:font-bold">
          Blog
        </Link>
      </li>
      <li>
        <Link to="/about" className="lg:font-bold">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="lg:font-bold">
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start my-4">
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
            className="menu menu-sm dropdown-content mt-3 z-[20] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/">
          <img src={Logo} alt="logo" className="lg:w-28 md:w-28 w-20" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex my-6 text-[#444444]">
        <ul className="menu menu-horizontal px-1 gap-4">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <BiSearch className="text-2xl mr-6" />
        <span className="btn btn-outline border-[#FF3811] text-color hover:text-white hover:bg-[#FF3811] hover:border-[#FF3811]">
          Appointment
        </span>
      </div>
    </div>
  );
};

export default Navbar;
