import { Link } from "react-router-dom";
import Image from "/src/assets/login/login.svg";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import { useContext } from "react";
import { AuthContext } from "../Controller/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
const Login = () => {
  const { loginUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("you are in!");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("cannot login. Contact with helpline");
      });
  };
  return (
    <div className="hero-content flex-col lg:flex-row-reverse mt-12 mb-36 gap-20">
      {/* login */}
      <div className="card shrink-0 w-full max-w-[500px] border py-6">
        <form onSubmit={handleLogin} className="card-body">
          <p className="text-center text-4xl text-[#444444] font-bold">Login</p>
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
              <span className="text-p font-semibold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Your password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-normal text-xl bg-[#FF3811] border-[#FF3811] text-white hover:text-[#FF3811] hover:bg-white hover:border-[#FF3811]">
              Login
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
            <Link
              to="/register"
              className="link link-hover text-color font-bold"
            >
              Register
            </Link>
          </p>
        </div>
      </div>

      <div>
        <img src={Image} />
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Login;
