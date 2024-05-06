import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import Img from "/src/assets/404.svg";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={Img} className="max-w-2xl mb-16" alt="Error 404" />
      <Link to="/">
        <button className="btn px-10 text-lg bg-[#FF3811] border-[#FF3811] text-white hover:text-[#FF3811] hover:bg-white hover:border-[#FF3811] flex items-center">
          <span className="text-2xl">
            <FiArrowLeft />
          </span>
          <span className="ml-2">Back to home</span>
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
