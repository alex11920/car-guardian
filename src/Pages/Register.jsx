import { Link, useLocation, useNavigate } from "react-router-dom";
import Image from "/src/assets/login/login.svg";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import { useContext, useState } from "react";
import { AuthContext } from "../Controller/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    setError("");

    if (password > 6) {
      setError("Password should be at least 6 characters or longer.");
    } else if (!/[A-Z]/.test(password)) {
      setError("Password should be at least one Uppercase character.");
    } else if (!/[a-z]/.test(password)) {
      setError("Password should be at least one Lowercase character.");
    }

    createUser(email, password)
      .then(() => {
        navigate(location?.state ? location.state : "/");
        toast.success("Registered Successfully!");
      })
      .catch(() => {
        toast.error("Already Email Exist!");
      });
  };

  return (
    <div className="hero-content flex-col lg:flex-row-reverse mb-36 gap-20">
      {/* Register */}
      <div className="card shrink-0 w-full max-w-[500px] border py-6">
        <form onSubmit={handleRegister} className="card-body">
          <p className="text-center text-4xl text-[#444444] font-bold">
            Register
          </p>
          <div className="form-control">
            <label className="label">
              <span className="text-p font-semibold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-p font-semibold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-[#444444] font-semibold">Password</span>
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="grow"
                placeholder="Your Password"
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <IoEyeOffOutline className="text-xl" />
                ) : (
                  <IoEyeOutline className="text-xl" />
                )}
              </span>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-normal text-xl bg-[#FF3811] border-[#FF3811] text-white hover:text-[#FF3811] hover:bg-white hover:border-[#FF3811]">
              Register
            </button>
          </div>
        </form>

        {error && <p className="text-red-700 pb-4 text-center">{error}</p>}

        <div className="text-center pb-6">
          <p className="font-semibold">Or Register with</p>

          {/* Third Party */}
          <div className="flex gap-4 items-center py-6 justify-center">
            <FcGoogle className="text-5xl border-8 rounded-full" />
            <SiGithub className="text-5xl border-8 rounded-full" />
          </div>

          <p>
            Have an account?{" "}
            <Link to="/login" className="link link-hover text-color font-bold">
              Login
            </Link>
          </p>
        </div>
      </div>

      <div>
        <img src={Image} />
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Register;
