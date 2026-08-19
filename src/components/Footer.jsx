import { Link } from "react-router-dom";
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import khidmat from "../assets/khedmat.png"
export default function Footer() {
  return (
    <footer className="footer text-[#dce5f2] bg-[#0c1728] p-10 ">
      <div className="mx-auto w-[calc(100%-10px)] max-w-300 grid grid-cols-1 md:grid-cols-[2.5fr_repeat(2,1fr)] items-center justify-between gap-11.25 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-1 gap-y-10 justify-between">
          <div>
          <Link to="/" className="inline-flex items-center gap-2.25 font-extrabold whitespace-nowrap text-white">
            <span className="grid place-items-center w-8.5 h-8.5 rounded-[10px] bg-(--border) text-white font-black shadow-[0_6px_18px_rgba(23,105,224,0.25)]"><img src={khidmat} alt="" /></span>
            <span>Afghan Services</span>
          </Link>
          <p className="text-[#8fa0b8] leading-[1.7] text-[13px] max-w-82.5">Find trusted local services and opportunities across Afghanistan.</p>
          </div>
          <div className="flex items-center gap-2 mt-4.5">
            <a
              href="#"
              aria-label="Facebook"
              className="grid place-items-center w-9 h-9 rounded-sm text-[#b7c6da] transition border border-[#2a3a52] duration-200 hover:bg-(--primary) hover:text-white"
            >
              <FiFacebook />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="grid place-items-center w-9 h-9 rounded-sm text-[#b7c6da] transition border border-[#2a3a52] duration-200 hover:bg-(--primary) hover:text-white"
            >
              <FiTwitter />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="grid place-items-center w-9 h-9 rounded-sm text-[#b7c6da] transition border border-[#2a3a52] duration-200 hover:bg-(--primary) hover:text-white"
            >
              <FiLinkedin />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="grid place-items-center w-9 h-9 rounded-sm text-[#b7c6da] transition border border-[#2a3a52] duration-200 hover:bg-(--primary) hover:text-white"
            >
              <FiInstagram />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3   gap-20">
          <div className="grid grid-cols-1">
            <h4 className="m-[0 0 14px] text-white text-[13px] text-nowrap">Quick Links</h4>
            <Link to="/" className="text-[11px] text-[#7788a0]! text-nowrap">Home</Link>
            <Link to="/services" className="text-[11px] text-[#7788a0]! text-nowrap">Services</Link>
            <Link to="/jobs" className="text-[11px] text-[#7788a0]! text-nowrap">Jobs</Link>
            <Link to="/providers" className="text-[11px] text-[#7788a0]! text-nowrap">Providers</Link>
          </div>
          <div className="grid grid-cols-1">
            <h4 className="m-[0 0 14px] text-white text-[13px] text-nowrap">For Users</h4>
            <a href="/" className="text-[11px] text-[#7788a0]! text-nowrap">How It Works</a>
            <a href="/" className="text-[11px] text-[#7788a0]! text-nowrap">Browse Services</a>
            <a href="#" className="text-[11px] text-[#7788a0]! text-nowrap">Post a Job</a>
            <Link to="/dashboard" className="text-[11px] text-[#7788a0]! text-nowrap">User Dashboard</Link>
          </div>
          <div className="grid grid-cols-1">
            <h4 className="m-[0 0 14px] text-white text-[13px]! text-nowrap">For Providers</h4>
            <a href="#" className="text-[11px] text-[#7788a0]! text-nowrap">Become a Provider</a>
            <a href="#" className="text-[11px] text-[#7788a0]! text-nowrap">Provider Dashboard</a>
            <a href="#" className="text-[11px] text-[#7788a0]! text-nowrap">Manage Services</a>
            <a href="#" className="text-[11px] text-[#7788a0]! text-nowrap">Earnings</a>
          </div>
        </div>
      </div>
      <div className="mx-auto w-[calc(100%-32px)] max-w-295  border-t border-[#203047] py-4.5 px-0 text-[#7788a0] text-[13px]">
        © 2026 Afghan Services. All rights reserved.
      </div>
    </footer>
  );
}
