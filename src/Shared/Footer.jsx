import { GrGoogle, GrInstagram, GrLinkedin, GrTwitter } from "react-icons/gr";
import LogoDown from "/CGdown.svg";
const Footer = () => {
  return (
    <footer className="footer p-32 bg-sec-color text-white">
      <aside>
        <img src={LogoDown} alt="logo-footer" />
        <p className="max-w-72">
          Your car is ultimate protector. From tune-ups to emergencies, we have
          got you covered. Drive worry-free with our expert care and swift
          assistance, ensuring smooth travels at every turn.
        </p>
        <div className="flex gap-6 items-center mt-4">
          <GrGoogle className="text-2xl" />
          <GrTwitter className="text-2xl" />
          <GrInstagram className="text-2xl" />
          <GrLinkedin className="text-2xl" />
        </div>
      </aside>
      <nav>
        <h6 className="footer-title text-xl">About</h6>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title text-xl">Company</h6>
        <a className="link link-hover">Why Car Guardian?</a>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Jobs</a>
      </nav>
      <nav>
        <h6 className="footer-title text-xl">Support</h6>
        <a className="link link-hover">Support Center</a>
        <a className="link link-hover">Feedback</a>
        <a className="link link-hover">Accessibility</a>
      </nav>
    </footer>
  );
};

export default Footer;
