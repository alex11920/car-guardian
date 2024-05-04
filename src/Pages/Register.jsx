import { Link } from "react-router-dom";
import Image from "/src/assets/login/login.svg";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import { useContext } from "react";
import { AuthContext } from "../Controller/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("registered successfully!");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("already exist!");
      });
  };

  return (
    <div className="hero-content flex-col lg:flex-row-reverse mt-12 mb-36 gap-20">
      {/* login */}
      <div className="card shrink-0 w-full max-w-[500px] border py-6">
        <p className="text-center text-4xl text-[#444444] font-bold">
          Register
        </p>
        <form onSubmit={handleRegister} className="card-body">
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
              placeholder="Your email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-[#444444] font-semibold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Your password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-normal text-xl bg-[#FF3811] border-[#FF3811] text-white hover:text-[#FF3811] hover:bg-white hover:border-[#FF3811]">
              Register
            </button>
          </div>
        </form>
        <div className="text-center pb-6">
          <p className="font-semibold">Or Login with</p>

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
      <Toaster />
    </div>
  );
};

export default Register;
