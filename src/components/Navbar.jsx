import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX, FiBell, FiUser } from "react-icons/fi";
import khedmat from "../assets/khedmat.png";
import "../App.css"
const links = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Jobs", "/jobs"],
  ["Providers", "/providers"],
  ["About", "/about"],
  ["Contact", "/contact"]
];


function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e4eaf2] bg-white/96 backdrop-blur-md">
      <div className="md:flex justify-between mx-auto w-[calc(100%-32px)] max-w-295 min-h-10 flex items-center gap-5">
        <Link to="/" className="inline-flex items-center gap-2 font-bold whitespace-pre-wrap sm:flex-wrap " onClick={() => setOpen(false)}>
          <img className="w-20 h-20 object-coverl " src={khedmat} alt="" />
          <span className="">Afghan Services</span>
        </Link>
        <nav className="hidden md:flex flex-1 items-center justify-center gap-6">
          {links.map(([label, path]) => (
            // <NavLink key={label} to={path} className={`${linkClass} hover:text-[#1769e0] [&.active]:text-[#1769e0]`}>
            //   {label}
            // </NavLink>
            <NavLink key ={label} to={path} style={({ isActive }) => ({
                color: isActive ? "var(--primary)" : "#46536a",
                fontSize: "14px",
                padding: "12px 0",
                display: "inline-block",
                
              })}
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <select className="border border-(--border) rounded-[9px] px-2 py-2.5 bg-white text-[#46536a] outline-none">
            <option>English</option>
            <option>پښتو</option>
            <option>دری</option>
          </select>
          <Link className=" border border-blue-200 inline-flex items-center justify-center gap-2 rounded-lg py-2.5 px-3 font-bold transition-colors text-sm hover:bg-[#eff6ff]" to="/login">Login</Link>
          <Link className="text-white border border-[#a9c8f5] inline-flex items-center justify-center gap-2 rounded-lg py-2.5 px-3 font-bold transition-colors text-sm bg-[#1769e0] transform: translateY(-1px) hover:bg-[#0e55c0]" to="/register ">Register</Link>
        </div>
        {/* MOBILE MENU */}
        <button className="md:hidden flex justify-between border-0 bg-none text-[25px] text-[#10203a]" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <FiX className="text-3xl " /> : <FiMenu className="text-3xl" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-(--border) pt-2.5 pb-5">
          <div className="mx-auto w-[calc(100%-32px)] max-w-295 ">
            {links.map(([label, path]) => (
              <NavLink
                key={label}
                to={path}
                className={`text-(--primary) px-0 block py-3 opacity-75`}
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            ))}

            <div className="flex gap-2.5 mt-2.5">
              <Link className=" border border-blue-200 inline-flex items-center justify-center gap-2 rounded-lg py-2.5 px-3 font-semibold transition-colors text-lg hover:bg-[#eff6ff]" to="/login">Login</Link>
              <Link className="btn text-white border border-[#a9c8f5] inline-flex items-center justify-center gap-2 rounded-lg py-2.5 px-3 font-semibold transition-colors text-md bg-[#1769e0] transform: translateY(-1px) hover:bg-[#0e55c0]" to="/register ">Register</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar