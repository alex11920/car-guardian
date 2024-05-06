import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Root = () => {
  return (
    <div>
      <ScrollRestoration></ScrollRestoration>
      <div className="max-w-7xl mx-auto px-2 lg:px-0">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
