import { BiSearch } from "react-icons/bi";
import { Link, } from "react-router-dom";
import Logo from "/CGlogo.svg";
import { useContext } from "react";
import { AuthContext } from "../Controller/AuthProvider";
import { CgProfile } from "react-icons/cg";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

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

  const navUserLinks = (
    <>
      <li>
        <Link to="/order" className="lg:font-bold">
          Order
        </Link>
      </li>
      <li>
        <Link to="/orderReview" className="lg:font-bold">
          Order Review
        </Link>
      </li>
      <li>
        <Link to="/manageInventory" className="lg:font-bold">
          Manage Inventory
        </Link>
      </li>
    </>
  );

  return (
    <div>
      {!user ? (
        <div className="navbar bg-base-100">
          <div className="navbar-start my-4">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
            <span>
              <Link to="/login">
                <button className="btn btn-outline px-10 border-[#FF3811] text-color hover:text-white hover:bg-[#FF3811] hover:border-[#FF3811]">
                  Login
                </button>
              </Link>
            </span>
          </div>
        </div>
      ) : (
        <div className="navbar bg-base-100">
          <div className="navbar-start my-4">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                {navUserLinks}
              </ul>
            </div>
            <Link to="/">
              <img src={Logo} alt="logo" className="lg:w-28 md:w-28 w-20" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex my-6 text-[#444444]">
            <ul className="menu menu-horizontal px-1 gap-4">{navUserLinks}</ul>
          </div>
          <div className="navbar-end">
            <BiSearch className="text-2xl mr-6" />
            <div className="dropdown dropdown-end mr-6">
              <div tabIndex={0} role="button">
                <CgProfile className="text-2xl" />
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[20] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      logOut()
                        .then(() => {
                          toast.success("logout successfully!");
                        })
                        .catch(() => {
                          toast.error("not logout");
                        });
                    }}
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
            <span>
              <Link to="/order">
                <button className="btn btn-outline border-[#FF3811] text-color hover:text-white hover:bg-[#FF3811] hover:border-[#FF3811]">
                  Appointment
                </button>
              </Link>
            </span>
          </div>
          <Toaster position="top-right" reverseOrder={false} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
